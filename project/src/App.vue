<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*在这里引入公共样式与iconfont*/
@import './styles/common.scss';
@import '////at.alicdn.com/t/font_535025_x0vb446vwyduz0k9.css';
#app{
	height: 100%;width: 100%;
}
</style>
