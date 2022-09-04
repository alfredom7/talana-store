<template>
	<div class="my-3">
		<div class="card" v-if="!loadingProduct && product">
			<div class="card-header">
				<router-link :to="{ name: 'Category' }" class="backtolist">
					<i class="fa-solid fa-arrow-left"></i> Volver al listado
				</router-link> <span class="category-header">| {{ categoria }}</span>
			</div>
			<div class="card-body row  animate__animated animate__fadeIn">
				<div class="col-sm-7 col-left-product">
					<div class="divimageproduct">
						<img :src="product.image" alt="Product imagen" class="productimage">
					</div>
					<hr>
					<div class="product-description-title">Descripción</div>
					<div class="product-description">{{product.description}}</div>
					<hr>
					<div class="product-description-title">Preguntas y respuestas</div>
					<div class="question">Pregúntale al vendedor</div>
					<form class="d-flex">
						<div class="question-left">
							<input type="text" class="form-control" id="inputPassword2"
								placeholder="Escribe tu pregunta...">
						</div>
						<div class="question-right">
							<button type="submit" class="btn btn-primary mb-3">Preguntar</button>
						</div>
					</form>

				</div>
				<div class="col-sm-5">
					<div class="card">
						<div class="card-body">
							<div class="product-condition">Nuevo | 9 vendidos</div>
							<div class="product-title">{{ product.title }}</div>
							<div class="product-price">{{ product.price }} <span>22% OFF</span></div>
							<div class="product-income">
								<i class="fa-solid fa-motorcycle"></i> Llega gratis <b>entre el miércoles y el
									jueves</b>
							</div>
							<div class="product-income">
								<i class="fa-sharp fa-solid fa-rotate-left"></i> Devolución gratis
								<div class="remain">Tienes 30 días desde que lo recibes.</div>
								<a href="#" class="more">Conocer más</a>
							</div>
							<div class="d-grid gap-2">
								<button class="btn btn-primary productbuybtn" type="button">Comprar ahora</button>
							</div>
							<div class="product-protected">
								<i class="fa-solid fa-shield-halved"></i>
								<a href="#">Compra Protegida</a>,
								Se abrirá en una nueva ventana, recibe el producto que esperabas o te devolvemos tu
								dinero.
							</div>
						</div>
					</div>
					<div class="card mt-3">
						<div class="card-body">
							<div class="payment-title">Medios de pago</div>
							<div class="payment-p">Tarjetas de crédito y débito</div>
							<div class="payment-sub">¡Cuotas sin interés con bancos seleccionados!</div>
							<div class="payment-icons">
								<div>
									<img decoding="async"
										src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg"
										class="ui-pdp-image ui-pdp-payment-icon" alt="Visa">
								</div>
								<div>
									<img decoding="async"
										src="https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg"
										class="ui-pdp-image ui-pdp-payment-icon" alt="Visa">
								</div>
								<div>
									<img decoding="async"
										src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg"
										class="ui-pdp-image ui-pdp-payment-icon" alt="Visa">
								</div>
								<div>
									<img decoding="async"
										src="https://http2.mlstatic.com/storage/logos-api-admin/751ea930-571a-11e8-9a2d-4b2bd7b1bf77-m.svg"
										class="ui-pdp-image ui-pdp-payment-icon" alt="Visa">
								</div>
							</div>
							<div class="payment-p">Tarjetas de débito</div>
							<div class="payment-icons">
								<div>
									<img decoding="async"
										src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg"
										class="ui-pdp-image ui-pdp-payment-icon" alt="Visa">
								</div>
								<div>
									<img decoding="async"
										src="https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg"
										class="ui-pdp-image ui-pdp-payment-icon" alt="Visa">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="card-footer text-muted">
				2 days ago
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
	data(){
		return {
			productId: null
		}
	},
	store,
	computed: {
		categoria () {
			return store.state.categoria
		},
		product () {
			return store.state.product
		},
		loadingProduct () {
			return store.state.loadingProduct
		}
	},
	created(){
		this.productId = this.$route.params.id;
	},
	mounted(){
		this.$store.dispatch('loadProduct', this.productId);
	},
	methods: {

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
.backtolist{
	font-size: 14px;
    font-weight: 400;
    line-height: 1;
	color: rgba(0,0,0,.9);
	text-decoration: none;
}
.category-header{
	font-size: 14px;
    font-weight: 400;
    line-height: 1;
	color: rgba(0,0,0,.9);
	text-transform: capitalize;
}
.product-condition{
    color: rgba(0,0,0,.55);
    font-size: 14px;
    font-weight: 400;
    white-space: pre-wrap;
}
.product-title{
    flex: auto;
    font-size: 22px;
    margin-bottom: 8px;
    margin-right: 28px;
    padding: 0;
	font-weight:600;
	margin-top: 10px;
	margin-bottom: 0;
}
.product-price{
	color: rgba(0,0,0,.9);
	font-weight: 300;
	font-size: 36px;
	align-items: center;
	margin-bottom: 10px;
}
.product-price span{
	font-weight: 600;
	color: #00a650;
	font-size: 16px;
    line-height: 1.3;
    margin-bottom: 2px;
}
.product-income{
	font-weight: 400;
	color: #00a650;
	margin-bottom: 10px;
	margin-top: 20px;
}
.product-income .remain{
	font-weight: 400;
	color: rgba(0,0,0,.55);
	font-size: 14px;
	padding-left: 21px;
}
.product-income .more{
	font-size: 14px;
    font-weight: 400;
	color: #3483fa;
	text-decoration: none;
	padding-left: 21px;
}
.productimage{
	width: 100%;
	max-height: 450px;
	object-fit: contain;
}
@media(max-width: 576px){
  .productimage{
    width: 270px !important;
	margin: auto;
  }
  .col-left-product .divimageproduct{
	text-align: center;
	width: 100%;
  }
}
button.productbuybtn{
	font-weight: 600;
    margin: 20px 0px;
    background-color: #470076;
    border: none;
    height: 50px;
}
button.productbuybtn:hover{
	background-color: #7300bf !important;
}
.product-protected{
	font-size: 14px;
    font-weight: 400;
	color: rgba(0,0,0,.55);
	line-height: 1.3;
}
.product-protected a{
	font-size: 14px;
    font-weight: 400;
	color: #3483fa;
	text-decoration: none;
	padding-left: 5px;
}
.product-description-title{
	font-size: 24px;
    font-weight: 400;
    padding-bottom: 24px;
	line-height: 1.25;
    margin: 0;
	color: rgba(0,0,0,.9);
}
.product-description{
    color: #666;
    font-size: 20px;
	font-weight: 400;
    word-break: break-word;
}
.question{
	font-size: 18px;
    font-weight: 600;
    margin-bottom: 14px;
	color: rgba(0,0,0,.9);
}
.question-left{
	display: inline-block;
    width: 100%;
}
.question-right{
	display: inline-block;
    font-size: 16px;
    height: 48px;
    margin-left: 16px;
    vertical-align: top;
    width: 184px;
}
.question-right button{
	background-color: #470076;
    border: none;
    font-weight: 600;
    font-size: 15px;
    height: 38px;
}
.question-right button:hover{
    background-color: #7300bf !important;
}
.payment-title{
	line-height: 16px;
	color: rgba(0,0,0,.9);
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 28px;
    width: 100%;
}
.payment-p{
	color: rgba(0,0,0,.9);
    font-size: 16px;
    font-weight: 400;
    line-height: 12px;
}
.payment-sub{
	color: rgba(0,0,0,.55);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    margin-top: 8px;
}
.payment-icons{
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    margin-top: 4px;
}
.payment-icons div{
	margin: 10px 24px 4px 0;
}
.payment-icons div img{
    -webkit-align-items: center;
    align-items: center;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-top: 4px;
}
</style>
