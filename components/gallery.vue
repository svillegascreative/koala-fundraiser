<template lang="pug">
	section
		h2 Gallery
		div
			ul
				li(v-for="image in [1,2,3,4,5]")
					img(src="https://placekitten.com/320/240")
	
</template>

<script>
export default {
  name: 'Gallery'
}
</script>

<style></style>
