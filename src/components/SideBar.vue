
<template>
    <div>
        <!-- <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight">Carrito</button> -->

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">Carrito de compras</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul>
                    <li v-for="(item, index) in cart" :key="index" class="p-d-flex p-align-center">
                        <div class="p-mr-2">
                            <img :src="'https://primefaces.org/cdn/primevue/images/product/' + item.image"
                                :alt="item.name" width="90">
                        </div>
                        <div>
                            <div class="datos">
                                <div>{{ item.name }}</div>
                            <div>Precio: ${{ item.price }}</div>
                            <div>Cantidad: {{ item.quantity }}</div>
                            </div>
                            
                            <div >
                                <Button icon="pi pi-plus" @click="IncreaseQuantity(index)"
                                    class="p-button p-button " />
                                <Button icon="pi pi-minus" @click="DecreaseQuantity(index)"
                                    class="p-button p-button " />
                                    

                            </div>
                        </div>
                    </li>
                </ul>
                <div>
                    <strong v-if="CalcularTotal() === 0">No tiene productos para calcular el total</strong>
                    <strong v-else>Total: {{ CalcularTotal() }} </strong>
                </div>
            </div>
        </div>
    </div>
</template>







<script>
import Button from 'primevue/button';


export default {
    name: 'SideBar',
    components: {
        Button
    
    },

    props: {
        cart: {
            type: Array,
            default: () => []
        },
    },

    methods: {
        IncreaseQuantity(index) {
            this.$emit('increase-quantity', index);
            this.saveCartToLocalStorage(); // Guardar el carrito en localStorage después de aumentar la cantidad
        },

        DecreaseQuantity(index) {
            this.$emit('decrease-quantity', index);
            this.saveCartToLocalStorage(); // Guardar el carrito en localStorage después de disminuir la cantidad
        },

        CalcularTotal() {
            let total = 0;
            this.cart.forEach(element => {
                total += (element.price * element.quantity);
            });
            return total;
        },

        saveCartToLocalStorage() {
            localStorage.setItem('cart', JSON.stringify(this.cart)); // Guardar el carrito en localStorage
            this.$emit('update-cart', this.cart); // Emitir evento para actualizar el carrito en el componente padre
        },

        loadCartFromLocalStorage() {
            const storedCart = localStorage.getItem('cart');
            if (storedCart) {
                this.$emit('update-cart', JSON.parse(storedCart)); // Emitir evento para actualizar el carrito con los productos almacenados
            }
        }
    },

    mounted() {
        this.loadCartFromLocalStorage(); // Cargar el carrito desde localStorage cuando se monte el componente
    }
};
</script>
<style scoped>
.p-offcanvas {
    width: 300px;
}

.p-offcanvas-content {
    padding: 1rem;
}

.p-offcanvas-close {
    position: absolute;
    right: 1rem;
    top: 1rem;
}

.p-d-flex {
    display: flex;
}

.p-align-center {
    align-items: center;
}

.p-mr-2 {
    margin-right: 0.5rem;
}

.p-button {
    font-size: 5px;
    max-height: 16px;
    max-width: 20px;
    padding: 20px;
    margin: 10px;
}
.datos{
  margin-left: 20px;
  margin-top: 20px;
}
</style>
