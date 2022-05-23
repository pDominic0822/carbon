
<template>
	<div class="tabBox">
		<div class="rela">
			<el-tabs v-model="tabsVal" @tab-click="handleClick">
				<el-tab-pane v-for="(tabsItem, index) in tabList"
				:key="index" :label="tabsItem.label">
				</el-tab-pane>
			</el-tabs>
		</div>
		<div class="markerTip">
			<component :is="routerLink"></component>
		</div>
	</div>
</template>

<script>
import marketTip1 from './markerTip/marketTip1.vue';
import marketTip2 from './markerTip/marketTip2.vue';
export default {
	name: 'my-course',
	data () {
		return {
			value: '',
			tabList: [
				{
					label: '配额核定',
					routerLink: 'marketTip1'
				},
				{
					label: '配额清缴',
					routerLink: 'marketTip2'
				}
			],
			tabsVal: '',
			routerLink: 'marketTip1'
		};
	},
	components: {
		marketTip1,
		marketTip2
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
	.rela{
		position: relative;
		.about{
			position: absolute;
			right: 0;
			bottom: 28px;
		}
	}
}
</style>
