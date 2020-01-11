<template lang="pug">
	section
		img(:src="image.url")

</template>

<script>
import { mapState } from 'vuex'

export default {
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   }
  // },
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
