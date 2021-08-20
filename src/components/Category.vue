<template>
    <div>
        <h2 class="my-3">Categoria {{categoria}}</h2>
        
        <div class="row">
            <div class="col-md-3 mb-3" v-for="pro in products" v-bind:key="pro.id">
                <div class="card">
                      <div class="card-header bg-success text-white" v-if="pro.stock > 0">Disponible</div>
                      <div class="card-header bg-danger text-white" v-else>Sin Stock</div>
                    <img v-bind:src=pro.photo class="card-img-top imgpro" alt="...">
                    <div class="card-body">
                        <p class="card-text titlepro">{{pro.name}}</p>
                        <p class="pricepro">Precio: $ {{pro.price}}</p>
                        <div>
                            <button type="button" class="btn btn-success" v-on:click="addToCart(pro)"><i class="fas fa-cart-plus"></i></button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import store from '../store/index'
export default {
    store,
    computed: {
        products () {
            if(this.categoria ){
                return store.state.products.filter(product=> product.category.id == this.categoria);
            }else{
                return store.state.products;
            }
        },
        categoria () {
            return store.state.categoria
        }
    },
    mounted(){
        this.$store.dispatch('loadProducts')
    },
    methods: {
        addToCart(product){
            this.$store.dispatch('addCart',{
                product: product
            })
        }
    }
}
</script>
<style>
.titlepro{
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
}
.pricepro{
    font-size: 14px;
}
.imgpro{
    width: 100%;
    height: 200px;
}
</style>
