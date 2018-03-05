<template>
	<div id="fen">
		<div class="lei">
			<i class="iconfont icon-fangdajing"></i>
			<input type="text" placeholder="请输入关键词搜索" v-model="haha" @keyup.enter="sou()" class="tes1" />
			<span class="iconfont icon-gouwuche"></span>
		</div>
		<common-lodding :class='{active:lodding}'></common-lodding>
		<div class="content" v-if="show">
			<div class="subHead">
				<div class="one" v-for="(data,index) in classData.category">
					<div class="tu">
						<img :src="'hua/'+data.img" />
					</div>
					<div class="zi">
						{{data.name}}
					</div>
				</div>
			</div>
			<div class="con">
				<div class="left">
					<ul>
						<li v-for="(data,index) in classData.label">{{data.name}}</li>
					</ul>  
				</div>
				<div class="right">
					<div class="big">
						<div class="tit">
							{{classData.label[0].name}}
						</div>
						<div class="k">
							
							<div class="j" v-for="(data,index) in classData.label[0].values">
								<router-link :to="{name:'Search',params:{cid:data.attr_id+'_'+data.id}}">
										{{data.name}}
								</router-link>
							</div>
							
						</div>
					</div>
					<div class="big">
						<div class="tit">
							{{classData.label[1].name}}
						</div>
						<div class="k">
							<div class="j" v-for="(data,index) in classData.label[1].values">
								<router-link :to="{name:'Search',params:{cid:data.attr_id+'_'+data.id}}">
								{{data.name}}
								</router-link>
							</div>
						</div>
					</div>

					<div class="big2">
						<div class="tit">
							{{classData.label[2].name}}
						</div>
						<div class="pian">
							<div class="img" v-for="(data,index) in classData.label[2].values">
								<router-link :to="{name:'Search',params:{cid:data.attr_id+'_'+data.id}}">
								<img :src="'hua/'+data.img" />
								</router-link>
							</div>

						</div>
					</div>
					<div class="big2">
						<div class="tit">
							{{classData.label[3].name}}
						</div>
						<div class="pian">
							<div class="img" v-for="(data,index) in classData.label[3].values">
								<router-link :to="{name:'Search',params:{cid:data.attr_id+'_'+data.id}}">
								<img :src="'hua/'+data.img" />
								</router-link>
							</div>
						</div>
					</div>
					
					<div class="big">
						<div class="tit">
							{{classData.label[4].name}}
						</div>
						<div class="k">
							<div class="j" v-for="(data,index) in classData.label[4].values">
								<router-link :to="{name:'Search',params:{cid:data.attr_id+'_'+data.id}}">
								{{data.name}}
								</router-link>
							</div>
						</div>
					</div>

					<div class="big">
						<div class="tit">
							{{classData.label[5].name}}
						</div>
						<div class="k">
							<div class="j" v-for="(data,index) in classData.label[5].values">
								<router-link :to="{name:'Search',params:{cid:data.attr_id+'_'+data.id}}">
								{{data.name}}
								</router-link>
							</div>
						</div>
					</div>

					<div class="big">
						<div class="tit">
							{{classData.label[6].name}}
						</div>
						<div class="k">
							<div class="j" v-for="(data,index) in classData.label[6].values">
								<router-link :to="{name:'Search',params:{cid:data.attr_id+'_'+data.id}}">
								<span>{{data.name}}</span>
								
								</router-link>
							</div>
						</div>
					</div>
					

				</div>
			</div>
		</div>
		<common-footer></common-footer>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'Class',
		data() {
			return {
				classData: {},
				lodding:false,
				show:false,
				haha:""
			}
		},
		mounted() {
			if(this.lodding ==true){
				return
			}
			this.lodding =true
			axios.get('hua/api/product/category').then((res) => {
				console.log(res.data.data)
				this.classData = res.data.data
				this.lodding = false
				this.show = true
			})
		},
		methods:{
			sou(){
				console.log("11")
				this.$router.push({name:'Sou',params:{kk:this.haha}})
			},
		}
	}
</script>
<style scoped lang='scss' src='../styles/class.scss'>

</style>