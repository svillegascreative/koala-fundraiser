<template lang="pug">
	div
		section(v-if="cartCount === 0").max-w-lg.mx-auto
			p Your cart is empty. Check out the #[nuxt-link(to="/gallery") gallery] to select from available prints.
	
		section(v-else).max-w-lg.mx-auto
			table
				thead
					tr
						th.border-b.border-gray-800.px-3 Print
						th.border-b.border-gray-800.px-3 Price
						th.border-b.border-gray-800.px-3 Quantity
						th.border-b.border-gray-800.px-3 Cost
				tbody
					tr(v-for="item in cart" :key="item.id")
						td.border-b.border-gray-400.py-3.px-3
							div.flex.justify-center.items-center
								img(:src="item.url" alt="thumbnail of this print").thumb.object-contain
							span.font-semibold {{`#${item.id}`}}: 
							span {{item.name}} ({{item.size}})
						td.border-b.border-gray-400.py-3.text-center
							| {{item.price | dollar}}
						td.border-b.border-gray-400.py-3.text-center
							| {{item.qty}}
						td.border-b.border-gray-400.py-3.text-center
							| {{item.price * item.qty | dollar}}
					tr
						td(colspan="2").font-semibold.text-lg.text-right Total:
						td.font-semibold.text-lg.text-center.leading-none {{cartCount}}
							br
							span.text-sm.leading-none {{cartCount == 1 ? 'item' : 'items'}}
						td.font-semibold.text-lg.text-center {{cartTotal | dollar}}
			div.max-w-sm.mx-auto.mt-6.flex.justify-around
				button(@click="clearCart").minor Clear Cart
				button Proceed to Checkout
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartCount', 'cartTotal'])
  },
  methods: {
    clearCart() {
      this.$store.commit('clearCart')
    }
  }
}
</script>

<style scoped>
.thumb {
  max-width: 6rem;
  max-height: 6rem;
}

@media (min-width: 30rem) {
  .thumb {
    max-width: 10rem;
    max-height: 10rem;
  }
}
</style>
