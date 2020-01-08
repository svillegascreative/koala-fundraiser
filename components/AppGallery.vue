<template lang="pug">
	section
		h2 Gallery
		div
			ul
				li(v-for="image in images")
					CldImage(cloud_name="svillegas" :publicId="image.public_id")
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

<style></style>
