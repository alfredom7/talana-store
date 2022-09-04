import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    categories: [],
    categoria: null,
    products: [],
    allProducts: [],
    cart: []
  },
  mutations: {
  },
  actions: {
    loadCategories ({ state }) {
      axios.get('https://fakestoreapi.com/products/categories')
      .then((response) => {
        state.categories=response.data;
      })
      .catch((error) => {
        console.log(error);
      })
    },

    loadProducts ({ state }) {
      axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        state.products=response.data;
        state.allProducts=response.data;
      })
      .catch((error) => {
        console.log(error);
      })
    },

    selCategory({commit, state}, categoria) {
      state.categoria=categoria;
    },

    addCart({commit, state}, product) {
      let producto = state.cart.find(el => el.id == product.product.id);
      if(producto){
        producto.count = producto.count+1;
      }else{
        state.cart.push(product.product);
        product.product.count=1;
      }
    },

    searchProducts({commit, state}, search) {
      if(!search || search == '') {
        state.products = state.allProducts;
      } else {
        state.products = [];
        const productosSearch = state.allProducts.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
        productosSearch.forEach(p => {
          state.products.push(p);
        });
      }
    }
  }
})
