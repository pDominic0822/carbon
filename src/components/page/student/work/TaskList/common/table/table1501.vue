<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
				<td v-for="(tdItem, tdIndex) in tdList" :key="tdIndex"
				@click="_handCollseInfo(tdIndex)">
					{{tdItem.label}}
				</td>
			</tr>
		</table>
		<template v-if="tableIndex === 0">

		</template>
		<template v-if="tableIndex === 1">
			<table class="demo-table">

			</table>
		</template>
		<template v-if="tableIndex === 2">
			<table class="demo-table">

			</table>
		</template>
		<template v-if="tableIndex === 3">
			<table class="demo-table">

			</table>
		</template>
	</div>
</template>

<script>
export default {
	name: '',
	data () {
		return {
			tdList: [
				{
					label: '生产线参数'
				},
				{
					label: '年初资产'
				},
				{
					label: '年初负债'
				},
				{
					label: '年初累计减排'
				}
			],
			tableIndex: 0
		};
	},
	props: [
		'showInputMap'
	],
	watch: {
	},
	created () {
	},
	methods: {
		_handCollseInfo (tdIndex) {
			// let item = this.tdList[index];
			this.tableIndex = tdIndex;
		}
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
