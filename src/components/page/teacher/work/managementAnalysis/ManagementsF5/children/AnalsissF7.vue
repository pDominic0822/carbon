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
			<div class="chart1" ref="chart1"></div>
			<div>
				<table class="demo-table mt20">
					<tr v-for="(item,index) in orgList" :key="index">
						<td>{{item.yearsTime || ''}}</td>
						<td v-for="(innerItem, innerIndex) in item.listArr" :key="innerIndex">
							{{(innerItem && innerItem.value) || (innerItem && innerItem.orgName) || 0}}
						</td>
					</tr>
				</table>
			</div>
		</template>
		<template  v-if="isTabCollse === 1">
			<div>
				<table class="demo-table mt20">
					<tr v-for="(item,index) in orgList" :key="index">
						<td>{{item.yearsTime || ''}}</td>
						<td v-for="(innerItem, innerIndex) in item.listArr" :key="innerIndex">
							{{(innerItem && innerItem.value) || (innerItem && innerItem.orgName) || 0}}
						</td>
					</tr>
				</table>
			</div>
		</template>
	</div>
</template>

<script>
import {getYear} from '../js/get.js';
export default {
	components: {
	},
	name: 'login',
	data () {
		return {
			getYear: getYear,
			infoList: [],
			orgList: [],
			yearList: [],
			tdList: [],
			tabList: [
				{
					label: '横轴',
					tableType: 'orderIncomeAnalysis',
					routerLink: 0
				},
				{
					label: '数轴',
					tableType: 'orderIncomeAnalysis',
					routerLink: 1
				}
			],
			yearArr: [],
			tabsVal: '',
			isTabCollse: 0
		};
	},
	created () {
		this.tabsVal = '0';
		this.handleClick();
	},
	methods: {
		async getYearInfo () {
			this.orgList = await this.getYear(this.tableType);
			this.infoList = this.orgList[0].listArr;
			console.log(this.orgList);
		},
		handleClick () {
			let item = this.tabList[this.tabsVal];
			this.tableType = item.tableType;
			this.isTabCollse = item.routerLink;
			this.getYearInfo();
		}
	}
};
</script>

<style lang="scss" scoped>
.tableBox{
	padding-left: 20px;
}
</style>
