<template>
<div class="px-3">
    <h2 class="my-3 ">Categorias</h2>
    <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action" v-on:click="selectCategory(null)">Todas</a>
        <a href="#" v-if="categories.length < 1" class="list-group-item list-group-item-action">Cargando Categorias...</a>
        <a href="#" v-else v-for="cat in categories" v-bind:key="cat.id" class="list-group-item list-group-item-action" v-on:click="selectCategory(cat.id)">{{cat.name}}</a>
    </div>
</div>

</template>
<script>
import store from '../store/index'
export default {
    store,
    data() {
        return {
            loading: true
        }
    },
    computed: {
        categories () {
            return store.state.categories
        }
    },
    mounted(){
        this.$store.dispatch('loadCategories')
    },
    methods: {
        selectCategory(id){
            store.dispatch('selCategory', {
                category: id
            })
        }
    }

}
</script>

