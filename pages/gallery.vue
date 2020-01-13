<template lang="pug">
  section
    h2 Gallery
    p Click any thumbnail to view a larger image and ordering options.
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
  }
}
</script>

<style></style>
