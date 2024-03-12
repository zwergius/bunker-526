<script lang="ts">
  import { quintOut } from 'svelte/easing';

  let open = false;

  function slideX(_: HTMLElement) {
    return {
      css: (_: number, u: number) => {
        const eased = quintOut(u);
        return `transform: translateX(${-100 * eased}%);`;
      },
    };
  }
</script>

<button class:open on:click={() => (open = !open)}>
  <svg width="32" height="24">
    <line id="top" x1="0" y1="2" x2="32" y2="2" />
    <line id="middle" x1="8" y1="12" x2="32" y2="12" />
    <line id="bottom" x1="0" y1="22" x2="32" y2="22" />
  </svg>
</button>

{#if open}
  <nav transition:slideX>
    <slot />
  </nav>
{/if}

<style>
  nav {
    --padding-top: calc((var(--paddingH) * 2) + var(--gap) + var(--font-size));
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgb(0, 0, 0, 0.7);
    padding: var(--paddingH) var(--paddingV);
    padding-top: var(--padding-top);
  }

  svg {
    min-height: 24px;
    transition: transform 0.3s ease-in-out;
  }

  svg line {
    stroke-width: 3;
    transition: all 0.3s ease-in-out;
  }

  button {
    display: none;
    z-index: 20;
    stroke: var(--grey3);
  }

  button:hover {
    stroke: var(--white);
  }

  .open svg {
    transform: scale(0.7);
  }

  .open #top {
    transform: translate(6px, 0px) rotate(45deg);
  }

  .open #middle {
    opacity: 0;
  }

  .open #bottom {
    transform: translate(-12px, 9px) rotate(-45deg);
  }

  @media (max-width: 576px) {
    button {
      display: block;
    }
  }
</style>
