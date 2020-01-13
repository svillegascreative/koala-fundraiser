<template lang="pug">
  div
    section.max-w-5xl.mx-auto
      img(:src="image.url").w-full
      p.font-semibold {{`#${this.id}`}}
    section.mx-auto.max-w-sm
      AppAddProduct(v-for="product in products" :key="index" :product="product" :image="image")
          
</template>

<script>
import { mapState } from 'vuex'
import AppAddProduct from '~/components/AppAddProduct'
import products from '~/static/products'

export default {
  components: {
    AppAddProduct
  },
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
