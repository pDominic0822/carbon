<!--
 * @Date: 2019-10-14 10:09:07
 -->
<template>
  <div class="indexbd">
	<!-- <div class="chart1" ref="chart1">
	</div> -->
    <!-- 流星 -->
    <div class="liuxing-box">
      <div class="liuxing liuxing1 liuxingFla"></div>
      <div class="liuxing liuxing2 liuxingFla2"></div>
      <div class="liuxing liuxing3 liuxingFla3"></div>
      <div class="liuxing liuxing4 liuxingFla4"></div>
    </div>
    <!-- 头部 -->
    <div class="header">
		<div class="logo"></div>
		<div class="tabsList">
			<div class="tabsBut" v-for="(tabItem,index) in tabList" @click="_handleTabs(index)" :key="index">
				{{tabItem.label}}
			</div>
		</div>
		<div class="fr exit">
				<div class="names">
					{{$storage.get('UserName') || '&nbsp;'}}
					<div class="triangle"></div>
				</div>
				<ul class="info">
					<li @click="_changeUser()">
						<span>
							<i class="iconfont icon-jiaolian1"></i>
						</span>
						个人信息
					</li>
					<li v-for="(item, index) in returnArr" :key="index" @click="returnClass(item.routerName)">
						<span>
							<i class="iconfont icon-fanhuibanji"></i>
						</span>
						{{item.name}}
					</li>
					<li @click="returnLogin()">
						<span>
							<i class="iconfont icon-fanhui2"></i>
						</span>
						退出
					</li>
				</ul>
			</div>
      <div class="header-titles">
		<div class="leftLine">
			<svg width="177px" height="43px" viewBox="0 0 177 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				<g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
					<g id="编组-10" transform="translate(88.040637, 21.500000) scale(-1, 1) translate(-88.040637, -21.500000) translate(0.000000, 0.500000)" stroke="#0096ED">
						<path d="M0,0 L5.96250935,8.00052486 C70.0269908,8.00052486 102.059232,8.00052486 102.059232,8.00052486 C102.059232,8.00052486 102.846452,9.19823933 104.420894,11.5936683 M1,41 L5,33 L176.081274,33 M50.1465744,42 L53,38 L171.467912,38" id="直线-10"></path>
					</g>
				</g>
			</svg>
		</div>
		<div class="label">
			<!-- 碳金融沙盘 -->
		</div>
		<div class="rightLine">
			<svg width="177" height="43">
				<path d="M0,0 L5.96250935,8.00052486 C70.0269908,8.00052486 102.059232,8.00052486 102.059232,8.00052486 C102.059232,8.00052486 102.846452,9.19823933 104.420894,11.5936683 M1,41 L5,33 L176.081274,33 M50.1465744,42 L53,38 L171.467912,38" id="svgLine"></path>
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
      </div>
    </div>
    <!-- 中部 -->
    <div class="clearfix woksing mt30">
		<ul class="w-boxs">
			<li v-for="(item, index) in marketArr" @click="_handDialog(index)" :key="index">
			<div>
				{{item.label}}
			</div>
			<div class="infos">
				{{item.info}}
			</div>
			</li>
		</ul>
		<!-- 中间位置 -->
		<div class="fl box-content">
				<!-- 大任务 -->
				<div  class="subtakstttt clear">
					<el-dropdown @command="handleSubtaskDrop">
						<span class="el-dropdown-link">
							{{(subtaskIndex + 1) | ToEven}}、
							{{subtaskMap.taskName || ''}}
							<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item
							v-for="(item, Index) in MoldSubtaskArr"
							:key="Index"
							:command="Index">
							{{(Index + 1) | ToEven}}、
							{{item.taskName}}
							<i :class="item.isOpen === 1 ? 'el-icon-unlock' : 'el-icon-lock'"></i>
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
				<!-- 填写步骤 -->
				<div class="step">
					<ul class="clearfix">
						<li v-for="(stepitem, stepIndex) in taskListArr"
						@click="_handleTask(stepIndex)"
						:key="stepIndex" >
							<div class="bigfont">
								{{ stepitem.industryName && stepitem.industryName.substring(0, 1) }}
							</div>
							<p class="ellipsis" slot="reference">
								{{stepIndex + 1}}
								{{stepitem.taskName}}
							</p>
							<div class="trianle"></div>
						</li>
					</ul>
				</div>
				<div class="box-work1 box-iii">
					<i class="ii1 ii"></i>
					<i class="ii2 ii"></i>
					<i class="ii3 ii"></i>
					<i class="ii4 ii"></i>
					<div class="inters">
						<div class="year-change clearfix">
							<div class="year-box">
								<el-dropdown @command="handleYearDrop">
									<span class="el-dropdown-link">
										{{moldYearMap.yearsTime || ''}}年
										<i class="el-icon-arrow-down el-icon--right"></i>
									</span>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item
										v-for="(item, personIndex) in moldYearList"
										:key="personIndex"
										:command="personIndex">
										{{item.yearsTime}}年
										<i :class="item.isOpen === 1 ? 'el-icon-unlock' : 'el-icon-lock'"></i>
										</el-dropdown-item>
									</el-dropdown-menu>
								</el-dropdown>
								<!-- 当前年份：2022年
								<div class="triangle"></div> -->
							</div>
							<div class="fr">
								<ul class="penter-class">
									<li v-for="(item, index) in yearPenter" :key="index">
										{{item.name}}&nbsp;|&nbsp;{{item.info}}
									</li>
								</ul>
							</div>
						</div>
						<div class="mt10 clearfix">
							<div class="workshopBox" v-for="(shopItem, index) in shopList" :key="index">
								{{shopItem.label}}
								<div class="processImg"></div>
							</div>
							<div class="finished"></div>
							<div class="material"></div>
						</div>
					</div>
				</div>
				<div class="sencet-box mt20">
					<el-row :gutter="20">
						<el-col :span="6">
							<div class="box-iii sencet-list sencet-list1">
								<i class="ii1 ii"></i>
								<i class="ii2 ii"></i>
								<i class="ii3 ii"></i>
								<i class="ii4 ii"></i>
								<div class="inters">
									碳汇余额
									<carbonEchart class="tttsss"></carbonEchart>
								</div>
							</div>
						</el-col>
						<el-col :span="6">
							<div class="box-iii sencet-list sencet-list1">
								<i class="ii1 ii"></i>
								<i class="ii2 ii"></i>
								<i class="ii3 ii"></i>
								<i class="ii4 ii"></i>
								<div class="inters">
									绿电、煤电
									<likesEchart class="tttsss"></likesEchart>
								</div>
							</div>
						</el-col>
						<el-col :span="6">
							<div class="box-iii sencet-list">
								<i class="ii1 ii"></i>
								<i class="ii2 ii"></i>
								<i class="ii3 ii"></i>
								<i class="ii4 ii"></i>
								<div class="inters">
									现金余额：5000000元
									<div class="price-box">
										<img src="./img3/price.png" alt="">
										<img src="./img3/price.png" alt="">
										<img src="./img3/price.png" alt="">
										<img src="./img3/price.png" alt="">
										<img src="./img3/price.png" alt="">
										<img src="./img3/price.png" alt="">
										<img src="./img3/price.png" alt="">
										<img src="./img3/price.png" alt="">
										<img src="./img3/price.png" alt="">
										<img src="./img3/price.png" alt="">
										<img src="./img3/price.png" alt="">
										<img src="./img3/price.png" alt="">
										<img src="./img3/price.png" alt="">
										<img src="./img3/price.png" alt="">
										<img src="./img3/price.png" alt="">
										<img src="./img3/price.png" alt="">
										<img src="./img3/price.png" alt="">
										<img src="./img3/price.png" alt="">
										<img src="./img3/price.png" alt="">
										<img src="./img3/price.png" alt="">
										<img src="./img3/price.png" alt="">
									</div>
								</div>
							</div>
						</el-col>
						<el-col :span="6">
							<div class="box-iii sencet-list">
								<i class="ii1 ii"></i>
								<i class="ii2 ii"></i>
								<i class="ii3 ii"></i>
								<i class="ii4 ii"></i>
								<div class="inters">
									绿贷余额：5000000元
									<div class="price-box">
										<img src="./img3/price2.png" alt="">
										<img src="./img3/price2.png" alt="">
										<img src="./img3/price2.png" alt="">
										<img src="./img3/price2.png" alt="">
										<img src="./img3/price2.png" alt="">
										<img src="./img3/price2.png" alt="">
										<img src="./img3/price2.png" alt="">
										<img src="./img3/price2.png" alt="">
									</div>
								</div>
							</div>
						</el-col>
					</el-row>
				</div>
		</div>
		<!-- 右侧位置 -->
		<div class="fl box-rank">
			<div class="equityrank">
				<div class="ranktitle1">
					权益排名
				</div>
				<div class="tablerank1">
					<div class="tabletitle1">
						<p>排名</p>
						<p>小组名称</p>
						<p>金额</p>
					</div>
					<ul class="randk-list">
						<li class="clearfix" v-for="(rank1item, rank1Index) in rank1Arr" :key="rank1Index">
							<p>{{rank1Index+1}}</p>
							<p>{{rank1item.groupname}}</p>
							<p>{{rank1item.amount}}</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="equityrank mt20">
				<div class="ranktitle1">
					资金排名
				</div>
				<div class="tablerank1">
					<div class="tabletitle1">
						<p>排名</p>
						<p>小组名称</p>
						<p>金额</p>
					</div>
					<ul class="randk-list">
						<li class="clearfix" v-for="(rank1item, rank1Index) in rank1Arr" :key="rank1Index">
							<p>{{rank1Index+1}}</p>
							<p>{{rank1item.groupname}}</p>
							<p>{{rank1item.amount}}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
    </div>
	<div class="clearfix">
		<div class="directorfooter mt15">
			<!-- 角色 -->
			<div class="treasurer fl" v-for="(item, index) in actorIndustryArr" :key="index">
				<div class="trimg"></div>
				{{item.name}}
			</div>
			<!-- 右侧参数配置模块 -->
			<div class="paramtelllrlll fr">
				<ul class="clearfix">
					<li v-for="(paramteritem, paramterIndex) in paramterArr" @click="_handleParams(paramteritem)" :key="paramterIndex">
						<p>{{paramteritem.name}}</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<!-- 弹窗一：展示模块选择 -->
	<div class="mask-write11" v-if="moldVisible">
		<div class="mask-box" v-if="moldVisible" >
			<div class="marsk-titles" v-drag>
				<i class="el-icon-error" @click="moldVisible = false"></i>
				<div class="pstli">
					<div class="tliiii fl">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					选择模式
					<div class="tliiii fr">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
			<div>
				<div class="choose">
					<div class="type2" v-for="(mold, index) in MoldListArr"
					:class="{'active': moldIndex === index}"
					@click="getMoldYear(index)" :key="index">
						<div class="on-off">{{
							mold.isMoldOpen ? '已开启' : '未开启'
							}}
						</div>
						<div class="modle2">
							<div class="type2img"></div>
							<p>{{mold.moldName}}</p>
							<div class="button2">
								<p>
									{{mold.isMoldOpen ? '进入' : '未开启'}}
								</p>
							</div>
						</div>
						<div v-if="moldYearList.length > 0" class="triangle"></div>
					</div>
				</div>
				<div class="mt20 clearfix yearmold box-iii" v-if="moldYearList.length > 0">
					<i class="ii1 ii"></i>
					<i class="ii2 ii"></i>
					<i class="ii3 ii"></i>
					<i class="ii4 ii"></i>
					<div v-for="(item, index) in moldYearList" class="yearli"
					:class="item.isOpen === 1 ? 'blue' : 'red'" @click="handleMoldYear(index)" :key="index">
						{{item.yearsTime}}
						年
						<i :class="item.isOpen === 1 ? 'el-icon-unlock' : 'el-icon-lock'"></i>
						<!-- （{{item.isOpen === 1 ? '已开启' : '未开启'}}） -->
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 弹窗：展示下的角色分配 -->
	<div class="mask-write11" v-if="isUserIndustryVisible">
		<div class="mask-box" v-if="isUserIndustryVisible" >
			<div class="marsk-titles" v-drag>
				<i class="el-icon-error" @click="isUserIndustryVisible = false"></i>
				<div class="pstli">
					<div class="tliiii fl">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					角色分配
					<div class="tliiii fr">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
			<div class="">
				<orgIndustry @sendIndOrg="getIndOrg"></orgIndustry>
			</div>
		</div>
	</div>
	<!-- 弹窗二：组件市场部门 -->
	<div class="mask-write11" v-if="dialogMarketVisible" >
		<div class="mask-box" v-if="dialogMarketVisible" >
			<div class="marsk-titles" v-drag>
				<i class="el-icon-error" @click="dialogMarketVisible = false"></i>
				<div class="pstli">
					<div class="tliiii fl">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					{{dialogTitle}}
					<div class="tliiii fr">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
			<div class="mt20 pd15">
				<component :is="marketType"></component>
			</div>
		</div>
	</div>
	<!-- 弹窗三：小任务路由 -->
	<div class="mask-write11" v-if="dialogTaskVisible" >
		<div class="mask-box" v-if="dialogTaskVisible" >
			<div class="mtask-title" v-drag>
				<i class="el-icon-error" @click="dialogTaskVisible = false"></i>
				<div class="pstli">
					<div class="semipolar-spinner fl">
						<div class="ring"></div>
						<div class="ring"></div>
						<div class="ring"></div>
						<div class="ring"></div>
						<div class="ring"></div>
					</div>
					{{taskName}}
					<el-popover
						placement="top-start"
						width="400"
						trigger="hover"
						>
						<div v-html="trainingObjective">
						</div>
						<i class="el-icon-s-flag dddsss" slot="reference"></i>
					</el-popover>
				</div>
			</div>
			<div class="mt40 views-see">
				<router-view></router-view>
			</div>
		</div>
	</div>
	<div class="mask-write11" v-if="dialogTaskTextVisible" >
		<div class="mask-box" v-if="dialogTaskTextVisible" >
			<div class="mtask-title" v-drag>
				<i class="el-icon-error" @click="dialogTaskTextVisible = false"></i>
				<div class="pstli">
					<div class="semipolar-spinner fl">
						<div class="ring"></div>
						<div class="ring"></div>
						<div class="ring"></div>
						<div class="ring"></div>
						<div class="ring"></div>
					</div>
					{{taskName}}
					<el-popover
						placement="top-start"
						width="400"
						trigger="hover"
						>
						<div v-html="trainingObjective">
						</div>
						<i class="el-icon-s-flag dddsss" slot="reference"></i>
					</el-popover>
				</div>
			</div>
			<div class="mt40 views-see">
				<ul class="step-list1 clearfix">
					<el-tooltip :content="item.tig || item.textTitle" placement="top" effect="light" :class="index > 5 ? 'mt80' : ''"
						v-for="(item, index) in textArrContent" :key="index"
						@click.native="tooltip(index)">
							<li class="fl" :class="{active: stepIndex === index}">
								<div>
									{{index + 1}}
									<img v-if="(index + 1) % 6 !== 0 && (index + 1) !== textArrContent.length" class="silde1" src="./img3/stepTline1.png" alt="">
								</div>
								<p class="ellipsis">{{item.textTitle}}</p>
								<img v-if="(index + 1) % 6 === 0 && (index + 1) != textArrContent.length" :class="'silde' + index" src="./img3/stepTline1.png" alt="">
							</li>
					</el-tooltip>
				</ul>
				<template v-if="textLabel === 'stepAnswer'">
					<StepAnswer :resourceTextId="resourceTextId"></StepAnswer>
				</template>
				<template v-else>
					<router-view></router-view>
				</template>
			</div>
		</div>
	</div>
	<!-- 弹窗四：组织弹窗 -->
	<div class="mask-write11" v-if="DialogOrgVisible" >
		<div class="mask-box mask-org-box" style="width:1200px" v-if="DialogOrgVisible" >
			<div class="marsk-titles" v-drag>
				<i class="el-icon-error" @click="DialogOrgVisible = false"></i>
				<div class="pstli">
					<div class="tliiii fl">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					加入团队
					<div class="tliiii fr">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
			<div class="mt40 views-see">
				<selectOrg></selectOrg>
			</div>
		</div>
	</div>
	<!-- 弹窗五：规则参数 -->
	<div class="mask-box mask-org-box" style="width:1200px" v-if="DialogParamsVisible" >
		<div class="marsk-titles" v-drag>
			<i class="el-icon-error" @click="DialogParamsVisible = false"></i>
			<div class="pstli">
				<div class="tliiii fl">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
				规则参数
				<div class="tliiii fr">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
		<div class="mt40 views-see">
			<deferData :teacherCode="'student'" :moldId="moldId"></deferData>
		</div>
	</div>
	<!-- <div class="mask-write11" v-if="DialogParamsVisible" >
	</div> -->
	<!-- 弹窗：教师课件 -->
	<div class="mask-black02" v-if="isVisiblePdf" >
		<div class="mask-box mask-org-box" style="width:1200px" v-if="isVisiblePdf" >
			<div class="marsk-titles" v-drag>
				<i class="el-icon-error" @click="isVisiblePdf = false"></i>
				<div class="pstli">
					<div class="tliiii fl">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					课件
					<div class="tliiii fr">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
			<div style='height:600px;overflow:auto;'>
				<top-res :dataSrc = dataSrc></top-res>
			</div>
		</div>
	</div>

  </div>
</template>

<script>
import market1 from '../market/market1';
import market2 from '../market/market2';
import market3 from '../market/market3';
import market4 from '../market/market4';
import market5 from '../market/market5';
import market6 from '../market/market6';
import market7 from '../market/market7';
import { marketArr, shopList } from './js/index1';
// import { getPropertyAllStatis } from './js/paliceWork';
import selectOrg from '@@/student/selectOrg/selectOrg';
import carbonEchart from './components/carbonEchart.vue';
import likesEchart from './components/likesEchart.vue';
import orgIndustry from '@@/student/selectOrg/orgIndustry';
import deferData from '@@/teacher/deferData/deferData';
import StepAnswer from '@@/student/work/TaskList/stepAnswer/stepAnswer';

export default {
	name: 'login',
	components: {
		market1,
		market2,
		market3,
		market4,
		market5,
		market6,
		market7,
		carbonEchart,
		likesEchart,
		StepAnswer,
		deferData,
		orgIndustry,
		selectOrg
	},
	data () {
		return {
			dialoggrcreditVisible: false,
			marketArr: marketArr,
			textArrContent: [],
			// getPropertyAllStatis: getPropertyAllStatis,
			shopList: shopList,
			moldVisible: false,
			dialogTaskTextVisible: false,
			dialogMarketVisible: false,
			DialogParamsVisible: false,
			isVisiblePdf: false,
			isUserIndustryVisible: false,
			DialogOrgVisible: false,
			dialogTaskVisible: false,
			marketType: '',
			myChart1: null,
			taskName: '',
			textLabel: '',
			resourceTextId: '',
			dialogTitle: '',
			IndexLeft: 0,
			moldYearIndex: 0,
			taskIndex: 0,
			subtaskIndex: 0,
			MoldListArr: [],
			isMoldListVisible: false,
			returnArr: [],
			tabsArr: [],
			moldIndex: -1,
			MoldYearIndex: 0,
			moldMap: {},
			trainingObjective: '',
			moldId: '',
			chapterId: '',
			clazzYearsPushId: '',
			taskId: '',
			defaultMoldYearsId: '',
			moldYearMap: {},
			subtaskMap: {},
			moldYearList: [],
			actorIndustryArr: [],
			taskListArr: [
			],
			MoldSubtaskArr: [
			],
			stepIndex: 0,
			rank1Arr: [
				{ 	groupname: '小组',
					amount: '820,459.00'
				},
				{ 	groupname: '小组',
					amount: '820,459.00'
				},
				{ 	groupname: '小组',
					amount: '820,459.00'
				},
				{ 	groupname: '小组',
					amount: '820,459.00'
				},
				{ 	groupname: '小组',
					amount: '820,459.00'
				}
			],
			paramterArr: [
				{
					name: '规则参数',
					code: 'DialogParamsVisible'
				},
				{
					name: '拓展资料',
					code: 'moldRes'
				},
				{
					name: '业务流程'
				},
				{
					name: '小组成绩排名'
				},
				{
					name: '小组作业'
				}
			],
			yearPenter: [
				{
					name: 'Q1',
					info: '生产'
				},
				{
					name: 'Q2',
					info: '生产'
				},
				{
					name: 'Q3',
					info: '减排'
				},
				{
					name: 'Q4',
					info: '减排'
				}
			],
			tabList: [
				{
					label: '小组信息',
					code: 'DialogOrgVisible'
				},
				{
					label: '角色分配',
					code: 'isUserIndustryVisible'
				},
				{
					label: '模式切换',
					code: 'moldVisible'
				}
			]
			// taskidMap: {
			// 	firstTaskId: '',
			// 	secondTaskId: ''
			// }
		};
	},
	created () {
		this.init();
	},
	methods: {
		init () {
			this.getRole();
		},
		// 获取模块下的年
		getMoldYear (index) {
			let item = this.MoldListArr[index];

			if (!item.isMoldOpen) {
				this.$confirm('当前模式老师未开启，请选择其他模式实训', '提示', {
					confirmButtonText: '确定',
					center: true,
					showCancelButton: false,
					type: 'warning'
				}).then(() => {

				}).catch(() => {
				});
				return false;
			}
			this.moldIndex = index;
			this.moldMap = item;
			this.moldId = item.moldId;
			this.$ajax({
				method: 'post',
				url: '/stClazzYearsPush/findMoldYearsTimeInfoList',
				params: {
					moldId: item.moldId
				}
			}).then(res => {
				if (res.success) {
					this.moldYearList = res.data;
				} else {
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		tooltip (index) {
			this.stepIndex = index;
			let item = this.textArrContent[index];
			this.textLabel = item.textLabel;
			this.resourceTextId = item.id;
		},
		// 获取当前人是否分配角色了
		getorgUserIndustry () {
			this.$ajax({
				method: 'post',
				url: '/stOrgUserIndustry/findUserIndustryInfoList',
				params: {
				}
			}).then(res => {
				if (res.success) {
					let arr = res.data;
					if (arr.length === 0) { // 未分配角色
						this.$confirm('您所在小组未分配角色，请分配任务?', '提示', {
							confirmButtonText: '确定',
							cancelButtonText: '取消',
							type: 'warning'
						}).then(() => {
							this.isUserIndustryVisible = true;
							this.moldVisible = false;
						}).catch(() => {
						});
					} else { // 已经分配角色
						this.actorIndustryArr = res.data || [];
						this.isUserIndustryVisible = false;
						this.moldVisible = false;
					}
				} else {
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		_handleParams (item) {
			let code = item.code;
			if (code === 'DialogParamsVisible') {
				this.DialogParamsVisible = true;
			}
			if (code === 'moldRes') {
				this.getMoldRes();
			}
			// if (code === 'moldVisible') {
			// 	this.moldVisible = true;
			// }
		},
		/**
		 * @name: zhangln
		 * @msg: 获取模块下资源
		 */
		getMoldRes () {
			this.$ajax({
				method: 'post',
				url: '/moldResource/findMoldResourceListInfo',
				params: {
					moldId: this.moldId
				}
			}).then(res => {
				if (res.success) {
					if (res.data.length > 0) {
						this.isVisiblePdf = true;
						this.dataSrc = res.data[0];
					}
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		_handleTabs (index) {
			let code = this.tabList[index].code;
			if (code === 'DialogOrgVisible') {
				this.DialogOrgVisible = true;
			}
			if (code === 'isUserIndustryVisible') {
				this.isUserIndustryVisible = true;
			}
			if (code === 'moldVisible') {
				this.moldVisible = true;
			}
		},
		handleYearDrop (command) {
			console.log(command);
			this.handleMoldYear(command);
		},
		getIndOrg () {
			this.moldVisible = false;
			this.isUserIndustryVisible = false;
			this.handleMoldYear(this.MoldYearIndex);
		},
		// 点击年，获取大任务-小任务
		handleMoldYear (index) {
			let item = this.moldYearList[index];
			if (!item.clazzYearsPushId) {
				this.$confirm('当前年下未开启，无法开启任务', '提示', {
					confirmButtonText: '确定',
					center: true,
					showCancelButton: false,
					type: 'warning'
				}).then(() => {

				}).catch(() => {
				});
				return false;
			}
			this.MoldYearIndex = index;
			this.moldYearMap = this.moldYearList[index];
			this.chapterId = this.moldYearList[index].chapterId;
			this.clazzYearsPushId = this.moldYearList[index].clazzYearsPushId;
			this.taskId = this.moldYearList[index].taskId;
			this.defaultMoldYearsId = this.moldYearList[index].defaultMoldYearsId;
			// this.$route.query = query;
			let query = JSON.parse(JSON.stringify(this.$route.query));
			query = {
				'moldId': this.moldId || '',
				'chapterId': this.chapterId || '',
				'clazzYearsPushId': this.clazzYearsPushId || ''
			};
			this.$router.push({ path: this.$route.path, query });
			this.getSubtaskTaskList();
			this.getorgUserIndustry();
			// 获取相应余额
			this.$store.commit('getPropertyAllStatis', '');
			this.$store.commit('getPropertyTypeStatis', 'ownCashAmount');
		},
		// 查询大任务
		getTeacherYearSubTask () {
			this.$ajax({
				method: 'post',
				url: '/stClazzSubtaskPush/findMoldYearsSubtaskPushInfoList',
				params: {
					moldId: this.moldId, // 模块id
					defaultMoldYearsId: this.defaultMoldYearsId || '',
					chapterId: this.chapterId || '',
					clazzYearsPushId: this.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					this.moldVisible = false;
					this.MoldSubtaskArr = res.data;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 获取当前组织是否上岗
		getRole () {
			this.$ajax({
				method: 'post',
				url: '/clazzIndustry/findUserIndustry',
				params: {
				}
			}).then(res => {
				if (res.success && res.data) {
					if (!res.data.isIndustry) {
						this.DialogOrgVisible = true;
					} else { // 已经上岗-拉取模块
						this.$storage.set('orgName', res.data.clazzOrg.orgName);
						this.$storage.set('orgId', res.data.clazzOrg.id);
						this.$storage.set('clazzOrg', res.data.clazzOrg);
						this.selectMold();
						// 获取当前是不是组长
						this.getOrgLeader();
					}
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 查询多少模块
		 */
		selectMold () {
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
					this.MoldListArr = array;
					this.moldVisible = true;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 判断是不是组织
		getOrgLeader () {
			this.$ajax({
				method: 'post',
				url: '/clazzOrg/getOrgGroupLeader',
				params: {}
			}).then(res => {
				if (res.success && res.data) {
					if (res.data.notLeader) { // 是组长
						this.$storage.set('isOrgLoader', 1);
					} else {
						this.$storage.set('isOrgLoader', 0);
					}
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		_handleTask (index) {
			this.taskIndex = index;
			let item = this.taskListArr[index];
			this.taskName = item.taskName;
			this.trainingObjective = item.trainingObjective;

			// 判断当前是否配置了富文本文档，
			this.fetchResource(item);
		},
		fetchResource (item) {	// 查询富文本文档
			this.$ajax({
				method: 'post',
				url: '/taskText/findTaskTextMapByParam',
				params: {
					taskId: item.taskId,
					type: 'carbon'
				}
			}).then(res => {
				if (res.success) {
					if (res.data.length > 0) {
						this.textArrContent = res.data;
						this.textArrContent.push({
							...item,
							textLabel: 'stepTask',
							textTitle: item.taskName
						});
						this.tooltip(0);
						this.$router.push({
							name: item.taskUrl,
							query: {
								'moldId': this.moldId || '',
								'chapterId': this.chapterId || '',
								'clazzYearsPushId': this.clazzYearsPushId || '',
								'subtaskId': item.subtaskId || '',
								'industryId': item.industryId || '',
								'taskId': item.taskId || ''
							}
						});
						this.dialogTaskTextVisible = true;
					} else { // 没有文档的时候
						this.$router.push({
							name: item.taskUrl,
							query: {
								'moldId': this.moldId || '',
								'chapterId': this.chapterId || '',
								'clazzYearsPushId': this.clazzYearsPushId || '',
								'subtaskId': item.subtaskId || '',
								'industryId': item.industryId || '',
								'taskId': item.taskId || ''
							}
						});
						this.dialogTaskVisible = true;
					}
				};
			}).catch(err => {
				throw new Error(err);
			});
		},
		_handDialog (index) {
			let item = this.marketArr[index];
			this.dialogTitle = item.label;
			this.marketType = item.marketType;
			this.dialogMarketVisible = true;
		},

		// 切换大任务
		_handleSubtaskRouter (index) {
			this.subtaskIndex = index;
			// this.changeScroll(index);
			let item = this.MoldSubtaskArr[index];
			this.subtaskMap = item;
			this.taskListArr = item.taskInfoList || [];
		},
		handleSubtaskDrop (index) {
			this._handleSubtaskRouter(index);
		},
		// 获取学生大任务-小任务列表
		getSubtaskTaskList () {
			this.$ajax({
				method: 'post',
				url: '/TaskListBusiness/findChapterPushTaskInfoList',
				params: {
					moldId: this.moldId, // 模块id
					chapterId: this.chapterId || '',
					clazzYearsPushId: this.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					// this.moldVisible = false;
					this.MoldSubtaskArr = res.data;
					this._handleSubtaskRouter(0);
					// this.taskidMap.firstTaskId = this.MoldSubtaskArr[3].taskInfoList[1].taskId;
					// this.taskidMap.secondTaskId = this.MoldSubtaskArr[3].taskInfoList[3].taskId;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		changeScroll (index) {
			this.$nextTick(() => {
				// const container = document.querySelector('.index-mold');
				const productWidth = 100;
				const left = 450 - 50 - productWidth * (index);
				console.log(left);
				this.IndexLeft = left;
				// container. = left;
			});
		},
		// 退出
		returnLogin () {
			let LoginAddres = this.$storage.get('LoginAddres'); // 退出地址
			this.$storage.clear(); // 清除缓存
			window.location.href = LoginAddres + 'link/';
		}
	}
};
</script>

<style lang="scss">
@import './img3/index.scss';
</style>
<style lang="scss">
@import './css/index2.scss';
</style>
<style lang="scss">
@import './css/index3.scss';
</style>
<style lang="scss" scoped>
.exit{
	margin-top: 13px;
	cursor: pointer;
	p{
		i{
			transform: translateY(-2px);
		}
	}
	background: rgba(255,255,255,0.80);
	border-radius: 18px;
	position: relative;
	height: 36px;
	line-height: 36px;
	&:hover{
		.info{
			display: block;
		}
	}
}
.info{
	position: absolute;
	right: 0px;
	top: 36px;
	width: 180px;
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
		// color: #fff;
		span{
			display: inline-block;
			width: 40px;
		}
	}
}
// 填写步骤
.step{
	margin-top: 13px;
	min-height: 60px;
	ul{
		// height: 42px;
		// margin-left: 20px;
		li{
			float: left;
			width: 227px;
			height: 42px;
			margin-right: 10px;
			background: rgba(32, 63, 95, 0.5);
			padding-left: 13px;
			padding-top: 10px;
			border: 1px solid #1580D0;
			position: relative;
			border-radius: 3px;
			margin-bottom: 10px;
			cursor: pointer;
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
			&:nth-child(5n+1){.bigfont{background: linear-gradient(140deg, #F97F6D 0%, #FA6D9A 100%);}}
			&:nth-child(5n+2){.bigfont{background: linear-gradient(137deg, #00A9A9 0%, #0090BF 100%);}}
			&:nth-child(5n+3){.bigfont{background: linear-gradient(139deg, #707BF8 0%, #8452EA 100%);}}
			&:nth-child(5n+4){.bigfont{background: linear-gradient(137deg, #00A9A9 0%, #0090BF 100%);}}
			&:nth-child(5n+5){.bigfont{background: linear-gradient(137deg, #00A9A9 0%, #0090BF 100%);}}
			&:hover:first-child {
				.bigfont{color:#E15B86; background: #ffffff; }
				.trianle{border-left: 8px solid #E15B86;}
				border-radius: 3px;
				background: linear-gradient(139deg, #F97361 0%, #E15B86 100%);
				border-image: linear-gradient(143deg, rgba(255, 69, 44, 1), rgba(255, 150, 89, 1)) 1 1;}
			&:hover:nth-child(5n+2) {
				.bigfont{color:#0090BF; background: #ffffff; }
				.trianle{border-left: 8px solid #0090BF;}
				border-radius: 3px;
				background: linear-gradient(137deg, #00A9A9 0%, #0090BF 100%);
				border-image: linear-gradient(138deg, rgba(21, 128, 208, 1), rgba(49, 237, 255, 1)) 1 1;}
			&:hover:nth-child(5n+3) {
				.bigfont{color:#8452EA; background: #ffffff; }
				.trianle{border-left: 8px solid #8452EA;}
				border-radius: 3px;
				background: linear-gradient(139deg, #707BF8 0%, #8452EA 100%);
				border-image: linear-gradient(141deg, rgba(135, 145, 255, 1), rgba(161, 115, 255, 1)) 1 1;}
			&:hover:nth-child(5n+4) {
				.bigfont{color:#0090BF; background: #ffffff; }
				.trianle{border-left: 8px solid #0090BF;}
				border-radius: 3px;
				background: linear-gradient(137deg, #00A9A9 0%, #0090BF 100%);
				border-image: linear-gradient(138deg, rgba(21, 128, 208, 1), rgba(49, 237, 255, 1)) 1 1;}
			&:hover:nth-child(5n+5) {
				.bigfont{color:#0090BF; background: #ffffff; }
				.trianle{border-left: 8px solid #0090BF;}
				border-radius: 3px;
				background: linear-gradient(137deg, #00A9A9 0%, #0090BF 100%);
				border-image: linear-gradient(138deg, rgba(21, 128, 208, 1), rgba(49, 237, 255, 1)) 1 1;}
		}
	}
}
.step-list1 {
	max-width: 1000px !important;
	width: max-content;
	margin: 20px auto;
	position: relative;
	.mt80 {
		margin-top: 80px;
	}
	.active {
		& > div {
			background: url('./img3/box2.png') no-repeat center ;
			background-size: cover;
		}
	}
	li {
		cursor: pointer;
		& > .silde5, & > .silde11 {
			position: absolute;
			width: 840px;
			left: 80px;
		}
		& > .silde5 {
			top: 92px;
		}
		& > .silde11 {
			top: 248px;
		}
		width: calc(997px / 5);
		& > div {
			margin: 0 auto;
			background: url('./img3/box1.png') no-repeat center;
			background-size: cover;
			width: 47px;
			height: 52px;
			line-height: 52px;
			text-align: center;
			color: #FFF;
			position: relative;
			& > img {
				position: absolute;
			}
			& > .silde1 {
				width: 180px;
				top: 21px;
				left: 57px;
				height: 8px;
			}
		}
		& > p {
			margin-top: 10px;
			text-align: center;
			padding: 0 5px;
			color: #fff;
		}
	}
}
</style>
