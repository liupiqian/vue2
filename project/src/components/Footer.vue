<template>
	<div class="footer">
		<ul class="f">
			<router-link to="/">
			<li><i class="iconfont icon-fangzi"></i><span>首页</span></li>
			</router-link>
			<router-link to='/class'>
			<li><i class="iconfont icon-fenlei1"></i><span>分类</span></li>
			</router-link>
			<router-link to="/car">
			<li class="buy">
				<i class="iconfont icon-gouwuche"></i>
				<div class="yuan">1</div>
				<span>购物车</span>
			</li>
			</router-link>
			<router-link to="/my">
			<li><i class="iconfont icon-wode"></i><span>我的</span></li>
			</router-link>
		</ul>
	</div>
</template>

<script>
</script>

<style scoped src='../styles/footer.scss' lang="scss">

</style>