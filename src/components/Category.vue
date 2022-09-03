<template>
	<div class="p-3">
		<h3 class="my-3" v-if="categoria">Categoria {{categoria}}</h3>
		<div class="list-group">
			<a v-for="pro in products" v-bind:key="pro.id" href="#" class="list-group-item list-group-item-action"
				aria-current="true">
				<div class="d-flex w-100">
					<img :src="pro.image" class="card-img-top imgpro me-3" alt="Imagen producto" />
					<div class="w-100">
						<h5 class="mb-2 titlepro">{{pro.title}}</h5>
						<p class="categorypro">{{pro.category.toUpperCase()}}</p>
						<small class="pricepro mb-2">$ {{pro.price}}</small>
						<span class="badge bg-success deliverypro">Llega gratis el lunes</span>
						<button type="button" class="btn btn-success addcartbtnpro" v-on:click="addToCart(pro)"><i
								class="fas fa-cart-plus"></i>
						</button>
					</div>
				</div>
			</a>
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
				return store.state.products.filter(product=> product.category == this.categoria);
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
.titlepro {
	color: #333;
	font-size: 20px;
	font-weight: 300;
	line-height: 1.3;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
	line-height: 1.5;
}
.pricepro {
	color: #333;
	display: -webkit-flex;
	display: flex;
	font-size: 24px;
	font-weight: 400;
	line-height: 1.25;
	margin-right: 8px;
}
img.imgpro {
	width: 160px;
	height: 160px;
	object-fit: contain;
}
.categorypro {
	color: #666;
	font-size: 14px;
	font-weight: 400;
	margin-bottom: 0;
	font-weight: 600;
}
div span.deliverypro {
	background-color: #e6f7ee !important;
	color: #00a650;
}
.addcartbtnpro {
	float: right;
}
</style>
