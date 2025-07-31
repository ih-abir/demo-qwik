import { component$ } from '@builder.io/qwik';
import styles from '~/styles/homeBlock3.module.scss';

const images = import.meta.glob('/src/assets/block3/**', {
  query: '?w=235;327;465;524&format=avif;webp&as=srcset',
  eager: true,
  import: 'default',
});

const imagesSm = import.meta.glob('/src/assets/block3/**', {
  query: '?w=305;320;394;422&format=avif;webp&as=srcset',
  eager: true,
  import: 'default',
});

const imagesLg = import.meta.glob('/src/assets/block3/**', {
  query: '?w=310;355&format=avif;webp&as=srcset',
  eager: true,
  import: 'default',
});

const items = [
  {
    title: 'Moon Wax',
    intro:
      "Moon Wax are breaking the boundaries of music by drawing influences from everything from old school jazz and RnB to 90's funk and house. With thumping bass lines, flamboyant guitar riffs and outer space synth sounds, core members Billy Smith and Robb Maynard explore the world of the creative arts.",
    img: '/src/assets/block3/moonwax.jpg',
  },
  {
    title: 'Neolux',
    intro:
      'Neolux is an independent hardstyle/hard dance producer from Romania. Having experimented under different genres beforehand as Rudy Zensky or RVDY, Neolux created heavy dancefloor-oriented music with a strong focus on storytelling and atmosphere, making use of plenty of orchestral sections blended together.',
    img: '/src/assets/block3/neolux.jpg',
  },
  {
    title: 'Rebecca Mardal',
    intro:
      'Rebecca Mardal is a Swedish guitarist & producer, seamlessly blending calming LoFi beats with soulful guitar solos. Her instrumental talents create personal and finely crafted music that has been described as "what floating on clouds sounds like."',
    img: '/src/assets/block3/rebecca.jpg',
  },
  {
    title: 'leo.',
    intro:
      "Through his catchy melodies and honest lyrics, leo.'s music demonstrates a raw interpretation of life and its experiences. On his own artistic lane, leo. strives to create music that will connect with his audience on a deeper level, as well as a safe space where listeners can feel understood.",
    img: '/src/assets/block3/leo.jpg',
  },
  {
    title: 'IzaBeats',
    intro:
      'With traditional instrumental skills and modern production techniques, IzaBeats stands out from the crowd! Creating lofi with a "handmade" feel and being fully connected within the music community means you can always expect great music and collaborations from IzaBeats.',
    img: '/src/assets/block3/izabeats.jpg',
  },
  {
    title: 'RVDY',
    intro:
      'RVDY delivers both cutting-edge electronic tracks as well as cinematic experiences, fusing together Drum & Bass, Trap and Electro with Rock, Synth-wave and cinematic/orchestral music in an epic clash of genres, all of this in the pursuit of the ultimate futuristic soundtrack.',
    img: '/src/assets/block3/rvdy.jpg',
  },
  {
    title: 'Michael Logozar',
    intro:
      'Michael Logozar is a composer and producer based in the Nashville area. His piano based cinematic music is known for delivering heart felt melodies with a rare level of artistry and emotion. His solo piano work has received 6 album of the year nominations and his multi-instrumental work has been featured in film and television.',
    img: '/src/assets/block3/michael.jpg',
  },
  {
    title: 'Kendra Logozar',
    intro:
      'Modern Classical composer and pianist Kendra Logozar is a fresh and inspiring voice in the instrumental genre. Her tender and elegant melodies reflect her love for classical repertoire and a new generation of modern classical music.',
    img: '/src/assets/block3/kendra.jpg',
  },
  {
    title: 'Mario Viñuela',
    intro:
      'Mario Viñuela is a Spanish composer made for film, TV and theatre productions. Not only has Mario mastered the beauty of piano but he also plays a variety of instruments that allow his sounds to transcend any language barrier. Mario is a great example of how making your music accessible can lead to great success!',
    img: '/src/assets/block3/mario.jpg',
  },
];

export default component$(() => {
  return (
    <div class="section-v-pad group">
      <div class="reveal-up wrapper grid division-gap text-white text-center">
        <div class="carousel-wrapper flex items-center gap-5 overflow-hidden w-full">
          <button
            data-scroll="-1"
            aria-label="Scroll left"
            class={[
              styles.arrow,
              'group-hover:opacity-100 lg:opacity-0',
              'transition-all duration-300 ease-in-out text-[#000]',
            ].join(' ')}
          >
            &#10094;
          </button>

          <div class="carousel no-scrollbar">
            {items.map(({ title, intro, img }, idx) => (
              <div
                class={[
                  styles.card,
                  'card flex flex-col gap-4 shrink-0',
                  'w-full sm:w-1/2 lg:w-1/3 scroll-snap-align-center',
                ].join(' ')}
                key={idx}
              >
                <img
                  class="h-fit w-full object-cover sm:hidden"
                  srcset={images[img] as string}
                  alt={`picture of ${title}`}
                  sizes={[
                    '(max-width: 325px) 235px, (max-width: 425px) 327px,',
                    '(max-width: 575px) 465px, 524px',
                  ].join(', ')}
                  loading="lazy"
                />

                <img
                  class="hidden h-fit w-full object-cover sm:block lg:hidden"
                  srcset={imagesSm[img] as string}
                  alt={`picture of ${title}`}
                  sizes={[
                    '(max-width: 767px) 305px, (max-width: 799px) 320px',
                    '(max-width: 859px) 394px, 422px',
                  ].join(', ')}
                  loading="lazy"
                />
                <img
                  class="hidden h-fit w-full object-cover lg:block"
                  srcset={imagesLg[img] as string}
                  alt={`picture of ${title}`}
                  sizes="(max-width: 1151px) 310px, 355px"
                  loading="lazy"
                />
                <div class="poppins text-lg font-semibold text-dark">
                  {title}
                </div>
                <div class="poppins text-sm leading-[160%] text-dark-lighter line-clamp-6">
                  {intro}
                </div>
              </div>
            ))}
          </div>

          <button
            data-scroll="1"
            aria-label="Scroll right"
            class={[
              styles.arrow,
              'group-hover:opacity-100 lg:opacity-0',
              'transition-all duration-300 ease-in-out text-[#000]',
            ].join(' ')}
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
});
