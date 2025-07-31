import { $, component$, useOnDocument } from '@builder.io/qwik';
import {
  Hero,
  HomeBlock,
  HomeBlock2,
  HomeBlock3,
  HomeBlock4,
  HomeBlock5,
  HomeBlock6,
} from '~/components/index';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  useOnDocument(
    'click',
    $(e => {
      const btn = (e.target as HTMLElement).closest('[data-scroll]');
      if (!btn) return;

      const dir = +(btn as HTMLElement).dataset.scroll!;
      const carousel = btn
        .closest('.carousel-wrapper')
        ?.querySelector('.carousel') as HTMLElement;
      if (!carousel) return;

      const card = carousel.querySelector('.card') as HTMLElement;
      const gap = parseFloat(getComputedStyle(card).gap || '0') || 0;
      const width = card.offsetWidth + gap;
      const max = carousel.scrollWidth - carousel.clientWidth;
      const pos = carousel.scrollLeft;
      const step = width * Math.abs(dir);

      carousel.scrollTo({
        left:
          dir > 0
            ? pos >= max - 1
              ? 0
              : Math.min(pos + step, max)
            : pos <= 1
              ? max
              : Math.max(pos - step, 0),
        behavior:
          (dir > 0 && pos < max - 1) || (dir < 0 && pos > 1)
            ? 'smooth'
            : 'auto',
      });
    })
  );

  useOnDocument(
    'scroll',
    $(() => {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      });

      document
        .querySelectorAll('.reveal-up')
        .forEach(el => observer.observe(el));

      return () => observer.disconnect(); // Cleanup
    })
  );

  return (
    <>
      <Hero />
      <HomeBlock />
      <HomeBlock2 />
      <HomeBlock3 />
      <HomeBlock4 />
      <HomeBlock5 />
      <HomeBlock6 />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
  links: [
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
};
