<template lang="pug">
  div
    ul.grid
      li(v-for="image in images")
        nuxt-link(:to="`/image/${image.id}`")
          CldImage(cloud_name="svillegas" :publicId="image.public_id" loading="lazy")
            CldTransformation(width="200" height="200" crop="fit" quality="auto" fetch_format="auto" dpr="auto")
	
</template>

<script>
import { mapGetters } from 'vuex'
import { CldImage, CldTransformation } from 'cloudinary-vue'

export default {
  name: 'AppGallery',
  components: {
    CldImage,
    CldTransformation
  },
  props: { images: Array },
  computed: {
    ...mapGetters(['imageID'])
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
}
</style>
