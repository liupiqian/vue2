<template>
	<div class="loddings">
				<div class="wu">
					<img src="../assets/tim.gif"/>
				</div>
		</div>
</template>

<script>
	export default{
		name:'Lodding',
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped lang="scss">
.loddings{
    width: 100%;height: 100%;opacity: 0.7;background:#000;z-index: 10000;
    position: fixed;overflow-y: auto;left: 0;top: 0;display: none;
    transition-duration: 3s;
    .wu{
        width: 200px;height: 200px;position: fixed;left: 0;top: 0;bottom: 0;right: 0;margin: auto;
        img{width: 100%;height: 100%;}
    }
}
.active{display: block;overflow-y:auto;}
</style>