<template>
	<div class="header">
		<div class="logo">
			<!--<img src="http://www.dinghuapai.cn/wap/img/logo.png"/>-->
		</div>
		<div class="search">
			<span class="iconfont icon-fangdajing"></span>
			<input type="text" placeholder="请输入关键字" v-model="haha" @keyup.enter="sou()" class="tes1" />
		</div>
		<div class="service">
			在线客服
		</div>
	</div>
</template>

<script>
	export default{
		name:'Header',
		data(){
			return{
				haha:""
			}
		},
		methods:{
			sou(){
				console.log("11")
				this.$router.push({name:'Sou',params:{kk:this.haha}})
				
			},
		}
	}
</script>

<style scoped lang="scss" src='../styles/header.scss'>

</style>