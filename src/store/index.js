import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    categories: [],
    categoria: null,
    products: [],
    cart: []
  },
  mutations: {
  },
  actions: {

    loadCategories ({ state }) {

      axios.get('http://sva.talana.com:8000/api/product-category/?format=json')
      .then((response) => {
          state.categories=response.data;

      })
      .catch((error) => {
          console.log(error);
      })
    },

    
    loadProducts ({ state }) {

      axios.get('http://sva.talana.com:8000/api/product/?format=json')
      .then((response) => {
          state.products=response.data;
          console.log(response.data);
      })
      .catch((error) => {
          console.log(error);
      })
    },

    selCategory({commit, state}, categoria) {
      state.categoria=categoria.category;
    },

    addCart({commit, state}, product) {

      let producto = state.cart.find(el => el.id == product.product.id);

      if(producto){
        producto.count = producto.count+1;
      }else{
        state.cart.push(product.product);
        product.product.count=1;

      }
      console.log(state.cart);
    }

  },
  modules: {
  }
})
