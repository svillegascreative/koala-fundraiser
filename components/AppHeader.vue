<template lang="pug">
	nav
		ul
			li
				nuxt-link(exact to="/") About
			li
				nuxt-link(to="/gallery") Gallery
			li
				nuxt-link(to="/cart") Cart
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style></style>
