<template>
	<div id="my">
		<common-top :myStyle="myStyle">
			<div slot='con'>
				个人中心
			</div>
		</common-top>
		
		<div class="cont">
			<div class="s">
				<div class="im">
					<img src="http://www.dinghuapai.cn/wap/img/uc/dhp.png"/>
				</div>
				<div class="ip">
					{{user}}
				</div>
				<div class="vip">
					普通会员
				</div>
			</div>
			<div class="c">
				<div>
					<i class="iconfont icon-hongbao"></i>
					<span>待付款</span>
				</div>
				<div>
					<i class="iconfont icon-shizhong_l"></i>
					<span>待配送</span>
				</div>
				<div>
					<i class="iconfont icon-dingdan"></i>
					<span>待评价</span>
				</div>
				<div>
					<i class="iconfont icon-pingjiashaidan"></i>
					<span>全部订单</span>
				</div>
				
			</div>
			<div class="b">
				<div>
					<i class="iconfont icon-wodeyouhuijuan"></i>
					<span>优惠劵</span>
				</div>
				<div>
					<i class="iconfont icon-tiyanjin"></i>
					<span>优惠码</span>
				</div>
				<div>
					<i class="iconfont icon-pingjiashaidan"></i>
					<span>我的评价</span>
				</div>
				<div>
					<i class="iconfont icon-jiaoya"></i>
					<span>我的足迹</span>
				</div>
				<div>
					<i class="iconfont icon-ren"></i>
					<span>个人信息</span>
				</div>
				<div>
					<i class="iconfont icon-dingdan"></i>
					<span>常用收获人</span>
				</div>
				<div>
					<i class="iconfont icon-suo2"></i>
					<span>修改密码</span>
				</div>
				<div>
					<i class="iconfont icon-dianhua"></i>
					<span>在线咨询</span>
				</div>
				<div>
					<i class="iconfont icon-hearts"></i>
					<span>关于订花派</span>
				</div>
			</div>
			<div class="tui">
				<div @click="bai()">
					退出
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import { MessageBox } from 'mint-ui';
	export default{
		name:'My',
		data(){
			return{
				myStyle:{
					background:"#ca0e25",
					color:'#fff'
				},
				
			}
		},
		computed:{
			user(){
				return this.$store.state.user
			}
		},
		methods:{
			bai(){
				MessageBox.confirm('确定退出?').then(action => {
					this.$store.dispatch('logout')
					console.log("1:"+this.user)
					this.$router.push('/')
				},()=>{});
			}
		},
		mounted(){
			var that =this
			
//			if(this.user == ""){
//				MessageBox('提示信息','还没登录请登录!')
//				this.$router.push('/login')
//			}else{
//				this.$router.push('/my')
//			}
		},
		beforeRouteEnter (to, from, next) {
			
  			next(vm => {
  				// 通过 `vm` 访问组件实例
  				if(vm.user == ""){
				MessageBox('提示信息','还没登录请登录!')
				vm.$router.push('/login')
			}else{
				vm.$router.push('/my')
			}
    				
  			})
}
		
	}
</script>

<style scoped lang="scss" src='../styles/my.scss'>

</style>