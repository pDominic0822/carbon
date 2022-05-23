<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
				<td colspan="3">库存碳配额</td>
			</tr>
			<tr class="noborder">
				<td class="redSty">项目</td>
				<td class="redSty">数值（kg）</td>
				<td class="redSty">价值（元）</td>
			</tr>
			<tr v-for="(item, index) in fromInfo" :key="index">
				<td>
					{{item.fieldName}}
				</td>
				<td :class="{'inputClass' : item.countValueReadonly}">
					<template v-if="item.countValueReadonly">
						<el-input-number :readonly="!item.countValueReadonly" controls-position="right" size="mini" :controls="false" v-model="item.countValue" :precision="0" :step="1" :max="100000000"></el-input-number>
					</template>
					<template v-else>
						{{item.countValue}}
					</template>
				</td>
				<td  :class="{'inputClass' : item.worthValueReadonly}">
					<template v-if="item.worthValueReadonly">
						<el-input-number :readonly="!item.worthValueReadonly" controls-position="right" size="mini" :controls="false" v-model="item.worthValue" :precision="2" :step="0.1" :max="100000000"></el-input-number>
					</template>
					<template v-else>
						{{item.worthValue}}
					</template>
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
			fromInfo: [
				{
					fieldSort: 100,
					fieldName: '期初库存',
					childFieldList: [],
					fieldCode: 'initial_quota',
					tableKeyId: 46,
					workFieldValue: null
				},
				{
					fieldSort: 95,
					fieldName: '额度核定',
					childFieldList: [],
					fieldCode: 'amount_approved',
					tableKeyId: 47,
					workFieldValue: null
				},
				{
					fieldSort: 90,
					fieldName: '实际排放',
					childFieldList: [],
					fieldCode: 'actual_emission',
					tableKeyId: 48,
					workFieldValue: null
				},
				{
					fieldSort: 85,
					fieldName: '场外交易卖出',
					childFieldList: [],
					fieldCode: 'off_field_sell',
					tableKeyId: 49,
					workFieldValue: null
				},
				{
					fieldSort: 80,
					fieldName: '场外交易买入',
					childFieldList: [],
					fieldCode: 'off_field_buy',
					tableKeyId: 50,
					workFieldValue: null
				},
				{
					fieldSort: 75,
					fieldName: '场内交易卖出',
					childFieldList: [],
					fieldCode: 'on_field_sell',
					tableKeyId: 51,
					workFieldValue: null
				},
				{
					fieldSort: 70,
					fieldName: '清缴超排处罚',
					childFieldList: [],
					fieldCode: 'exceed_emissions_punish',
					tableKeyId: 52,
					workFieldValue: null
				},
				{
					fieldSort: 65,
					fieldName: '年末库存',
					childFieldList: [],
					fieldCode: 'year_end_quota',
					tableKeyId: 53,
					workFieldValue: null
				}
			]
		};
	},
	props: [
	],
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
	width: 550px;
	margin: 0 auto;
	color: #FFFFFF;
}
</style>
