<template>
  <div class="home">
    <SideBar :cart="cart" @increase-quantity="increaseQuantity" @decrease-quantity="decreaseQuantity" @update-cart="updateCart" />
    <!-- <ProductoVue @add-to-cart="addToCart"/> -->
    <div class="carrusel">
      <CarruselVue @add-to-cart="addToCart" />
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import CarruselVue from '@/components/Carrusel.vue';

export default {
  name: 'HomeComponent',
  components: {
    SideBar,
    CarruselVue
  },
  data() {
    return {
      cart: [],
      jose: 'My name is Jose Miguel'
    };
  },
  methods: {
    addToCart(product) {
      console.log(product);
      const item = this.cart.find(item => item.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
      this.saveCartToLocalStorage(); 
    },
    increaseQuantity(index) {
      this.cart[index].quantity++;
      this.saveCartToLocalStorage(); 
    },
    decreaseQuantity(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
      } else {
        this.cart.splice(index, 1);
      }
      this.saveCartToLocalStorage(); 
    },
    updateCart(newCart) {
      this.cart = newCart; 
    },
    saveCartToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.cart)); 
    },
    loadCartFromLocalStorage() {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        this.cart = JSON.parse(storedCart); 
      }
    }
  },
  mounted() {
    this.loadCartFromLocalStorage(); 
  }
}
</script>

<style>
.carrusel {
  margin-top: 40px;
  width: 100%;
  height: 50%;
}
</style>
