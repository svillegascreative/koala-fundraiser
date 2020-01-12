<template lang="pug">
  div
    section.max-w-5xl.mx-auto
      img(:src="image.url").w-full
      p.font-semibold {{`#${this.id}`}}
    table.mx-auto
      tbody
        tr(v-for="product in products")
          td.pb-3.text-right {{product.name}} ({{product.size}})
          td.pb-3.text-center
            input(type="number" min="0" v-model="qty").w-16
        tr
          td
          td
            button(@click="updateCart") Add to cart
</template>

<script>
import { mapState } from 'vuex'
import products from '~/static/products'

export default {
  data() {
    return {
      products,
      id: this.$route.params.id
    }
  },
  computed: {
    ...mapState(['galleryData']),
    image() {
      return this.galleryData.find(
        (image) => image.id === this.$route.params.id
      )
    }
  }
}
</script>

<style></style>
