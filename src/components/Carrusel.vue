<template>
    
    <div class="container-fluid">
        <Toast  />
        <Carousel :value="products" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions">
            <template #item="product">
                <div class="mt-4 p-3 border-1 surface-border border-round m-2  p-3 item" >
                    <div class="mb-3">
                        <div class="relative mx-auto">
                            <img :src="'https://primefaces.org/cdn/primevue/images/product/' + product.data.image" :alt="product.data.name" class="w-full border-round" />
                            
                            <Tag value="New" class="absolute" style="left:5px; top: 5px"/>
                        </div>
                    </div>
                    <div class="mb-3 font-medium">{{ product.data.name }}</div>
                    <div class="flex justify-content-between align-items-center">
                        <div class="mt-0 font-semibold text-xl">${{ product.data.price }}</div>
                        <span class="m-2">
                            <Button icon="pi pi-heart" severity="secondary" class="m-1" outlined />
                            <Button @click="addToCart(product.data)" icon="pi pi-shopping-cart" class="m-1"/>
                          
                        </span>
                    </div>
                </div>
                
  
            </template>
        </Carousel>
        
    </div>
    
</template>

<script>
import Carousel from 'primevue/carousel';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import Toast from 'primevue/toast';


export default {
    name:'carru-selllk',
    components:{
Carousel,
Button,
Tag,
Toast
    },
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Bamboo Watch',
                    description: 'Product Description',
                    image: 'bamboo-watch.jpg',
                    price: 65,
                    
                   
                   
                },
                {
                    id: 2,
                    name: 'Black Watch',
                    description: 'Product Description',
                    image: 'black-watch.jpg',
                    price: 65,
                 
                },
                {
                    id: 4,
                    name: 'Blue Band',
                    description: 'Product Description',
                    image: 'blue-band.jpg',
                    price: 79,
                 
                },
                {
                    id: 5,
                    name: 'Blue T-Shirt',
                    description: 'Product Description',
                    image: 'blue-t-shirt.jpg',
                    price: 29,
                 
                },
                {
                    id: 6,
                    name: 'Bracelet',
                    description: 'Product Description',
                    image: 'bracelet.jpg',
                    price: 15,
                },
                {
                    id: 7,
                    name: 'Brown Purse',
                    description: 'Product Description',
                    image: 'brown-purse.jpg',
                    price: 120,
                },
                {
                    id: 8,
                    
                    name: 'Chakra Bracelet',
                    description: 'Product Description',
                    image: 'chakra-bracelet.jpg',
                    price: 32,
                 
                },
                {
                    id: 9,
                    name: 'Galaxy Earrings',
                    description: 'Product Description',
                    image: 'galaxy-earrings.jpg',
                    price: 34,
                  
                },
                {
                    id: 10,
                    name: 'Game Controller',
                    description: 'Product Description',
                    image: 'game-controller.jpg',
                    price: 99,
                },
                {
                    id: 11,
                    name: 'Gaming Set',
                    description: 'Product Description',
                    image: 'gaming-set.jpg',
                    price: 299,
                }
            ],
            responsiveOptions: [
                { breakpoint: '1400px', numVisible: 2, numScroll: 1 },
                { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
                { breakpoint: '767px', numVisible: 2, numScroll: 1 },
                { breakpoint: '575px', numVisible: 1, numScroll: 1 }
            ]
        };
    },
    methods: {
       

    addToCart(product) {
      this.$emit('add-to-cart', product);
      this.$toast.add({ severity: 'success', summary: 'Info', detail: 'Producto agregado al carrito', life: 2000 });
    },
    
   
    }
};
</script>

<style>
.item{
    border: 1px solid #fff;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

}
.p-toast-message{
   max-height: 80px;
   width: 90%;
   
}
.p-toast-message-content{
    height: 80%;
}

</style>