<template>


<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Talana Store</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search">
        <button class="btn btn-success" type="submit">Buscar</button>
        <span class="navbar-text carrito" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <i class="fas fa-shopping-cart"></i>
        </span>
        <div class="badge rounded-pill bg-danger">{{cart.length}}</div>
    </form>
  </div>
</nav>
<!--modal carrito-->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Lista de Productos en el carrito</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <ol class="list-group list-group-numbered">
            <li class="list-group-item d-flex justify-content-between align-items-start" v-for="item in cart" v-bind:key="item.id">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">{{item.name}}</div>
                    <div>Código: {{item.code}}</div>
                    <div>Precio: $ {{item.price}}</div>
                    <div>Cantidad: {{item.count}}</div>
                </div>
            </li>
        </ol>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
<!--modal carrito-->
</template>
<script>
import store from '../store/index'
export default {
    computed: {
        cart () {
            return store.state.cart
        },
        products () {
            if(this.categoria ){
                return store.state.products.filter(product=> product.category.id == this.categoria);
            }else{
                return store.state.products;
            }
        },
    },
}
</script>
<style scoped>
.carrito{
    margin-left: 20px;
}
</style>