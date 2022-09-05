import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    loadingProducts: false,
    loadingCategories: false,
    loadingProduct: false,
    categories: [],
    categoria: null,
    products: [],
    allProducts: [],
    product: null,
    promotionalProducts: [],
    cart: []
  },
  mutations: {
  },
  actions: {
    loadCategories ({ state }) {
      state.loadingCategories = true;
      axios.get('https://fakestoreapi.com/products/categories')
      .then((response) => {
        state.categories=response.data;
        state.loadingCategories = false;
      })
      .catch((error) => {
        console.log(error);
      })
    },

    loadProducts ({ state }) {
      state.loadingProducts = true;
      axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        state.products=response.data;
        state.allProducts=response.data;
        state.loadingProducts = false;
      })
      .catch((error) => {
        console.log(error);
      })
    },
    
    loadProduct ({ state }, id) {
      state.loadingProduct = true;
      axios.get('https://fakestoreapi.com/products/'+id)
      .then((response) => {
        state.product=response.data;
        this.dispatch('selCategory', state.product.category)
        state.loadingProduct = false;
      })
      .catch((error) => {
        console.log(error);
      })
    },

    async loadPromoProduct({ state }) {
      await axios.get('https://fakestoreapi.com/products/'+Math.floor(Math.random()*(20-1+1)+1))
      .then((response) => {
        if(state.promotionalProducts.length >= 3) state.promotionalProducts = [];
        state.promotionalProducts.push(response.data);
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
