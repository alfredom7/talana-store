<template>


<nav class="navbar navbar-expand-lg navbar-dark bg-dark main-navbar">
  <div class="container-fluid">
    <router-link :to="{ name: 'Category' }" class="navbar-brand">
      <img src="/shop.png" style="width: 30px; height: 30px;" class="me-1" /> Alfredo Store</router-link>
    <form class="d-flex">
        <input v-model="search" class="form-control me-1 searchInput" type="search" placeholder="Buscar..." aria-label="Search">
        <!--<button class="btn btn-light" type="submit">Buscar</button>-->
        <button type="button" class="btn btn-light position-relative ms-1 cartbtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          <i class="fas fa-shopping-cart"></i>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {{cart.length}}
          </span>
        </button>
    </form>
  </div>
</nav>
<!--modal carrito-->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Tu Carrito</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <ol class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-start" v-for="item in cart" v-bind:key="item.id">
              <img :src="item.image" alt="Imagen producto" class="imagecartpro">  
              <div class="ms-2 me-auto">
                    <div class="fw-bold">{{item.title}}</div>
                    <div>Categoría: {{item.category}}</div>
                    <div>Precio: $ {{item.price}}</div>
                    <div>Cantidad: {{item.count}}</div>
                </div>
            </li>
        </ol>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-danger btnbuymodal">Comprar ahora</button>
      </div>
    </div>
  </div>
</div>
<!--modal carrito-->
</template>
<script>
import store from '../store/index'
export default {
  data() {
    return {
      search: ''
    }
  },
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
  watch: {
    search(){
      this.$store.dispatch('searchProducts', this.search)
    }
  }
}
</script>
<style>
nav.main-navbar{
  background-color: #470076 !important;
  position: fixed;
  width: 100%;
  z-index: 9999;
  top: 0;
  height: 70px;
}
.imagecartpro{
  width: 80px;
  height: 80px;
  margin: auto 0;
}
.cartbtn{
  border: none !important;
}
.cartbtn i{
  border: none !important;
  margin: 0 auto;
}
.btnbuymodal {
	float: right;
	background-color: #470076 !important;
  border: none  !important;;
  color: #ffffff;
  height: 40px;
}
.btnbuymodal:hover{
    background-color: #7300bf !important;
}
.searchInput{
  border: none !important;
}
@media(max-width: 500px){
  .searchInput{
    width: 140px !important;
  }
}
@media(max-width: 420px){
  .searchInput{
    width: 100px !important;
  }
}
</style>