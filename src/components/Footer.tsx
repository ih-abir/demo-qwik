import { component$ } from '@builder.io/qwik';

import Brand from '~/assets/brand-logo.png?w=170&format=avif;webp;png&as=srcset';
import Social1 from '~/assets/facebook-logo.svg?jsx';
import Social2 from '~/assets/twitter-logo.svg?jsx';
import Social3 from '~/assets/instagram-logo.svg?jsx';
import Social4 from '~/assets/linkedin-logo.svg?jsx';
import Social5 from '~/assets/pinterest-logo.svg?jsx';

const footerLinks = [
  'Music Distribution',
  'Publishing Administration',
  'Rights Management',
  'Promotion',
  'Label Services',
  'Blog',
  'Testimonials',
  'Careers',
  'FAQ',
  'Contact',
];

const socialIcons = [Social1, Social2, Social3, Social4, Social5];

export default component$(() => {
  return (
    <footer class="py-[30px] bg-black text-white">
      <div class="wrapper pt-[60px] pb-[30px]">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 division-gap">
          {/* Brand Logo */}
          <div>
            <img
              srcset={Brand}
              alt="Brand Logo"
              width={170}
              height={100}
              class="w-[170px] h-fit object-contain"
              loading="lazy"
            />
          </div>

          {/* Learn About Identity Music */}
          <div class="flex flex-col division-gap">
            <div class="poppins text-lg font-bold">
              Learn About Identity Music
            </div>
            <ul class="list-none p-0">
              {footerLinks.map(link => (
                <li key={link} class="py-2">
                  <a href="#" class="text-sm text-white hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div class="flex flex-col division-in-gap">
            <div class="poppins text-lg font-bold">Contact</div>
            <div class="flex flex-col division-in-element-gap">
              <address class="not-italic leading-[200%]">
                <span class="font-bold">Identity Music Ltd</span>
                <br />
                Lamberhurst Vineyard, Furnace Lane,
                <br />
                Tunbridge Wells, Kent, TN3 8LA, UK
              </address>
              <a
                href="mailto:contact@identitymusic.com"
                class="hover:underline"
              >
                contact@identitymusic.com
              </a>
              <p>(+44) 1892 280 448</p>
            </div>

            <div class="flex flex-wrap space-x-5">
              {socialIcons.map((IconComponent, index) => (
                <IconComponent
                  key={index}
                  class={[
                    'size-5 fill-white hover:fill-primary',
                    'transition-all duration-300 ease-in-out cursor-pointer',
                  ].join(' ')}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer bottom row */}
        <div
          class={[
            'flex flex-wrap justify-between text-center py-[50px]',
            'division-in-element-gap mt-[clamp(3.75rem,-0.75rem+11.25vw,9.375rem)]',
          ].join(' ')}
        >
          <p class="text-sm">
            <a href="#" class="hover:underline">
              Privacy Policy
            </a>
          </p>
          <p class="text-sm">
            © {new Date().getFullYear()} Identity Music Ltd. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});
