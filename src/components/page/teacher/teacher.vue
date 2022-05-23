<template>
	<div class="student-mold">
		<header3 :returnArr="returnArr" :tabsArr="tabsArr"></header3>
        <router-view></router-view>
	</div>
</template>

<script>
import header3 from '#/common/edu-header3'; // header导航
// import {teacherTabsArr} from '#/common/json/WorkJson';

export default {
	components: {
		header3
	},
	name: 'login',
	data () {
		return {
			tabsArr: [],
			returnArr: [{
				name: '返回班级',
				routerName: 'teacher-class'
			}]
		};
	},
	created () {
	},
	methods: {
		_handleRouter (item) {
			this.$router.push({name: item.routerLink});
		}
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
.asides-left{
	height: 100%;
	float: left;
	width: 240px;
	overflow-y: auto;
	background: #273043;
	.logo{
		padding: 20px 0;
	}
}

.tab-list{
	.tabs-name{
		position: relative;
		cursor: pointer;
		height: 50px;
		line-height: 50px;
		font-size: 18px;
		color: #ffffff;
		text-align: left;
		padding: 0 15px;
		&:hover{
			.outer-router{
				display: block;
			}
		}
		.outer-router{
			position: absolute;
			display: none;
			top: 0px;
			right: 0px;
			width: 120px;
			top: 0px;
			right: -120px;
			background: #ffffff;
			border: 1px solid #ecf5ff;
			padding: 15px 20px;
			border-radius: 4px;
			li{
				line-height: 30px;
				height: 30px;
				font-size: 12px;
				color: #373737;
				text-align: center;
				// text-indent: 15px;
			}
		}
	}
	.tabs-router{
		margin: 15px;
		li{
			width: 50%;
			text-align: center;
			float: left;
			color: #ffffff;
			height: 40px;
			line-height: 40px;
			cursor: pointer;
			&:hover{
				color: #273043;
				background: #ffffff;
				border-radius: 4px;
			}
		}
	}
}

.asides-right{
	float: right;
	height: 100%;
	width: calc(100% - 240px);
	background: #f5f7fa;
}
</style>
