<!--
 * @Date: 2019-10-14 10:09:07
 -->
<template>
	<div class="teacher-index">
		<!-- 弹窗：团队推送 -->
		<div class="mask-black02" v-if="ifTeamPush" >
			<div class="mask-box mask-org-box" style="width:1300px" v-if="ifTeamPush" >
				<div class="marsk-titles" v-drag>
					<i class="el-icon-error" @click="ifTeamPush = false"></i>
					<div class="pstli">
						<div class="tliiii fl">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
						团队推送
						<div class="tliiii fr">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
				<div  style='height:600px;overflow:auto;'>
					<pushOrg></pushOrg>
				</div>
			</div>
		</div>
		<!-- 弹窗：请选择开启模式 -->
		<div class="mask-black02" v-if="ifMoldDiorag" >
			<div class="mask-box mask-org-box" style="width:1200px" v-if="ifMoldDiorag" >
				<div class="marsk-titles" v-drag>
					<i class="el-icon-error" @click="ifMoldDiorag = false">
					</i>
					<div class="pstli">
						<div class="tliiii fl">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
						请选择开启模式
						<div class="tliiii fr">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
				<div class="clearfix conterMit mt40">
					<div class="moli" v-for="(item, index) in MoldArr"
					:class="{'active': moldIndex === index}"
					@click="_handleMold(index)" :key="index">
						<div class="AA">{{
							item.isMoldOpen ? '已开启' : '未开启'
							}}
						</div>
						<div class="modelLabel">
							{{item.moldName}}
						</div>
						<div class="on-off">
							{{
								moldIndex === index ? '已选择' : '选择'
							}}
						</div>
					</div>
				</div>
				<div  class="center">
					<el-button type="primary" @click="updatayqmCode()">推 送</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import pushOrg from '../orgAdmin/push.vue';
export default {
	name: 'login',
	components: {
		pushOrg
	},
	data () {
		return {
			ifTeamPush: false,
			ifMoldDiorag: false,
			MoldArr: [],
			// ========================
			dataSrc: {
				resourceName: ''
			},
			isVisiblePdf: false,
			isMoldOpen: false,
			moldVisibleState: false,
			DialogParamsVisible: false,
			isVisiblePushOrgIndy: false,
			DialogOrderVisible: false,
			isYearOpen: false,
			moldIndex: 0,
			MoldYearIndex: 0,
			subtaskIndex: 0,
			moldMap: {},
			moldYearMap: {},
			subtaskMap: {},
			moldName: '',
			value: '',
			MoldListArr: [],
			RouteArrrList: [
				{
					name: '系统参数预置',
					isHref: true,
					routerName: 'deferData'
				},
				{
					name: '备选订单预置',
					routerName: 'deferOrder'
				},
				{
					name: '拓展资料'
				},
				{
					name: '市场'
				},
				{
					name: '权益排名'
				},
				{
					name: '经营分析'
				},
				{
					name: '业务流程'
				}
			],
			taskArrList: [
			],
			subtaskList: [],
			moldYearList: []
		};
	},
	created () {
		this.init();
	},
	methods: {
		init () {
			// 老师第一次进入班级时，自动弹出本界面，班级中设置的小组组数有良知进行配置。
			this.getTeamPush();
		},
		// 团队推送
		getTeamPush () {
			this.$ajax({
				method: 'post',
				url: '/clazzOrg/findNotOpenClazzOrg',
				params: {
				}
			}).then(res => {
				// 判断一下 推送状态
				if (res.success) {
					if (res.data) {
						// 已经推送，
						// 弹窗不出来
						this.ifTeamPush = false;
						// 判断模块推送不推送
						this.ifModPush();
					} else {
						// 未推送，所以弹窗可以出来
						this.ifTeamPush = true;
					}
				} else {
					//
					this.ifTeamPush = false;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 模式推送方法
		// 教师没有推送过模式时，系统需要弹出本界面，推送模式以后，就不再弹出了。
		ifModPush () {
			this.$ajax({
				method: 'post',
				url: '/stClazzMoldSwitch/getStClazzOpenMoldFlag',
				params: {
				}
			}).then(res => {
				if (res.success) {
					// 已经推送过了，不用推送，查询是否有开启的模块
					if (res.data) {
						// r弹窗不展示
						this.ifMoldDiorag = false;
						// 调取拉去模块接口
						this.inquireMold();
					} else {
						// 弹窗展示
						// 调取拉去模块接口，
						this.ifMoldDiorag = true;
						this.inquireMold();
					}
				} else {

				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 查询到两个竞赛模式
		inquireMold () {
			this.$ajax({
				method: 'post',
				url: '/mold/getMoldInfo'
			}).then(res => {
				if (res.success) {
					let array = res.data;
					for (let index = 0; index < array.length; index++) {
						const element = array[index];
						element.isMoldOpen = false;
						if (element.isOpen + '' === '1') {
							element.isMoldOpen = true;
						}
					}
					this.MoldArr = res.data;
				} else {

				}
			});
		},
		_handleMold (index) {
			this.moldIndex = index;
		},
		/// 推送方法
		updatayqmCode () {

		}
	}

};
</script>

<style lang="scss" scoped>
.conterMit{
	width: 678px;
	margin: 30px auto;
}
.moli {
	width: 309px;
	height: 231px;
	float: left;
	color: white;
	margin-right: 30px;
	text-align: center;
	background: url('../img/open2.png') no-repeat;
	.modelLabel{
		width: 77px;
		height: 100px;
		display: inline-block;
		text-align: center;
		line-height: 206px;
		margin-top: 1px;
	}
	.AA{
		color: #222222;
		margin-top: 30px;
		margin-right: -227px;
	}
	.on-off{
		width: 88px;
		height: 34px;
		background: #1A9FE9;
		border-radius: 2px;
		text-align: center;
		line-height: 34px;
		margin: 15px auto;
	}
	&:nth-child(1){
		.modelLabel{
			background: url('../img/moldIco1.png') no-repeat;
			color: #222222;
		}
	}
	&:nth-child(2){
		.modelLabel{
			background: url('../img/moldIco3.png') no-repeat;
			color: #222222;
		}
	}
	&.active {
		background: url('../img/bg1.png') no-repeat;
		background-size: 100% 100%;
		.AA{
			color: white;
		}
		&:nth-child(1){
		.modelLabel{
			background: url('../img/moldIco2.png') no-repeat;
			color: white;
		}
			.on-off{
				width: 88px;
				height: 34px;
				background: rgba(255, 255, 255, 0.3);
				border-radius: 2px;
			}
		}
		&:nth-child(2){
			.modelLabel{
			background: url('../img/moldIco4.png') no-repeat;
			color: white;
		}
		.on-off{
			width: 88px;
			height: 34px;
			background: rgba(255, 255, 255, 0.3);
			border-radius: 2px;
		}
		}
	}
}
// ==============弹窗
.mask-box{
	width: 1100px;
	height: 660px;
	// background: #ff0055;
    background: url('./../img/mask-bg.png') no-repeat 100% 100%;
    // background-size: contain;
    background-size: 100% 100%;
	position: absolute;
    z-index: 100;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);   /* for Chrome || Safari */
    -moz-transform: translate(-50%,-50%);     /* for Firefox */
    -ms-transform: translate(-50%,-50%);       /* for IE */
    -o-transform: translate(-50%,-50%);         /* for Opera */
    transform: translate(-50%,-50%);
    animation: show 1s ease-in-out 0s 1 normal forwards;
	overflow: hidden;
	overflow-y: auto;
    .marsk-titles{
        position: relative;
        height: 50px;
        border-bottom: 1px dashed rgba($color: #373737, $alpha: 0.5);
        text-align: center;
        cursor: move;
        .el-icon-error{
            position: absolute;
            right: 8px;
            top: 22px;
            color: #373737;
            font-size: 20px;
            cursor: pointer;
            &:hover{
                color: #3cefff;
            }
        }
        .pstli{
            position: relative;
            top: 29px;
            height: 40px;
            width: 270px;
            margin: 0 auto;
            color: #2c325e;
            line-height: 40px;
            background: #fff;
            padding: 0 5px;
        }
		.titlepo{
			width: 160px;
			font-size: 20px;
			font-family: PingFangSC-Regular, PingFang SC;
		}
		.headyear{
			margin: 0 auto;
			margin-top: 40px;
			width: 960px;
			// height: 44px;
			background: #ECEFF6;
			.onceyear{
				float: left;
				width: 120px;
				height: 46px;
				background: linear-gradient(316deg, #6D77F0 0%, #3B72DC 100%);
				border-radius: 2px 2px 0px 0px;
				color: #FFFFFF;
				line-height: 46px;
				text-align: center;
			}
			.orderpart{
				width: 310px;
				height: 136px;
				background: #FFFFFF;
				border-radius: 4px;
				border: 1px solid #AAB0D9;
			}
		}
		.order{
			background: #FFFFFF;
		}
		.orderpart{
			.lftitle{
				width: 82px;
				height: 136px;
			}
			.rhdes{
				width: 225px;
				height: 136px;
				padding-top: 15px;
				p{
					margin-left: 16px;
					color: #222222;
					height: 20px;
					line-height: 20px;
					font-size: 14px;
					text-align: left;
				}
			}
		}
    }
    .mtask-title{
      // position: relative;
      height: 50px;
      border-bottom: 1px dashed rgba($color: #373737, $alpha: 0.5);
      // text-align: center;
      cursor: move;
      .dddsss{
        margin-left: 15px;
        color: #3cefff;
        cursor: pointer;
      }
      .el-icon-error{
          position: absolute;
          right: 8px;
          top: 22px;
          color: #373737;
          font-size: 20px;
          cursor: pointer;
          &:hover{
              color: #3cefff;
          }
      }
      .pstli{
          // position: relative;
          // top: 29px;
          height: 50px;
          width: 270px;
          // margin: 0 auto;
          color: #373737;
          line-height: 50px;
          // background: #2c325e;
          padding: 0px 15px;
          text-align: center;
      }
  }
    @keyframes show {
        0% {
            opacity: 0.5;
            transform: translate(-10%, -10%);
            // transform: rotateX(90deg);
        }

        // 8% {
        //     opacity: 1;
        //     transform: rotateX(-60deg);
        // }

        // 18% {
        //     opacity: 1;
        //     transform: rotateX(40deg);
        // }

        // 34% {
        //     opacity: 1;
        //     transform: rotateX(-28deg);
        // }

        // 44% {
        //     opacity: 1;
        //     transform: rotateX(18deg);
        // }

        // 58% {
        //     opacity: 1;
        //     transform: rotateX(-12deg);
        // }

        // 72% {
        //     opacity: 1;
        //     transform: rotateX(9deg);
        // }

        // 88% {
        //     opacity: 1;
        //     transform: rotateX(-5deg);
        // }

        // 96% {
        //     opacity: 1;
        //     transform: rotateX(2deg);
        // }

        100% {
            opacity: 1;
            transform: translate(-50%,-50%);
        }
    }
}

// 订单预设
.imgtitle{
	width: 38px;
	height: 38px;
	background: url("../img/dialog2.png") no-repeat center center;
}
.erer{
	margin-top: 10px;
	margin-right: 10px;
}
p {
  color: #ffffff;
}

.dddds{
	margin-top: 10px;
	margin-right: 20px;
}
.teacher-index {
  // width: 1440px;
//   height: 875px;
  background: url("../img/bgc.png") no-repeat center center;
  background-size: 100% 100%;
  padding-top: 24px;
  padding-bottom: 24px;
  .indexmodel {
    width: 1200px;
    min-height: 770px;
    margin: 0 auto;
    background-color: #ffffff;
  }
}

.teacherhead {
	width: 1200px;
	height: 150px;
	background: #f7f7f7;
	.headtitle {
	margin: 0 auto;
	// width: 240px;
	height: 38px;
	.hleft {
		width: 120px;
		height: 38px;
		background: #dbe1eb;
		// border-radius: 0px 0px 0px 100px;
		border-radius: 0px 0px 100px 0px;
		// &:nth-child(2) {
		// }
		p {
		color: #5c697d;
		}
		&.active {
		background: #4283e8;
		p {
			color: #ffffff;
		}
		}
	}
	}
	ul {
	width: 940px;
	height: 75px;
	margin: 0 auto;
	margin-top: 20px;
	li {
		width: 90px;
		height: 75px;
		margin-left: 39px;
		.img {
		width: 46px;
		height: 46px;
		margin: 0 auto;
		}
		p {
		width: 90px;
		margin: 0 auto;
		margin-top: 8px;
		height: 20px;
		line-height: 20px;
		text-align: center;
		color: #000000;
		}
		&:first-child {
		.img {
			background: url("../img/list1.png") no-repeat center center;
		}
		}
		&:nth-child(2) {
		.img {
			background: url("../img/list2.png") no-repeat center center;
		}
		}
		&:nth-child(3) {
		.img {
			background: url("../img/list3.png") no-repeat center center;
		}
		}
		&:nth-child(4) {
		.img {
			background: url("../img/list4.png") no-repeat center center;
		}
		}
		&:nth-child(5) {
		.img {
			background: url("../img/list5.png") no-repeat center center;
		}
		}
		&:nth-child(6) {
		.img {
			background: url("../img/list6.png") no-repeat center center;
		}
		}
		&:nth-child(7) {
		.img {
			background: url("../img/list7.png") no-repeat center center;
		}
		}
	}
	}
}

.moldelist {
	width: 250px;
//   height: 680px;
	background: #f7faff;
	box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
	.modleyear {
	margin: 15px auto;
	width: 230px;
	height: 42px;
	// background: #f2f7ff;
	// border: 1px solid #99abce;
	}
	ul {
	height: 680px;
	overflow: auto;
	li {
		float: left;
		margin-top: 5px;
		margin-left: 15px;
		width: 220px;
		height: 42px;
		//   background: linear-gradient(315deg, #21aaf3 0%, #1576e4 100%);
		position: relative;
		border-radius: 3px;
		p {
		text-align: left;
		margin-left: 30px;
		line-height: 42px;
		height: 42px;
		color: #000;
		}
		.trianle {
		position: absolute;
		right: -6px;
		top: 14px;
		width: 0;
		height: 0;
		border-top: 6px solid transparent;
		border-left: 8px solid #ffffff;
		border-bottom: 6px solid transparent;
		}
		&.active {
		background: linear-gradient(315deg, #21aaf3 0%, #1576e4 100%);
		.trianle {
			border-left: 8px solid #21aaf3;
		}
		p {
			color: #ffffff;
		}
		}
	}
	}
}

.modledes {
	width: 950px;
	.deshead {
	height: 50px;
	.title {
		width: 150px;
		height: 50px;
		p {
		text-align: center;
		line-height: 50px;
		height: 50px;
		color: #000;
		}
	}
	// 用class
	.subinis {
		width: 800px;
		height: 50px;
		li {
		float: right;
		margin-top: 15px;
		margin-right: 16px;
		width: 88px;
		height: 34px;
		background: linear-gradient(313deg, #736aff 0%, #4a65ef 100%);
		border-radius: 1px;
		cursor: pointer;
		p {
			text-align: center;
			line-height: 35px;
			height: 35px;
		}
		&:nth-child(2) {
			background: linear-gradient(316deg, #02bce2 0%, #0095d2 100%);
		}
		&:nth-child(3) {
			background: linear-gradient(316deg, #00caa2 0%, #00a2b3 100%);
		}
		}
	}
	}
	.step {
	// width: 1200px;
	margin-top: 13px;
	height: 42px;
	ul {
		height: 42px;
		margin-left: 20px;
		li {
		float: left;
		width: 184px;
		height: 42px;
		margin-right: 22px;
		background: #f2f6fc;
		border: 1px solid #99abce;
		padding-left: 13px;
		padding-top: 10px;
		position: relative;
		border-radius: 3px;
		margin-top: 15px;
		.trianle {
			position: absolute;
			right: -8px;
			top: 14px;
			width: 0;
			height: 0;
			border-top: 6px solid transparent;
			border-left: 8px solid #99abce;
			border-bottom: 6px solid transparent;
		}
		.bigfont {
			float: left;
			width: 20px;
			height: 20px;
			text-align: center;
			line-height: 20px;
			margin-right: 7px;
			border-radius: 50%;
			color: #ffffff;
		}
		p {
			// float: left;
			height: 20px;
			line-height: 20px;
			color: #000;
		}

		&:nth-child(5n+1) {
			.bigfont {
			background: linear-gradient(140deg, #f97f6d 0%, #fa6d9a 100%);
			}
		}
		&:nth-child(5n+2) {
			.bigfont {
			background: linear-gradient(137deg, #00a9a9 0%, #0090bf 100%);
			}
		}
		&:nth-child(5n+3) {
			.bigfont {
			background: linear-gradient(139deg, #707bf8 0%, #8452ea 100%);
			}
		}
		&:nth-child(5n+4) {
			.bigfont {
			background: linear-gradient(137deg, #00a9a9 0%, #0090bf 100%);
			}
		}
		&:nth-child(5n+5) {
			.bigfont {
			background: linear-gradient(137deg, #00a9a9 0%, #0090bf 100%);
			}
		}
		&:hover:first-child {
			.bigfont {
			color: #e15b86;
			background: #ffffff;
			}
			.trianle {
			border-left: 8px solid #e15b86;
			}
			border-radius: 3px;
			background: linear-gradient(139deg, #f97361 0%, #e15b86 100%);
			border-image: linear-gradient(
				143deg,
				rgba(255, 69, 44, 1),
				rgba(255, 150, 89, 1)
			)
			1 1;
		}
		&:hover:nth-child(5n+2) {
			.bigfont {
			color: #0090bf;
			background: #ffffff;
			}
			.trianle {
			border-left: 8px solid #0090bf;
			}
			border-radius: 3px;
			background: linear-gradient(137deg, #00a9a9 0%, #0090bf 100%);
			border-image: linear-gradient(
				138deg,
				rgba(21, 128, 208, 1),
				rgba(49, 237, 255, 1)
			)
			1 1;
		}
		&:hover:nth-child(5n+3) {
			.bigfont {
			color: #8452ea;
			background: #ffffff;
			}
			.trianle {
			border-left: 8px solid #8452ea;
			}
			border-radius: 3px;
			background: linear-gradient(139deg, #707bf8 0%, #8452ea 100%);
			border-image: linear-gradient(
				141deg,
				rgba(135, 145, 255, 1),
				rgba(161, 115, 255, 1)
			)
			1 1;
		}
		&:hover:nth-child(5n+4) {
			.bigfont {
			color: #0090bf;
			background: #ffffff;
			}
			.trianle {
			border-left: 8px solid #0090bf;
			}
			border-radius: 3px;
			background: linear-gradient(137deg, #00a9a9 0%, #0090bf 100%);
			border-image: linear-gradient(
				138deg,
				rgba(21, 128, 208, 1),
				rgba(49, 237, 255, 1)
			)
			1 1;
		}
		&:hover:nth-child(5n+5) {
			.bigfont {
			color: #0090bf;
			background: #ffffff;
			}
			.trianle {
			border-left: 8px solid #0090bf;
			}
			border-radius: 3px;
			background: linear-gradient(137deg, #00a9a9 0%, #0090bf 100%);
			border-image: linear-gradient(
				138deg,
				rgba(21, 128, 208, 1),
				rgba(49, 237, 255, 1)
			)
			1 1;
		}
		&:hover {
			p {
			color: #ffffff;
			}
		}
		}
	}
	}
	.tables {
	width: 950px;
	height: 300px;
	}
}
</style>
