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
  }
}
</script>

<style></style>
