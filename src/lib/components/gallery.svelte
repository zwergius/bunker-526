<script>
  const portraitW = 200;
  const landscapeW = 300;
  let images = [
    ['2102ccfe-9522-43db-6ebe-967f61c06900', portraitW],
    ['75e7d920-1537-4301-97e6-7954b1601800', portraitW],
    ['9e8cba4c-011b-4ba6-643b-70b2350ae900', portraitW],
    ['407b2d88-de0b-460d-3fb8-05872ea9fd00', portraitW],
    ['7625b4a9-c47a-4622-bdf3-517bacdc4c00', landscapeW],
    ['22fa4db3-b349-4228-8a02-a9d949e61500', portraitW],
    ['fc962191-d06f-4a59-a3b8-8bf69a588c00', landscapeW],
    ['3c3656f4-3a33-4219-88ad-859548d2d400', portraitW],
    ['a3c00c97-ae1d-4319-83de-3e4627022800', portraitW],
    ['2817de6f-ae46-4cff-33fc-e45ab66e6400', portraitW],
    ['9584810f-870f-4b0d-f169-123876ef8c00', landscapeW],
    ['5ca8a4f4-7761-46e6-2a1d-1800ace5ed00', landscapeW],
    ['2cfa72b5-44fd-4e22-1199-2b585f46d300', portraitW],
    ['ee7c2285-8fdd-4a93-d3db-6f64f205a400', portraitW],
    ['470ec18b-8d8b-47c5-cd4c-701206864500', portraitW],
    ['7474a24e-e9a5-46ed-baf8-24a50ef72f00', portraitW],
    ['7149b28b-d063-47ea-15a3-141044972f00', portraitW],
    ['25e2cdae-83a7-46a2-06e6-92de9a6d3400', portraitW],
    ['103d7f3f-99a5-4d79-a86a-2fcf32c01a00', landscapeW],
    ['68b3410d-745e-4731-2d87-2a73c7480a00', portraitW],
  ];
</script>

<section>
  <div class="gallery">
    {#each Array(2).fill(0) as _}
      <ul class="gallery-content">
        {#each images as [id, width], i}
          {@const multiplier = i % 2 === 0 ? 1 : -1}
          <li>
            <img
              src="https://imagedelivery.net/rOTc9tKCTQBc9ztkiBTX_w/{id}/w={width},fit=contain"
              alt="GG"
              loading="lazy"
              height="auto"
              {width}
              style="transform: rotate({multiplier * 5}deg)"
            />
          </li>
        {/each}
      </ul>
    {/each}
  </div>
</section>

<style>
  section {
    position: relative;
  }

  .gallery {
    --gap: 10px;
    display: flex;
    gap: var(--gap);
    overflow: hidden;
    padding: 50px;
  }

  .gallery-content {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    min-width: 100%;
    gap: var(--gap);
    animation: marquee 60s linear infinite;
  }

  img {
    object-fit: contain;
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - var(--gap)));
    }
  }
</style>
