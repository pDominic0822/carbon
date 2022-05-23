<!--
 * @Author: zln
 * @Description: 会计首页
 * @Date: 2019-02-21 11:56:10
 -->
<template>
	<div class="student-index">
		<header3 :returnArr="returnArr" :tabsArr="tabsArr"></header3>
		<div class="index-content clearfix">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import header3 from '#/common/edu-header3'; // header导航
import {studentTabsArr, teacherTabsArr} from '#/common/json/WorkJson';

export default {
	name: 'login',
	inject: ['reload'],
	components: {
		header3
	},
	data () {
		return {
			tabsArr: [
			],
			centerDialogVisible: false,
			returnArr: [{
				name: '返回班级',
				routerName: 'student-class'
			}],
			isZoom: false,
			taskState: 0,
			getTimes: 0,
			TaskArr: [],	// 待办任务
			chapterId: '',	// 多少讲
			chapterRow: {},
			accArr: [],
			studyPageVisible: false,
			oTaskVisible: false,
			subtaskTaskVisible: false,
			studyTextVisible: false,
			dialogVisible: false,
			subtaskId: '',
			taskTime: '',
			getArrTask: [],
			itemSubTask: [],
			taskVisible: false,
			ClassData: {
				clazzOrg: {},
				industry: {}
			},
			inviteCode: '',
			className: '',
			clazzTimer: '',
			classNumber: 0, // 班级人数
			accTitle: {},
			chapterArr: [],	// 多少讲
			mySwiper: null,
			moldIndex: 0,
			SwiperLeng: 0,
			Signin: {},	// 签到信息
			progressArr: [],	// 进度信息
			progressNum: {},
			taskprogressNum: {
				backlog: 0,
				haveDone: 0
			}	// 代办已办任务数
		};
	},
	created () {
		this.init();
	},
	mounted () {
	},
	methods: {
		/**
		 * @name: zhangln
		 * @msg: 判断当前登录是老师还是学生
		 */
		init () {
			let UserType = this.$storage.get('UserType'); // 用户类型
			UserType = parseFloat(UserType);
			if (UserType + '' === '1') { // 老师
				this.tabsArr = teacherTabsArr;
				this.returnArr = [{
					name: '返回班级',
					routerName: 'teacher-class'
				}];
			} else if (UserType + '' === '2') { // 学生
				this.tabsArr = studentTabsArr;
				this.returnArr = [{
					name: '返回班级',
					routerName: 'student-class'
				}];
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.mask-content{
	height: 600px;
	width: 800px;
}
.student-index{
	height: 100%;
	// background: #f2f8f9;
}
.index-content{
	height: calc(100% - 64px);
	// height: calc(100% - 60px);
	// overflow:hidden;
	overflow-x: auto;
	overflow-y: auto;
	width: 100%;
	// background: #fff;
}
.header{
	height: 60px;
	line-height: 60px;
	box-shadow: 0px 6px 16px 0px rgba(0,0,0,0.05);
	.exit{
		position: relative;
		&:hover{
			.info{
				display: block;
			}
		}
	}
	.info{
		// box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
		position: absolute;
		right: 0px;
		top: 54px;
		width: 180px;
		// height: 84px;
		background: #fff;
		display: none;
		z-index: 100;
		padding-top: 10px;
		&:hover{
			display: block;
		}
		li{
			padding: 0 15px;
			height: 54px;
			line-height: 54px;
			cursor: pointer;
			border-bottom: 1px solid #eee;
			span{
				display: inline-block;
				width: 40px;
			}
		}
	}
	.name{
		font-size: 14px;
		height: 60px;
		line-height: 60px;
		margin: 0 15px;
		color: #ffffff;
		cursor: pointer;
	}
	.head img{
		width: 36px;
		margin-top: 10px;
		height: 36px;
		cursor: pointer;
	}
	.logo img{
		width: 110px;
		height: 36px;
		margin: 10px 10px;
	}
	.title{
		font-size: 22px;
		color: #fff;
		height: 60px;
		line-height: 60px;
		margin-left: 20px;
	}
}
</style>
