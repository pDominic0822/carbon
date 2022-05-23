<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<div class="center bgcposition">
            <div class="header">
				<div class="titleMit">
					<div class="label"></div>
					<div class="leftLine">
						<svg width="177px" height="43px" viewBox="0 0 177 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
								<g id="编组-10" transform="translate(88.040637, 21.500000) scale(-1, 1) translate(-88.040637, -21.500000) translate(0.000000, 0.500000)" stroke="#0096ED">
									<path d="M0,0 L5.96250935,8.00052486 C70.0269908,8.00052486 102.059232,8.00052486 102.059232,8.00052486 C102.059232,8.00052486 102.846452,9.19823933 104.420894,11.5936683 M1,41 L5,33 L176.081274,33 M50.1465744,42 L53,38 L171.467912,38" id="直线-10"></path>
								</g>
							</g>
						</svg>
					</div>
					<div class="spinner spinner1">
						<div class="rect1"></div>
						<div class="rect2"></div>
						<div class="rect3"></div>
						<div class="rect4"></div>
						<div class="rect5"></div>
					</div>
					<div class="spinner spinner2">
						<div class="rect1"></div>
						<div class="rect2"></div>
						<div class="rect3"></div>
						<div class="rect4"></div>
						<div class="rect5"></div>
					</div>
					<div class="rightLine">
						<svg width="177px" height="43px">
							<path d="M0,0 L5.96250935,8.00052486 C70.0269908,8.00052486 102.059232,8.00052486 102.059232,8.00052486 C102.059232,8.00052486 102.846452,9.19823933 104.420894,11.5936683 M1,41 L5,33 L176.081274,33 M50.1465744,42 L53,38 L171.467912,38" id="svgLine"></path>
						</svg>
					</div>
				</div>
			</div>
            <div class="logo"></div>
			<!-- 左侧任务栏 -->
            <div class="leftmodl fl">
                <ul>
                    <li v-for="(modleitem, modleIndex) in modleArr" :key="modleIndex"><p>{{modleitem.name}}</p></li>
                </ul>
            </div>
			<!-- 右侧沙盘详情 -->
			<div class="miandescrible ">
				<div class="title clear">
					<p class="fl">任务1：首年绿贷款</p>
					<div class="triangle fl"></div>
				</div>
				<!-- 填写步骤 -->
				<div class="step">
					<ul>
						<li v-for="(stepitem, stepIndex) in stepArr" :key="stepIndex" >
							<div class="bigfont">{{stepitem.bigname}}</div>
							<p>{{stepitem.stepname}}</p>
							<div class="trianle"></div>
						</li>
					</ul>
				</div>
				<!-- 生产详情 -->
				<div class="stepdescrible">
					<div class="workshopBox" v-for="(shopItem, index) in shopList" :key="index">
						{{shopItem.label}}
						<div class="processImg"></div>
					</div>
					<div class="finished"></div>
					<div class="material"></div>
				</div>
				<!-- 资金余额显示 -->
				<div class="accountbalance">
					<div class="cash fl">
						<div class="box-iii sencet-list">
							<i class="ii1 ii"></i>
							<i class="ii2 ii"></i>
							<i class="ii3 ii"></i>
							<i class="ii4 ii"></i>
							<div class="inters">
								现金余额：5000000元
								<div class="price-box">
									<img src="./img3/price.png" alt="">
								</div>
							</div>
						</div>
					</div>
					<div class="cash fl lastcash">
						<div class="box-iii sencet-list">
							<i class="ii1 ii"></i>
							<i class="ii2 ii"></i>
							<i class="ii3 ii"></i>
							<i class="ii4 ii"></i>
							<div class="inters">
								绿贷余额：5000000元
								<div class="price-box">
									<img src="./img3/price2.png" alt="">
								</div>
							</div>
						</div>
					</div>
					<div class=" cash fl lastcash">
						<div class="box-iii sencet-list">
							<i class="ii1 ii"></i>
							<i class="ii2 ii"></i>
							<i class="ii3 ii"></i>
							<i class="ii4 ii"></i>
						</div>
					</div>
				</div>
				<!-- 权益排名 -->
				<div class="equityrank">
					<div class="ranktitle1"><p>权益排名</p></div>
					<div class="tablerank1">
						<div class="tabletitle1">
							<p>排名</p>
							<p>小组名称</p>
							<p>金额</p>
						</div>
						<ul>
							<li v-for="(rank1item, rank1Index) in rank1Arr" :key="rank1Index">
								<p>{{rank1Index+1}}</p>
								<p>{{rank1item.groupname}}</p>
								<p>{{rank1item.amount}}</p>
							</li>
						</ul>
					</div>
				</div>
				<!-- 资金排名 -->
				<div class="moneyrank">
					<div class="ranktitle2"><p>资金排名</p></div>
					<div class="tablerank2">
						<div class="tabletitle2">
							<p>排名</p>
							<p>小组名称</p>
							<p>金额</p>
						</div>
						<ul>
							<li v-for="(rank2item, rank2Index) in rank2Arr" :key="rank2Index">
								<p>{{rank2Index+1}}</p>
								<p>{{rank2item.groupname}}</p>
								<p>{{rank2item.amount}}</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- 底部角色 -->
			<div class="directorfooter fl">
				<!-- 当前年限和生产线流程 后添加 -->
				<div class="describlehead">
					<div class="year fl">
						<p class="fl">当前年份：2022年</p>
						<div class="triangle fl"></div>
					</div>
					<div class="productionline fl">
						<div class="linetitle center fl">生产线状态：</div>
						<div class="moldeline fl" v-for="(lineitem,lineIndex) in lineArr" :key="lineIndex">
							<p class="fl">{{lineitem.number}}</p>
							<div class="line fl"></div>
							<p class="fl">{{lineitem.name}}</p>
						</div>
					</div>
				</div>
				<div class="treasurer fl">
					<div class="trimg"></div>
				</div>
				<div class="sales fl">
					<div class="saimg"></div>
				</div>
				<!-- 右侧参数配置模块 -->
				<div class="paramter clearfix">
					<ul>
						<li v-for="(paramteritem, paramterIndex) in paramterArr" :key="paramterIndex"><p>{{paramteritem.name}}</p></li>
					</ul>
				</div>
			</div>
		</div>
		<!-- <el-dialog
			title="选择模式"
			:visible.sync="dialogVisible"
			width="820px"
			height="560px"
			>
		<div class="choose">
			<div class="type2" v-for="(type2item, type2Index) in type2Arr" :key="type2Index">
				<div class="on-off">{{type2item.onoff}}</div>
				<div class="modle2">
					<div class="type2img"></div>
					<p>{{type2item.name}}</p>
					<div class="button2"><p>{{type2item.choose}}</p></div>
				</div>
			</div>
		</div>
		</el-dialog> -->
		<!-- <el-dialog
			title="首年绿贷-小组研讨确认绿贷金额"
			:visible.sync="dialoggrcreditVisible"
			width="840px"
			height="560px"
			>
		<div class="grcredit">
			<p class="tithea">主题：企业可向绿贷市场申请绿贷，绿贷专款专用，仅可用于技术改造+还贷，不得用于物料、电力等其它采购业务支出。绿贷会影响到技术改造、数据披露以及年末权益。小组成员可在下方讨论区各抒己见，商议本组申请金额。</p>
		</div>
		<div class="grcredit">
			<p class="titbox">讨论区</p>
		</div>
		</el-dialog> -->
		<div class="mask-black02" v-if="dialoggrcreditVisible" >
			<div class="mask-box mask-org-box" style="width:840px" v-if="dialoggrcreditVisible" >
				<div class="marsk-titles" v-drag>
					<i class="el-icon-error" @click="dialoggrcreditVisible = false"></i>
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
				<div class="grcredit">
					<p class="tithea">主题：企业可向绿贷市场申请绿贷，绿贷专款专用，仅可用于技术改造+还贷，不得用于物料、电力等其它采购业务支出。绿贷会影响到技术改造、数据披露以及年末权益。小组成员可在下方讨论区各抒己见，商议本组申请金额。</p>
				</div>
				<div class="grcredit">
					<p class="titbox">讨论区</p>
					<el-button type="primary" class="fr refresh">刷新</el-button>
				</div>
				<div class="grcredit diatext">
					<div class="diafont clearfix" v-for="(item,index) in titObj" :key="index">
						{{item.titob}}
						<div class="titobj">{{item.name}}</div>
						<div class="tra"></div>
					</div>
				</div>
				<div class="ipt">
					<el-input v-model="input"  placeholder="请输入内容"></el-input>
					<el-button type="primary" class="fr sendbtn">发送</el-button>
				</div>
			</div>
		</div>
		<!-- <el-dialog
			title="分配角色"
			:visible.sync="dialogVisible"
			width="820px"
			height="560px"
			>
		<div class="distribute">
			<div class="descrble"><p class="fl">角色设置建议：采购主管与电力主管合并，销售主管与生产主管合并</p></div>
			<div class="descrble fontco"><p class="fl">小组名称：小组名称：</p></div>
			<div class="descrble fontco"><p class="fl">小组人数：4人</p></div>
			<div class="actor" v-for="(actoritem, actorIndex) in actorArr" :key="actorIndex">
				<div class="actorimg"></div>
				<p class="names">{{actoritem.name}}</p>
				<div class="actortag">
					<el-tag
						v-for="tag in tags"
						:key="tag.name"
						closable
						:type="tag.type">
						{{tag.name}}
					</el-tag>
				</div>
			</div>
		</div>
		</el-dialog> -->
	</div>
</template>

<script>
export default {
	name: '',
	data () {
		return {
			input: '',
			dialoggrcreditVisible: true,
			dialogVisible: true,
			tags: [
				{ name: '碳主管', type: 'tagsname' },
				{ name: '财务主管', type: 'tagsname' }
			],
			titObj: [
				{ 	titob: '成员A：企业可向绿贷市场申请绿贷，绿贷专款专用，仅可用于技术改造+还贷，不得用于物料、电力等其它采购业务支出。绿贷会影响到技术改造、数据披露以及年末权益。小组成员可在下方讨论区各抒己见，商议本组申请金额。',
					name: '首字'
				},
				{ 	titob: '首年绿贷-小组研讨确认绿贷金额',
					name: '首字'
				},
				{ 	titob: '首年绿贷-小组研讨确认绿贷金额',
					name: '首字'
				},
				{ 	titob: '首年绿贷-小组研讨确认绿贷金额',
					name: '首字'
				},
				{ 	titob: '首年绿贷-小组研讨确认绿贷金额成员A：企业可向绿贷市场申请绿贷，绿贷专款专用，仅可用于技术改造',
					name: '首字'
				},
				{ 	titob: '首年绿贷-小组研讨确认绿贷金额',
					name: '首字'
				},
				{ 	titob: '首年绿贷-小组研讨确认绿贷金额',
					name: '首字'
				},
				{ 	titob: '首年绿贷-小组研讨确认绿贷金额',
					name: '首字'
				},
				{ 	titob: '首年绿贷-小组研讨确认绿贷金额',
					name: '首字'
				},
				{ 	titob: '首年绿贷-小组研讨确认绿贷金额',
					name: '首字'
				}
			],
			actorArr: [
				{name: '组员1'},
				{name: '组员1'},
				{name: '组员1'},
				{name: '组员1'}
			],
			lineArr: [
				{ 	number: 'Q1',
					name: '减排'
				},
				{ 	number: 'Q2',
					name: '减排'
				},
				{ 	number: 'Q3',
					name: '节能'
				},
				{ 	number: 'Q4',
					name: '节能'
				}
			],
			type2Arr: [
				{ name: '学习模式',
					choose: '选择',
					onoff: '已推送'},
				{ name: '竞赛模式',
					choose: '未选择',
					onoff: '已推送'}
			],
			modleArr: [
				{ name: '生态环境部门' },
				{ name: '绿贷服务市场' },
				{ name: '物料供应 市场' },
				{ name: '技改服务 市场' },
				{ name: '碳汇采购 市场' },
				{ name: '客户订单 市场' },
				{ name: '配额交易 市场' }
			],
			paramterArr: [
				{ name: '规则参数' },
				{ name: '拓展资料' },
				{ name: '业务流程' },
				{ name: '小组成绩排名' },
				{ name: '小组作业' }
			],
			stepArr: [
				{ 	stepname: '填写配额与碳汇作业',
					bigname: '财'
				},
				{ 	stepname: '填写自有现金余额',
					bigname: '碳'
				},
				{ 	stepname: '填写期初技改记录',
					bigname: '财'
				},
				{ 	stepname: '填写配额与碳汇作业',
					bigname: '碳'
				},
				{ stepname: '填写自有现金余额',
					bigname: '财'
				}
			],
			rank1Arr: [
				{ 	groupname: '小组',
					amount: '820,459.00'
				},
				{ 	groupname: '徐爱组',
					amount: '690,823.00'
				},
				{ 	groupname: '小组',
					amount: '83,499.00'
				},
				{ 	groupname: '',
					amount: '20,983.00'
				},
				{ groupname: '小组',
					amount: '83,499.00'
				}
			],
			rank2Arr: [
				{ 	groupname: '小组',
					amount: '820,459.00'
				},
				{ 	groupname: '徐爱组',
					amount: '690,823.00'
				},
				{ 	groupname: '小组',
					amount: '83,499.00'
				},
				{ 	groupname: '',
					amount: '20,983.00'
				}
			],
			shopList: [
				{
					label: '原材料'
				},
				{
					label: '生产车间'
				},
				{
					label: '产成品车间'
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
	// position: relative;
	// height: 100vh;
	// width: 100vh;
	padding-bottom: 227px;
	background: url('./img2/bgc.png') no-repeat center center;
    background-size: 100% 100%;
	.bgcposition{
		width: 1498px;
		margin: 0 auto;
		// margin-top: 30px;
		// 顶部动效
		.titleMit{
			width: 651px;
			height: 62px;
			// background: url('./img1/titleMit.png');
			margin-left: 474px;
			float: left;
			position: relative;
			.label{
				width: 289px;
				height: 55px;
				position: absolute;
				left: 181px;
				background: url('./img1/titleMit.png') no-repeat;
				background-size: contain;
			}
			.spinner {
				width: 104px;
				height: 30px;
				text-align: center;
				position: absolute;
				&.spinner1 {
					top: 16px;
					left: 65px;
				}
				&.spinner2 {
					top: 16px;
					right: 106px;
				}
			}
			.spinner > div {
				background-color: #3cefff;
				height: 100%;
				width: 5px;
				margin: auto 1px;
				display: inline-block;

				-webkit-animation: stretchdelay 1.2s infinite ease-in-out;
				animation: stretchdelay 1.2s infinite ease-in-out;
			}

			.spinner .rect2 {
				-webkit-animation-delay: -1.1s;
				animation-delay: -1.1s;
			}

			.spinner .rect3 {
				-webkit-animation-delay: -1s;
				animation-delay: -1s;
			}

			.spinner .rect4 {
				-webkit-animation-delay: -0.9s;
				animation-delay: -0.9s;
			}

			.spinner .rect5 {
				-webkit-animation-delay: -0.8s;
				animation-delay: -0.8s;
			}
			@-webkit-keyframes stretchdelay {
				0%,
				40%,
				100% {
				-webkit-transform: scaleY(0.4);
				}
				20% {
				-webkit-transform: scaleY(1);
				}
			}

			@keyframes stretchdelay {
				0%,
				40%,
				100% {
				transform: scaleY(0.4);
				-webkit-transform: scaleY(0.4);
				}
				20% {
				transform: scaleY(1);
				-webkit-transform: scaleY(1);
				}
			}
			@keyframes draw{
				0%,5%{
					stroke-dasharray: 625;
					stroke-dashoffset: 625;
				}
				40%,60%{
					stroke-dasharray: 625;
					stroke-dashoffset: 0;
				}
				100%{
					stroke-dasharray: 625;
					stroke-dashoffset: 625;
				}
			}
			.leftLine{
				position: absolute;
				top: 10px;
				svg{
					path{
						stroke: #0090BF;
						fill: none;
					}
					stroke-width: 1.5px;
					stroke-dasharray: 625;
					stroke-dashoffset: 625;
					animation: draw 5s linear infinite;
				}
			}
			.rightLine{
				position: absolute;
				right: 43px;
				top: 10px;
				svg{
					path{
						stroke: #0090BF;
						fill: none;
					}
					stroke-width: 1.5px;
					stroke-dasharray: 625;
					stroke-dashoffset: 625;
					animation: draw 5s linear infinite;
				}
			}
		}
		.header{
			// position: relative;
			height: 62px;
			margin-bottom: 19px;
			// background: url('./img2/had.png') no-repeat center center;
		}
		.logo{
			position: absolute;
			height: 32px;
			width: 98px;
			background: url('./img2/logo.png') no-repeat center center;
			top: 15px;
			left: 20px;
		}
		// 左侧模块
		.leftmodl{
			width: 84px;
			margin-left: 21px;
			ul{
				width: 83px;
				color: #FFFFFF;
				li{
					height: 83px;
					margin-bottom: 9px;
					p{
					padding-top: 24px;
					padding-left: 12px;
					width: 70px;
					color: #FFFFFF;
					font-size: 14px;
					font-family: FZZZHONGJW--GB1-0, FZZZHONGJW--GB1;
					font-weight: normal;
					text-align: center;
					line-height: 20px;
					}
					&:first-child {background: url('./img2/mod1.png') no-repeat center center;}
					&:nth-child(2) {background: url('./img2/mod2.png') no-repeat center center;}
					&:nth-child(3) {background: url('./img2/mod3.png') no-repeat center center;}
					&:nth-child(4) {background: url('./img2/mod4.png') no-repeat center center;}
					&:nth-child(5) {background: url('./img2/mod1.png') no-repeat center center;}
					&:nth-child(6) {background: url('./img2/mod1.png') no-repeat center center;}
					&:nth-child(7) {background: url('./img2/mod1.png') no-repeat center center;}
				}
			}
		}
		// 右侧任务详情
		.miandescrible{
			position: relative;
			width: 1100px;
			height: 654px;
			margin-left: 104px;
			.title{
				width: 300px;
				height: 28px;
				background: transparent;
				p{
					padding-top: 6px;
					width: 160px;
					height: 22px;
					font-size: 16px;
					color: #FFFFFF;
					line-height: 22px;
					text-align: center;
				}
			}
			// 填写步骤
			.step{
				margin-top: 13px;
				height: 42px;
				ul{
					height: 42px;
					margin-left: 20px;
					li{
						float: left;
						width: 184px;
						height: 42px;
						margin-right: 22px;
						background: rgba(32, 63, 95, 0.5);
						padding-left: 13px;
						padding-top: 10px;
						border: 1px solid #1580D0;
						position: relative;
						border-radius: 3px;
						.trianle{
							position: absolute;
							right:-8px;
							top:14px;
							width: 0;
							height: 0;
							border-top: 6px solid transparent;
							border-left: 8px solid #1580D0;
							border-bottom: 6px solid transparent;
						}
						.bigfont{
							float: left;
							width: 20px;
							height: 20px;
							text-align: center;
							line-height: 20px;
							margin-right: 7px;
							border-radius: 50%;
							color: #FFFFFF ;
						}
						p{
							// float: left;
							height: 20px;
							line-height: 20px;
							color: #FFFFFF;
						}
						&:nth-child(1){.bigfont{background: linear-gradient(140deg, #F97F6D 0%, #FA6D9A 100%);}}
						&:nth-child(2){.bigfont{background: linear-gradient(137deg, #00A9A9 0%, #0090BF 100%);}}
						&:nth-child(3){.bigfont{background: linear-gradient(139deg, #707BF8 0%, #8452EA 100%);}}
						&:nth-child(4){.bigfont{background: linear-gradient(137deg, #00A9A9 0%, #0090BF 100%);}}
						&:nth-child(5){.bigfont{background: linear-gradient(137deg, #00A9A9 0%, #0090BF 100%);}}
						&:hover:first-child {
							.bigfont{color:#E15B86; background: #ffffff; }
							.trianle{border-left: 8px solid #E15B86;}
							border-radius: 3px;
							background: linear-gradient(139deg, #F97361 0%, #E15B86 100%);
							border-image: linear-gradient(143deg, rgba(255, 69, 44, 1), rgba(255, 150, 89, 1)) 1 1;}
						&:hover:nth-child(2) {
							.bigfont{color:#0090BF; background: #ffffff; }
							.trianle{border-left: 8px solid #0090BF;}
							border-radius: 3px;
							background: linear-gradient(137deg, #00A9A9 0%, #0090BF 100%);
							border-image: linear-gradient(138deg, rgba(21, 128, 208, 1), rgba(49, 237, 255, 1)) 1 1;}
						&:hover:nth-child(3) {
							.bigfont{color:#8452EA; background: #ffffff; }
							.trianle{border-left: 8px solid #8452EA;}
							border-radius: 3px;
							background: linear-gradient(139deg, #707BF8 0%, #8452EA 100%);
							border-image: linear-gradient(141deg, rgba(135, 145, 255, 1), rgba(161, 115, 255, 1)) 1 1;}
						&:hover:nth-child(4) {
							.bigfont{color:#0090BF; background: #ffffff; }
							.trianle{border-left: 8px solid #0090BF;}
							border-radius: 3px;
							background: linear-gradient(137deg, #00A9A9 0%, #0090BF 100%);
							border-image: linear-gradient(138deg, rgba(21, 128, 208, 1), rgba(49, 237, 255, 1)) 1 1;}
						&:hover:nth-child(5) {
							.bigfont{color:#0090BF; background: #ffffff; }
							.trianle{border-left: 8px solid #0090BF;}
							border-radius: 3px;
							background: linear-gradient(137deg, #00A9A9 0%, #0090BF 100%);
							border-image: linear-gradient(138deg, rgba(21, 128, 208, 1), rgba(49, 237, 255, 1)) 1 1;}
					}
				}
			}
			// 生产详情
			.stepdescrible{
				// position: relative;
				width: 996px;
				height: 353px;
				margin-top: 17px;
				margin-left: 17px;
				background: rgba(0, 58, 119, 0.6);
				border: 1px solid #1580D0;
				.workshopBox{
					width: 290px;
					height: 234px;
					background: #0C2744;
					// opacity: 0.5;
					border: 1px solid #1580D0;
					margin-top: 76px;
					margin-left: 17px;
					margin-right: 24px;
					float: left;
					color: #FFFFFF;
					padding: 14px 18px;
					position: relative;
					&:nth-child(1){
						.processImg{
							width: 209px;
							height: 108px;
							top: 83px;
							left: 44px;
							background: url('./img1/process1.png');
						}
					}
					&:nth-child(2){
						.processImg{
							width: 548px;
							height: 159px;
							top: 25px;
							left: -178px;
							z-index: 55;
							background: url('./img1/process2.png');
						}
					}
					&:nth-child(3){
						.processImg{
							width: 247px;
							height: 153px;
							top: 49px;
							background: url('./img1/process3.png');
						}
					}
					.processImg{
						position: absolute;
					}
				}
				.finished{
					position: absolute;
					width: 51px;
					height: 34px;
					bottom: 283px;
					left: 672px;
					background: url('./img1/finished.png') no-repeat;
					animation: finished 5s both infinite;
				}
				.material{
					position: absolute;
					width: 8px;
					height: 8px;
					border-radius: 50%;
					bottom: 295px;
					left: 350px;
					background: #D8D8D8;
					animation: material 5s infinite;
				}
				@keyframes material {
					5% {
						transform: translateX(-150px);
					}
				}
				@keyframes finished {
					0% {
						left: 572px;
					}
				}
				@keyframes a{
					0%,34%,68%,100%{
						border: solid 10px #fff;
						box-shadow: 0 0 70px rgb(190,40,210);
					}
					17%,51%,85%{
						border: solid 10px rgba(255,0,0,.5);
						box-shadow: 0 0 90px rgba(255,0,0,.8);
					}
				}
				.txtH, .txtH::before{
					z-index: 999;
					color: #fff;
					position: absolute;
					font-size: 65px;
					font-weight: 900;
					/* 设置字体间距 */
					letter-spacing: 12px;
				}
				.txtH::before{
					content: '碳沙盘平台';
					text-shadow: -5px -5px 0px rgb(211,250,9),5px 5px 0px rgb(25,10,240);
					/* 使用缩放的方式创建可见显示取余，括号里的四个值分别是top，right，bottom，left */
					clip-path: inset(100% 0px 0px 0px);
				}
				& .txtH::before{
					/* steps设置逐帧动画，值越小越卡顿 */
					animation: move 1.25s 10s both infinite;
				}
				@keyframes move{
					0%{
						clip-path:inset(80% 0px 0px 0px);
						transform:translate(-20px,-10px)
					}
					70%{
						clip-path:inset(10% 0px 85% 0px);
						transform:translate(10px,10px)
					}
					20%{
						clip-path:inset(80% 0px 0px 0px);
						transform:translate(-10px,10px)
					}
					30%{
						clip-path:inset(10% 0px 85% 0px);
						transform:translate(0px,5px)
					}
					40%{
						clip-path:inset(50% 0px 30% 0px);
						transform:translate(-5px,0px)
					}
					50%{
						clip-path:inset(10% 0px 30% 0px);
						transform:translate(5px,0px)
					}
					60%{
						clip-path:inset(40% 0px 30% 0px);
						transform:translate(5px,10px)
					}
					70%{
						clip-path:inset(50% 0px 30% 0px);
						transform:translate(-10px,10px)
					}
					80%{
						clip-path:inset(80% 0px 5% 0px);
						transform:translate(20px,-10px)
					}
					90%{
						clip-path:inset(80% 0px 0px 0px);
						transform:translate(-10px,0px)
					}
					100%{
						clip-path:inset(80% 0px 0px 0px);
						transform:translate(0px,0px)
					}
				}
			}
			// 资金余额提示
			.accountbalance{
				width: 1100px;
				height: 160px;
				margin-top: 17px;
				background:transparent;
				// border: 1px solid #1580D0;
				.cash{
					width: 320px;
					height: 160px;
					margin-left: 15px;
					background: rgba(0, 58, 119, 0.6);
					border: 1px solid #1580D0;
					.sencet-list{
						height: 160px;
						&.sencet-list1{
							height: 380px;
						}
						.inters{
							padding: 14px 18px;
							color: #fff;
						}
						.price-box{
							height: 129px;
							width: 100%;
							margin-top: 20px;
							// position: relative;
							// overflow: hidden;
							img{
								position: absolute;
								width: 40px;
								height: 20px;
								// background: url(./img3/price.png) no-repeat center center;
								background-size: contain;
								// &::after{
								// 	content:"";
								// 	position: absolute;
								// 	width: 40px;
								// 	height: 20px;
								// 	// border-radius: 40px;
								// 	background-color: rgba(255,255,255,.5);
								// 	transform: rotate(-45deg);
								// 	animation: searchLights 1s ease-in 1s infinite;
								// }
							}
							/* 不停的闪现 */
							@keyframes searchLights {
								0% { left: 0px; top: 0; }
								to { left: 20px; top: 40px; }
							}
							@for $i from 1 through 10 {
								img:nth-child(#{$i}) {
									bottom: calc(#{$i} * 10px);
									left: calc(#{(random(10))}px + 15px);
								}
							}
							@for $i from 11 through 20 {
								img:nth-child(#{$i}) {
									bottom: calc(#{$i - 10} * 10px);
									left: calc(#{(random(10))}px + 15px + 60px);
								}
							}
							@for $i from 21 through 30 {
								img:nth-child(#{$i}) {
									bottom: calc(#{$i - 20} * 10px);
									left: calc(#{(random(10))}px + 15px + 60px + 60px);
								}
							}
							@for $i from 31 through 40 {
								img:nth-child(#{$i}) {
									bottom: calc(#{$i - 30} * 10px);
									left: calc(#{(random(10))}px + 15px + 60px + 60px + 60px);
								}
							}
						}
					}
				}
			}
			// 权益排名
			.equityrank,.moneyrank{
				position: absolute;
				top:12px;
				right: -229px;
				width: 301px;
				height: 321px;
				background: url('./img2/rank1.png') no-repeat center center;
				.ranktitle1,.ranktitle2{
					width: 130px;
					height: 35px;
					margin-bottom: 22px;
					// border: 1px solid #1580D0;
					p{
						height: 35px;
						line-height: 35px;
						font-size: 16px;
						text-align: center;
						color: #0497FD;
					}
				}
				.tablerank1,.tablerank2{
					padding-left: 20px;
					// margin-top: 56px;
					p{
						float: left;
						width: 80px;
						height: 40px;
						line-height: 40px;
						text-align: center;
						color: #19CCDB;
					}
					p:nth-child(3) {width: 100px;}
					ul{
						li{
							border-radius: 2px;
							p{
								color: #ffffff;
								background-color: #14284D;
							}
						}
						li:nth-child(2n+2){
							p{
								background-color: #102242;
							}
						}
					}
				}
				.tablerank2{
					p{
						color: #08A6D6;
					}
					ul{
						li{
							border-radius: 2px;
							p{
								color: #ffffff;
								background-color: #003647;
							}
						}
						li:nth-child(2n+2){
							p{
								background-color: #07283A;
							}
						}
					}
				}
			}
			// 资金排名
			.moneyrank{
				top:331px;
				background: url('./img2/rank2.png') no-repeat center center;
				.ranktitle2{
					margin-top: 25px;
					p{
						color: #04DAFD;
					}
				}
			}
		}
		// 底部角色-小组排名
		.directorfooter{
			position: relative;
			width: 1440px;
			height: 110px;
			background: url('./img2/foobgc.png') no-repeat center center;
			// 当前年限和生产线流程
			.describlehead{
				position:absolute;
				top: -540px;
				left: 141px;
				height: 44px;
				width: 955px;
				border: 1px solid #1580D0;
				.year{
					width: 176px;
					height: 42px;
					background: url('./img2/year.png') no-repeat center center;
					p{
						line-height: 42px;
						color: #FFFFFF;
						margin-left: 20px;
						margin-right: 10px;
					}
				}
				.productionline{
					width: 680px;
					height: 42px;
					.linetitle{
						width: 112px;
						height: 42px;
						line-height: 42px;
						margin-left: 100px;
						color:#ffffff ;
					}
					.moldeline{
						float: left;
						width: 100px;
						height: 40px;
						margin-left: 12px;
						background: rgba(63, 246, 134, 0.12);
						border-radius: 3px;
						border: 1px solid #3FF686;
						.line{
							width: 1px;
							height: 20px;
							margin-top: 10px;
							border: 1px solid #3FF686;
						}
						p{
							color: #ffffff;
							height: 40px;
							line-height: 40px;
							text-align: center;
							margin-left: 10px;
							margin-right: 10px;
						}
					}
				}
			}
			.treasurer{
				position: relative;
				width: 150px;
				height: 67px;
				margin-left: 57px;
				margin-top: 23px;
				background: linear-gradient(270deg, rgba(21, 128, 208, 0.18) 0%, rgba(21, 128, 208, 0.8) 100%);
				border-radius: 0px 4px 4px 0px;
				border: 1px solid;
				border-image: linear-gradient(314deg, rgba(47, 183, 234, 1), rgba(21, 128, 208, 1)) 1 1;
				.trimg{
					position: absolute;
					background: url('./img2/treas.png') no-repeat center center;
					top: -19px;
					left: -55px;
					width: 100px;
					height: 93px;
				}
			}
			.sales{
				position: relative;
				width: 140px;
				height: 58px;
				margin-left: 67px;
				margin-top: 34px;
				margin-right: 25px;
				background: linear-gradient(270deg, rgba(40, 26, 148, 0.18) 0%, rgba(61, 30, 138, 0.8) 100%);
				border-radius: 0px 4px 4px 0px;
				border: 1px solid;
				border-image: linear-gradient(314deg, rgba(66, 93, 218, 1), rgba(71, 9, 203, 1)) 1 1;
				.saimg{
					position: absolute;
					background: url('./img2/sales.png') no-repeat center center;
					top: -19px;
					left: -47px;
					width: 88px;
					height: 82px;
				}
			}
			.paramter{
				float: left;
				margin-top: 58px;
				width: 1000px;
				height: 34px;
				ul{
					// padding-top: 58px;
					height: 34px;
					li{
						width: 88px;
						height: 34px;
						margin-right: 12px;
						float: left;
						border-radius: 3px;
						p{
							color: #FFFFFF;
							line-height: 34px;
							height: 34px;
							font-size: 12px;
							margin: 0 auto;
							text-align: center;
						}
						&:first-child {background: linear-gradient(316deg, #00CAA2 0%, #00A2B3 100%);}
						&:nth-child(2) {background: linear-gradient(316deg, #02BCE2 0%, #0095D2 100%);}
						&:nth-child(3) {background: linear-gradient(313deg, #736AFF 0%, #4A65EF 100%);
										margin-right: 480px;}
						&:nth-child(4) {background: linear-gradient(315deg, #43C14F 0%, #2E9F20 100%);}
						&:nth-child(5) {background: linear-gradient(315deg, #21AAF3 0%, #1576E4 100%);}
					}
				}
			}
		}
	}
	// 直角特效
	.box-iii{
		outline: 1px solid #1580D0;
		outline-offset: -1px;
		transition: all .3s linear;
		cursor: pointer;
		position: relative;
			.inters{
				position: absolute;
				background: rgba(0, 58, 119, 0.6);
				top: 2px;
				left: 2px;
				width: calc(100% - 4px);
				height: calc(100% - 4px);
				padding: 10px;
			}
			.ii{
				border: 2px solid #1580D0;
				width: 24px;
				height: 24px;
			}
			.ii1{
				position: absolute;
				top: -2px;
				left: -2px;
				border-color: #0096ed transparent transparent #0096ed;
			}
			.ii2{
				position: absolute;
				bottom: -2px;
				left: -2px;
				border-color:  transparent transparent #0096ed #0096ed;
			}
			.ii3{
				position: absolute;
				bottom: -2px;
				right: -2px;
				border-color:  transparent #0096ed #0096ed transparent;
			}
			.ii4{
				position: absolute;
				top: -2px;
				right: -2px;
				border-color:   #0096ed #0096ed transparent transparent;
			}
		&:hover {
			// border: 1px solid transparent;
			outline: 1px solid transparent;
			background:
				linear-gradient(90deg, #1580D0 50%, transparent 0) repeat-x,
				linear-gradient(90deg, #1580D0 50%, transparent 0) repeat-x,
				linear-gradient(0deg, #1580D0 50%, transparent 0) repeat-y,
				linear-gradient(0deg, #1580D0 50%, transparent 0) repeat-y;
			background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px;
			background-position: 0 0, 0 100%, 0 0, 100% 0;
			animation: linearGradientMove .3s infinite linear;
		}
		@keyframes linearGradientMove {
			100% {
				background-position: 4px 0, -4px 100%, 0 -4px, 100% 4px;
			}
		}
	}
	// 三角角标
	.triangle {
		display: inline-block;
		margin-top: 15px;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 7px 7px 0 7px;
		border-color: #0096ed transparent transparent  transparent;
	}
}
</style>
<style lang="scss">
@import './css/index1.scss';
</style>
<style lang="scss">
@import './css/index2.scss';
</style>
<style lang="scss">
@import './css/index3.scss';
</style>
