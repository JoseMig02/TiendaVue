<!-- SideBar.vue -->
<template>
    <div>
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight">Carrito</button>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">Carrito de compras</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul>
                    <li v-for="(item, index) in cart" :key="index">
                        {{ item.name }} - {{ item.price }} - {{ item.quantity }}
                        <button class="btn btn-primary m-1" @click="$emit('increase-quantity', index)">+</button>
                        <button class="btn btn-danger" @click="$emit('decrease-quantity', index)">-</button>
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
export default {
    name: 'SideBar',

    props: {
        cart: {
            type: Array,
            default: () => []
        },
    },
    methods: {

        CalcularTotal() {
            let total = 0;
            this.cart.forEach(element => {
                total += (element.price * element.quantity);
            });
            return total;
        }
    }

};
</script>

<style></style>