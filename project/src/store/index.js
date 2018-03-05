import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
const state = {
	user: sessionStorage.user ? JSON.parse(sessionStorage.user) : [],
	carData: [],
	
}
const actions = {
	users(context, {
		userss
	}) {
		context.commit('USER_NAME', {
			user: userss
		})
	},
	logout(context) {
		context.commit('LOG_OUT')
	},
	cart(context, {detailData}) {

		//console.log(detailData)
		context.commit('CART', detailData)
	},
	add(context,{d}){
		context.commit("ADD",d)
	},
	reduce(context,{d}){
		context.commit("REDUCE",d)
	},
	del(context,{d}){
		context.commit('DEL',d)
	}
}
const mutations = {
	USER_NAME(state, {
		user
	}) {		
		sessionStorage.user = user
		state.user = sessionStorage.user
	},
	LOG_OUT(state) {
		state.user = '';
	},
	CART(state,detailData) {
		//关键点state.carData.find(function(item代表前面的数组)，index)
		//找到返回该对象，没找到返回undefined
		 const duixiang = state.carData.find(function(item,index){
		 	return item.prod.id === detailData.id;
		 })
            if(duixiang==undefined){
//               console.log(detailData)
//push 进去一个对象，里面有数量数量是自己加的 和详情
              state.carData.push({num:detailData.num,prod:detailData})
            }else{
	              duixiang.num += detailData.num
            }
	},
	ADD(state,d){
		state.carData[d].num++
	},
	REDUCE(state,d){
		if(state.carData[d].num<=1){
			state.carData[d].num = 1
		}else{
			state.carData[d].num--
		}
		
	},
	DEL(state,d){
		state.carData.splice(d,1)
	}
}
export default new Vuex.Store({
	state,
	mutations,
	actions
})

////////////长期存储//////////////
//import Vue from 'vue';
//import Vuex from 'vuex';
//
//Vue.use(Vuex);
//
//var state = {
//	username: "默认用户名",
//	cart: []
//}
//
//// 持久化：从本地取出数据
//if(localStorage.getItem("data")) {
//	var data = JSON.parse(localStorage.getItem("data"));
//	state = data;
//}
//
//function saveTolocal(state) {
//	// 持久化：保存数据
//	localStorage.setItem("data", JSON.stringify(state));
//}
//
//const mutations = {
//	setUserName: function(state, username) {
//		state.username = username;
//		// 持久化：保存数据
//		saveTolocal(state);
//	},
//	addToCart: function(state, goods_info) {
//		state.cart.push(goods_info);
//		// 持久化：保存数据
//		saveTolocal(state);
//	}
//}
//
//const actions = {
//	setUserNameA: function({commit}, username) {
//		commit("setUserName", username)
//	},
//	addToCartA: function({commit}, goods_info) {
//		commit("addToCart", goods_info);
//	}
//}
//
//export default new Vuex.Store({
//	state,
//	mutations,
//	actions
//})