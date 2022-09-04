<template>
	<div>
		<h3 class="my-3 ">Categorias</h3>
		<div class="list-group">
			<a href="#" class="list-group-item list-group-item-action category-item" v-bind:class="{ active: !categoria }" @click="selectCategory(null)">TODAS</a>
			<template v-if="categories.length < 1">
				<a href="#"  v-for="i in 5" :key="i" class="list-group-item list-group-item-action">
					<div class="skeleton skeleton-text">&nbsp;</div>
				</a>
			</template>
			<a href="#" v-else v-for="cat in categories" v-bind:key="cat" class="list-group-item list-group-item-action category-item" 
				v-bind:class="{ active: cat === categoria }" v-on:click="selectCategory(cat)">
				{{cat.toUpperCase()}}
			</a>
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
		categoria () {
			return store.state.categoria
		},
		categories () {
			return store.state.categories
		},
		loadingCategories () {
			return store.state.loadingCategories
		}
	},
	mounted(){
		this.$store.dispatch('loadCategories')
	},
	methods: {
		selectCategory(cat){
			store.dispatch('selCategory', cat)
			this.$router.push({ name: 'Category'})
		}
	}
}
</script>
<style>
	.category-item{
		font-size: 16px;
		font-weight: 600;
		text-transform: capitalize;
	}
	a.active{
		background-color: #470076 !important;
		border-color: #470076 !important;
	}
</style>
