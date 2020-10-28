<template>
  <div>

    <b-container fluid class="bv-example-row mt-4">

  <b-row>
    <b-col cols="3" v-for="(risol, index) in risols" :key="index">
      <b-card
        :title= risol.name
        :img-src="require(`../assets/risols/risol${index+1}.jpeg`)"
        img-alt="Image"
        img-top
        tag="article"
        class="mb-4"
      >

        <b-card-text>
          <h5>Price : ${{risol.price}},00</h5>
            <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
            <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
            <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
            <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
            <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
        </b-card-text>

        <b-button v-if="!risol.cart" :disabled="risol.cart" @click="risol.cart=true,
        addtocart(JSON.parse(JSON.stringify(risol)))" block href="#"
        variant="success">Add to Cart</b-button>
        <b-button v-if="risol.cart" :disabled="risol.cart" block href="#"
        variant="warning">Already added to shopping cart</b-button>
      </b-card>
    </b-col>

  </b-row>

    </b-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      risols : [
        {
          id:1,
          quantity:1,
          name: "EE",
          price: 1,
          img:'../assets/risols/risol1.jpeg',
          cart: false
        },
        {
          id:2,
          quantity:1,
          name: "Ragout",
          price: 1,
          img:'../assets/risols/risol2.jpeg',
          cart: false
        },
        {
          id:3,
          quantity:1,
          name: "Mayo",
          price: 1,
          img:'../assets/risols/risol3.jpeg',
          cart: false
        },
        {
          id:4,
          quantity:1,
          name: "Kelinci",
          price: 1,
          img:'../assets/risols/risol4.jpeg',
          cart: false
        },
        {
          id:5,
          quantity:1,
          name: "Frozen",
          price: 1,
          img:'../assets/risols/risol5.jpeg',
          cart: false
        },
        {
          id:6,
          quantity:1,
          name: "Udang",
          price: 1,
          img:'../assets/risols/risol6.jpeg',
          cart: false
        },
        {
          id:7,
          quantity:1,
          name: "Telek",
          price: 1,
          img:'../assets/risols/risol7.jpeg',
          cart: false
        },
        {
          id:8,
          quantity:1,
          name: "Sapi",
          price: 1,
          img:'../assets/risols/risol8.jpeg',
          cart: false
        },
      ]
    }
  },
  methods: {
    addtocart(product) {

      let cart=[]
      if(JSON.parse(localStorage.getItem('products'))) {
        cart= JSON.parse(localStorage.getItem('products'))
      }
      else {
        cart =[]
      }
      cart.push(product);
      localStorage.setItem('products', JSON.stringify(cart))
    }
  },
  created(){
    let cart= []
    if(JSON.parse(localStorage.getItem('products'))) {
      cart= JSON.parse(localStorage.getItem('products'))
    }
    else {
      cart =[]
    }
    for(let index = 0; index < cart.length; index++) {
      for(let index2 = 0; index2 < this.risols.length; index2++) {
        if(cart[index].id == this.risols[index2].id) {
          this.risols[index2].cart = true
        }
      }
    }
  }
}
</script
>
