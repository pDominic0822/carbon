<!--
 * @Date: 2019-10-14 10:09:07
 -->
<template>
  <div class="indexbd">
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
		<div class="tabsList tabsList-left">
			<div class="tabsBut" v-for="(tabItem,index) in tabListLeft" @click="_handleTabs(index)" :key="index">
				{{tabItem.label}}
			</div>
		</div>
		<div class="tabsList tabsList-right">
			<div class="tabsBut" v-for="(tabItem,index) in tabListRight" :key="index">
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
	<div class="yearListBox clearfix">
		<div class="fl">
			<p class="fl namstt">
				当前企业经营年
			</p>
			<!-- <ul class="year-box">
				<li v-for="(item, index) in moldYearList" @click="handleMoldYear(index)"
				:class="{'active': MoldYearIndex === index}" :key="index">
					{{index + 1}}
				</li>
			</ul> -->
		</div>
		<div class="fl tabsli" :class="{'leng' : moldYearList.length === 5}">
			<span class="meau"
			:style='{left: meauLeft + "px", top: "2px"}'
			>
			</span>
			<ul >
				<li :class="{'active': MoldYearIndex === index}" v-for="(item, index) in moldYearList" @click="_handlePattern(index)" :key="index">
					{{item.yearsTime}}
					<i :class="item.isOpen === 1 ? 'el-icon-unlock' : 'el-icon-lock'"></i>
				</li>
			</ul>
		</div>
		<div class="fr">
			<p class="fl namstt">
				当前角色：
			</p>
			<div class="treasurer" v-for="(item, index) in actorIndustryArr" :key="index">
				<div class="trimg"></div>
				{{item.name}}
			</div>
		</div>
	</div>
	<div class="working-box">
		<div class="task-left">
			<ul class="taskaa clearfix">
				<li v-for="(item, index) in leftSubtask" @click="_handleSubtaskRouter(item.MoldIndex)" :key="index">
					<p class="text">
						{{item.MoldIndex + 1}}
					</p>
					<p class="subtask-name">
						{{item.taskName}}
					</p>
					<p class="sublock">
						<i :class="item.isPush === 1 ? 'el-icon-unlock' : 'el-icon-lock'"></i>
					</p>
				</li>
			</ul>
		</div>
		<div class="task-bottom">
			<ul class="taskaa">
				<li v-for="(item, index) in bottomSubtask" @click="_handleSubtaskRouter(item.MoldIndex)" :key="index">
					<p class="text">
						{{item.MoldIndex + 1}}
					</p>
					<p class="subtask-name">
						{{item.taskName}}
					</p>
					<p class="sublock">
						<i :class="item.isPush === 1 ? 'el-icon-unlock' : 'el-icon-lock'"></i>
					</p>
				</li>
			</ul>
		</div>
		<div class="task-right">
			<ul class="taskaa">
				<li v-for="(item, index) in rightSubtask" @click="_handleSubtaskRouter(item.MoldIndex)" :key="index">
					<p class="text">
						{{item.MoldIndex + 1}}
					</p>
					<p class="subtask-name">
						{{item.taskName}}
					</p>
					<p class="sublock">
						<i :class="item.isPush === 1 ? 'el-icon-unlock' : 'el-icon-lock'"></i>
					</p>
				</li>
			</ul>
		</div>
		<el-row :gutter="20">
			<el-col :span="6">
				<div class="box-iii sencet-list sencet-list1">
					<i class="ii1 ii"></i>
					<i class="ii2 ii"></i>
					<i class="ii3 ii"></i>
					<i class="ii4 ii"></i>
					<div class="inters">
						任务
						<ul class="clearfix taskiliss">
							<li v-for="(stepitem, stepIndex) in taskListArr"
							@click="_handleTask(stepIndex)"
							:key="stepIndex" >
								<div class="fl rrr4444">
									<p class="ellipsis nnss">
										{{stepIndex + 1}}
									</p>
									<p class="tasn ellipsis">
										{{stepitem.taskName}}
									</p>
								</div>
								<div class="fl rr555">
									<p class="tasn">
										{{stepitem.industryName}}
									</p>
								</div>
								<i class="taskstate el-icon-s-flag"></i>
								<!-- <div class="bigfont">
									{{ stepitem.industryName && stepitem.industryName.substring(0, 1) }}
								</div> -->
								<!--
								<div class="trianle"></div> -->
							</li>
						</ul>
					</div>
				</div>
				<div class="box-iii sencet-list mt15 sencet-list2">
					<i class="ii1 ii"></i>
					<i class="ii2 ii"></i>
					<i class="ii3 ii"></i>
					<i class="ii4 ii"></i>
					<div class="inters">
						公告规则
						<div class="paramtelllrlll mt20">
							<ul class="clearfix">
								<li v-for="(paramteritem, paramterIndex) in paramterArr" @click="_handleParams(paramteritem)"
								:key="paramterIndex">
									<p>{{paramteritem.name}}</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="box-iii sencet-list  sencet-list3">
					<i class="ii1 ii"></i>
					<i class="ii2 ii"></i>
					<i class="ii3 ii"></i>
					<i class="ii4 ii"></i>
					<div class="inters">
						生产线状态：
						<el-row :gutter="20" class="mt15">
							<el-col :span="6" :key="paramterIndex" v-for="(item, paramterIndex) in yearPenter">
								<p class="tttee">
									{{item.name}}&nbsp;|&nbsp;{{item.info}}
								</p>
							</el-col>
						</el-row>
						<el-row :gutter="20" class="bllddli">
							<el-col :span="8">
								<div class="tests">
									<p class="mt10">
										{{$store.state.ownCashAmount | formatNumber}}元
									</p>
									<img src="./img1/m1.png" width="26px" alt="">
									<img src="./img1/m1.png" width="26px" alt="">
								</div>
								<p class="nastit">
									现金余额
								</p>
							</el-col>
							<el-col :span="8">
								<div class="tests">
									<p class="mt10">
										{{$store.state.greenLoansAmount  | formatNumber }}元
									</p>
									<img src="./img1/m1.png" width="26px" alt="">
									<img src="./img1/m1.png" width="26px" alt="">
								</div>
								<p class="nastit">
									绿贷余额
								</p>
							</el-col>
							<el-col :span="8">
								<div class="tests">
									<p class="mt10">
										{{$store.state.productionMaterialsAmount}}包
									</p>
									<img src="./img1/y1.png" width="40px" alt="">
									<img src="./img1/y1.png" width="40px" alt="">
								</div>
								<p class="nastit">
									原材料
								</p>
							</el-col>
							<!-- <el-col :span="6">
								<div class="tests">
									<p class="mt10">
										{{$store.state.productionMaterialsAmount}}包
									</p>
									<img  src="./img1/c1.png" width="56px" style="margin-top:20px" alt="">
								</div>
								<p class="nastit">
									产品
								</p>
							</el-col> -->
						</el-row>
						<el-row :gutter="20" class="bllddli">
							<el-col :span="24">
								<div class="tests dingdandd">
									<template v-if="$store.state.OrgDeliverState === -1">
										未选订单
									</template>
									<!-- 订单未交付 -->
									<template v-if="$store.state.OrgDeliverState === 0">
										<el-tag class="tesss"  type="success">订单数量：{{$store.state.OrgDeliverRecord.orderCount || 0}}包</el-tag>
										<el-tag   class="tesss"  type="success">订单单价：{{$store.state.OrgDeliverRecord.unitPrice || 0}}元/包</el-tag>
										<el-tag  class="tesss" type="danger">违约单价：{{($store.state.OrgDeliverRecord.unitPrice || 0) * 2}}元/包</el-tag>
									</template>
									<!-- 订单已交付 -->
									<template v-if="$store.state.OrgDeliverState === 1">
										<el-tag class="tesss"  type="success">订单数量：{{$store.state.OrgDeliverRecord.orderCount || 0}}包</el-tag>
										<el-tag   class="tesss"  type="success">订单单价：{{$store.state.OrgDeliverRecord.unitPrice || 0}}元/包</el-tag>
										<el-tag  class="tesss" type="danger">违约单价：{{($store.state.OrgDeliverRecord.unitPrice || 0) * 2}}元/包</el-tag>
										<br>
										<el-tag class="tesss"  type="success">交付数量：{{$store.state.OrgDeliverRecord.deliverCount || 0}}包</el-tag>
										<el-tag class="tesss"  type="success">违约数量：{{$store.state.OrgDeliverRecord.violationCount || 0}}包</el-tag>
										<el-tag  class="tesss" type="warning">违约金额：{{($store.state.OrgDeliverRecord.unitPrice || 0) * 2 * ($store.state.OrgDeliverRecord.violationCount || 0)}}元</el-tag>
									</template>
								</div>
							</el-col>
						</el-row>
						<el-row :gutter="20" class="bllddli">
							<el-col :span="12">
								<div class="box-inter">
									碳配额
									<p class="fr">
										{{$store.state.carbonQuotaAmount | formatNumber}} KG
									</p>
								</div>
							</el-col>
							<el-col :span="12">
								<div class="box-inter thye">
									碳汇余额
									<p class="fr">
										{{$store.state.carbonSinkAmount| formatNumber}} KG
									</p>
								</div>
							</el-col>
						</el-row>
						<el-row :gutter="20" class="dianli">
							<el-col :span="12">
								<p>
									绿电: {{$store.state.greenPowerAmount | formatNumber}} 度
								</p>
								<div class="splist">
									<i class="full"></i>
									<i class="full"></i>
									<i class="full"></i>
									<i class="full"></i>
									<i></i>
								</div>
							</el-col>
							<el-col :span="12">
								<p>
									煤电: {{$store.state.coalPowerAmount| formatNumber}} 度
								</p>
								<div class="splist meidian">
									<i class="full"></i>
									<i class="full"></i>
									<i class="full"></i>
									<i class="full"></i>
									<i></i>
								</div>
							</el-col>
						</el-row>
					</div>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="box-iii sencet-list sencet-list4">
					<i class="ii1 ii"></i>
					<i class="ii2 ii"></i>
					<i class="ii3 ii"></i>
					<i class="ii4 ii"></i>
					<div class="inters">
						市场
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
					</div>
				</div>
				<div class="box-iii sencet-list mt15 sencet-list5">
					<i class="ii1 ii"></i>
					<i class="ii2 ii"></i>
					<i class="ii3 ii"></i>
					<i class="ii4 ii"></i>
					<div class="inters">
						证书
						<ul class="zslist">
							<li>
								<img src="./img1/zs1.png"  alt="">
								<p>
									证书*1
								</p>
							</li>
							<li>
								<img src="./img1/zs2.png"  alt="">
								<p>
									证书*2
								</p>
							</li>
							<li>
								<img src="./img1/zs3.png"  alt="">
								<p>
									证书*4
								</p>
							</li>
						</ul>
					</div>
				</div>
			</el-col>
		</el-row>
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
				<selectOrg @selectOrgSuccess="getSelectOrg"></selectOrg>
			</div>
		</div>
	</div>
	<!-- 弹窗五：规则参数 -->
	<div class="mask-write11" v-if="DialogParamsVisible" >
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
	</div>
	<!-- 弹窗五：规则参数 -->
	<div class="mask-write11" v-if="DialogOrderVisible" >
		<div class="mask-box mask-org-box" style="width:1200px" v-if="DialogOrderVisible" >
			<div class="marsk-titles" v-drag>
				<i class="el-icon-error" @click="DialogOrderVisible = false"></i>
				<div class="pstli">
					<div class="tliiii fl">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					预制订单
					<div class="tliiii fr">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
			<div class="mt40 views-see">
				<deferOrder :teacherCode="'student'" :moldId="moldId"></deferOrder>
			</div>
		</div>
	</div>
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
import orgIndustry from '@@/student/selectOrg/orgIndustry';
import deferData from '@@/teacher/deferData/deferData';
import deferOrder from '@@/teacher/deferData/deferOrder';
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
		StepAnswer,
		deferData,
		orgIndustry,
		deferOrder,
		selectOrg
	},
	data () {
		return {
			dialoggrcreditVisible: false,
			marketArr: marketArr,
			textArrContent: [],
			leftSubtask: [],
			bottomSubtask: [],
			rightSubtask: [],
			// getPropertyAllStatis: getPropertyAllStatis,
			shopList: shopList,
			moldVisible: false,
			dialogTaskTextVisible: false,
			dialogMarketVisible: false,
			DialogParamsVisible: false,
			DialogOrderVisible: false,
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
			meauLeft: 0,
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
			actorIndustryArr: [
				{
					name: '11'
				},
				{
					name: '23'
				},
				{
					name: '3'
				},
				{
					name: '4'
				},
				{
					name: '4'
				}
			],
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
					name: '预制订单',
					code: 'DialogOrderVisible'
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
			tabListLeft: [
				{
					label: '模式切换',
					code: 'moldVisible'
				},
				{
					label: '角色分配',
					code: 'isUserIndustryVisible'
				},
				{
					label: '小组信息',
					code: 'DialogOrgVisible'
				}
			],
			tabListRight: [
				{
					label: '权益排名',
					code: 'DialogOrgVisible'
				},
				{
					label: '小组成绩',
					code: 'isUserIndustryVisible'
				},
				{
					label: '学习总结',
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
		getSelectOrg () {
			this.getRole();
		},
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
		_handlePattern (index) {
			// this.patternIndex = index;

			this.handleMoldYear(index);
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
			if (code === 'DialogOrderVisible') {
				this.DialogOrderVisible = true;
			}
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
			let code = this.tabListLeft[index].code;
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

			// 年的样式切换
			let arr = [
				5,
				124,
				124 + 119,
				124 + 119 + 119 + 9,
				124 + 119 + 119 + 119 + 9 + 9,
				124 + 119 + 119 + 119 + 119,
				124 + 119 + 119 + 119 + 119 + 119
			];
			this.meauLeft = arr[index];

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
			// 获取生产线状态
			this.$store.commit('getstOrgRetrofitRecord', '');
			// 获取订单状态
			this.$store.commit('getOrgChooseOrder', '');
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
			// if (item.isPush === 0) {
			// 	this.$confirm('当前大任务老师未开启，请等待老师开启', '提示', {
			// 		confirmButtonText: '确定',
			// 		center: true,
			// 		showCancelButton: false,
			// 		type: 'warning'
			// 	}).then(() => {

			// 	}).catch(() => {
			// 	});
			// 	return false;
			// }
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
					for (let index = 0; index < res.data.length; index++) {
						const element = res.data[index];
						element.MoldIndex = index;
					}
					this.MoldSubtaskArr = res.data;
					this.leftSubtask = res.data.slice(0, 5);
					this.bottomSubtask = res.data.slice(5, 12);
					this.rightSubtask = res.data.slice(12, 18);
					// this.rightSubtask.sort((a, b) => {
					// 	return b.carbonRightsTotal - a.carbonRightsTotal;
					// });
					// 截取数据，坐：5个，下：8 ，右：5个
					// this._handleSubtaskRouter(0);
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
@import './css/index1.scss';
</style>

<style lang="scss" scoped>
</style>
