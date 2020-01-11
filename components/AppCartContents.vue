<template lang="pug">
	div
		section(v-if="cartCount === 0")
			p Your cart is empty. Check out the #[nuxt-link(to="/gallery") gallery] to select from available prints.
	
		section(v-else)
			table
				thead
					tr
						th Print
						th Price
						th Quantity	
						th Cost
				tbody
					tr(v-for="item in cart" :key="item.id")
						td
							img(:src="item.img" alt="print image")
							| {{item.size}}
						td
							| {{item.price | dollar}}
						td
							| {{item.qty}}
						td
							| {{item.price * item.qty | dollar}}
					tr
						td(colspan="2")
						td.font-semibold Total:
						td.font-semibold {{cartTotal | dollar}}
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartCount', 'cartTotal'])
  }
}
</script>

<style></style>
