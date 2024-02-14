<script>
  import Gallery from '$lib/components/gallery.svelte';
</script>

<section class="one">
  <div class="text-box">
    <div class="frame">
      <h1>Bunker526</h1>
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
  <div class="text-box">
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
  section {
    position: relative;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  section.one {
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

  section.two {
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
    position: absolute;
    transform: translate(15vw, 70vh);
    --color: rgb(254, 212, 139);
    --text-color: white;
    padding: 14px;
    max-width: 500px;
    font-family: 'Exo 2', sans-serif;
    color: var(--text-color);
    text-shadow:
			/* White glow */
      0 0 2px var(--color),
      0 0 5px var(--color);
  }

  h1 {
    display: inline-block;
    margin: unset;
  }

  .frame {
    background-color: rgb(0, 0, 0, 0.3);
    padding: 2em;
    border: 0.2rem solid #fff;
    border-radius: 2rem;
    box-shadow:
      0 0 0.2rem var(--color),
      0 0 0.2rem var(--color),
      0 0 0.8rem var(--color),
      inset 0 0 0.8rem var(--color);
  }
</style>
