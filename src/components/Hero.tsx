import { component$ } from '@builder.io/qwik';

import HeaderImage from '~/assets/header-image.jpg?w=325;415;639;767;1023;1440;1920&format=avif;webp;jpg&as=srcset';
import HeaderGradient1 from '~/assets/header-gradient1.png?w=100&format=avif;webp;png&&quality=5&as=srcset';
import HeaderGradient3 from '/src/assets/header-gradient3.png?w=110&format=avif;webp;png&&quality=5&as=srcset';
import MouseIcon from '~/assets/mouse-icon.svg?jsx';

/**
 * Hero component for the landing page.
 * Displays a header with a background image, gradients, and a mouse icon.
 */

export default component$(() => {
  return (
    <div
      class={[
        'relative flex items-stretch overflow-hidden w-full',
        'h-full sm:aspect-[16/10] md:aspect-[16/9] max-h-screen',
        'py-[95px] lg:py-[clamp(6.875rem,8.567rem+-3.526vw,8.25rem)]',
      ].join(' ')}
    >
      <style>{`
        @keyframes riseAndFadeIn {
          from {
            opacity: 0;
            filter: blur(1px);
            transform: translateY(200px);
            visibility: hidden;
          }
          to {
            opacity: 1;
            filter: blur(0px);
            transform: translateY(0);
            visibility: visible;
          }
        }

        .sunrise-effect {
          opacity: 0;
          transform: translateY(200px);
          visibility: hidden;
          animation: riseAndFadeIn 1.5s ease-in-out forwards;
        }

        .animation-delay-1 {
          animation-delay: 1.35s;
        }

        .animation-delay-3 {
          animation-delay: 1s;
        }
      `}</style>

      <div class="wrapper grid z-[50] text-white">
        <div class="flex flex-col py-[clamp(1.25rem,-2.75rem+10vw,6.25rem)] md:flex-row h-fit gap-5">
          <h1
            class={[
              'order-2 md:order-1 flex-none font-bold',
              'leading-[110%] text-[clamp(2.5rem,1rem+3.75vw,4.375rem)]',
            ].join(' ')}
          >
            Identity Music
          </h1>

          <div
            class={[
              'order-1 md:order-2 flex items-center',
              'md:h-[clamp(3.438rem,0.58rem+5.952vw,5.938rem)]',
            ].join(' ')}
          >
            <span class="w-[68px] h-[5px] bg-[#ff5ee1]"></span>
          </div>

          <div
            class={[
              'order-3 w-fit font-bold leading-[110%]',
              'text-[clamp(2.5rem,1rem+3.75vw,4.375rem)]',
            ].join(' ')}
          >
            <div class="flex-none">Digital Music</div>
            Distribution
          </div>
        </div>

        <div class="hidden md:flex items-center gap-2 w-full mt-auto">
          <div class="poppins text-lg">Scroll for more</div>
          <MouseIcon class="fill-white size-7" />
        </div>
      </div>

      {/* Background header image */}
      <div class="absolute inset-0 z-10 w-full">
        <img
          class="w-full h-full object-cover"
          src={HeaderImage}
          srcset={HeaderImage}
          alt="header background"
          sizes={[
            '(max-width: 325px) 325px, (max-width: 415px) 415px',
            '(max-width: 639px) 639px, (max-width: 767px) 767px',
            '(max-width: 1023px) 1023px, (max-width: 1440px) 1440px, 1920px',
          ].join(', ')}
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Gradient 1 */}
      <div
        class={[
          'sunrise-effect animation-delay-1',
          'absolute z-20 bottom-[80px] right-[15vw]',
          'w-[clamp(9.063rem,5.306rem+18.495vw,27.5rem)]',
        ].join(' ')}
      >
        <img
          class="w-full h-full object-cover"
          srcset={HeaderGradient1}
          alt="header-gradient-1"
          width={100}
          height={100}
          loading="lazy"
        />
      </div>

      {/* Gradient 3 */}
      <div
        class={[
          'sunrise-effect animation-delay-3 z-20',
          'absolute w-[clamp(12.5rem,6.897rem+27.586vw,40rem)]',
          '-bottom-[clamp(7.5rem,3.297rem+20.69vw,28.125rem)] -right-8',
        ].join(' ')}
      >
        <img
          class="w-full h-full object-cover"
          srcset={HeaderGradient3}
          alt="header-gradient-3"
          width={110}
          height={110}
          loading="lazy"
        />
      </div>
    </div>
  );
});
