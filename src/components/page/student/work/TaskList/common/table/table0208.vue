<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr class="noborder yellowSty">
				<td class="noneBor" colspan="3">产品碳排放核算</td>
			</tr>
			<tr>
				<td class="redSty">分类</td>
				<td class="redSty">项目</td>
				<td class="redSty">碳排放( kg )</td>
			</tr>
		</table>
		<table class="demo-table" v-for="(item, index) in fromInfo" :key="index">
			<tr v-for="(childField, childFieldIndex) in item.childFieldList" :key="childFieldIndex">
				<td :rowspan="item.childFieldList.length" v-if="childFieldIndex === 0">
					{{item.fieldName}}
				</td>
				<td>
					{{childField.fieldName}}
				</td>
				<td :class="{'inputClass' : childField.countValueReadonly}">
					<template v-if="childField.countValueReadonly">
						<el-input-number :readonly="!childField.countValueReadonly" controls-position="right" size="mini" :controls="false" v-model="childField.countValue" :precision="0" :step="1" :max="100000000"></el-input-number>
					</template>
					<template v-else>
						{{childField.countValue}}
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
			form: {
				value1: '',
				value2: '',
				value3: '',
				value4: ''
			}
		};
	},
	props: [
		'showInputMap',
		'fromInfo'
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
	width: 100%;
	margin: 0 auto;
	color: #FFFFFF;
}
</style>
