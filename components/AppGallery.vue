<template lang="pug">
	section
		h2 Gallery
		div
			ul
				li(v-for="image in images")
					img(:src="image.secure_url")
	
</template>

<script>
export default {
  name: 'AppGallery',
  props: { images: Object }
}
</script>

<style></style>
