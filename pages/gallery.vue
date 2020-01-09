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
  data() {
    return {
      images: []
    }
    // },
    // async asyncData() {
    //   const { data } = await axios.get(
    //     `https://res.cloudinary.com/svillegas/image/list/koala_fundraiser.json`
    //   )
    //   return { images: data.resources }
    // },
    // async asyncData() {
    //   const { data } = await axios.get(
    //     `https://${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/svillegas/resources/image/tags/koala_fundraiser?max_results=60`
    //   )
    //   return { images: data.resources }
  },
  async asyncData() {
    try {
      await axios({
        method: 'GET',
        url: `${FUNCTIONS_ENDPOINT}/cloudinary-resources-by-tag`,
        headers: { 'Content-Type': 'application/json' }
      }).then((res) => {
        if (res.status === 200) {
          return { images: res.resources }
        }
      })
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style></style>
