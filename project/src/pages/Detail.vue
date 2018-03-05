<template>
<div id="detail">
	<common-top :myStyle='myStyle'>
		<div slot='con'>
			商品详情
		</div>
	</common-top>
	<common-lodding :class="{active:lodding}"></common-lodding>
	<div class="banner" v-if="show">
		<mt-swipe :auto="3000">
		  <mt-swipe-item v-for="item in detailData.images">
		  	<img :src="'hua/'+item"/>
		  </mt-swipe-item>
		</mt-swipe>
	</div>
	<div class="content" v-if="show">
		<div class="bg">
		<div class="np">
			<div class="name">
				<p>{{detailData.title}}</p><span>编号:{{detailData.id}}</span>
			</div>
			<div class="price">
				<p>订花派价<b>￥{{detailData.mobile_price}}</b></p>
				<p class="phone">手机专享价</p>&nbsp;<span>已省{{detailData.lisheng}}元</span>
			</div>
		</div>
		<div class="hui">
			<p>{{activeData.name}}</p><span>{{activeData.intro}}</span>	
		</div>
		<div class="jj">
				<span>数量 : </span>
				<p class="sm"><i class="iconfont icon-jianshao" @click="reduce"></i></p>
				<p class="num">{{num}}</p>
				<p class="big"><i class="iconfont icon-jiahao" @click="add"></i></p>
			</div>
		<div class="assess">
			<div class="ddd">
				<p class="left">
					商品详情
				</p>
				<p class="con">
					用户评价
				</p>
				<p class="right">
					鲜花问答
				</p>
			</div>
		</div>
		<ul class="p_detail">
			<li><span>材料</span><p>{{detailData.material}}</p></li>
			<li><span>包装</span><p>{{detailData.package}}</p></li>
			<li><span>花语</span><p>{{detailData.flower_means}}</p></li>
			<li><span>附送</span><p>免费附送精美贺卡，代写您的祝福。（您下单时可填写留言栏)</p></li>
			<li><span>配送</span><p>全国（可配送至全国1000多城市，市区免配送费）</p></li>
		</ul>
		<div class="detail_img" v-html="detailData.description">
			
		</div>
		<div class="ai">
			<img src="http://www.dinghuapai.cn/uploads/store/04.jpg"/>
			<img src="http://www.dinghuapai.cn/uploads/store/05.jpg"/>
			<img src="http://www.dinghuapai.cn/uploads/store/06.jpg"/>
			<img src="http://www.dinghuapai.cn/uploads/store/07.jpg"/>
			<img src="http://www.dinghuapai.cn/uploads/store/09.jpg"/>
		</div>
		<div class="special_offer">
				<div class="top">
					<p class="left"><span>也许你也喜欢</span></p>
				</div>
				<ul class="f_con">
					<li v-for="(data,index) in hots" >
						<router-link :to="{name:'Detail',params:{id:data.id}}">
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
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="bottom">
		<div class="left">
			合计 : <span v-if="show">{{detailData.mobile_price*num}}</span> 元
		</div>
		<div class="right">
			<div class="gou" @click="gou(detailData,num)">
				加入购物车
			</div>
			<div class="jie">
				立即购买
			</div>
		</div>
	</div>
</div>
</template>

<script>
	import axios from 'axios';
	import { MessageBox } from 'mint-ui';
	export default{
		name:'Detail',
		data(){
			return{
				detailData:"",
				activeData:'',
				description:'',
				hots:'',
				lodding:false,
				show:false,
				myStyle:{
					background:"#fff"
				},
				num:1,
			}
		},
		methods:{
			refresh(){
				this.$router.go(0)
			},
			add(){
				this.num ++
			},
			reduce(){
				if(this.num<=1){
					this.num = 1
				}else{
					this.num--
				}
			},
			gou(dd,n){
				//添加到购物车派发dispatch  cart 把这个商品信息传过去
				dd.num =this.num 
				this.$store.dispatch('cart',{detailData:dd})]
				MessageBox.confirm('添加成功，马上去结算?').then(action => {
					this.$router.push('/car')
				},()=>{});
			}
		},
		mounted(){
			//console.log(this)
			
			if(this.lodding == true){
				return
				}
			this.lodding = true
//			console.log(this.$route.params.id)
			var id = this.$route.params.id
				axios.get(`hua/api/product/index?id=${id}`).then((res)=>{
//				console.log(res.data.data.detail)
				this.detailData = res.data.data.detail
				this.activeData = res.data.data.active[0]
				this.description = res.data.data.detail.description
//				console.log(res.data.data.detail.description)
				this.hots = res.data.data.hots
				this.lodding = false
				this.show = true
			})
		},
	}
</script>

<style  lang="scss" src='../styles/detail.scss'>

</style>