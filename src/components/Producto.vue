<!-- ProductComponent.vue -->
<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-3" v-for="product in products" :key="product.id">
        <div class="card mb-4">
          <img :src="require(`@/assets/img/${product.image}`)"  class="card-img-top" :alt="product.name">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text"><strong>Price:</strong> {{ product.price }}</p>
            <button class="btn btn-primary" @click="addToCart(product)">Agregar al carrito</button>
       
          </div>
        </div>
      </div>
    
    </div>  
  </div>
</template>

<script>
export default {
  name: 'ProductComponent',
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', description: 'Description for product 1', price: 10, image: 'image3.jpg' },
        { id: 2, name: 'Product 2', description: 'Description for product 2', price: 20, image: 'images1.jpg' },
        { id: 3, name: 'Product 3', description: 'Description for product 3', price: 30, image: 'images2.jpg' }
      ],
      saludo: 'hola im learning vue'
    };
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product);
    }
  },
  props:{
    nombre:String
  }
};
</script>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
