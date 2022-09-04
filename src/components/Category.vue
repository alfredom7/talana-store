<template>
	<div class="my-3">
		<div v-if="!loadingProducts && products">
			<h5 class="my-3 text-capitalize" v-if="categoria">Categoria {{categoria}}</h5>
			<div class="list-group">
				<a v-for="pro in products" v-bind:key="pro.id" :href="'/product/'+pro.id" 
					class="list-group-item list-group-item-action animate__animated animate__zoomIn"
					aria-current="true">
					<div class="row">
						<div class="col-sm-12 col-md-3 text-center">
							<img :src="pro.image" class="card-img-top imgpro" alt="Imagen producto" />
						</div>
						<div class="col-sm-12 col-md-9">
							<h5 class="mb-2 titlepro">{{pro.title}}</h5>
							<p class="categorypro">{{pro.category.toUpperCase()}}</p>
							<small class="pricepro mb-2">$ {{pro.price}}</small>
							<span class="badge bg-success deliverypro">Llega gratis el lunes</span>
							<button type="button" class="btn btn-danger addcartbtnpro" @click.prevent="addToCart(pro)">
								Agregar al carrito <i class="fas fa-cart-plus"></i>
							</button>
						</div>
					</div>
				</a>
			</div>
		</div>
		<div class="loading-container" v-else>
			<div class="loadingio-spinner-magnify-mn2sq7uncom">
				<div class="ldio-0qu31ifis2pl">
					<div>
						<div>
							<div></div>
							<div></div>
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
				return store.state.products.filter(product=> product.category == this.categoria);
			}else{
				return store.state.products;
			}
		},
		categoria () {
			return store.state.categoria
		},
		loadingProducts () {
			return store.state.loadingProducts
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
button.addcartbtnpro {
	float: right;
	background-color: #470076 !important;
    border: none;
    color: #fff;
    height: 40px;
}
button.addcartbtnpro:hover{
    background-color: #7300bf !important;
}
@media(max-width: 600px){
	button.addcartbtnpro {
		font-size: 13px;
	}
	img.imgpro {
		width: 130px !important;
		height: 130px !important;
	}
}
@media(max-width: 400px){
	button.addcartbtnpro {
		margin-top: 10px;
		font-size: 12px;
		display: block;
		float: none;
	}
	img.imgpro {
		width: 130px !important;
		height: 130px !important;
	}
}
</style>
