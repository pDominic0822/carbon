<!--
 * @Author: zhangln
 * @Date: 2019-07-24 15:37:31
 * @Description: 33
 -->
<template>
	<div class="">
		<!-- <div class="mt30 tabs-list">
			<div class="li-list" v-for="(item, index) in tabsList" @click="_clickTabs(index)" :class="{'active': tabIndex === index}" :key="index">
				{{item.name}}
			</div>
		</div> -->
		<ul class="my-list">
			<li v-for="(item,index) in classList" class="clearfix" :key="index">
				<div class="clearfix text-top">
					<h1 :class="'n'+ (index%10)">
						{{item.courseName}}
					</h1>
					<div class="p">
						<p>
							{{item.systemName || '区块链课程'}}
						</p>
						<div v-if="item.deleted === 0" class="fr" style="margin-top:20px;margin-right:115px;">
							<el-switch
								:value="item.is_open === 0"
								active-color="#ff4949"
								disabled
								inactive-color="#13ce66"
								active-text="课程未发布"
								inactive-text="课程已发布">
							</el-switch>
						</div>
					</div>
				</div>
				<div class="text-bo clearfix">
					<div class="list-item-top fl">
						<div>
						</div>
					</div>
					<div class="fl list-item-data">
						<p>
							<i class="iconfont i-color6 icon-banji"></i>&nbsp;&nbsp;班级名称：{{item.name}}
						</p>
						<p><i class="iconfont i-color6 icon-lesson"></i>&nbsp;&nbsp;班级介绍：{{item.info || '&nbsp;'}}</p>
						<p><i class="iconfont i-color6 icon-jiaolian1"></i>&nbsp;&nbsp;任课老师：{{item.realName}}</p>
						<p>
							<i class="iconfont i-color6 icon-xuesheng"></i>&nbsp;&nbsp;班级人数：{{item.number}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<i class="iconfont i-color6 icon-shijian3"></i>&nbsp;&nbsp;时间：{{item.createtime | secondTime}}
							<template v-if="item.deleted === 0">
								<el-button class="fr onnn"  @click="_enterClass(index, item.id)" type="primary" plain>进入班级</el-button>
							</template>
						</p>
					</div>
				</div>
			</li>
		</ul>
		<!-- 微信扫码引流 -->
		<wechatCode></wechatCode>
	</div>
</template>

<script>
import { getCookie } from '_@/js/utils';
import wechatCode from './wechatCode';
export default {
	name: 'my-course',
	data () {
		return {
			isList: false,
			tabIndex: 0,
			courseId: '',
			tabsList: [
				{
					name: '全部',
					deleted: 0
				},
				{
					name: '已开启',
					isOpen: 1,
					deleted: 0
				},
				{
					name: '已删除',
					deleted: 1
				}
			],
			isDelClass: 0,
			classList: [],
			allCourse: []
		};
	},
	components: {
		wechatCode
	},
	created () {
		this._clickTabs(0);
	},
	methods: {
		_clickTabs (index = 0) {
			this.tabIndex = index;
			let params = this.tabsList[index];
			this.isDelClass = params.deleted;
			this.init(params);
		},
		// 获取班级列表
		init (params = {}) {
			this.classList = [];
			this.$ajax({
				method: 'post',
				url: '/clazz/findUserJoinClazz',
				params: params
			}).then(res => {
				if (res.success) {
					this.classList = res.data || [];
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		_enterClass (index, id) {
			let item = this.classList[index];
			if (item.is_open === 0) {
				this.$message({
					message: '当前班级未发布，请等待老师发布',
					type: 'success'
				});
				return;
			}
			if (item.deleted === 1) {
				this.$message({
					message: '当前班级已经删除',
					type: 'error'
				});
				return;
			}
			this.$ajax({
				method: 'post',
				url: '/clazz/entranceClazz',
				params: {
					clazzId: id
				}
			}).then(res => {
				if (res.success) {
					let sessionId = getCookie('sessionId');
					console.log(sessionId);
					if (sessionId) {
						// window.location.href = this.classList[index].skipUrl + '?sessionId=' + sessionId;
						window.open(this.classList[index].skipUrl + '?sessionId=' + sessionId);
					}
				} else {
					this.$message({
						message: res.message,
						type: 'success'
					});
				}
			}).catch(err => {
				throw new Error(err);
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.class-tabs{
	text-align: left;
	margin-left: 85px;
	margin-top: 125px;
	li{
		width: 180px;
		height: 60px;
		cursor: pointer;
		line-height: 60px;
		position: relative;
		margin-bottom: 20px;
		margin-right: 20px;
		color: #fff;
		font-size: 24px;
		text-align: center;
		display: inline-block;
		&.active,&:hover{
			border-bottom: 1px solid #fff ;
			color: #fff ;
			&::after{
				border-left: 5px solid #fff ;
			}
		}
	}
}
.text-bo{
	padding: 20px 30px;
}
.tabs-list{
	text-align: right;
	margin-bottom: 30px;
	margin-top: 80px;
	.li-list{
		width: 160px;
		text-align: center;
		cursor: pointer;
		height: 62px;
		line-height: 62px;
		color: #fff;
		display: inline-block;
		margin-left: 15px;
		font-size: 22px;
		background: rgba(0,0,0,0.60);
		border-radius: 6px;
		&.active{
			background: linear-gradient(90deg, #0949C7 0%, #117BE3 100%);
		}
	}
}
.text-top{
	// border-bottom: 1px solid #ddd;
	position: relative;
	.dels{
		position: absolute;
		top: 15px;
		right: 15px;
		display: none;
		color: #f56c6c;
		font-size: 25px;
	}
	h1{
		position: absolute;
		top: -17px;
		left: -17px;
		width: 230px;
		height: 66px;
		line-height: 56px;
		font-size: 24px;
		color: #fff;
		background: url('./../../images/n8.png') center center no-repeat;
		background-size: cover;
		text-align: center;
		&.n1{
			background-image: url(./../../images/n1.png);
		}
		&.n2{
			background-image: url(./../../images/n2.png);
		}
		&.n3{
			background-image: url(./../../images/n3.png);
		}
		&.n4{
			background-image: url(./../../images/n4.png);
		}
		&.n5{
			background-image: url(./../../images/n5.png);
		}
		&.n6{
			background-image: url(./../../images/n6.png);
		}
		&.n7{
			background-image: url(./../../images/n7.png);
		}
		&.n8{
			background-image: url(./../../images/n8.png);
		}
		&.n9{
			background-image: url(./../../images/n9.png);
		}
	}
	.p p{
		font-size: 24px;
		height: 60px;
		text-indent: 240px;
		line-height: 60px;
		width: 70%;
		float: left;
	}
}
.onnn{
	position: relative;
	top:-15px;
}
.color11{
	color: #bbb;
}
.color22{
	color: #5FC18E;
}
.sys-name{
	margin-left: 20px;
	// margin-top: 20px;
	padding: 15px;
	background: rgba(84,92,99,0.6);
	float: left;
	color: #ffffff;
	border-radius: 5px;
	position: relative;
	top: 10px;
}

.my-list{
	// margin-top: 115px;
	li{
		&:hover{
			.dels{
				display: block;
			}
		}
		width: 100%;
		// height: 170px;
		background: #fff;
		cursor: pointer;
		border: 1px solid #ddd;
		translate: all .2s linear;
		box-shadow: 0 0 10px 0 rgba(68,117, 255 , 0.5);
		&:hover{
			// border: 1px solid rgba(0, 0, 0, 0.1);
			box-shadow: 0 10px 20px 0 rgba(68,117, 255 , 0.3);
			transform: translate3d(0 , -2px 0);
		}
		border-radius: 5px;
		margin-top: 50px;
		.list-item-data{
			width: 800px;
			margin-left: 25px;
			p{
				&:nth-child(1){
					font-size: 16px;
					color: #222222;
					padding-top: 15px;
				}
				&:nth-child(2){
					font-size: 12px;
					color: #666;
					padding-top: 25px;
				}
				&:nth-child(3){
					font-size: 12px;
					color: #666;
					padding-top: 25px;
				}
				&:nth-child(4){
					font-size: 12px;
					color: #666;
					padding-top: 25px;
				}
			}
			font-size: 16px;
			color: #222222;
		}
		.list-item-top{
			width: 189px;
			margin-left: 20px;
			margin-right: 20px;
			border: 1px dashed #2171E8;
			padding: 10px;
			border-radius: 50%;
			overflow: hidden;
			> div{
				border-radius: 50%;
				overflow: hidden;
			}
		}
		&:nth-child(10n+1){
			.list-item-top > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class1.png');
			}
		}
		&:nth-child(10n+2){
			.list-item-top > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class2.png');
			}
		}
		&:nth-child(10n+3){
			.list-item-top > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class3.png');
			}
		}
		&:nth-child(10n+4){
			.list-item-top > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class4.png');
			}
		}
		&:nth-child(10n+5){
			.list-item-top > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class5.png');
			}
		}
		&:nth-child(10n+6){
			.list-item-top > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class6.png');
			}
		}
		&:nth-child(10n+7){
			.list-item-top > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class7.png');
			}
		}
		&:nth-child(10n+8){
			.list-item-top  > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class8.png');
			}
		}
		&:nth-child(10n+9){
			.list-item-top  > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class9.png');
			}
		}
		&:nth-child(10n+10){
			.list-item-top  > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class10.png');
			}
		}
	}
}

.top-text{
	height: 46px;
	line-height: 46px;
	background: #fff;
	p{
		float: left;
		height: 46px;
		line-height: 46px;
		width: 105px;
		text-align: center;
		border-right: 1px solid #eeefef;
	}
	span{
		display: inline-block;
		width: 46px;
		height: 46px;
		line-height: 46px;
		text-align: center;
		border-left: 1px solid #eeefef;
		cursor: pointer;
		i{
			font-size: 18px;
		}
	}
}
.my-course{
	width: 100%;
	li{
		cursor: pointer;
		overflow: hidden;
		float: left;
		width: 280px;
		height: 328px;
		background: #FFFFFF;
		// box-shadow: 0 0 5px 0 rgb(0, 188, 212);
		border: 1px solid rgb(0, 188, 212);
		&:hover{
			border: 1px solid #e91e63;
		}
		border-radius: 2px;
		margin-top: 28px;
		margin:27px 44px 0px 0px;
		&:nth-child(3n+3){
			margin:27px 0px 0px 0px;
		}
		&:nth-child(10n+1){
			.list-item-top > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class1.png');
			}
		}
		&:nth-child(10n+2){
			.list-item-top > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class2.png');
			}
		}
		&:nth-child(10n+3){
			.list-item-top > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class3.png');
			}
		}
		&:nth-child(10n+4){
			.list-item-top > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class4.png');
			}
		}
		&:nth-child(10n+5){
			.list-item-top > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class5.png');
			}
		}
		&:nth-child(10n+6){
			.list-item-top > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class6.png');
			}
		}
		&:nth-child(10n+7){
			.list-item-top > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class7.png');
			}
		}
		&:nth-child(10n+8){
			.list-item-top  > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class8.png');
			}
		}
		&:nth-child(10n+9){
			.list-item-top  > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class9.png');
			}
		}
		&:nth-child(10n+10){
			.list-item-top  > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class10.png');
			}
		}
		.list-item-name{
			padding: 0 15px;
			font-size: 18px;
			color: #222;
			height: 40px;
			line-height: 40px;
		}
		.list-item-info{
			padding: 0 15px;
			font-size: 12px;
			color: #888888;
			line-height: 20px;
			height: 40px;
		}
		.list-item-top{
			width: 100%;
			height: 167px;
			overflow: hidden;
			> div{
				transition: all 0.6s;
			}
			&:hover  > div{
				transform: scale(1.1);
			}
		}
		.list-item-bottom{
			padding: 0 15px;
			border-top: 1px solid #ddd;
			height: 45px;
			line-height: 45px;
			color: #AAAAAA;
			font-size: 12px;
		}
		.list-item-creator{
			margin: 7px 15px;
			font-size: 12px;
			color: #666666;
			height: 24px;
			line-height: 24px;
			img{
				width: 24px;
				height: 24px;
				border-radius: 50%;
				vertical-align: bottom;
				margin-right: 8px;
			}
		}
	}
}
.dl{
	width: 280px;
	margin-right: 36px;
	display: inline-block;
}
dt{
	width: 280px;
	height: 168px;
	img{
		width: 100%;
		height:100%;
	}
}
.dd{
	width: 280px;
	height: 180px;
	background: #FFFFFF;
	box-shadow: 0 0 5px 0 rgba(0,0,0,0.20);
	border-radius: 2px;
	margin: 0;
	position: relative;
	.classTop{
		margin-left: 13px;
		h1{
			font-size: 18px;
			padding-top: 8px;
			color: #222222;
		}
		h2{
			margin-top: 4px;
			margin-bottom: 7px;
			font-size: 14px;
			color: #444444;
			font-weight: 400;
		}
		.classContent{
			width: 240px;
			height: 34px;
			font-size: 12px;
			color: #888888;
			line-height: 17px;
		}
		.information{
			margin:11px 0;
			img{
				width: 20px;
				height: 20px;
				float: left;
			}
			.teacherName{
				font-size: 12px;
				color: #888888;
				float: left;
				margin-top: 3px;
				margin-left: 6px;
			}
		}
	}
}
.classBottom{
	position: absolute;
	bottom: 0;
	width: 100%;
	height:50px;
	line-height: 50px;
	border-top:1px solid #ddd;
	.classleft{
		float: left;
		margin-left: 14px;
		p{
			display: inline-block;
		}
	}
	.classright{
		float: left;
		margin-left: 19px;
	}
}
</style>
