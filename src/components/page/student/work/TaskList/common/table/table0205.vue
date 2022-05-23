<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr class="noborder yellowSty">
				<td class="noneBor" colspan="4">绿贷现金余额</td>
			</tr>
			<tr>
				<td class="redSty" colspan="">项目</td>
				<td class="redSty" >收入(元)</td>
				<td class="redSty" colspan="">支出(元)</td>
				<td class="redSty" colspan="">余额(元)</td>
			</tr>
			<tr v-for="(item, index) in fromInfo" :key="index">
				<td>
					{{item.fieldName}}
				</td>
				<td :class="{'inputClass' : item.incomeAmountReadonly}">
					<template v-if="item.incomeAmountReadonly">
						<el-input-number :readonly="!item.incomeAmountReadonly" controls-position="right" size="mini" :controls="false" v-model="item.incomeAmount" :precision="2" :step="0.1" :max="100000000"></el-input-number>
					</template>
					<template v-else>
						{{item.incomeAmount}}
					</template>
				</td>
				<td  :class="{'inputClass' : item.expenditureAmountReadonly}">
					<template v-if="item.expenditureAmountReadonly">
						<el-input-number :readonly="!item.expenditureAmountReadonly" controls-position="right" size="mini" :controls="false" v-model="item.expenditureAmount" :precision="2" :step="0.1" :max="100000000"></el-input-number>
					</template>
					<template v-else>
						{{item.expenditureAmount}}
					</template>
				</td>
				<td :class="{'inputClass' : item.balanceAmountReadonly}">
					<template v-if="item.balanceAmountReadonly">
						<el-input-number :readonly="!item.balanceAmountReadonly" controls-position="right" size="mini" :controls="false" v-model="item.balanceAmount" :precision="2" :step="0.1" :max="100000000"></el-input-number>
					</template>
					<template v-else>
						{{item.balanceAmount}}
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
		};
	},
	props: [
		'fromInfo'
	],
	watch: {
	},
	created () {
		console.log(this.fromInfo);
	},
	methods: {
	},
	mounted () {
	}
};
</script>

<style lang="scss" scoped>
.contentBox{
	width: 100%;
	margin: 0 auto;
	color: #FFFFFF;
}
</style>
