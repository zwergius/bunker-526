<script lang="ts">
  import { onMount } from 'svelte';
  import Gallery from '$lib/components/gallery.svelte';
  let scrollY = 0;
  let sectionHeight = 0;

  let textBoxOne: HTMLElement;
  let textBoxTwo: HTMLElement;
  let scrollTargetOne: number;
  let scrollTargetTwo: number;

  const title = 'Lej en Bunker i København C';
  const description = 'Lej en Bunker i København C';

  function getCoords(element: HTMLElement) {
    element.style.position = 'absolute';
    const { top, right, bottom, left } = element.getBoundingClientRect();
    element.style.removeProperty('position');
    return {
      top: top + scrollY,
      right: right + scrollY,
      bottom: bottom + scrollY,
      left: left + scrollY,
    };
  }

  onMount(() => {
    document.fonts.ready.then(() => {
      scrollTargetOne = sectionHeight - getCoords(textBoxOne).bottom;
      scrollTargetTwo = sectionHeight * 2 + (sectionHeight - getCoords(textBoxTwo).bottom);
    });
  });

  $: hideTextBoxOne = scrollY > scrollTargetOne;
  $: hideTextBoxTwo = scrollY > scrollTargetTwo;
</script>

<svelte:window bind:scrollY />

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta
    property="og:image"
    content="https://imagedelivery.net/rOTc9tKCTQBc9ztkiBTX_w/39f46e77-0527-4275-0a13-a0764888aa00/fullScreenMedium"
  />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <!-- head content -->
</svelte:head>

<h1>Bunker526</h1>

<!-- <button type="button">Send forespørgsel &#10148;</button> -->

<section class="one" bind:clientHeight={sectionHeight}>
  <div class="text-box" bind:this={textBoxOne} style="opacity: {hideTextBoxOne ? 0 : 1};">
    <div class="frame">
      <span>
        er bygget i 1977 under den kolde krig og er nu forvandlet til et festlokale, som du kan leje
        til dit arrangement. Vi er et fuld service event space der står for al afvikling, så du kan
        læne dig tilbage og nyde de magiske omgivelser under jorden. Vi har plads til 21 siddende
        gæster og 30 til stående fest.
      </span>
    </div>
  </div>
</section>

<section class="two">
  <div class="text-box" bind:this={textBoxTwo} style="opacity: {hideTextBoxTwo ? 0 : 1};">
    <div class="frame">
      <span>
        Vi samarbejder med nogle af de førende kokke på den gastronomiske scene i København og har
        fokus på økologi. I baren bestræber vi os på at holde os til lokale leverandører, økologi og
        hjemmelavede drikke. Derudover har vi vores egen import af vermouth.
      </span>
    </div>
  </div>
</section>

<Gallery />

<style>
  :root {
    --left: 5%;
  }

  section {
    position: relative;
    width: 100%;
    height: 100vh;
    height: 100svh;
  }

  section::before {
    content: '';
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
  }

  section.one::before {
    background-image: url('https://imagedelivery.net/rOTc9tKCTQBc9ztkiBTX_w/0d2a227f-a0c9-4aaa-3eba-6a2aae460b00/fullScreenMedium'); /* Fallback for browsers that do not support image-set */
    background-image: image-set(
      url('https://imagedelivery.net/rOTc9tKCTQBc9ztkiBTX_w/0d2a227f-a0c9-4aaa-3eba-6a2aae460b00/fullScreenSmall')
        1x,
      url('https://imagedelivery.net/rOTc9tKCTQBc9ztkiBTX_w/0d2a227f-a0c9-4aaa-3eba-6a2aae460b00/fullScreenMedium')
        1.5x,
      url('https://imagedelivery.net/rOTc9tKCTQBc9ztkiBTX_w/0d2a227f-a0c9-4aaa-3eba-6a2aae460b00/fullScreenLarge')
        2x,
      url('https://imagedelivery.net/rOTc9tKCTQBc9ztkiBTX_w/0d2a227f-a0c9-4aaa-3eba-6a2aae460b00/fullScreenXLarge')
        3x
    );
  }

  section.two::before {
    background-image: url('https://imagedelivery.net/rOTc9tKCTQBc9ztkiBTX_w/39f46e77-0527-4275-0a13-a0764888aa00/fullScreenMedium'); /* Fallback for browsers that do not support image-set */
    background-image: image-set(
      url('https://imagedelivery.net/rOTc9tKCTQBc9ztkiBTX_w/39f46e77-0527-4275-0a13-a0764888aa00/fullScreenSmall')
        1x,
      url('https://imagedelivery.net/rOTc9tKCTQBc9ztkiBTX_w/39f46e77-0527-4275-0a13-a0764888aa00/fullScreenMedium')
        1.5x,
      url('https://imagedelivery.net/rOTc9tKCTQBc9ztkiBTX_w/39f46e77-0527-4275-0a13-a0764888aa00/fullScreenLarge')
        2x,
      url('https://imagedelivery.net/rOTc9tKCTQBc9ztkiBTX_w/39f46e77-0527-4275-0a13-a0764888aa00/fullScreenXLarge')
        3x
    );
  }

  .text-box {
    position: sticky;
    top: 690px;
    left: var(--left);
    --color: rgb(254, 212, 139);
    --text-color: white;
    max-width: 250px;
    font-family: 'Exo 2', sans-serif;
    color: var(--text-color);
    font-size: 1.2rem;
    transition: opacity 400ms ease-out;
  }

  h1 {
    font-size: 6rem;
    font-family: Bebas Neue;
    position: fixed;
    top: 600px;
    left: var(--left);
    z-index: 1;
    color: white;
  }

  /* .button { */
  /*   display: none; */
  /* } */

  .frame {
    color: white;
  }

  @media (max-width: 1800px) {
    h1 {
      top: 200px;
    }

    .text-box {
      top: 290px;
    }
  }

  @media (max-width: 1200px) {
    section.one::before {
      filter: brightness(65%);
    }
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 4rem;
      top: 200px;
    }

    /* button { */
    /*   display: block; */
    /*   position: fixed; */
    /*   left: 5%; */
    /*   top: 480px; */
    /*   z-index: 1; */
    /*   font-family: Bebas Neue; */
    /*   font-size: 1.4rem; */
    /*   display: flex; */
    /*   align-content: center; */
    /*   border-radius: 16px; */
    /*   border: 1px solid white; */
    /*   color: white; */
    /*   line-height: var(--font-size); */
    /*   padding: 0.3em 0.5em 0.2em; */

    .text-box {
      font-size: 1rem;
      max-width: 220px;
      top: 260px;
    }
  }
</style>
