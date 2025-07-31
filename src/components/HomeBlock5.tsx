import { component$, useVisibleTask$ } from '@builder.io/qwik';
import styles from '~/styles/homeBlock5.module.scss';

import QuoteIcon from '~/assets/quote-right.svg?jsx';
import image1 from '~/assets/block5/vidorra.jpg?w=60&format=avif;webp&as=srcset';
import image2 from '~/assets/block5/tim-north.jpg?w=60&format=avif;webp&as=srcset';
import image3 from '~/assets/block5/dead-fish.jpg?w=60&format=avif;webp&as=srcset';
import image4 from '~/assets/block5/mario-vinuela.jpg?w=60&format=avif;webp&as=srcset';
import image5 from '~/assets/block5/gemp.jpg?w=60&format=avif;webp&as=srcset';
import image6 from '~/assets/block5/brandon-bester.jpg?w=60&format=avif;webp&as=srcset';
import image7 from '~/assets/block5/hevi-beats.jpg?w=60&format=avif;webp&as=srcset';
import image8 from '~/assets/block5/roshin.jpg?w=60&format=avif;webp&as=srcset';

const items = [
  {
    name: 'Vidorra',
    text: 'Finding Identity has been an absolute dream. Being able to work closely with Alex has been not only helpful, but game changing in how I learn about distribution and how to get my music out. The service is extremely personalised and I feel a real sense of care in the work Identity Music do.',
    img: image1,
  },
  {
    name: 'Tim North',
    text: "After only a few months, it's very notable what a positive difference it makes to work with Alex and the team. Working with Identity has truly been a collaborative experience, and as a creative I feel like that type of relationship is ideal across the board. These guys understand musicians.",
    img: image2,
  },
  {
    name: 'DeadFish',
    text: "Working with you is a pleasure - everything is nice, quick, and easy. The live chat support is always there to help me so I'm never stressed that I'm going to mess up my release. You're always helpful, kind and friendly - I can see that you really care about us - the artists, and want to help us!",
    img: image3,
  },
  {
    name: 'Mario Viñuela',
    text: 'Professional, attentive and always ready to help. I started a few months ago with them and what makes the difference, compared to other distributors with whom I have worked, is the almost immediate contact you have to solve any problem or question that arises along the way. I hope to continue collaborating on my next musical releases.',
    img: image4,
  },
  {
    name: 'Gemp',
    text: "Personal and professional! It's a pleasure working with them. ",
    img: image5,
  },
  {
    name: 'Brandon Bester',
    text: 'Identity Music has changed my life!!! They have helped me take my music career to the next level. They are insanely selfless, amazing communicators, and timely.',
    img: image6,
  },
  {
    name: 'HeviBeats',
    text: 'Fantastic communication and lovely people :) Providing great service, thank you.',
    img: image7,
  },
  {
    name: 'Roshin',
    text: "I was with a mass Distributer before Identity Music, and lord the contrast. I have an engaged, talented team over here who are supportive of me being an artist that doesn't have to stick to one box. I shared a small percentage of music royalties and got a team back I can lean on.",
    img: image8,
  },
];

export default component$(() => {
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    () => {
      const carousel = document.getElementById('testimonial-carousel');
      if (!carousel) return;

      const cards = carousel.querySelectorAll('.card'),
        total = cards.length,
        mq = matchMedia('(min-width:768px)');

      const getCardWidth = () =>
          (cards[0] as HTMLElement).offsetWidth +
          parseFloat(getComputedStyle(carousel).gap || '0'),
        highlight = () => {
          const scroll = carousel.scrollLeft,
            index = Math.round(scroll / getCardWidth());
          let target = mq.matches ? (index + 1) % total : index % total;

          if (
            !mq.matches &&
            scroll >= carousel.scrollWidth - carousel.clientWidth - 1
          ) {
            target = total - 1;
          }

          cards.forEach((card, i) => {
            card.classList.remove(
              'bg-primary',
              'bg-dark-lighter',
              'md:bg-primary',
              'md:bg-dark-lighter'
            );
            card.classList.add(
              mq.matches
                ? i === target
                  ? 'md:bg-primary'
                  : 'md:bg-dark-lighter'
                : i === target
                  ? 'bg-primary'
                  : 'bg-dark-lighter'
            );
          });
        };

      carousel
        ?.closest('.carousel-wrapper')
        ?.querySelectorAll('.arrow')
        .forEach(btn =>
          btn.addEventListener('click', () => setTimeout(highlight, 350))
        );

      carousel.addEventListener('scroll', () => {
        const c = carousel as HTMLElement & {
          _timer?: ReturnType<typeof setTimeout>;
        };
        clearTimeout(c._timer);
        c._timer = setTimeout(highlight, 150);
      });

      mq.addEventListener('change', highlight);
      highlight();
    },
    { strategy: 'document-ready' }
  );

  return (
    <div
      class={[
        'reveal-up section grid lg:grid-cols-10 xl:grid-cols-3 2xl:grid-cols-2',
        'division-gap text-white items-center bg-dark',
      ].join(' ')}
    >
      <div
        class={[
          'col-span-1 lg:col-span-2 xl:col-span-1',
          'section-v-pad w-full lg:max-w-[650px]',
          'mx-auto lg:mr-0 px-[min(100px,4vw)] lg:pr-0 text-center lg:text-left',
        ].join(' ')}
      >
        <h2>
          What
          <br />
          people say
          <br />
          about us
        </h2>
      </div>

      <div
        class={[
          'relative group carousel-wrapper',
          'col-span-1 lg:col-span-8 xl:col-span-2 2xl:col-span-1',
        ].join(' ')}
      >
        <button
          data-scroll="-1"
          class={[
            styles.arrow,
            styles.left,
            'lg:opacity-0 group-hover:opacity-100',
            'transition-all duration-300 ease-in-out',
          ].join(' ')}
        >
          &#10094;
        </button>
        <div class="carousel no-scrollbar" id="testimonial-carousel">
          {items.map(({ name, text, img }, idx) => (
            <div
              key={idx}
              class={[
                styles.card,
                'card flex flex-col gap-[25px] items-stretch',
                'py-[clamp(45px,2.063rem+1.875vw,60px)]',
                'px-[clamp(1.875rem,0.875rem+2.5vw,3.125rem)]',
                idx === 0 ? 'bg-primary' : 'bg-dark-lighter',
                idx === 1 ? 'md:bg-primary' : 'md:bg-dark-lighter',
              ].join(' ')}
            >
              <div
                class={[
                  'text-xl line-clamp-10 lg:line-clamp-15 xl:line-clamp-20',
                  "before:content-['“'] after:content-['”']",
                ].join(' ')}
              >
                {text}
              </div>
              <div class="flex division-in-gap mt-auto">
                <div class="flex-none">
                  <img
                    class="size-[60px] rounded-full object-cover"
                    srcset={img}
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                </div>
                <div class="flex flex-col division-gap w-full">
                  <div class="flex flex-col division-in-element-gap">
                    <div class="poppins text-lg font-semibold">{name}</div>
                    <div class="text-sm">Artist</div>
                  </div>
                  <QuoteIcon class="size-[30px] fill-white ml-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          data-scroll="1"
          class={[
            styles.arrow,
            styles.right,
            'lg:opacity-0 group-hover:opacity-100',
            'transition-all duration-300 ease-in-out',
          ].join(' ')}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
});
