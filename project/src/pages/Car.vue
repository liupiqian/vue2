<template>
	<div class="car">
		<common-top :myStyle="myStyle">
			<div slot='con'>我的购物车</div>
		</common-top>
		
		<div class="content">
			<div class="shang">
				<div class="one" v-for="(data,index) in cartData">
					<div class="left">
						<img :src="'hua/'+data.prod.img" />
					</div>
					<div class="right">
						<div>名称 : <span>{{data.prod.title}}</span></div>
						<div class="two">
          							<div class="hehe">
								数量 : 
								<div class="jian"><i class="iconfont icon-jianshao" @click="reduce(index)"></i></div>
								<input v-model="data.num" readonly></input>
								<div class="jia" ><i class="iconfont icon-jiahao" @click="add(index)"></i></div>
							</div>
							<div class="laji">
								<i class="iconfont icon-shanchu" @click="del(index)"></i>
							</div>
						</div>
						<div>价格 : <span class="price">{{data.prod.mobile_price*data.num}}元</span></div>
					</div>
				</div>
			</div>
		</div>

		<div class="foot">
			<p>合计: <span>{{toto(cartData)}}</span> 元</p>
			<div class="buy">
				去结算（1）
			</div>
		</div>
		
	</div>
</template>

<script>
	import axios from 'axios'
	import { MessageBox } from 'mint-ui';
	export default{
		name:'Car',
		data(){
			return{
				show:false,
				myStyle:{
					background:'#ca0e25',
					color:"#fff"
				},
			
			}
		},
		computed:{
			cartData(){
				return this.$store.state.carData
				
			}
		},
		methods:{
			look(){this.show = !this.show},
			add(i){
				this.$store.dispatch('add',{d:i})
			},
			reduce(n){
				this.$store.dispatch('reduce',{d:n})
			},
			del(f){
				var that =this
				MessageBox.confirm('确定要删除吗?').then(action => {
					that.$store.dispatch('del',{d:f})
				},()=>{});
				
			},
			toto(n){
				var total = 0 ; 
				n.forEach(y=>{
					total += y.prod.mobile_price*y.num
				})
				return total;
			}
		},
		mounted(){
			console.log(this.cartData)
			
		},
		//导航守卫离开的时候判断，一般有输入信息的时候提醒用户
		beforeRouteLeave (to, from , next) {
		  MessageBox.confirm('确定退出这个组件你保存了吗?').then(action => {
					next()
				},()=>{}).catch(next(false))
		  
	}	
		
	}
</script>

<style scoped lang="scss" src='../styles/car.scss'>


</style>