<template>
	<div class="tableBox">
		<div>
			<el-tabs v-model="tabsVal" @tab-click="handleClick">
				<el-tab-pane v-for="(tabsItem, index) in tabList"
				:key="index" :label="tabsItem.label">
				</el-tab-pane>
			</el-tabs>
		</div>
		<template v-if="isTabCollse === 0">
			aa
			<div class="chart1" ref="chart1"></div>
			<div>
				<table class="demo-table mt20">
					<tr>
						<td>
							碳配额库存 ( 吨 )
						</td>
					</tr>
				</table>
			</div>
		</template>
		<template  v-if="isTabCollse === 1">
			<div>
				<table class="demo-table mt20">
					<tr>
						<td>
							实际碳排放 ( 吨 )
						</td>
					</tr>
				</table>
			</div>
		</template>
	</div>
</template>

<script>

export default {
	components: {
	},
	name: 'login',
	data () {
		return {
			tabList: [
				{
					label: '碳沙盘模拟企业经营分析',
					routerLink: 0
				},
				{
					label: '年度碳配额库存 ( 吨 )',
					routerLink: 1
				}
			],
			tabsVal: '',
			isTabCollse: 0
		};
	},
	created () {
	},
	methods: {
		handleClick () {
			let item = this.tabList[this.tabsVal];
			this.isTabCollse = item.routerLink;
		}
	}
};
</script>

<style lang="scss" scoped>
.tableBox{
	padding-left: 20px;
}
</style>
