<template>
	<div id="search">
		<common-lodding :class="{active:lodding}"></common-lodding>
		<common-top :myStyle="myStyle">
			<div slot="con">
				<input type="text" placeholder="请输入关键词" v-model="haha" @keyup.enter="sou()" style="outline: none;width: 2.92rem;border-radius:15px ;height: 0.3rem;
        border: 0;padding-left: 0.8rem;" />
				<span class="iconfont icon-fangdajing" @click="sou" style="font-size: 0.2rem;color: #666;position: absolute;right: 0.56rem;top: 0.14rem;"></span>
			</div>
		</common-top>
		<div class="content">
			<div class="ai">
				<div class="subheader">
					<div class="dd">当前分类 : 鲜花</div>
					<div class="ff">
						<div class="aa">
							已选择 :
						</div>
						<div class="bb">
							<div class="xiao">
								<span>爱情鲜花</span>
								<i>x</i>
							</div>
							
						</div>
					</div>
				</div>
				<div class="fen">
					<ul>
						<li :class='{active:shu == 0}' @click="mo(0)">默认</li>
						<li :class='{active:shu == 1}' @click="prices(1)">价格<span>{{jian}}</span></li>
						<li :class='{active:shu == 2}' @click="sell(2)">销量<span>{{jian}}</span></li>
						<li :class='{active:shu == 3}' @click="xin(3)">最新<span>{{jian}}</span></li>
						<li :class='{active:shu == 4}' @click="lei(4)">鲜花分类<i class="iconfont icon-funnel"></i></li>
					</ul>
				</div>
			</div>
			<div class="con" v-if="show">
			<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"  ref="loadmore">
				<div class="special_offer">
						<ul class="f_con" >
							<li v-for="(data,index) in seData">
								<router-link :to="{name:'Detail',params:{id:data.id}}">
								<div class="s_flower">
									<div class="f_img">
										<img v-lazy="'hua/'+data.img"/>
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
				</mt-loadmore>
				<div class="lodmore" @click="loadmores()">
					<span>{{tishi}}</span>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'Search',
		data() {
			return {
				myStyle: {
					background: "#f4f4f4"
				},
				searchData: "",
				lodding: false,
				show: false,
				seData:[],
				tishi:'上垃加载更多',
				allLoaded: false,
				page:0,
				haha:"",
				shu:'0',
				price : true,
				sort:'',
				jian:'↓',
			}
		},
		methods:{
			prices(m){				
				//↑
				this.shu = m ;
				this.price = ! this.price ;
				if(this.price){
	                this.sort = 'price-desc'
	                this.jian =  "↓"
	           }else{
	                this.sort = 'price-asc'
	                this.jian = '↑'
	            }
	            this.page = 0
	            this.seData = []
	            this.loadmores()
			},
			mo(n){
				this.shu = n
				this.page = 0
	            this.seData = []
	            this.sort = ""
				this.loadmores()
			},
			sell(m){
				this.shu = m
				this.price = ! this.price ;
				if(this.price){
	                this.sort = 'sale-asc'
	           }else{
	                this.sort = 'sale-desc'              
	            }
	            this.page = 0
	            this.seData = []
	            this.loadmores()
			},
			xin(m){
				this.shu = m
			},
			lei(m){
				this.shu = m
			},
			sou(){
				console.log("11")
				this.$router.push({name:'Sou',params:{kk:this.haha}})
				
			},
			
			loadTop() {
			  this.$refs.loadmore.onTopLoaded();
			   this.$router.go(0)
			   console.log("sdfdffagsgdsgfdggsgs")
			},
			loadBottom() {
			  setTimeout(()=>{
				this.allLoaded = true
				this.loadmores();
			  	this.$refs.loadmore.onBottomLoaded();		  	
			  }, 3000)
			},
			loadmores(h){
				
				if(h){
					var he = h
				}else{
					he=''
				}
				if(this.lodding == true) {
				return
			}
			var cid = this.$route.params.cid
			this.lodding = true
			
			axios.get(`hua/api/product/goods-list?state=goodsList&page=${this.page+1}&cid=1029&filter=${cid}&sort=${this.sort}`).then((res) => {
				//console.log(res.data.data)
				this.searchData = res.data.data;
				//this.seData = res.data.data.goodsList.data;
				this.page = res.data.data.goodsList.current_page
				this.seData=this.seData.concat(res.data.data.goodsList.data)
				if(res.data.data.goodsList.data.length==0){
					this.tishi = '没有更多了';
					this.allLoaded = true;
				}
				this.allLoaded = false;
				this.lodding = false;
				this.show = true;
				this.loading = false;
			})
				
			},
			
		},
		mounted() {
			//console.log(this)			
			this.loadmores()
		}
	}
</script>

<style scoped lang="scss" src='../styles/search.scss'>

</style>