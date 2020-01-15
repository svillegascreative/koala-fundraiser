<template lang="pug">
	section
		h2 Payment Details
		fieldset
			div.form-field
				label Card Number
					CardNumber(ref="cardNumber" :stripe="stripeKey" :options="stripeOptions" @change="number= $event.complete")
			div.form-field
				label Expiry Date
					CardExpiry(ref="cardExpiry" :stripe="stripeKey" :options="stripeOptions" @change="expiry= $event.complete")
			div.form-field
				label CVC
					CardCvc(ref="cardCvc" :stripe="stripeKey" :options="stripeOptions" @change="cvc= $event.complete")
		
		button(class="pay-with-stripe" @click="pay" :disabled="!complete") Complete Checkout
	
</template>

<script>
import {
  CardNumber,
  CardExpiry,
  CardCvc,
  instance as StripeInstance
} from 'vue-stripe-elements-plus'

import axios from 'axios'
import uuidv1 from 'uuid/v1'
import { stripeKey, stripeOptions } from './stripeConfig.json'

export default {
  name: 'AppCheckout',
  components: {
    CardNumber,
    CardExpiry,
    CardCvc
  },
  data() {
    return {
      complete: false,
      number: false,
      expiry: false,
      cvc: false,
      stripeOptions,
      stripeKey
    }
  },
  watch: {
    number() {
      this.update()
    },
    expiry() {
      this.update()
    },
    cvc() {
      this.update()
    }
  },
  methods: {
    update() {
      this.complete = this.number && this.expiry && this.cvc

      // field completed, find field to focus next
      if (this.number) {
        if (!this.expiry) {
          this.$refs.cardExpiry.focus()
        } else if (!this.cvc) {
          this.$refs.cardCvc.focus()
        }
      } else if (this.expiry) {
        if (!this.cvc) {
          this.$refs.cardCvc.focus()
        } else if (!this.number) {
          this.$refs.cardNumber.focus()
        }
      }
      // no focus magic for the CVC field as it gets complete with three
      // numbers, but can also have four
    },
    async pay() {
      try {
        await axios
          .post(
            `${process.env.FUNCTIONS_ENDPOINT}/stripe-payment-intent.json`,
            {
              stripeAmt: Math.floor(this.cartTotal * 100), // it expects the price in cents
              stripeCurrency: this.currency,
              stripeIdempotency: uuidv1() // we use this library to create a unique id
            },
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          )
          .then((resp) => {
            if (resp.status === 200) {
              try {
                StripeInstance.confirmCardPayment(resp.clientSecret, {
                  payment_method: {
                    card: this.number
                  }
                })
              } catch (error) {
                console.log(error)
              }
            }
          })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style></style>
