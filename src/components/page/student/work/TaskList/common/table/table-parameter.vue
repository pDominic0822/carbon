<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table" v-for="(tableItem, tableindex) in trMap" :key="tableindex">
			<tr v-for="(trItem, trIndex) in tableItem.dataList" :key="trIndex">
				<!-- 分类 -->
				<td :rowspan="tableItem.dataList.length " v-if="trIndex === 0" colspan="2">
					{{tableItem.name}}
				</td>
				<td >
					{{trIndex + 1}}
				</td>
				<!-- 参数 -->
				<td colspan="2">
					{{trItem.listName}}
				</td>
				<!-- 1 -->
				<td >
					{{trItem.year1Val}}
				</td>
				<td >
					{{trItem.year2Val}}
				</td>
				<td >
					{{trItem.year3Val}}
				</td>
				<td >
					{{trItem.year4Val}}
				</td>
				<!-- 5 -->
				<td >
					{{trItem.year5Val}}
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: '',
	data () {
		return {
			trMap: [ // table
				{
					name: '生产线参数',
					dataList: [ // tr
						{
							listName: '产能（个/季度）', // td
							year1Val: '10',
							year2Val: '-',
							year3Val: '-',
							year4Val: '-',
							year5Val: '-'
						},
						{
							listName: '耗料（包/季度）',
							year1Val: '10',
							year2Val: '-',
							year3Val: '-',
							year4Val: '-',
							year5Val: '-'
						},
						{
							listName: '耗电（万度/季度）',
							year1Val: '10',
							year2Val: '-',
							year3Val: '-',
							year4Val: '-',
							year5Val: '-'
						},
						{
							listName: '碳排放(Kg/季度）',
							year1Val: '120',
							year2Val: '-',
							year3Val: '-',
							year4Val: '-',
							year5Val: '-'
						}
					]
				},
				{
					name: '年度财务参数',
					dataList: [ // tr
						{
							listName: '现金（元）', // td
							year1Val: '50',
							year2Val: '-',
							year3Val: '-',
							year4Val: '-',
							year5Val: '-'
						},
						{
							listName: '生产线资产（元）',
							year1Val: '100',
							year2Val: '-',
							year3Val: '-',
							year4Val: '-',
							year5Val: '-'
						},
						{
							listName: '年度固定成本（元）',
							year1Val: '15',
							year2Val: '15',
							year3Val: '15',
							year4Val: '15',
							year5Val: '15'
						}
					]
				},
				{
					name: '政府管理参数',
					dataList: [
						{
							listName: '碳配额占比( % )', // td
							year1Val: '75%',
							year2Val: '65%',
							year3Val: '55%',
							year4Val: '45%',
							year5Val: '30%'
						}
					]
				},
				{
					name: '绿贷服务市场',
					dataList: [
						{
							listName: '绿贷利率', // td
							year1Val: '1.5%',
							year2Val: '-',
							year3Val: '-',
							year4Val: '-',
							year5Val: '-'
						},
						{
							listName: '绿贷期限（年）', // td
							year1Val: '5',
							year2Val: '-',
							year3Val: '-',
							year4Val: '-',
							year5Val: '-'
						}
					]
				},
				{
					name: '技改服务市场',
					dataList: [
						{
							listName: '节能技改费用（万/次）', // td
							year1Val: '25',
							year2Val: '25',
							year3Val: '25',
							year4Val: '25',
							year5Val: '25'
						},
						{
							listName: '能耗降低( % )1次', // td
							year1Val: '10%',
							year2Val: '10%',
							year3Val: '10%',
							year4Val: '10%',
							year5Val: '10%'
						},
						{
							listName: '能耗降低( % )2次', // td
							year1Val: '15%',
							year2Val: '15%',
							year3Val: '15%',
							year4Val: '15%',
							year5Val: '15%'
						},
						{
							listName: '能耗降低( % )3次', // td
							year1Val: '20%',
							year2Val: '20%',
							year3Val: '20%',
							year4Val: '20%',
							year5Val: '20%'
						},
						{
							listName: '能耗降低( % )4次', // td
							year1Val: '21%',
							year2Val: '21%',
							year3Val: '21%',
							year4Val: '21%',
							year5Val: '21%'
						},
						{
							listName: '减排技改费用（万/次）', // td
							year1Val: '20',
							year2Val: '20',
							year3Val: '20',
							year4Val: '20',
							year5Val: '20'
						},
						{
							listName: '排放降低( % ) 1次', // td
							year1Val: '15%',
							year2Val: '15%',
							year3Val: '15%',
							year4Val: '15%',
							year5Val: '15%'
						},
						{
							listName: '排放降低( % ) 2次', // td
							year1Val: '23%',
							year2Val: '23%',
							year3Val: '23%',
							year4Val: '23%',
							year5Val: '23%'
						},
						{
							listName: '排放降低( % ) 3次', // td
							year1Val: '29%',
							year2Val: '29%',
							year3Val: '29%',
							year4Val: '29%',
							year5Val: '29%'
						},
						{
							listName: '排放降低( % ) 4次', // td
							year1Val: '32%',
							year2Val: '32%',
							year3Val: '32%',
							year4Val: '32%',
							year5Val: '32%'
						}
					]
				},
				{
					name: '碳交易市场',
					dataList: [
						{
							listName: '碳汇卖出定价（元/Kg）', // td
							year1Val: '50',
							year2Val: '100',
							year3Val: '180',
							year4Val: '250',
							year5Val: '400'
						},
						{
							listName: '超排罚款定价（元/Kg）', // td
							year1Val: '250',
							year2Val: '500',
							year3Val: '1800',
							year4Val: '5000',
							year5Val: '10000'
						},
						{
							listName: '配额买入定价（元/Kg）', // td
							year1Val: '100',
							year2Val: '150',
							year3Val: '200',
							year4Val: '250',
							year5Val: '400'
						}
					]
				},
				{
					name: '物料供应市场',
					dataList: [
						{
							listName: '物料单价（元/包）', // td
							year1Val: '2000',
							year2Val: '2400',
							year3Val: '2800',
							year4Val: '3200',
							year5Val: '3600'
						},
						{
							listName: '碳排放量( 元 / 包 )', // td
							year1Val: '8000',
							year2Val: '6000',
							year3Val: '3000',
							year4Val: '1000',
							year5Val: '500'
						}
					]
				},
				{
					name: '电力供应市场',
					dataList: [
						{
							listName: '绿电占总电的比例（% )', // td
							year1Val: '16%',
							year2Val: '20%',
							year3Val: '25%',
							year4Val: '50%',
							year5Val: '80%'
						},
						{
							listName: '绿电单价（元/度）', // td
							year1Val: '1.2',
							year2Val: '1.44',
							year3Val: '1.56',
							year4Val: '1.68',
							year5Val: '1.8'
						},
						{
							listName: '绿电减排量( kg/度）', // td
							year1Val: '1',
							year2Val: '1',
							year3Val: '1',
							year4Val: '1',
							year5Val: '0'
						},
						{
							listName: '煤电单价（元/度）', // td
							year1Val: '1',
							year2Val: '1.2',
							year3Val: '1.3',
							year4Val: '1.4',
							year5Val: '1.5'
						},
						{
							listName: '煤电碳排放( kg/度）', // td
							year1Val: '1',
							year2Val: '1',
							year3Val: '1',
							year4Val: '1',
							year5Val: '1'
						}
					]
				},
				{
					name: '客户产品市场',
					dataList: [
						{
							listName: '产品基准单价（元/个）', // td
							year1Val: '30000',
							year2Val: '35000',
							year3Val: '40000',
							year4Val: '45000',
							year5Val: '50000'
						}
					]
				},
				{
					name: '绿电每单比例',
					dataList: [
						{
							listName: '绿电竞单占首年耗电比例', // td
							year1Val: '50%',
							year2Val: '-',
							year3Val: '-',
							year4Val: '-',
							year5Val: '-'
						}
					]
				}
			]
		};
	},
	watch: {
	},
	created () {
	},
	methods: {
	},
	mounted () {
	}
};
</script>

<style lang="scss" scoped>
.contentBox{
	// width: 1200px;
	margin: 0 auto;
	color: #FFFFFF;
}
</style>
