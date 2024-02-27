<script lang="ts">
  import '../app.pcss';
  import LocationIcon from '$lib/components/icons/location.svelte';
  import InstagramIcon from '$lib/components/icons/instagram.svelte';
  import HamburgerMenu from '$lib/components/hamburger-menu.svelte';
  import Location from '$lib/components/icons/location.svelte';
</script>

<header>
  <a href="/">BUNKER526</a>
  <nav class="hide-mobile">
    <ul>
      <li><a href="/fest.pdf">Fest</a></li>
      <li><a href="#">Middag &amp; Fest</a></li>
      <li><a href="/polterabend.pdf">Polterabend</a></li>
      <li><a href="#">Møder</a></li>
      <li><a href="#">Lokaleleje</a></li>
    </ul>
  </nav>
  <HamburgerMenu>
    <ul>
      <li><a href="/fest.pdf">Fest</a></li>
      <li><a href="#">Middag &amp; Fest</a></li>
      <li><a href="/polterabend.pdf">Polterabend</a></li>
      <li><a href="#">Møder</a></li>
      <li><a href="#">Lokaleleje</a></li>
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
  <a href="https://github.com/zwergius/XP" rel="external">
    <InstagramIcon />
    IG
  </a>
</footer>

<style>
  header,
  footer {
    --paddingH: 1rem;
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

  @media (max-width: 576px) {
    header,
    footer {
      --paddingV: 1rem;
      --gap: 1em;
    }
    ul {
      flex-direction: column;
    }
    .hide-mobile {
      display: none;
    }
  }
</style>
