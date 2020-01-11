<template>
  <div>
    <AppHeader />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader'

export default {
  components: {
    AppHeader
  },
  created() {
    // not sure if this is the best place for this...?
    this.$store.commit('addImageIDs')
  }
}
</script>

<style></style>
