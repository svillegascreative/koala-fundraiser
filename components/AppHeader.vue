<template lang="pug">
	nav.mb-6
		ul.flex.justify-around
			li.p-3
				nuxt-link(exact to="/") About
			li.p-3
				nuxt-link(to="/orders") Orders
			li.p-3
				nuxt-link(to="/gallery") Gallery
			li.p-3.relative
				nuxt-link(to="/cart") Cart
				span(v-if="cartCount > 0").badge {{cartCount}}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters(['cartCount'])
  }
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

.badge {
  @apply bg-green-300;
  @apply text-green-900;
  @apply text-xs;
  @apply font-semibold;
  @apply rounded-full;
  @apply h-4;
  @apply w-4;
  @apply flex;
  @apply justify-center;
  @apply items-center;
  @apply absolute;
  top: 0.75rem;
  right: -0.5rem;
}
</style>
