<template>
	<div class="bottom">
		<div class="left">
			合计 : <span>{{botData.mobile_price}}</span> 元
		</div>
		<div class="right">
			<div class="gou" @click="gou()">
				加入购物车
			</div>
			<div class="jie">
				立即购买
			</div>
		</div>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	export default{
		name:'Bottom',
		props:{
			type:String,
			botData:"",
			num:'',
			required:true
		},
		data(){
			return{
				
			}
		},
		methods:{
			gou(){
				//添加到购物车派发dispatch  cart 把这个商品信息传过去
				this.$store.dispatch('cart',{detailData:this.botData,nums:this.num})
				MessageBox.confirm('添加成功，马上去结算?').then(action => {
					this.$router.push('/car')
				},()=>{});
			}
		}
	}
</script>

<style scoped lang="scss">
.bottom{
	height: 0.5rem;
	width: 100%;
	background: #fff;
	padding-left: 0.1rem;
	position: fixed;
	left: 0;
	bottom: 0;
	font-size: 0.14rem;
	display: flex;
	justify-content: space-between;
	z-index: 10000;
	.left{
		height: 0.5rem;line-height: 0.5rem;
		span{color: #f00909;font-size: 0.18rem;}
	}
	.right{
		display: flex;color:#fff;
		.gou{width: 1.12rem;height: 0.5rem;background: #ff9500 ;text-align: center;line-height: 0.5rem;}
		.jie{text-align: center;line-height: 0.5rem;width: 1.12rem;height: 0.5rem;background: #ca0e25  ;}
	}
}
</style>