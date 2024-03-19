<script lang="ts">
  import '../app.pcss';
  import LocationIcon from '$lib/components/icons/location.svelte';
  import InstagramIcon from '$lib/components/icons/instagram.svelte';
  import HamburgerMenu from '$lib/components/hamburger-menu.svelte';

  const mailto =
    'mailto:info@bunker526.nu?subject=%F0%9F%93%86%20Booking%20foresp%C3%B8rgsel%20&body=Udfyld%20venligst%20nedenst%C3%A5ende%0D%0A%0D%0ADato%3A%0D%0A%0D%0AAnledning%3A%0D%0A%0D%0AAntal%20g%C3%A6ster%3A%0D%0A%0D%0ANavn%3A%20%0D%0A%0D%0ATelefon%20nummer%3A%0D%0A%0D%0AYderligere%20kommentarer%20%2F%20sp%C3%B8rgsm%C3%A5l%3A%0D%0A';
  const fest = 'https://drive.google.com/file/d/1iOnA8bZh8s_QiIshmBaA7SeQS77nyNrd/view?usp=sharing';
  const julefrokost =
    'https://drive.google.com/file/d/1xsjrYr5TqImQzKdognzVoCSMFnCZVHZA/view?usp=sharing';
  const lokaleleje =
    'https://drive.google.com/file/d/13hWyqn83HCGQIQWroO5V2flOTbSAGUDz/view?usp=sharing';
  const middagFest =
    'https://drive.google.com/file/d/1OApQlZziUFRgnPuIg0v6Xc73ETeacw0d/view?usp=sharing';
  const moeder =
    'https://drive.google.com/file/d/13MsLHEOO6YYSdJRUAz5D8lUxhXe3RFtV/view?usp=sharing';
  const polterabend =
    'https://drive.google.com/file/d/1DsLI7Y03Cv-k-9fa1vo2MpjQKTFCcAzN/view?usp=sharing';
</script>

<header>
  <a href="/">BUNKER526</a>
  <nav class="hide-mobile">
    <ul>
      <li><a href={fest} rel="external" target="_blank">Fest</a></li>
      <li><a href={middagFest} rel="external" target="_blank">Middag &amp; Fest</a></li>
      <li><a href={polterabend} rel="external" target="_blank">Polterabend</a></li>
      <li><a href={julefrokost} rel="external" target="_blank">Julefrokost</a></li>
      <li><a href={moeder} rel="external" target="_blank">Møder</a></li>
      <li><a href={lokaleleje} rel="external" target="_blank">Lokaleleje</a></li>
      <li>
        <a class="button" href={mailto} type="button" rel="external">Send forespørgsel &#10148;</a>
      </li>
    </ul>
  </nav>
  <HamburgerMenu>
    <ul>
      <li><a href={fest} rel="external" target="_blank">Fest</a></li>
      <li><a href={middagFest} rel="external" target="_blank">Middag &amp; Fest</a></li>
      <li><a href={polterabend} rel="external" target="_blank">Polterabend</a></li>
      <li><a href={julefrokost} rel="external" target="_blank">Julefrokost</a></li>
      <li><a href={moeder} rel="external" target="_blank">Møder</a></li>
      <li><a href={lokaleleje} rel="external" target="_blank">Lokaleleje</a></li>
      <li>
        <a class="button" href={mailto} type="button" rel="external">Send forespørgsel &#10148;</a>
      </li>
    </ul>
  </HamburgerMenu>
</header>

<slot />

<footer>
  <div class="location">
    <a class="map-link" href="https://maps.app.goo.gl/M77z7k2ahu2qEuUu9" rel="external">
      <LocationIcon />
      <span>Nørre Farimagsgade 6<span class="hide-mobile">, 1364 Kbh</span></span>
    </a>
    <span class="hide-mobile">&nbsp;~&nbsp;</span>
    <span class="hide-mobile">CVR 40201645</span>
  </div>
  <a href="https://www.instagram.com/bunker526.nu/" rel="external">
    <InstagramIcon />
    IG
  </a>
</footer>

<style>
  header,
  footer {
    --paddingH: 0.5rem;
    --paddingV: 2rem;
    --font-size: 1.4rem;
    --gap: 2em;
    background-color: rgb(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--paddingH) var(--paddingV);
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    font-family: Bebas Neue;
    font-size: var(--font-size);
    color: white;
    stroke: white;
  }

  footer {
    background-color: unset;
    gap: 0.5em;
    top: unset;
    bottom: 0;
    font-size: 1.2rem;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  nav {
    margin-left: auto;
  }

  ul {
    display: flex;
    align-items: center;
    gap: var(--gap);
  }

  .map-link {
    display: flex;
    align-items: center;
  }

  .location {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button {
    font-family: Bebas Neue;
    font-size: 1.4rem;
    display: flex;
    align-content: center;
    border-radius: 16px;
    border: 1px solid white;
    color: white;
    line-height: var(--font-size);
    padding: 0.3em 0.5em 0.2em;
    transition: all 500ms cubic-bezier(0.23, 1, 0.32, 1);
    transition-property: background-color, color;
  }

  @media (hover: hover) {
    a:hover {
      text-decoration: underline;
    }

    .button:hover {
      text-decoration: unset;
      background-color: white;
      color: rgb(0, 0, 0, 0.8);
    }
  }

  @media (max-width: 576px) {
    header,
    footer {
      --paddingV: 1rem;
      --gap: 1em;
    }
    ul {
      flex-direction: column;
      align-items: flex-start;
    }
    .hide-mobile {
      display: none;
    }
  }
</style>
