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
			<div class="tabsBut" v-for="(tabItem,index) in tabList" :key="index">
				{{tabItem.label}}
			</div>
		</div>
		<div class="names">
		欢迎您，木同学
		<div class="triangle"></div>
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
						<el-col :span="8">
							<div class="box-iii sencet-list sencet-list1">
								<i class="ii1 ii"></i>
								<i class="ii2 ii"></i>
								<i class="ii3 ii"></i>
								<i class="ii4 ii"></i>
								<div class="inters">
									碳汇余额
									<carbonEchart></carbonEchart>
								</div>
							</div>
						</el-col>
						<el-col :span="16">
							<div class="box-iii sencet-list">
								<i class="ii1 ii"></i>
								<i class="ii2 ii"></i>
								<i class="ii3 ii"></i>
								<i class="ii4 ii"></i>
								<div class="inters">
									<el-row>
										<el-col :span="12">
											煤电
											<div class="price-box">
												<div class="l-flash flash-A">
													<div class="flash">
														<div class="bolt">
														</div>
														<div class="header"></div>
														<div class="battery">
														</div>
														<div class="battery-copy">
															<div class="g-wave"></div>
															<div class="g-wave"></div>
															<div class="g-wave"></div>
														</div>
													</div>
												</div>
											</div>
										</el-col>
										<el-col :span="12">
											绿电
											<div class="price-box">
												<div class="l-flash flash-B">
													<div class="flash">
														<div class="bolt">
														</div>
														<div class="header"></div>
														<div class="battery">
														</div>
														<div class="battery-copy">
															<div class="g-wave"></div>
															<div class="g-wave"></div>
															<div class="g-wave"></div>
														</div>
													</div>
												</div>
											</div>
										</el-col>
									</el-row>
								</div>
							</div>
							<el-row :gutter="20" class="mt20">
								<el-col :span="12">
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
											</div>
										</div>
									</div>
								</el-col>
								<el-col :span="12">
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
								</el-col>
							</el-row>
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
		<div class="task-li clearfix box-iii">
			<i class="ii1 ii"></i>
			<i class="ii2 ii"></i>
			<i class="ii3 ii"></i>
			<i class="ii4 ii"></i>
			<div class="triangle">
			</div>
			<div class="stepll inters">
				<!-- 小任务列表 -->
				<ul>
					<li v-for="(stepitem, stepIndex) in taskListArr" @click="_handleTask(stepIndex)" :key="stepIndex" >
						<div class="trianle"></div>
						<div class="bigfont">
							{{stepIndex + 1}}
						</div>
						<p>{{stepitem.industryName}}</p>
						<div class="mt10">
							{{stepitem.taskName}}
						</div>
						<div class="mt10">
							{{stepitem.realName}}
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="directorfooter mt15">
			<div class="treasurer fl">
				<div class="trimg"></div>
			</div>
			<div class="sales fl">
				<div class="saimg"></div>
			</div>
			<div class="index-mold">
				<!-- 大任务列表 -->
				<div class="inside clearfix" :style="{'left': IndexLeft + 'px'}">
					<div v-for="(item,index) in MoldSubtaskArr"
						class="moldli"
						:class="{'active': moldYearIndex === index}"
						:key="index" @click="_handleSubtaskRouter(index)">
						<!-- 内部 -->
						<div class="li-inter">
							<template v-if="moldYearIndex != index">
								<i></i>
								<p class="indexnum">
									{{(index + 1) | ToEven}}
								</p>
								<p class="mt30 texts">
									{{item.taskName}}
								</p>
							</template>
							<template v-else>
								<div class="wrapper-circle left">
									<div class="circle"></div>
								</div>
								<div class="wrapper-circle right">
									<div class="circle"></div>
								</div>
								<div class="ttee">
									<p class="mt15">
										{{(index + 1) | ToEven}}
									</p>
									<p class="mt15">
										{{item.taskName}}
									</p>
								</div>
							</template>
						</div>
						<!-- 外部 -->
						<!-- <div class="li-outer">
						</div> -->
					</div>
				</div>
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
				<!-- <i class="el-icon-error" @click="isUserIndustryVisible = false"></i> -->
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
				<orgIndustry></orgIndustry>
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
						<!-- <el-button ></el-button> -->
						<div v-html="trainingObjective">
						</div>
						<i class="el-icon-s-flag dddsss" slot="reference"></i>
					</el-popover>
					<!-- <div class="tliiii fr">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div> -->
				</div>
			</div>
			<div class="mt40 views-see">
				<router-view></router-view>
			</div>
		</div>
	</div>
	<!-- 弹窗四：组织弹窗 -->
	<div class="mask-write11" v-if="DialogOrgVisible" >
		<div class="mask-box mask-org-box" style="width:1200px" v-if="DialogOrgVisible" >
			<div class="marsk-titles" v-drag>
				<!-- <i class="el-icon-error" @click="DialogOrgVisible = false"></i> -->
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
import selectOrg from '@@/student/selectOrg/selectOrg';
import carbonEchart from './components/carbonEchart.vue';
import orgIndustry from '@@/student/selectOrg/orgIndustry';
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
		orgIndustry,
		selectOrg
	},
	data () {
		return {
			marketArr: marketArr,
			shopList: shopList,
			moldVisible: false,
			dialogMarketVisible: false,
			isUserIndustryVisible: false,
			DialogOrgVisible: false,
			dialogTaskVisible: false,
			marketType: '',
			myChart1: null,
			taskName: '',
			dialogTitle: '',
			IndexLeft: 0,
			moldYearIndex: 0,
			taskIndex: 0,
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
			defaultMoldYearsId: '',
			moldYearMap: {},
			subtaskMap: {},
			moldYearList: [],
			actorIndustryArr: [],
			taskListArr: [
			],
			MoldSubtaskArr: [
			],
			rank1Arr: [
				{ 	groupname: '小组',
					amount: '820,459.00'
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
					label: '小组信息'
				},
				{
					label: '角色分配'
				},
				{
					label: '模式切换'
				}
			]
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
			this.getorgUserIndustry(item);
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
						this.isUserIndustryVisible = true;
						this.moldVisible = false;
						this.actorIndustryArr = res.data || [];
					} else { // 已经分配角色
						this.isUserIndustryVisible = false;
						this.selectMold();
					}
				} else {
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		handleYearDrop (command) {
			console.log(command);
			this.handleMoldYear(command);
		},
		// 点击年，获取大任务-小任务
		handleMoldYear (index) {
			this.MoldYearIndex = index;
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
			this.moldYearMap = this.moldYearList[index];
			this.chapterId = this.moldYearList[index].chapterId;
			this.clazzYearsPushId = this.moldYearList[index].clazzYearsPushId;
			this.defaultMoldYearsId = this.moldYearList[index].defaultMoldYearsId;
			this.getSubtaskTaskList();
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
			this.$router.push({
				name: item.taskUrl,
				query: {
					'moldId': this.moldId || '',
					'chapterId': this.chapterId || '',
					'subtaskId': item.subtaskId || '',
					'taskId': item.taskId || ''
				}
			});
			this.dialogTaskVisible = true;
		},
		_handDialog (index) {
			let item = this.marketArr[index];
			this.dialogTitle = item.label;
			this.marketType = item.marketType;
			this.dialogMarketVisible = true;
		},
		// 切换大任务
		_handleSubtaskRouter (index) {
			this.moldYearIndex = index;
			this.changeScroll(index);
			let item = this.MoldSubtaskArr[index];
			this.taskListArr = item.taskInfoList || [];
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
					this.moldVisible = false;
					this.MoldSubtaskArr = res.data;
					this._handleSubtaskRouter(0);
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
		}
	}
};
</script>

<style lang="scss">
@import './img3/index.scss';
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
<style lang="scss" scoped>

</style>
