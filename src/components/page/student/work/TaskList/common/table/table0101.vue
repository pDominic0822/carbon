<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
				<td colspan="" rowspan="6">
					生产线
				</td>
				<td>
					产能 (个 / 季度)
				</td>
				<td>
				</td>
			</tr>
			<tr>
				<td>
					耗料 (包 / 季度)
				</td>
				<td>
				</td>
			</tr>
			<tr>
				<td>
					耗电 (包 / 季度)
				</td>
				<td>
				</td>
			</tr>
			<tr>
				<td>
					碳排放 (包 / 季度)
				</td>
				<td>
				</td>
			</tr>
			<tr>
				<td>
					物料碳排放 (包 / 季度)
				</td>
				<td>
				</td>
			</tr>
			<tr>
				<td>
					煤电碳排放 (包 / 季度)
				</td>
				<td>
				</td>
			</tr>
			<tr>
				<td colspan="" rowspan="2">其他</td>
				<td>
					年度固定成本 ( 万 )
				</td>
				<td></td>
			</tr>
			<tr>
				<td>碳配额核定比例 ( % )</td>
				<td></td>
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
	width: 100%;
	margin: 0 auto;
	color: #FFFFFF;
}
</style>
