

<template>
  <div class="home">
    <SideBar :cart="cart" @increase-quantity="increaseQuantity" @decrease-quantity="decreaseQuantity" />
    <ProductoVue @add-to-cart="addToCart"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductoVue from '@/components/Producto.vue'
import SideBar from '@/components/SideBar.vue';

export default {
  name: 'HomeComponent',
  components: {
    ProductoVue,
    SideBar,
  
  },
  data() {
    return {
      cart: [],
      jose:'My name is jose miiguel'
    };
  },
  methods: {
    addToCart(product) {
      console.log(product)
      const item = this.cart.find(item => item.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    increaseQuantity(index) {
      this.cart[index].quantity++;
    },
    decreaseQuantity(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
      } else {
        this.cart.splice(index, 1);
      }
    },
    nombre(nombre){
      console.log(nombre);
    }
  }
}
</script>
