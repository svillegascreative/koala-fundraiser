<template lang="pug">
	nav
		ul
			li
				nuxt-link(exact to="/") About
			li
				nuxt-link(to="/Gallery") Gallery
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style></style>
