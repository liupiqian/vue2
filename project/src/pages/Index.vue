<template>
	<div id="">
		<common-header></common-header>
		<!--lodding组件-->
		<common-lodding :class='{active:lodding}'></common-lodding>
		<div class="content" v-if="shu">
			<div class="banner">
				<mt-swipe :auto="2000">
					<mt-swipe-item v-for="data in indexData.ad.items">
						<img :src="'hua/'+data.pic" />
					</mt-swipe-item>
				</mt-swipe>
			</div>
			<div class="nav">
				<div class="hidd">
					<ul>
						<li v-for="(data,index) in indexData.lively1">
							<div id="live1">
								<img  v-lazy="'hua/'+data.index_img" />
							</div>
							<div class="name">
								{{data.name}}
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="discounts">
				<ul>
					<li v-for="data in indexData.lively2">
						<p>{{data.name}}</p>
						<div class="he">
							<img v-lazy="'hua/'+data.img" />
						</div>
					</li>
					<li class="three">
						<div class="you">
							<img v-lazy="'hua/'+indexData.special.img" />
						</div>
						<div class="special_price">
							<span class="n">{{indexData.special.title}}</span>
							<span class="p">￥{{indexData.special.special_price}}</span>
						</div>
						<div class="hui">
							限时特惠({{indexData.special.discount}})折
						</div>
					</li>
				</ul>
			</div>
			<div class="special_offer">
				<div class="top">
					<p class="left"><i class="iconfont icon-fenlei"></i><span>{{indexData.floor[0].wap_name}}</span></p>
					<p class="more">更多+</p>
				</div>
				<ul class="f_con">
					
					
					<li v-for="(data,index) in indexData.floor[0].attribute"> 
						<router-link :to="{name:'Detail',params:{id:data.item_id}}">
						<div class="s_flower">
							<div class="f_img">
								<img v-lazy="'hua/'+data.items.img" />
							</div>
							<div class="f_name">
								{{data.items.title}}
							</div>
							<div class="f_price">
								￥{{data.items.price}}
							</div>
						</div>
						</router-link>
					</li>
					
					
				</ul>
			</div>
			<div class="special_offer">
				<div class="top">
					<p class="left"><i class="iconfont icon-fenlei"></i><span>{{indexData.floor[1].wap_name}}</span></p>
					<p class="more">更多+</p>
				</div>
				<ul class="f_con">
					<li v-for="(data,index) in indexData.floor[1].attribute">
						<router-link :to="{name:'Detail',params:{id:data.item_id}}">
						<div class="s_flower">
							<div class="f_img">
								<img v-lazy="'hua/'+data.items.img" />
							</div>
							<div class="f_name">
								{{data.items.title}}
							</div>
							<div class="f_price">
								￥{{data.items.price}}
							</div>
						</div>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="special_offer">
				<div class="top">
					<p class="left"><i class="iconfont icon-fenlei"></i><span>{{indexData.floor[2].wap_name}}</span></p>
					<p class="more">更多+</p>
				</div>
				<ul class="f_con">
					<li v-for="(data,index) in indexData.floor[2].attribute">
						<router-link :to="{name:'Detail',params:{id:data.item_id}}">
						<div class="s_flower">
							<div class="f_img">
								<img v-lazy="'hua/'+data.items.img" />
							</div>
							<div class="f_name">
								{{data.items.title}}
							</div>
							<div class="f_price">
								￥{{data.items.price}}
							</div>
						</div>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="special_offer">
				<div class="top">
					<p class="left"><i class="iconfont icon-fenlei"></i><span>{{indexData.floor[3].wap_name}}</span></p>
					<p class="more">更多+</p>
				</div>
				<ul class="f_con">
					<li v-for="(data,index) in indexData.floor[3].attribute">
						<router-link :to="{name:'Detail',params:{id:data.item_id}}">
						<div class="s_flower">
							<div class="f_img">
								<img v-lazy="'hua/'+data.items.img" />
							</div>
							<div class="f_name">
								{{data.items.title}}
							</div>
							<div class="f_price">
								￥{{data.items.price}}
							</div>
						</div>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="nous">
				<div class="top">
					<p class="left"><i class="iconfont icon-fenlei"></i><span>{{indexData.article.name}}</span></p>
					<p class="more">更多+</p>
				</div>
				<ul>
					<li v-for="(data,index) in indexData.article.waparticle"><span>{{data.title}}</span><i class="iconfont icon-iconfonti"></i></li>
				</ul>
			</div>
			<div class="discuss">
				<div class="top">
					<p class="left"><i class="iconfont icon-fenlei"></i><span>评论列表</span></p>
					<p class="more">更多+</p>
				</div>
				<ul>
					<li v-for="(data,index) in indexData.comments.data">
						<router-link :to="{name:'Detail',params:{id:data.item_id}}">
						<div class="dis_img">
							<img v-lazy="'hua/'+data.items.img" />
						</div>
						</router-link>
						<div class="dis_r">
							<router-link :to="{name:'Detail',params:{id:data.item_id}}">
							<p>{{data.items.title}}</p>
							</router-link>
							<p class="pp">2018-01-26 13:11:04</p>
							<p class="pp">{{data.content}}</p>
						</div>
					</li>
				</ul>
			</div>
			<div class="bottom">
				<div class="b_one">
					<ul>
						<li>
							<div class="b_bg">

							</div>
							<p>新鲜花材</p>
						</li>
						<li>
							<div class="b_bg2">

							</div>
							<p>诚信可靠</p>
						</li>
						<li>
							<div class="b_bg3">
							</div>
							<p>1-3小时送花</p>
						</li>
						<li>
							<div class="b_bg4">
							</div>
							<p>200%退赔承诺</p>
						</li>
					</ul>
				</div>
				<div class="b_two">
					<ul class="b_nav">
						<li>登录</li>
						<li>注册</li>
						<li>购物车</li>
						<li>返回顶部</li>
					</ul>
					<p class="a">
						<i class="iconfont icon-dianhua"></i>
						<span> 24小时订花热线:</span>
						<span class="co">400-992-2020</span>
					</p>
					<p class="b">
						关于订花派 | 订单查询 | 在线补款 | 客服
					</p>
					<div class="c">
						<p>电脑版 | 触屏版</p>
						<p>Copyright© 2009-2017 订花派 版权所有</p>
					</div>
				</div>
			</div>
		</div>
		<common-footer></common-footer>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'Index',
		data(){
			return {
				indexData:'',
				lodding:false,
				shu:false
			}
		},
		mounted() {
			if(this.lodding == true) {
				return
			}
			this.lodding = true
			axios.get('hua/api/home/index').then((res) => {
//				console.log(res.data.data)
				this.indexData =  res.data.data
				this.lodding = false;
				this.shu = true
			})
		}
	}
</script>
<style scoped lang="scss" src='../styles/index.scss'>
	
</style>