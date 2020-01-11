<template lang="pug">
  section
    h2 Gallery
    AppGallery(:images="galleryData")
</template>

<script>
import { mapState } from 'vuex'
import AppGallery from '~/components/AppGallery'

export default {
  name: 'Gallery',
  components: {
    AppGallery
  },
  computed: {
    ...mapState(['galleryData'])
  },
  mounted() {
    // TODO: figure out where to put this so it only runs once for the app
    this.$store.commit('addImageIDs')
  }
}
</script>

<style></style>
