import galleryData from '~/static/gallerydata.json'

export const state = () => ({
  galleryData,
  cart: []
})

export const getters = {
  cartCount: (state) => {
    if (!state.cart.length) return 0
    return state.cart.reduce((ac, next) => ac + next.quantity, 0)
  }
}
