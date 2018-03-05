<template>
	<div id="login">
		<common-top :myStyle="myStyle">
			<div slot="con">
				登录
			</div>
		</common-top>
		<common-lodding :class='{active:lodding}'></common-lodding>
		<div class="reg">
			<div>
				<span class="iconfont icon-shouji"></span>
				<input type="text" v-model="ipone" maxlength="11" placeholder="手机号登录" />
			</div>
			<div>
				<span class="iconfont icon-suo1"></span>
				<input type="text" maxlength="6" placeholder="验证码" v-model="mi" />
				<p class="yzm" @click="yzm()" v-if="haha">获取验证码</p>
				<p class="dumiao" v-if="countdown"><input class="aaa" v-model="miao" readonly></input><i>秒</i></p>
			</div>
			<div class="dl" @click="dl()">
				立即登录
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import { MessageBox } from 'mint-ui';
	export default{
		name:'Login',
		data(){
			return{
				myStyle:{
					background:"#fff"
				},
				lodding: true,
				shu : false,
				 ipone:'',
				 countdown:false,
				 haha:true,
				 miao:'60',
				 mi:''
			}
		},
		computed:{
			userss(){
				return this.$store.state.user
			}
		},
		methods:{
			yzm(){
				var ip = this.ipone
				var ipone=/^1[3|4|5|8][0-9]\d{4,8}$/.test(ip)
				if(ipone){
					axios.post(`hua/api/account/send-yzm?type=login&mobile=${ip}`).then((res)=>{
//					console.log(res)
					
					this.jian();
				 })
				}else{
					MessageBox('提示信息','请输入正确的手机号!');
				}
				
			},
			jian(){
				this.haha = false;
				this.countdown = true;
				var that = this
				var timer = setInterval(function(){
					that.miao--
					if(that.miao<1){
						clearInterval("timer")
						that.countdown = false;
						that.haha=true;
					}
				},1000)
			},
			dl(){
				var mima = this.mi;
				var username = this.ipone;
				var ipon=/^1[3|4|5|8][0-9]\d{4,8}$/.test(username)
				if(ipon){
					axios.post(`hua/api/account/sms-login?yzm=${mima}&phone=${username}`).then((res)=>{
					//console.log(res.data.status)
					//console.log(res)
					var log =res.data.status
					if(log){
						
						MessageBox('提示信息',"登录成功")
						this.$router.history.push('/my');
						this.$store.dispatch('users',{userss:username})
					}else{
						MessageBox('提示信息',"手机号或验证码不正确!")
					}
					
				})
				}
				else{
					MessageBox('提示信息',"手机号格式不正确")
				}
				
			}
		},
		mounted(){
			var that =this
			setTimeout(function(){
				that.lodding = false
			},500)
			
		}
	}
</script>

<style  lang='scss'>
#login{
	width: 100%;background: #fff;height: 100%;
	.reg{
		display: flex;flex-direction:column;width: 100%;padding:0.5rem 0.3rem;
		div{
			position: relative;display: flex;flex-direction: column;height:0.5rem;border-bottom: 1px solid #ccc;align-items: center;justify-content: center;padding-top: 0.08rem;
			span{position: absolute;left:0;font-size: 26px;color:#ca0e25;font-weight: 900;}
			input{border: 0;outline: none;width: 100%;padding-left:0.3rem;}
			.yzm{color: #fff;font-size: 0.14rem;border-radius: 5px;text-align: center;line-height: 0.3rem;height:0.3rem;width: 1rem;background: #ca0e25;position: absolute;right: 0;top: 12px;}
			.dumiao{
				color: #fff;font-size: 0.14rem;border-radius: 5px;text-align: center;
				line-height: 0.3rem;height:0.3rem;width: 0.7rem;background: #ca0e25;
				position: absolute;right: 0;top: 12px;
				.aaa{color: #fff;font-size: 0.16rem;border: 0;background: #ca0e25;
					width: 0.2rem;padding: 0;
				}
				}
		}
			.dl{padding: 0;border-radius: 0.05rem;height: 0.4rem;text-align: center;line-height: 0.4rem;background: #ca0e25;color: #fff;font-size: 14px;margin-top: 0.2rem;}
		}
}
.mint-msgbox{
	border-radius: 25px !important;width: 2.7rem !important;
	.mint-msgbox-confirm{font-weight: 900 !important;font-size: 0.17rem !important;}
	}


</style>