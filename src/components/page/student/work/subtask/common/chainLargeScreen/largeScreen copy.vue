<!--
* @Author: liujiatian
* @Date: 2019-02-25 20:45:37
-->
<template>
	<div class='largeCon'>
		<!-- 标题、logo -->
		<div class='logoCon'>
			<img src="./img/logo.png" alt="" class='logoImg'>
			<div class="imgTitle">
				供应链金融运行全景图
			</div>
		</div>
		<!-- 显示权限 -->
		<div class='largeNavDiv'>
			<ul class='largeNav'>
				<li v-for='(item, index) in navArr' :key='index' @mouseenter="onMouseenter(index)">
					<p>{{item.navName}}</p>
					<template>
						<div class='modelMenu' :class='"modelMenu" + index'>
							<div class='menuDiv'>
								<img src="./img/triangle.png" alt="" class='triangleImg'>
								<ul class='menuUl'>
									<li v-for='(itemObj, i) in item.jurisdictionArr' :key='i'>
										<div class='parentDiv'>
											<div class='checkDiv' @click="onSelectAll(itemObj)">
												<img src="./img/check.png" alt="" v-if='itemObj.checked' class='checkImg'>
												<img src="./img/noCheck.png" alt="" v-else class='checkImg'>
												<p>{{itemObj.label}}</p>
											</div>
											<!-- 打开下面的子选择 -->
											<div class='openDiv'  @click="onOpenList(itemObj)" v-if='itemObj.children && itemObj.children.length > 0'>
												<img src="./img/top.png" alt="" v-if='itemObj.isOpen' class='openImg'>
												<img src="./img/bottom.png" alt="" v-else class='openImg'>
											</div>
										</div>
										<!-- 子选项 -->
										<ul v-if='itemObj.isOpen && itemObj.children && itemObj.children.length > 0' class='menulSonUl'>
											<li v-for='(itemSon, j) in itemObj.children' :key='j'>
												<div class='sonDiv' @click="onSingleChoice(itemSon, itemObj)">
													<template>
														<img src="./img/check.png" alt="" v-if='itemSon.checked' class='checkImg'>
														<img src="./img/noCheck.png" alt="" v-else class='checkImg'>
													</template>
													<p>{{itemSon.label}}</p>
												</div>
											</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</template>
				</li>
			</ul>
		</div>
		<div class='contentDiv'>
			<div class='baseMap'>
				<img src="./img/layer.png" alt="">
			</div>
			<div class="eacMap">
				<!-- 所有的名称 -->
				<moduleName :IscheckedName="IscheckedName"></moduleName>
				<!-- 线 -->
				<lineLayer :showPointArr='showPointArr' :showLineArr="showLineArr" :showLineSpetArr="showLineSpetArr"></lineLayer>
				<!-- 显示信息 -->
				<!-- <displayInformation :inforData='inforData'></displayInformation> -->
			</div>
		</div>
		<!-- 版权 -->
		<div class='copyright'>
			<img src="./img/logo.png" alt="" class='logoImg'>
			<div>
				<b></b>
				<span>企业经营碳沙盘</span>
			</div>
			<p>Copyright © 2021 北京知链科技有限公司版权所有，保留所有权利</p>
		</div>
		<!--  -->
		<ul v-if='itemObj.isOpen && itemObj.children && itemObj.children.length > 0' class='menulSonUl'>
			<li v-for='(itemSon, j) in itemObj.children' :key='j'>
				<div class='sonDiv' @click="onSingleChoice(itemSon, itemObj)">
					<template>
						<img src="./img/check.png" alt="" v-if='itemSon.checked' class='checkImg'>
						<img src="./img/noCheck.png" alt="" v-else class='checkImg'>
					</template>
					<p>{{itemSon.label}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import moduleName from './moduleName';
import lineLayer from './lineLayer';
import displayInformation from './displayInformation';
import { flowOrderLine } from './json/json2';
import { allPoint } from './json/json';
export default {
	name: 'login',
	data () {
		return {
			that: this,
			IscheckedName: true,
			// navArr: ['名称', '业务交互线', '四流合一'],
			navArr: [
				{
					navName: '名称',
					jurisdictionArr: [
						{
							label: '显示部门名称',
							checked: true
						},
						{
							label: '显示业务步骤名称',
							checked: true
						}
					]
				},
				{
					navName: '业务交互线',
					jurisdictionArr: [
						{
							label: '采购订单',
							checked: true,
							isOpen: true,
							children: [
								{
									code: 'orderA1',
									label: '现金采购',
									checked: true
								},
								{
									code: 'orderA2',
									label: '区块链应收款采购',
									checked: true
								}
							]
						},
						{
							label: '销售订单',
							checked: true,
							isOpen: true,
							children: [
								{
									code: 'orderB1',
									label: '直接收款',
									checked: true
								},
								{
									code: 'orderB2',
									label: '预收全款',
									checked: true
								},
								{
									code: 'orderB3',
									label: '预收定金',
									checked: true
								}
							]
						},
						{
							label: '采购订单',
							checked: true,
							isOpen: true,
							children: [
								{
									code: 'orderC1',
									label: '建筑现金采购',
									checked: true
								},
								{
									code: 'orderC2',
									label: '建筑应收款采购',
									checked: true
								}
							]
						}
					]
				},
				{
					navName: '四流合一',
					jurisdictionArr: [
						{
							label: '商流',
							checked: true,
							isOpen: false,
							formCode: 'flowA'
						},
						{
							label: '资金流',
							checked: true,
							isOpen: false,
							formCode: 'flowB'
						},
						{
							label: '信息流',
							checked: true,
							isOpen: false,
							formCode: 'flowC'
						},
						{
							label: '物流',
							checked: true,
							isOpen: false,
							formCode: 'flowD'
						}
					]
				}
			],
			// 菜单权限
			jurisdictionArr: [],
			showPointArr: [],
			showLineArr: [],
			showLineSpetArr: [],
			// 展示所有的点
			pointArrCode: {
			},
			// 选中线的数据
			layerData: [],
			// 显示信息
			inforData: []
		};
	},
	inject: ['reload'],
	components: {
		moduleName,
		lineLayer,
		displayInformation
	},
	created () {
		this.onChangeCommonData();
	},
	methods: {
		// 1、权限部分
		// 移入事件
		onMouseenter (index) {
		},
		// 展开收起
		onOpenList (itemObj) {
			this.$set(itemObj, 'isOpen', !itemObj.isOpen);
		},
		// 更改显示权限-全选
		onSelectAll (itemObj) {
			this.$set(itemObj, 'checked', !itemObj.checked);

			// 判断是否展示
			let children = itemObj.children || [];
			for (let index = 0; index < children.length; index++) {
				const element = children[index];
				if (itemObj.checked) {
					this.$set(element, 'checked', true);
				} else {
					this.$set(element, 'checked', false);
				}
			}
			this.onChangeCommonData();
		},
		// 单选
		onSingleChoice (itemSon, itemObj) {
			this.$set(itemSon, 'checked', !itemSon.checked);

			// 判断是否全选展示
			let children = itemObj.children;
			let a = 0;
			for (let index = 0; index < children.length; index++) {
				const element = children[index];
				if (element.checked) {
					a++;
				}
			}
			if (a === children.length) {
				this.$set(itemObj, 'checked', true);
			} else {
				this.$set(itemObj, 'checked', false);
			}
			this.onChangeCommonData();
		},
		// 更改传入子组件参数
		onChangeCommonData () {
			// 1、第一个组件
			this.IscheckedName = this.navArr[0].jurisdictionArr[0].checked;
			// 2、第二个组件
			let jurisArr2 = this.navArr[1].jurisdictionArr;
			// 取出来需要所有展示的订单类型
			let orderCodeArr = [];
			jurisArr2.forEach(element => {
				element.children.forEach(order => {
					if (order.checked) {
						orderCodeArr.push(order.code);
					}
				});
			});
			console.log(orderCodeArr);
			// 3、第三个组件
			let jurisArr3 = this.navArr[2].jurisdictionArr;
			// 取出来需要所有展示的订单类型
			let flowCodeArr = [];
			jurisArr3.forEach(element => {
				if (element.checked) {
					flowCodeArr.push(element.formCode);
				}
			});
			console.log(flowCodeArr);

			// 4、重组需要展示的点
			let showPointArr = []; // 需要展示的点
			let showLineArr = []; // 需要展示的线
			let showLineSpetArr = []; // 需要展示的线的箭头

			// TODO 1、先拼接连线
			orderCodeArr.forEach(element => {
				let orderMap = flowOrderLine[element] || {};
				flowCodeArr.forEach(flow => {
					if (orderMap[flow]) {
						showLineArr.push(...orderMap[flow]); // 线处理
					}
				});
			});
			let hasShowArr = [];
			showLineArr.forEach(element => {
				// 重组线的样式
				element.lineStyle = {
					normal: {
						color: element.color,
						curveness: element.curveness
					}
				};
				// 通过线的数组---拼接线的箭头
				// TODO 3、根据线确定，箭头-跟线是一样的
				console.log(element.source);
				console.log(allPoint[element.source].value);
				console.log(element.target);
				console.log(allPoint[element.target].value);
				showLineSpetArr.push({
					coords: [
						allPoint[element.source].value,
						allPoint[element.target].value
					],
					lineStyle: {
						normal: {
							color: element.color,
							curveness: element.curveness
						}
					}
				});
				// TODO 2、根据连线source，target，去重，确定点，根式要根据echarts
				if (hasShowArr.indexOf(element.source) === -1) { // 点是否在数组里面
					let obj = {
						name: element.source,
						symbol: 'none',
						...allPoint[element.source]
					};
					showPointArr.push(obj);
					hasShowArr.push(element.source);
				}
				if (hasShowArr.indexOf(element.target) === -1) {
					let obj = {
						name: element.target,
						symbol: 'none',
						...allPoint[element.target]
					};
					showPointArr.push(obj);
					hasShowArr.push(element.target);
				}
			});
			// console.log(showPointArr);
			// console.log(showLineArr);
			console.log(showLineSpetArr);
			this.showPointArr = showPointArr;
			this.showLineArr = showLineArr;
			this.showLineSpetArr = showLineSpetArr;
		}
	}
};
</script>

<style lang="scss" scoped>
.largeCon::-webkit-scrollbar{
	width: 8px;
	height: 8px;
}
.eacMap{
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
}
.largeCon::-webkit-scrollbar-thumb{
	height: 20px;
	background-color: #c7e1ff;
}
.largeCon{
	width: 100%;
	// height: 100%;
	background: url('./img/conBg.png') no-repeat center center;
	background-size: cover;
	overflow: auto;
	min-height: 1300px;
	position: relative;
	.logoCon{
		width: 100%;
		min-width: 1941px;
		height: 80px;
		margin: 0 auto;
		background: url('./img/largTitleBg.png') no-repeat center center;
		background-size: 100% 100%;
		position: relative;
		text-align: center;
		.logoImg{
			height: 33px;
			position: absolute;
			left: 120px;
			top: 18px;
		}
		.imgTitle{
			height: 31px;
			margin-top: 23px;
			color: #66b1ff;
			font-size: 30px;
			float: left;
			width: 100%;
			text-align: center;
		}
	}
	.contentDiv{
		width: 2000px;
		height: 1000px;
		// padding: 30px;
		margin: 0 auto;
		margin-top: 80px;
		position: relative;
		// top: 50%;
		// transform: translateY(-50%);
		// transform: translateY(-50%);
		// -ms-transform: translateY(-50%);
		// -moz-transform: translateY(-50%);
		// -webkit-transform: translateY(-50%);
		// -o-transform:translateY(-50%, -50%);
		.baseMap{
			width: 100%;
			height: 100%;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.echartsDiv{
			position: absolute;
			top: 0;
			left: 0;
			width: 1941px;
			height: 932px;
		}
	}
	.largeNavDiv{
		width: 100%;
		min-width: 1941px;
		position: absolute;
		top: 0;
		.largeNav{
			position: absolute;
			top: 30px;
			right: 4.5%;
			z-index: 2;
			>li{
				float: left;
				color: #ffffff;
				font-size: 13px;
				margin-left: 35px;
				position: relative;
				overflow: visible;
				>p{
					line-height: 18px;
					position: relative;
					z-index: 3;
				}
				.modelMenu{
					display: none;
					width: 211px;
					position: absolute;
					top: 0;
					left: -105px;
					padding-top: 32px;
					.menuDiv{
						background: #102945;
						border: 1px solid rgba(60, 202, 223, 0.4);
						border-radius: 10px;
						.triangleImg{
							position: absolute;
							top: 22px;
							left: 50px;
							height: 11px;
						}
						.menuUl{
							max-height: 500px;
							overflow: auto;
							border-radius: 10px;
							>li{
								.parentDiv{
									overflow: hidden;
									padding: 0 16px 0 18px;
									height: 48px;
									border-bottom: 1px solid #1D657D;
									border-radius: 3px;
									.checkDiv{
										float: left;
										cursor: pointer;
										.checkImg{
											float: left;
											width: 12px;
											height: 12px;
											margin-top: 18px;
										}
										p{
											float: left;
											margin-left: 8px;
											line-height: 48px;
											max-width: 130px;
											overflow: hidden;
											text-overflow:ellipsis;
											white-space: nowrap;
										}
									}
									.openDiv{
										float: right;
										.openImg{
											height: 8px;
											margin-top: 20px;
											cursor: pointer;
										}
									}
								}
								.menulSonUl{
									background: #091B2E;
									padding: 10px 0;
									li{
										.sonDiv{
											overflow: hidden;
											cursor: pointer;
											margin: 0 16px 0 40px;
											height: 30px;
											display: inline-block;
											.checkImg{
												float: left;
												width: 12px;
												height: 12px;
												margin-top: 9px;
											}
											p{
												float: left;
												margin-left: 8px;
												line-height: 30px;
												max-width: 130px;
												overflow: hidden;
												text-overflow:ellipsis;
												white-space: nowrap;
											}
										}
									}
								}
							}
						}
						.menuUl::-webkit-scrollbar{
							width: 0;
							height: 0;
						}
						.menuUl::-webkit-scrollbar-thumb{
							height: 0px;
						}
					}
				}
				.modelMenu0{
					left: -84px;
					.menuDiv{
						.triangleImg{
							left: 84px;
						}
					}
				}
				.modelMenu1{
					left: -68px;
					.menuDiv{
						.triangleImg{
							left: 85px;
						}
					}
				}
				.modelMenu2{
					left: -130px;
					.menuDiv{
						.triangleImg{
							left: 142px;
						}
					}
				}
			}
			>li:hover{
				.modelMenu{
					display: block;
				}
			}
		}
	}
	.copyright{
		width: 100%;
		min-width: 1941px;
		height: 72px;
		background: #515151;
		line-height: 72px;
		position: absolute;
		bottom: 0;
		left: 0;
		.logoImg{
			height: 33px;
			margin: 20px 0 0 120px;
			float: left;
		}
		div{
			float: left;
			overflow: hidden;
			b{
				float: left;
				width: 2px;
				height: 15px;
				margin: 30px 17px 0 18px;
				background: #cccccc;
			}
			span{
				color: #FFFFFF;
				font-size: 20px;
				float: left;
			}
		}
		p{
			float: right;
			color: #FFFFFF;
			font-size: 14px;
			margin-right: 120px;
			line-height: 72px;
		}
	}
}
</style>
