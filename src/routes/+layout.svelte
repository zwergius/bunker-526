<script>
  import '../app.pcss';
  import LocationIcon from '$lib/components/icons/location.svelte';
  import InstagramIcon from '$lib/components/icons/instagram.svelte';
</script>

<header>
  <a href="/">BUNKER526</a>
  <nav>
    <ul>
      <li><a href="/fest.pdf">Fest</a></li>
      <li><a href="#">Middag &amp; Fest</a></li>
      <li><a href="/polterabend.pdf">Polterabend</a></li>
      <li><a href="#">Møder</a></li>
      <li><a href="#">Lokaleleje</a></li>
    </ul>
  </nav>
</header>

<slot />

<footer>
  <a href="https://github.com/zwergius/XP" rel="external">
    <InstagramIcon />
    IG
  </a>
  <div class="location">
    <a class="map-link" href="https://maps.app.goo.gl/M77z7k2ahu2qEuUu9" rel="external">
      <LocationIcon />
      <!-- <img src="/map.jpg" alt="Bunker location on a map" /> -->
      <span>Nørre Farimagsgade 6, 1364 Kbh</span>
    </a>
    <span>&nbsp;~&nbsp;</span>
    <span>CVR 40201645</span>
  </div>
</footer>

<style>
  header,
  footer {
    background-color: rgb(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    font-family: Bebas Neue;
    font-size: 1.4rem;
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
    gap: 32px;
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
</style>
