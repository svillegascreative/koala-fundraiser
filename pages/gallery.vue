<template lang="pug">
	AppGallery(:images="images")
</template>

<script>
import axios from 'axios'
import AppGallery from '~/components/AppGallery'

export default {
  name: 'Gallery',
  components: {
    AppGallery
  },
  async asyncData() {
    const { data } = await axios.get(
      `https://${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/svillegas/resources/image/tags/koala_fundraiser?max_results=60`
    )
    return { images: data.resources }
  }
}
</script>

<style></style>
