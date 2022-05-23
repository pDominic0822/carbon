
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
import marketTip9 from './markerTip/marketTip9.vue';
export default {
	name: 'my-course',
	data () {
		return {
			tabList: [
				{
					label: '市场数据',
					routerLink: 'marketTip9'
				}
			],
			tabsVal: '',
			routerLink: 'marketTip9'
		};
	},
	components: {
		marketTip9
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
