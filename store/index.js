import galleryData from '~/static/gallerydata.json'

export const state = () => ({
  galleryData,
  cart: []
})

export const getters = {
  cartCount: (state) => {
    if (!state.cart.length) return 0
    return state.cart.reduce((ac, next) => ac + next.qty, 0)
  },
  cartTotal: (state) => {
    if (!state.cart.length) return 0
    return state.cart.reduce((ac, next) => ac + next.qty * next.price, 0)
  }
}

export const mutations = {
  addImageIDs: (state) => {
    state.galleryData.forEach((image) => {
      image.id = image.public_id.slice(-10, -3)
    })
  },
  updateCart: (state, payload) => {
    let itemFound = false
    state.cart.forEach((el) => {
      if (el.id === payload.id && el.size === payload.size) {
        el.qty += payload.qty
        itemFound = true
      }
    })
    if (!itemFound) state.cart.push(payload)
  }
}
