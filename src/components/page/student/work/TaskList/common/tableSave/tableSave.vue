<template>
	<div class="student-mold">
		<el-select v-model="tableType" placeholder="请选择">
			<el-option
			v-for="item in pageList"
			:key="item.name"
			:label="item.name"
			:value="item.dataType">
			</el-option>
		</el-select>
		<div class="containter">
			<pageTableList ref="pagedaTable" :tableType="tableType" :tableJson="tableJson"></pageTableList>
		</div>
	</div>
</template>

<script>
import pageTableList from './../pageTable';
import { pageList } from '../table/table.js';
export default {
	components: {
		pageTableList
	},
	name: 'login',
	data () {
		return {
			tableType: '',
			tableJson: {},
			pageList: pageList
		};
	},
	created () {
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>
.student-mold{
	height: 100%;
	// background: #000;
	// background: url('./img/bj2.jpg') no-repeat center center;
	background-size: cover;
}
</style>
