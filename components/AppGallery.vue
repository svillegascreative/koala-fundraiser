<template lang="pug">
		div
			ul.grid
				li(v-for="image in images")
					CldImage(cloud_name="svillegas" :publicId="image.public_id" loading="lazy")
						CldTransformation(width="200" height="200" crop="fit" quality="auto" fetch_format="auto" dpr="auto")
	
</template>

<script>
import { CldImage, CldTransformation } from 'cloudinary-vue'

export default {
  name: 'AppGallery',
  components: {
    CldImage,
    CldTransformation
  },
  props: { images: Array }
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
