<template>
	<!--v-bind:style='父组件传过来的值样式'-->
<div id="top" v-bind:style="myStyle">
	<div class="left" @click="go()">
		<i class="iconfont icon-zuojiantou"></i>
	</div>
	<div class="con">
		<!--插槽slot,内容分发器在组件内写结构加上slot='con'-->
		<slot name='con'></slot>
	</div>
	<div class="right" @click="look()">
		导航
	</div>
	<common-footer class='ddd' :class="{active:show}"></common-footer>
</div>
</template>

<script>
	export default{
		name:'Top',
		//哪个组件用此组件，要通过动态绑定属性传递过来参数，例如样式，props接收
		props:{
			type:String,
			myStyle:''
		},
		data(){
			return{
				show:false
			}
		},
		methods:{
			go(){
				this.$router.go(-1)
			},
			look(){this.show = !this.show}
		}
	}
</script>

<style scoped lang="scss">
#top{
	 .ddd{top: 0;transition-duration:0.6s;display: none;}
    .active{display: block;top: 0.5rem ;position:fixed;z-index: 1000;}
	height: 0.5rem;width: 100%;display: flex;align-items: center;
	justify-content: space-between;font-size: 0.16rem;padding: 0 0.1rem;
	border-bottom:1px solid #ccc ;position: fixed;left: 0;top: 0;z-index: 1000;
}
.left{
	margin-left: -10px;height: 0.5rem;line-height: 0.5rem;
	i{
		font-size: 0.28rem;
	}
}
.right{font-size: 0.14rem;height: 0.5rem;line-height: 0.5rem;}
</style>