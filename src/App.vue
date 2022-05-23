<template>
	<div id="app">
		<router-view v-if="isRouterLive"></router-view>
		<el-dialog
			title="正确答案弹窗"
			@before-close="closeRetuen"
			:visible.sync="$store.state.dialogreturnDataVisible"
			width="820px"
			append-to-body
			height="560px"
			>
			<returnMap v-if="$store.state.dialogreturnDataVisible"
			>
			</returnMap>
		</el-dialog>
	</div>
</template>

<script>
// import { mapState } from 'vuex';
export default {
	name: 'App',
	data () {
		return {
			isRouterLive: true,
			countData: true
		};
	},
	provide () {
		return {
			reload: this.reload
		};
	},
	computed: {
		// ...mapState({
		// 	dialogreataVisible: (state) => { // 映射 count3 为 store.state.conut3的值
		// 		return state.dialogreturnDataVisible;
		// 	}
		// })
	},
	methods: {
		closeRetuen () {
			// this.dialogreataVisible = false;
			this.$store.commit('CommitdialogreturnVisibleFun', 'success');
		},
		reload () {
			this.isRouterLive = false;
			this.$nextTick(() => {
				this.isRouterLive = true;
			});
		}
	}
};
</script>
