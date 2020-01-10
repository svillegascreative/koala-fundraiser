<template lang="pug">
  article
    h2 Australia is in trouble.
    ul.intro-list
      li 12 million acres of land burned.
      li 500,000,000 animal lives lost.
      li At least 20 human lives lost.
      li Over 1500 homes destroyed.
      li Unthinkably poor air quality and smoke so severe that its made it all the way to New Zealand.
      li 
        em.font-semibold And summer isn’t even half over.

    p Firefighters from around the world have been working day in, day out to battle these fires, but long periods of drought along with extreme temperatures are making this an incredibly difficult fight. In addition, animal hospitals and rescues have been working tirelessly around the clock to locate, treat, rehabilitate, and shelter wildlife that has been caught in these fires.
    p One of the hardest hit species are koalas. Thousands of koalas have been killed so far in these fires and the numbers continue to rise. At this point, it is predicted that by 2050, koalas could be extinct due to these devastating fires.  

    h2 So, what can we do to help? 
    p We can raise funds which can be used to help in a variety of different ways. I have decided to #[nuxt-link(to="/orders") sell prints] of my #[nuxt-link(to="/gallery") photography] with #[em.font-semibold all proceeds being donated] to both #[a(href="https://www.rfs.nsw.gov.au/") NSW Rural Fire Service] and #[a(href="https://www.koalahospital.org.au/") Port Macquarie Koala Hospital]. 
    .flex.justify-around.items-center.mb-6
      a(href="https://www.rfs.nsw.gov.au/")
        img(src="~/static/rfs-logo-main.png" alt="NSW Rural Fire Service")
      a(href="https://www.koalahospital.org.au/")
        img(src="~/static/koala-hospital-logo-cropped.png" alt="Port Macquarie Hospital").
    p.mb-0 These donations will help with things such as:
    ol.list-disc.mb-6
      li covering the extensive costs incurred fighting the fires,
      li treatment and rehabilitation for the koalas,
      li watering stations for surviving animals in areas decimated by fire,
      li and projects aimed at regenerating the plant and animal life destroyed during these fires. 

    h2 About me
    img(src="https://res.cloudinary.com/svillegas/image/upload/v1578665473/koala-fundraiser/christina.jpg").christina
    p Hi everyone! I’m Christina. I’m a Canadian who recently moved to Australia for a Master’s degree. Upon moving here, my love for photography was rekindled as a result of Australia’s beautiful landscapes and wildlife. Devastatingly, shortly after my arrival the bushfires in Australia commenced. unseasonably early and aggressively. I am absolutely heartbroken seeing the beautiful landscapes and wildlife, which I once shot in their glory, be decimated by these unrelenting fires, and decided to find a way to help. 
    p Thanks for stopping by, and please feel free to contact me by email with any questions, or follow me on #[a(href="https://www.instagram.com/christinadphotos/") Instagram] for more updates on this project and my work.
</template>

<script>
export default {}
</script>

<style scoped>
.intro-list li {
  @apply text-xl;
  @apply text-center;
  @apply mb-6;
  @apply leading-snug;
  @apply tracking-tight;
}

.christina {
  @apply float-right;
  @apply rounded-full;
  max-width: 12rem;
  @apply m-3;
  @apply p-1;
  @apply border-solid;
  @apply border;
  @apply border-green-800;
  shape-outside: circle(50%);
}
</style>
