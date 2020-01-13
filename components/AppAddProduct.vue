<template lang="pug">
	div.flex.pb-3
		div.flex-1.text-right
			label(:for="inputID(product)") {{product.name}} ({{product.size}})
		div.pl-1.flex-none
			input(type="number" min="0" v-model="quantity" :id="inputID(product)").w-16
		div.pl-1.flex-none
			button(@click="updateCart(product)") Add to cart
	
</template>

<script>
export default {
  name: 'AppAddProduct',
  props: {
    image: Object,
    product: Object
  },
  data() {
    return {
      quantity: 0,
      item: {}
    }
  },
  methods: {
    inputID(product) {
      return product.name.split(' ').join('-')
    },
    updateCart(product) {
      if (this.quantity > 0) {
        this.item = { ...this.item, ...this.image, ...product }
        this.item.qty = Number(this.quantity)
        this.$store.commit('updateCart', this.item)
      }
    }
  }
}
</script>

<style></style>
