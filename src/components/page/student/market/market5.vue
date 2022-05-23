
<template>
	<div class="tabBox">
        <el-tabs v-model="tabsVal" @tab-click="handleClick">
			<el-tab-pane v-for="(tabsItem, index) in tabList"
			:key="index" :label="tabsItem.label">
			</el-tab-pane>
		</el-tabs>
		<div class="markerTip">
			<component :is="routerLink"></component>
		</div>
	</div>
</template>

<script>
import marketTip7 from './markerTip/marketTip7.vue';
import marketTip8 from './markerTip/marketTip8.vue';
export default {
	name: 'my-course',
	data () {
		return {
			tabList: [
				{
					label: '碳汇采购',
					routerLink: 'marketTip7'
				},
				{
					label: '配额交易',
					routerLink: 'marketTip8'
				}
			],
			trList: [],
			tabsVal: '',
			routerLink: 'marketTip7'
		};
	},
	components: {
		marketTip7,
		marketTip8
	},
	props: [
		// 'taskidMap'
	],
	created () {

	},
	methods: {

		handleClick () {
			let item = this.tabList[this.tabsVal];
			this.routerLink = item.routerLink;
		}
	}
};
</script>

<style lang="scss" scoped>
.tabBox{
	color: #FFFFFf;
	padding: 0 15px;
	overflow: hidden;
	overflow-x: auto;
	.markerTip{
		width: 1500px;
	}
}
</style>
