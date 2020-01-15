<template lang="pug">
  div
    h1 Shopping Cart
    AppCartContents
    AppCheckout


</template>

<script>
import AppCartContents from '~/components/AppCartContents'
import AppCheckout from '~/components/AppCheckout'

export default {
  components: {
    AppCartContents,
    AppCheckout
  }
}
</script>

<style></style>
