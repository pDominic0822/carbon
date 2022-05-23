<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
				<td>小组名称</td>
				<td>年度核定碳配额（Kg）</td>
				<td>年初碳配额库存（Kg）</td>
				<td>年度实际排放量（Kg）</td>
				<td>年度碳排放超排（Kg）</td>
				<td>超排罚款金额（元）</td>
				<td>年度买入配额（Kg）</td>
				<td>买入配额的费用( 万 )</td>
				<td>配额清缴结余（Kg）</td>
				<td>配额清缴状态</td>
			</tr>
			<tr v-for="(trItem, trIndex) in trList" :key="trIndex">
				<td>
					{{trIndex + 1}}
				</td>
				<td>
					{{trItem.value1}}
				</td>
				<td>
					{{trItem.value2}}
				</td>
				<td>
					{{trItem.value3}}
				</td>
				<td>
					{{trItem.value4}}
				</td>
				<td>
					{{trItem.value5}}
				</td>
				<td>
					{{trItem.value6}}
				</td>
				<td>
					{{trItem.value7}}
				</td>
				<td>
					{{trItem.value8}}
				</td>
				<td>
					{{trItem.value9}}
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
			trList: [
				{
					value1: '',
					value2: '',
					value3: '',
					value4: '',
					value5: '',
					value6: '',
					value7: '',
					value8: '',
					value9: ''
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
	padding: 0 15px;
	margin: 0 auto;
}
</style>
