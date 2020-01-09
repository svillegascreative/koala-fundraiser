<template lang="pug">
	nav.mb-6
		ul.flex.justify-around
			li.p-3
				nuxt-link(exact to="/") About
			li.p-3
				nuxt-link(to="/orders") Orders
			li.p-3
				nuxt-link(to="/gallery") Gallery
			li.p-3
				nuxt-link(to="/cart") Cart
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
li {
  transition: 0.3s all ease;
}

li:hover {
  @apply bg-green-200;
  transition: 0.3s all ease;
}
</style>
