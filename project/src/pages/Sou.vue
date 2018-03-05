<template>
<div id="sou">
	<common-lodding :class="{active:lodding}"></common-lodding>
		<common-top :myStyle="myStyle">
			<div slot="con">
				<input type="text" v-model="skey" @keyup.enter="sss" placeholder="请输入关键词" style="outline: none;width: 2.92rem;border-radius:15px ;height: 0.3rem;
        border: 0;padding-left: 0.8rem;" />
				<span class="iconfont icon-fangdajing" @click="sss" style="font-size: 0.2rem;color: #666;position: absolute;right: 0.56rem;top: 0.14rem;"></span>
			</div>
		</common-top>
		<div class="gong" v-if="show">
				<span>{{skey}}</span> 搜索结果列表 (共搜索到<span>{{souData.goodsList.total}}</span>个结果)
		</div>
		<div class="content" v-if="show">
			
			<div class="special_offer">
				
				<ul class="f_con">
					<li v-for="(data,index) in souData.goodsList.data" >
						
						<div class="s_flower" @click.stop="refresh()">
							<div class="f_img">
								<img v-lazy="'hua/'+data.img" />
							</div>
							<div class="f_name">
								{{data.title}}
							</div>
							<div class="f_price">
								￥{{data.price}}
							</div>
						</div>
						
					</li>
				</ul>
			</div>
		</div>
		
		
</div>
</template>

<script>
	import axios from "axios"
	export default{
		name:'Sou',
		data(){
			return{
				myStyle: {
					background: "#f4f4f4"
				},
				lodding: false,
				show: false,
				souData : {},
				skey:'',
			}
		},
		methods:{
			sss(){
				this.skey = this.$route.params.kk
				var sk =this.skey
				
				axios.get(`hua/api/product/search?state=goodsList&page=1&search_key=${sk}`).then((res)=>{
				console.log(res.data.data)
				this.souData = res.data.data
				this.show = true
			})
			}
		},
		mounted(){
			this.sss()
			
		}
	
	}
</script>

<style scoped lang="scss" src='../styles/sou.scss'>
</style>