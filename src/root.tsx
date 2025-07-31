import { component$, isDev } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city';
import { RouterHead } from '~/components/router-head/router-head';
import { Navbar, Footer } from '~/components/index';

import BgImage from '~/assets/bg-image.webp?w=325;415;639;767;1023;1440;1920&format=avif;webp;jpg&as=srcset';

import '~/styles/style.scss';

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
        <RouterHead />
      </head>
      <body lang="en" class="block w-full">
        <div
          class={[
            'fixed inset-0 z-[-99]',
            'size-screen bg-cover bg-center',
          ].join(' ')}
        >
          <img
            class="w-full h-full object-cover"
            srcset={BgImage}
            alt="background-image"
            sizes={[
              '(max-width: 325px) 325px, (max-width: 415px) 415px',
              '(max-width: 639px) 639px, (max-width: 767px) 767px',
              '(max-width: 1023px) 1023px, (max-width: 1440px) 1440px, 1920px',
            ].join(', ')}
            loading="lazy"
          />
        </div>

        <div class="block w-full">
          <Navbar />
          <main>
            <RouterOutlet />
          </main>
        </div>

        <Footer />
      </body>
    </QwikCityProvider>
  );
});
