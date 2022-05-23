
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
import marketTip3 from './markerTip/marketTip3.vue';
import marketTip4 from './markerTip/marketTip4.vue';
export default {
	name: 'my-course',
	data () {
		return {
			tabList: [
				{
					label: '绿贷申请',
					routerLink: 'marketTip3'
				},
				{
					label: '数据披露',
					routerLink: 'marketTip4'
				}
			],
			tabsVal: '',
			routerLink: 'marketTip3'
		};
	},
	components: {
		marketTip3,
		marketTip4
	},
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
}
</style>
