import galleryData from '~/static/gallerydata.json'

export const state = () => ({
  galleryData,
  cart: [
    {
      id: 1,
      img: 'url',
      size: 'A5 print (inches)',
      price: '40.00',
      qty: 2
    },
    {
      id: 2,
      img: 'url',
      size: 'A4 print (inches)',
      price: '50.00',
      qty: 1
    }
  ]
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
  }
}
