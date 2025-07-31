import { $, component$, useOnDocument } from '@builder.io/qwik';
import Brand from '~/assets/brand-logo.png?w=110;130;150&as=srcset';
import MenuIcon from '~/assets/menu-icon.svg?jsx';
import CloseIcon from '~/assets/close-icon.svg?jsx';

const navMenus = ['Home', 'About', 'Services', 'Contact', 'Blog', 'Login'];

export default component$(() => {
  useOnDocument(
    'scroll',
    $(() => {
      const nav = document.querySelector('.navbar');
      if (nav) {
        nav.classList.toggle('bg-black', scrollY > 0);
      }
    })
  );

  const toggleMenu = $((open: boolean) => {
    const navMenu = document.getElementById('nav-menu');
    const navMenuOpen = document.getElementById('nav-menu-open-btn');
    const navMenuClose = document.getElementById('nav-menu-close-btn');

    if (navMenu && navMenuOpen && navMenuClose) {
      navMenuOpen.style.display = open ? 'none' : 'block';
      navMenuClose.style.display = open ? 'block' : 'none';
      navMenu.classList.toggle('!flex', open);
      document.body.classList.toggle('overflow-hidden', open);
      document.body.classList.toggle('md:overflow-auto', open);
    }
  });

  return (
    <nav
      class={[
        'navbar fixed top-0 z-[999] w-full shadow-md',
        'flex max-w-[100vw] items-center justify-center py-[15px] md:py-[22px]',
      ].join(' ')}
    >
      <div
        class={[
          'wrapper inline-flex items-center gap-5',
          'text-secondary-light w-full justify-between font-semibold',
        ].join(' ')}
      >
        <div class="flex items-center justify-between w-full mr-auto">
          <a href="/" aria-label="home">
            <img
              srcset={Brand}
              alt="Brand Logo"
              sizes="(max-width: 768px) 110px, (max-width: 1023px) 130px, 150px"
              class="h-fit w-[clamp(110px,4.018rem+5.952vw,150px)] object-contain"
              loading="eager"
              fetchPriority="high"
            />
          </a>
          <div
            id="nav-menu"
            class={[
              'fixed md:static left-0 top-[94px] hidden',
              'md:flex items-center flex-col md:flex-row',
              'gap-[clamp(0.625rem,-1.125rem+4.375vw,2.813rem)]',
              'px-[min(100px,6vw)] md:px-0 py-5 md:py-0 w-full',
              'md:w-auto h-full bg-white md:bg-transparent',
            ].join(' ')}
          >
            {navMenus.map((item, i) => (
              <div
                key={i}
                class={[
                  'w-full !py-3 md:w-fit md:py-0',
                  'cursor-pointer text-black md:text-white',
                ].join(' ')}
              >
                <a href="#" class="hover:underline">
                  {item}
                </a>
              </div>
            ))}

            <div
              class={[
                'btn mr-auto !px-[32px] !py-[15px]',
                'bg-primary h-fit cursor-pointer text-white',
              ].join(' ')}
            >
              Apply
            </div>
          </div>
        </div>

        <div class="block md:hidden">
          <button
            id="nav-menu-open-btn"
            aria-label="open navbar menu"
            class="block size-12 p-[7px] select-none cursor-pointer"
            onClick$={() => toggleMenu(true)}
          >
            <MenuIcon class="fill-white" />
          </button>

          <button
            id="nav-menu-close-btn"
            aria-label="Close navbar menu"
            class="hidden size-12 p-[11px] select-none cursor-pointer"
            onClick$={() => toggleMenu(false)}
          >
            <CloseIcon class="fill-white" />
          </button>
        </div>
      </div>
    </nav>
  );
});
