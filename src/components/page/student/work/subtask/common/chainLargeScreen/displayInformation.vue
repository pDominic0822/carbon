<!--
* @Author: liujiatian
* @Date: 2019-02-25 20:45:37
-->
<template>
	<div class='inforCon'>
		<template  v-for='(item, index) in inforArr'>
			<div v-if='item.isShow' :key='index' class='inforModel' :style="{'left': item.positions[0] + 'px', 'bottom':  item.positions[1] + 'px', 'z-index': item.zindex || 0}">
				<ul class='inforUl'>
					<template v-if='item.type === "secretkey"'>
						<li class='bgImgKey' :class='{"noBgImgKey": !whetherLightUpOne(item)}' @click="getSecretData(item)"><span>公钥</span> <span>私钥</span></li>
					</template>
					<template v-else>
						<template  v-for='(itemSon, index) in item.busList'>
							<li v-if='itemSon.isShow' :key='index'  :class='whetherLightUpTwo(itemSon)?"bgImg" + (index + 1):"noBgImg" + (index + 1)' @click="onLookSingleInfo(itemSon)">
								<template v-if='itemSon.name.length > 7'>
									<el-tooltip effect="dark" placement="top-start">
										<div slot="content" style='max-width:300px;line-height:24px;'>
											{{itemSon.name}}
										</div>
										<b>{{itemSon.name}}</b>
									</el-tooltip>
								</template>
								<template v-else>
									{{itemSon.name}}
								</template>
							</li>
						</template>
					</template>
				</ul>
				<div class='inforSwiper'>
					<!-- 有值的时候，点 -->
					<div class='activeSpot' :class='"color_" + item.color.split("#")[1]' v-if='whetherLightUpOne(item, index)'>
						<b v-for='(item, i) in new Array(item.spotNum)' :key='i'></b>
						<p :style='item.spotNum | spotStyle(that)'>
							<span v-for='(item, i) in new Array(3)' :key='i'></span>
						</p>
					</div>
					<div class='graySpot' v-else>
						<b v-for='(item, i) in new Array(item.spotNum)' :key='i'></b>
					</div>
				</div>
			</div>
		</template>
		<!-- 公私钥-->
		<el-dialog  append-to-body :visible.sync="isvisible1" width="600px" class='dominanceDialog'>
			<div class='dominanceHead'>
				<img src="./img/dialog01.png" alt="" class='headImg01'>
				<img src="./img/dialog02.png" alt="" @click="isvisible1 = false" class='headImg02'>
				<div>
					<img src="./img/dialog03.png" alt="" class='headImg03'>
					<p>{{dialogTitle}}</p>
					<img src="./img/dialog04.png" alt="" class='headImg04'>
				</div>
			</div>
			<div style='padding:0 30px 30px;'>
				<ul v-if='secretKey' class='secretUlKey'>
					<li v-for='(item, index) in secretKey' :key='index'>
						<div v-if='item.publickey'>
							<div class='keyCopy'>
								<img src="./img/ellipse01.png">
								<span v-if='index==0'> {{secretKey.length > 1 ? "第一公钥":"公钥"}}</span>
								<span v-else>第二公钥</span>
								<img src="./img/copy.png" alt="" data-clipboard-action="copy" class="cobyOrderSn" :data-clipboard-text="item.publickey" @click="copyText(index,1)">
							</div>
							<div class='keyContent'>
								-----BEGIN PUBLIC KEY-----<br>
								{{item.publickey}}
								<br>-----END PUBLIC KEY-----
							</div>
						</div>
						<div v-if='item.privatekey'>
							<div class='keyCopy'>
								<img src="./img/ellipse02.png">
								<span v-if='index==0'>{{secretKey.length > 1 ? "第一私钥":"私钥"}}</span>
								<span v-else>第二私钥</span>
								<img src="./img/copy.png" alt="" data-clipboard-action="copy" class="cobyOrderSn" :data-clipboard-text="item.privatekey" @click="copyText(index,2)">
							</div>
							<div class='keyContent'>
								-----BEGIN PRIVATE KEY-----<br>
								{{item.privatekey}}
								<br>-----END PRIVATE KEY-----
							</div>
						</div>
					</li>
				</ul>
			</div>
		</el-dialog>
		<!-- 标准弹框，简单的信息 -->
		<el-dialog  append-to-body :visible.sync="isvisible2" :width="widthSize + 'px'" class='dominanceDialog'>
			<div class='dominanceHead'>
				<img src="./img/dialog01.png" alt="" class='headImg01'>
				<img src="./img/dialog02.png" alt="" @click="isvisible2 = false" class='headImg02'>
				<div>
					<img src="./img/dialog03.png" alt="" class='headImg03'>
					<p>{{dialogTitle}}</p>
					<img src="./img/dialog04.png" alt="" class='headImg04'>
				</div>
			</div>
			<div style='padding:0 30px 30px;'>
				<!--  -->
				<div v-if='activeCode === "code4"' class='processCon'>
					<div class='proTitle'>额度控制位请求</div>
					<div class='imgLine1'>
						<img src="./img/2-4-01.png" alt="">
					</div>
					<ul>
						<li @click="activeName=index" v-for='(item, index) in activeTabs' :key='index' :class='{"active": index == activeName}'>{{item}}</li>
					</ul>
					<div v-if='activeName==2' class='sginActiveDiv'>
						<img src="./img/2-4-02.png" alt="">
						<p>中心管理系统签名信息</p>
					</div>
					<div class='bottomTr' :class='activeName == 0?"bottom1":activeName == 1?"bottom2":"bottom3"'>
						<img src="./img/triangleBottom.png" alt="">
					</div>
					<div class='processInput'>
						<template v-if='activeName==0'>
							<p>数字货币投放系统的标识信息：</p>
							<el-input v-model="businessObj1.digitalCurrencySystemInfo" placeholder="在此输入" readonly></el-input>
						</template>
						<template v-if='activeName==1'>
							<p>货币生成金额：</p>
							<el-input v-model="businessObj1.currencyAmount" placeholder="在此输入" readonly></el-input>
						</template>
						<template v-if='activeName==2'>
							<p>中心管理系统签名信息：</p>
							<el-input
							type="textarea"
							:rows="6"
							placeholder="在此输入"
							readonly
							v-model="businessObj1.signatureValue">
							</el-input>
						</template>
					</div>
				</div>
				<!--  -->
				<div class='choiceCon' v-if='activeCode === "code14"'>
					<div class='choiceDiv'>
						<div>
							<el-input value="股份制银行"  readonly class='select1'></el-input>
						</div>
						<img src="./img/line04.png" alt="">
						<div style='text-align:left;'>
							<el-input value="大型银行：11.0%"  readonly class='select2'></el-input>
							<el-input value="50亿"  readonly class='select3'></el-input>
							<el-input value="3-5次"  readonly class='select4'></el-input>
							<el-input value="550000000" placeholder="" class='select5'></el-input>
						</div>
					</div>
				</div>
				<!--  -->
				<div class='currencyCon' v-if='activeCode === "code21"'>
					<img src="./img/currency00.png" alt="">
					<div class='identInfor'>
						<p @click="secondaryDialog('中国人民银行标识信息', businessObj2.mainCodeFlag)"></p>
						<p @click="secondaryDialog('商业银行标识信息', businessObj2.changeCodeFlag)"></p>
					</div>
					<div class='currencyVer'>
						<div>¥ 100</div>
					</div>
					<div class='signModel'>
						<div>
							<img src="./img/currency04.png" alt="">
						</div>
					</div>
				</div>
				<!--  -->
				<div class='formReCon' v-if='activeCode === "code22"'>
					object { <br>
					<ul class='formReUl'>
						<li>
							<span>applicant_id：{{businessObj2.issueRoleFlag}}</span>
						</li>
						<li>
							<span>digital_currency_id：{{businessObj2.currencyRepo}}</span>
						</li>
						<li>
							<span>amount：5000000000</span>
						</li>
						<li>
							<span>digital_signature：</span>
							<div style='line-height:20px;'>
								{{businessObj2.issueSign}}
							</div>
						</li>
						<li>
							<span>digital_currency_name：</span>
							<div>
								{{businessObj1.ctrlBit}}
							</div>
						</li>
					</ul>
					}<br>
				</div>
				<!--  -->
				<div v-if='activeCode === "code33"' class='mt20'>
					<el-tree :data="walletTreeData" default-expand-all></el-tree>
				</div>
				<!--  -->
				<div class='iphoneModel' v-if='activeCode === "code34"'>
					<div class='iphoneCon'>
						<div class='walletPage'>
							<img src="./img/3-7-02.jpg" alt="">
						</div>
						<div class='iphoneRgba'>
							<h3>数字货币钱包服务协议</h3>
							<p>“数字货币钱包服务”（以下简称本服务）是由北京数字货币支付技术有限公司（以下简称本公司）向数字货币钱包用户提供的“数字货币钱包”软件系统（以下简称本系统）及(或)附随的 货款代收代付的中介服务。本协议由您和本公司签订。</p>
							<p>一、声明与承诺</p>
							<p>（一）您确认，在您注册成为数字货币钱包用户及接受本服务之前，你已充分阅读、理解并接受本协议的全部内容，一旦您使用本服务，即表示您同意遵循本协议之所有约定。</p>
							<p>（二）您同意，本公司有权随时对本协议内容进行单方面的变更，并以在本公司公告的方式予以公布，无需另行单独通知您；若您在本协议内容公告变更后继续使用本服务的，表示您已充分阅读、理解并接受修改后的协议内容，也将遵循修改后的协议内容使用本服务；若您不同意修改后的协议内容，您应停止使用本服务。</p>
						</div>
					</div>
				</div>
				<!--  -->
				<div class='dragDiv' v-if='activeCode === "code40"'>
					<div v-for='(item, index) in withdrawArr' :id="index" :key='index' class='dragItem'>
						{{item}}
					</div>
				</div>
				<!--  -->
				<div v-if='activeCode === "code43"'>
					<editorCommentDetails roleType='investor' :jsonData='businessObj3.investScriptJson'></editorCommentDetails>
				</div>
				<!--  -->
				<div v-if='activeCode === "code44"'>
					<editorCommentDetails roleType='sfc' :jsonData='businessObj3.sfcScriptJson'></editorCommentDetails>
				</div>
				<!--  -->
				<div v-if='activeCode === "code48"'>
					<div class='center'>
						<ul class='roleNavUl'>
							<li v-for='(item, index) in roleNav' :key='index' :class='{"active": roleType == item.type}' @click="onChangeRoleScript(item.type)">{{item.name}}</li>
						</ul>
					</div>
					<div class='trackingChainDiv'>
						<ul>
							<li>数字货币名：{{trackingChainObj1.digitalCurName}}</li>
							<li>交易时间：{{trackingChainObj1.tradeTime}}</li>
							<li>交易金额：{{trackingChainObj1.tradeMoney}}</li>
							<li>来源币：<span @click="onViewDetails(1)">查看明细</span></li>
							<li>来源币所有者信息：{{trackingChainObj1.fromCurInfo}}</li>
							<li>去向币：{{trackingChainObj1.toCur}}</li>
							<li>去向币所有者信息：{{trackingChainObj1.toCurInfo}}</li>
							<template v-if='roleType === "investor"'>
								<li>使用用途：无</li>
							</template>
							<template v-if='roleType === "sfc"'>
								<li>企业工商注册登记信息：无</li>
								<li>主体资格是否合法：无</li>
							</template>
							<li>转账账户：无</li>
						</ul>
						<div>
							<img src="./img/8-01.png" alt="">
						</div>
						<ul>
							<li>数字货币名：{{trackingChainObj2.digitalCurName}}</li>
							<li>交易时间：{{trackingChainObj2.tradeTime}}</li>
							<li>交易金额：{{trackingChainObj2.tradeMoney}}</li>
							<li>来源币：<span @click="onViewDetails(2)">查看明细</span></li>
							<li>来源币所有者信息：{{trackingChainObj2.fromCurInfo}}</li>
							<li>去向币：{{trackingChainObj2.toCur}}</li>
							<li>去向币所有者信息：{{trackingChainObj2.toCurInfo}}</li>
							<template v-if='roleType === "investor"'>
								<li>使用用途：{{trackingChainObj2.usePurpose}}</li>
							</template>
							<template v-if='roleType === "sfc"'>
								<li>企业工商注册登记信息：无</li>
								<li>主体资格是否合法：无</li>
							</template>
							<li>转账账户：{{trackingChainObj2.transferAccount}}</li>
						</ul>
					</div>
				</div>
				<!--  -->
				<div class='iphoneModel2' v-if='activeCode === "code53"'>
					<img src="./img/iphoneTop.png" alt="" class='iphoneToPimg'>
					<div class='iphoneCon'>
						<div class='headDiv'>
							<span style='color:#ffffff;'>我的</span>
						</div>
						<div class='balanceAmount1'>
							<el-tooltip class="item" effect="dark" :content="businessObj3.balance + ''" placement="top-start">
								<span>{{businessObj3.balance}}</span>
							</el-tooltip>
						</div>
						<div class='balanceAmount2'>0.00</div>
					</div>
				</div>
				<!--  -->
				<div v-if='activeCode === "code56" || activeCode === "code57"'>
					<editorCtComment :codeType='activeCode' :isLook='true' :jsonData='businessObj4.scriptJson'></editorCtComment>
				</div>
				<!--  -->
				<div class='iphoneModel2' v-if='activeCode === "code68"'>
					<img src="./img/iphoneTop.png" alt="" class='iphoneToPimg'>
					<div class='iphoneCon'>
						<div class='headDiv'>
							<span style='color:#ffffff;'>我的</span>
						</div>
						<div class='balanceAmount1'>
							<span>30000000</span>
						</div>
						<div class='balanceAmount2'>30000000</div>
					</div>
				</div>
				<div class='standardDiv' v-html='standardText' v-else></div>
			</div>
		</el-dialog>
		<!-- 二次弹框 -->
		<el-dialog  append-to-body :visible.sync="isvisible3" width="480px" class='dominanceDialog'>
			<div class='dominanceHead'>
				<img src="./img/dialog01.png" alt="" class='headImg01'>
				<img src="./img/dialog02.png" alt="" @click="isvisible3 = false" class='headImg02'>
				<div>
					<img src="./img/dialog03.png" alt="" class='headImg03'>
					<p>{{dialogTitle3}}</p>
					<img src="./img/dialog04.png" alt="" class='headImg04'>
				</div>
			</div>
			<div style='padding:0 30px 30px;'>
				<div class='standardDiv' v-html='dialogText3'></div>
			</div>
		</el-dialog>
		<!--  -->
		<el-dialog  append-to-body :visible.sync="isvisible4" width="320px" class='dominanceDialog dominanceDialog2'>
			<img class='clodeImg' src="./img/close.png" alt="" @click="isvisible4 = false;">
			<div>
				<ul class='decpUl'>
					<li>
						<div v-if='!dcepTree.isOpen1' class='divTwo textLeftDiv' style='background: #3F55C1;'>数字货币所有者标识信息<img src="./img/writeBottom.png" alt="" @click="dcepTree.isOpen1 = true"></div>
						<div v-else>
							<div style='background: #4343B5;' class='divOne'>货币所有者</div>
							<div style='background: #3F55C1;' class='divOne'>所有者私钥</div>
						</div>
						<div class='divTwo textLeftDiv' style='background: #2A72B8;'>数字货币投放系统签名信息</div>
					</li>
					<li style='height: 112px;padding-top: 47px;background: #009AC4;' v-if='!dcepTree.isOpen2'>
						额度控制位<img src="./img/writeBottom.png" alt="" @click="dcepTree.isOpen2 = true">
					</li>
					<li v-if='dcepTree.isOpen2'>
						<ul>
							<li>
								<div class='divThree textLeftDiv' style='background: #36B51C;line-height: 22px;padding-top: 15px;'>数字货币投放系统标识信息</div>
								<div class='divThree' style='background: #0093C4;'>货币生成金额</div>
							</li>
							<li>
								<template>
									<div  v-if='!dcepTree.isOpen3' class='divThree textLeftDiv' style='background: #66B517;' :class='{"encryption": dcepTree.isOpen4}'>
										加密唯一编号
										<img src="./img/writeBottom.png" alt="" @click="dcepTree.isOpen3 = true">
									</div>
									<div v-if='dcepTree.isOpen3'>
										<ul>
											<li>
												<div class='divFour' style='background: #00A5AB;line-height: 22px;padding-top: 19px;'>
													数字货币投放系统标识信息
												</div>
											</li>
											<li>
												<div class='divFour'  style='background: #0DAC77;'>
													随机数
												</div>
											</li>
											<li>
												<div v-if='!dcepTree.isOpen5' class='divFour'  style='background: #66B517;'>
													交易标识
													<img src="./img/writeBottom.png" alt="" @click="dcepTree.isOpen5 = true">
												</div>
												<ul v-if='dcepTree.isOpen5'>
													<li>
														<div class='divFour'  style='background: #66B517;'>
															货币金额
														</div>
													</li>
													<li>
														<div class='divFour' style='background: #97B500;line-height: 22px;padding-top: 19px;'>
															数字货币投放系统标识信息
														</div>
													</li>
												</ul>
											</li>
											<li>
												<div class='divFour'  style='background: #C4B50F;'>
													货币金额
												</div>
											</li>
										</ul>
									</div>
								</template>
								<template>
									<div v-if='!dcepTree.isOpen4' class='divThree' style='background: #03B39B;' :class='{"ident1": dcepTree.isOpen3, "ident2": dcepTree.isOpen5}'>
										交易标识
										<img src="./img/writeBottom.png" alt="" @click="dcepTree.isOpen4 = true">
									</div>
									<div v-if='dcepTree.isOpen4'>
										<ul v-if='!dcepTree.isOpen3'>
											<li>
												<div class='divFour' style='background: #03B39B;'>
													货币金额
												</div>
											</li>
											<li>
												<div class='divFour'  style='background: #C2991C;line-height: 22px;padding-top: 19px;'>
													数字货币投放系统标识信息
												</div>
											</li>
										</ul>
										<ul v-if='!dcepTree.isOpen5 && dcepTree.isOpen3'>
											<li>
												<div class='divFour' style='background: #03B39B;height: 144px;line-height: 144px;'>
													货币金额
												</div>
											</li>
											<li>
												<div class='divFour'  style='background: #C2991C;height: 144px;line-height: 22px;padding-top: 50px;'>
													数字货币投放系统标识信息
												</div>
											</li>
										</ul>
										<ul v-if='dcepTree.isOpen5'>
											<li>
												<div class='divFour' style='background: #03B39B;line-height: 144px;height: 144px;'>
													货币金额
												</div>
											</li>
											<li>
												<div class='divFour'  style='background: #C2991C;height: 216px;line-height: 22px;padding-top:86px;'>
													数字货币投放系统标识信息
												</div>
											</li>
										</ul>
									</div>
								</template>
							</li>
							<template>
								<li v-if='!dcepTree.isOpen6' style='height: 72px;line-height:72px;background: #C27D1C;'>
									额度控制系统签名信息
									<img src="./img/writeBottom.png" alt="" @click="dcepTree.isOpen6 = true">
								</li>
								<ul v-else>
									<li style='height: 72px;line-height:72px;background: #C27D1C;'>
										货币金额
									</li>
									<template>
										<li v-if='!dcepTree.isOpen7' style='height: 72px;line-height:72px;background: #C2611C;'>
											交易标识
											<img src="./img/writeBottom.png" alt="" @click="dcepTree.isOpen7 = true">
										</li>
										<ul v-else>
											<li style='height: 72px;line-height:72px;background: #C2611C;'>
												货币金额
											</li>
											<li style='height: 72px;line-height:72px;background: #C2461C;'>
												数字货币投放系统标识信息
											</li>
										</ul>
									</template>
									<li style='height: 72px;line-height:72px;background: #C12626;'>
										数字货币投放系统标识信息
									</li>
								</ul>
							</template>
						</ul>
					</li>
				</ul>
				<div class='levenDiv'>
					<p v-for='(item, index) in new Array(4)' :key="index" @click="onChangeLeven(index)">
						<img src="./img/leftIcon.png" alt="">
						<template v-if='index === 0'>一级</template>
						<template v-else-if='index === 1'>二级</template>
						<template v-else-if='index === 2'>三级</template>
						<template v-else-if='index === 3'>四级</template>
					</p>
				</div>
			</div>
		</el-dialog>
		<!-- 来源币明细 -->
		<el-dialog  append-to-body :visible.sync="isvisible5" width="700px" class='dominanceDialog'>
			<div class='dominanceHead'>
				<img src="./img/dialog01.png" alt="" class='headImg01'>
				<img src="./img/dialog02.png" alt="" @click="isvisible5 = false" class='headImg02'>
				<div>
					<img src="./img/dialog03.png" alt="" class='headImg03'>
					<p>来源币明细</p>
					<img src="./img/dialog04.png" alt="" class='headImg04'>
				</div>
			</div>
			<div style='padding:24px;'>
				<ul class='trackingRequir'>
					<li>
						<table class='demo-table'>
							<thead>
								<tr>
									<th width='60px;'>序号</th>
									<th>数字货币</th>
									<th width='120px;'>面额</th>
									<th width='120px;'>状态</th>
									<th>时间</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for='(item, index) in sourceCurrencyData' :key='index'>
									<td>{{index + 1}}</td>
									<td>{{item.code}}</td>
									<td>{{item.denomination}}</td>
									<td>{{item.state}}</td>
									<td>{{item.curTime}}</td>
								</tr>
							</tbody>
							<tbody v-if='sourceCurrencyData.length === 0'>
								<tr>
									<td :colspan="5">无数据</td>
								</tr>
							</tbody>
						</table>
					</li>
				</ul>
			</div>
		</el-dialog>
	</div>
</template>

<script>
import Clipboard from 'clipboard';
import editorCommentDetails from './common/editorCommentDetails';
import editorCtComment from './common/editorCtComment';
export default {
	name: 'login',
	props: ['inforData'],
	components: {
		editorCommentDetails,
		editorCtComment
	},
	data () {
		return {
			that: this,
			inforArr: [
				// 公私钥模块：secretkey
				{
					name: '额度控制系统',
					type: 'secretkey',
					code: 'system_quotacontrol',
					isShow: false,
					color: '#FFAC07',
					spotNum: 20,
					positions: [351.5, 738]
				},
				{
					name: '数字货币投放系统',
					type: 'secretkey',
					code: 'system_launch',
					isShow: false,
					color: '#FFAC07',
					spotNum: 20,
					positions: [236.5, 664]
				},
				{
					name: '中心管理系统',
					type: 'secretkey',
					code: 'system_centralsys',
					isShow: false,
					color: '#FFAC07',
					spotNum: 15,
					positions: [168.5, 547]
				},
				{
					name: '货币终端',
					type: 'secretkey',
					code: 'system_currencyterminal',
					isShow: false,
					color: '#FFAC07',
					spotNum: 10,
					positions: [51.5, 467]
				},
				{
					name: '中国人民银行',
					type: 'secretkey',
					code: 'system_pboc',
					isShow: false,
					color: '#FFAC07',
					spotNum: 10,
					positions: [94.5, 300]
				},
				{
					name: '商业银行',
					type: 'secretkey',
					code: 'system_bobt',
					isShow: false,
					color: '#FFAC07',
					spotNum: 8,
					positions: [401.5, 133]
				},
				{
					name: '投资人',
					type: 'secretkey',
					code: 'system_investor1',
					isShow: false,
					color: '#FFAC07',
					spotNum: 8,
					positions: [907.5, 189]
				},
				{
					name: '用户',
					type: 'secretkey',
					code: 'system_investor1',
					isShow: false,
					color: '#FFAC07',
					spotNum: 10,
					positions: [1377.5, 149]
				},
				{
					name: '筹资人',
					type: 'secretkey',
					code: 'system_funding',
					isShow: false,
					color: '#FFAC07',
					spotNum: 10,
					positions: [1650.5, 183]
				},
				{
					name: '数字货币发行登记机构',
					type: 'secretkey',
					code: 'system_issueregister',
					isShow: false,
					color: '#FFAC07',
					spotNum: 10,
					positions: [1174.5, 439]
				},
				{
					name: '监管机构',
					type: 'secretkey',
					code: 'sysytem_regulators',
					isShow: false,
					color: '#FFAC07',
					spotNum: 10,
					positions: [996.5, 512]
				},
				{
					name: '数字货币定制追踪系统',
					type: 'secretkey',
					code: 'system_customtracksystem',
					isShow: false,
					color: '#FFAC07',
					spotNum: 15,
					positions: [1313.5, 638]
				},
				{
					name: '数字货币支付系统',
					type: 'secretkey',
					code: 'system_paysystem',
					isShow: false,
					color: '#FFAC07',
					spotNum: 10,
					positions: [1432.5, 719]
				},
				{
					name: '数字货币交易付款登记系统',
					type: 'secretkey',
					code: 'system_tradepaysystem',
					isShow: false,
					color: '#FFAC07',
					spotNum: 20,
					positions: [1476.5, 850]
				},
				{
					name: '数字货币钱包服务端',
					type: 'secretkey',
					code: 'system_currencywalletservice',
					isShow: false,
					color: '#FFAC07',
					spotNum: 15,
					positions: [1213.5, 895]
				},
				{
					name: '数字货币钱包客户端',
					type: 'secretkey',
					code: 'system_investor1',
					isShow: false,
					color: '#FFAC07',
					spotNum: 20,
					positions: [1074.5, 827]
				},
				{
					name: '数字货币钱包终端',
					type: 'secretkey',
					code: 'system_walletterminal',
					isShow: false,
					color: '#FFAC07',
					spotNum: 10,
					positions: [811.5, 824]
				},
				{
					name: '钱包服务商',
					type: 'secretkey',
					code: 'system_walletserver',
					isShow: false,
					color: '#FFAC07',
					spotNum: 4,
					positions: [569.5, 795]
				},
				// 1、生成数字货币
				{
					color: '#04FDFF',
					isShow: false,
					spotNum: 5,
					zindex: 1,
					busList: [
						{
							code: 'code1',
							name: '1、数字货币投放系统的标识信息',
							isShow: false
						},
						{
							code: 'code2',
							name: '2、货币生成请求',
							isShow: false
						},
						{
							code: 'code4',
							name: '4、生成额度控制位请求',
							isShow: false
						}
					],
					positions: [368.5, 596]
				},
				{
					color: '#04FDFF',
					isShow: false,
					spotNum: 8,
					busList: [
						{
							code: 'code3',
							name: '3、签名信息',
							isShow: false
						}
					],
					positions: [233.5, 525]
				},
				{
					color: '#04FDFF',
					isShow: false,
					spotNum: 10,
					busList: [
						{
							code: 'code5',
							name: '5、交易标识',
							isShow: false
						},
						{
							code: 'code6',
							name: '6、额度控制系统签名信息',
							isShow: false
						}
					],
					positions: [412.5, 711]
				},
				{
					color: '#04FDFF',
					isShow: false,
					spotNum: 10,
					busList: [
						{
							code: 'code7',
							name: '7、额度控制位',
							isShow: false
						}
					],
					positions: [481.5, 671]
				},
				{
					color: '#04FDFF',
					isShow: false,
					spotNum: 15,
					busList: [
						{
							code: 'code8',
							name: '8、数字货币投放系统签名信息',
							isShow: false
						}
					],
					positions: [299.5, 636]
				},
				{
					color: '#04FDFF',
					isShow: false,
					spotNum: 5,
					busList: [
						{
							code: 'code9',
							name: '9、数字货币',
							isShow: false
						}
					],
					positions: [120.5, 429]
				},
				{
					color: '#04FDFF',
					isShow: false,
					spotNum: 8,
					busList: [
						{
							code: 'code10',
							name: '10、商业银行数字签名',
							isShow: false
						},
						{
							code: 'code11',
							name: '11、库标识信息',
							isShow: false
						},
						{
							code: 'code12',
							name: '12、商业银行标识信息',
							isShow: false
						},
						{
							code: 'code13',
							name: '13、货币发行请求',
							isShow: false
						}
					],
					positions: [665.5, 135]
				},
				{
					color: '#04FDFF',
					isShow: false,
					spotNum: 10,
					busList: [
						{
							code: 'code14',
							name: '14、风险审核模型',
							isShow: false
						},
						{
							code: 'code15',
							name: '15、发行次数',
							isShow: false
						},
						{
							code: 'code16',
							name: '16、发行额度',
							isShow: false
						},
						{
							code: 'code17',
							name: '17、存款准备金',
							isShow: false
						}
					],
					positions: [495.5, 380]
				},
				{
					color: '#04FDFF',
					isShow: false,
					spotNum: 5,
					busList: [
						{
							code: 'code18',
							name: '18、交易编号',
							isShow: false
						},
						{
							code: 'code19',
							name: '19、扣减金额',
							isShow: false
						}
					],
					positions: [432.5, 341]
				},
				{
					color: '#04FDFF',
					isShow: false,
					spotNum: 5,
					busList: [
						{
							code: 'code20',
							name: '20、发行张数',
							isShow: false
						},
						{
							code: 'code21',
							name: '21、归属人链条',
							isShow: false
						}
					],
					positions: [305.5, 271]
				},
				{
					color: '#04FDFF',
					isShow: false,
					spotNum: 5,
					busList: [
						{
							code: 'code22',
							name: '22、消息报文',
							isShow: false
						}
					],
					positions: [155.5, 273]
				},
				//
				{
					color: '#0ADBE1',
					isShow: false,
					spotNum: 4,
					zindex: 1,
					busList: [
						{
							code: 'code23',
							name: '23、用户标识',
							isShow: false
						},
						{
							code: 'code24',
							name: '24、登录用户名',
							isShow: false
						},
						{
							code: 'code25',
							name: '25、登录密码',
							isShow: false
						},
						{
							code: 'code53',
							name: '53、展示结果',
							isShow: false
						}
					],
					positions: [1126.5, 173]
				},
				{
					color: '#00C1FF',
					isShow: false,
					spotNum: 5,
					busList: [
						{
							code: 'code26',
							name: '26、公私钥串',
							isShow: false
						},
						{
							code: 'code35',
							name: '35、钱包终端签名',
							isShow: false
						},
						{
							code: 'code40',
							name: '40、取币指令',
							isShow: false
						},
						{
							code: 'code50',
							name: '50、钱包终端数字证书',
							isShow: false
						}
					],
					positions: [1022.5, 700]
				},
				{
					color: '#00C1FF',
					isShow: false,
					spotNum: 4,
					busList: [
						{
							code: 'code27',
							name: '27、钱包标识',
							isShow: false
						},
						{
							code: 'code32',
							name: '32、钱包合约哈希值',
							isShow: false
						},
						{
							code: 'code33',
							name: '33、钱包属性信息',
							isShow: false
						},
						{
							code: 'code34',
							name: '34、数字货币钱包服务协议',
							isShow: false
						},
						{
							code: 'code36',
							name: '36、钱包服务商签名',
							isShow: false
						},
						{
							code: 'code37',
							name: '37、数字货币钱包',
							isShow: false
						}
					],
					positions: [501.5, 845]
				},
				{
					color: '#07FF7D',
					isShow: false,
					spotNum: 5,
					zindex: 1,
					busList: [
						{
							code: 'code28',
							name: '28、证书序列号',
							isShow: false
						},
						{
							code: 'code29',
							name: '29、证书有效期',
							isShow: false
						},
						{
							code: 'code30',
							name: '30、登记机构数字签名',
							isShow: false
						},
						{
							code: 'code31',
							name: '31、用户数字证书',
							isShow: false
						}
					],
					positions: [1277.5, 526]
				},
				//
				{
					color: '#00C1FF',
					isShow: false,
					spotNum: 10,
					busList: [
						{
							code: 'code38',
							name: '38、钱包编码',
							isShow: false
						},
						{
							code: 'code39',
							name: '39、银行账号',
							isShow: false
						}
					],
					positions: [1153.5, 800]
				},
				{
					color: '#00C1FF',
					isShow: false,
					spotNum: 5,
					busList: [
						{
							code: 'code41',
							name: '41、实际转移金额',
							isShow: false
						},
						{
							code: 'code42',
							name: '42、找回金额',
							isShow: false
						}
					],
					positions: [1286.5, 858]
				},
				{
					color: '#C43CFF',
					isShow: false,
					spotNum: 15,
					busList: [
						{
							code: 'code58',
							name: '58、投资人签名',
							isShow: false
						},
						{
							code: 'code59',
							name: '59、取币金额',
							isShow: false
						}
					],
					positions: [1002.5, 368]
				},
				{
					color: '#C43CFF',
					isShow: false,
					spotNum: 10,
					busList: [
						{
							code: 'code43',
							name: '43、追踪脚本',
							isShow: false
						},
						{
							code: 'code56',
							name: '56、合同生效合约',
							isShow: false
						},
						{
							code: 'code57',
							name: '57、投资人投资请求合约',
							isShow: false
						}
					],
					positions: [1032.5, 279]
				},
				{
					color: '#FF4005',
					isShow: false,
					spotNum: 8,
					busList: [
						{
							code: 'code44',
							name: '44、追踪脚本',
							isShow: false
						},
						{
							code: 'code47',
							name: '47、监管机构签名信息',
							isShow: false
						}
					],
					positions: [769.5, 532]
				},
				{
					color: '#07FF7D',
					isShow: false,
					spotNum: 4,
					busList: [
						{
							code: 'code45',
							name: '45、追踪标识',
							isShow: false
						},
						{
							code: 'code46',
							name: '46、授权标识',
							isShow: false
						}
					],
					positions: [1535.5, 523]
				},
				{
					color: '#07FF7D',
					isShow: false,
					spotNum: 13,
					busList: [
						{
							code: 'code48',
							name: '48、追踪链条',
							isShow: false
						}
					],
					positions: [1387.5, 611]
				},
				{
					color: '#07FF7D',
					isShow: false,
					spotNum: 8,
					busList: [
						{
							code: 'code49',
							name: '49、安全模块签名',
							isShow: false
						}
					],
					positions: [884.5, 800]
				},
				{
					color: '#07FF7D',
					isShow: false,
					spotNum: 8,
					busList: [
						{
							code: 'code51',
							name: '51、钱包信息',
							isShow: false
						},
						{
							code: 'code52',
							name: '52、钱包服务商签名',
							isShow: false
						}
					],
					positions: [703.5, 729]
				},
				{
					color: '#00C1FF',
					isShow: false,
					spotNum: 8,
					zindex: 1,
					busList: [
						{
							code: 'code54',
							name: '54、OTP秘钥',
							isShow: false
						},
						{
							code: 'code55',
							name: '55、字符串',
							isShow: false
						}
					],
					positions: [1546.5, 266]
				},
				{
					color: '#07FF7D',
					isShow: false,
					spotNum: 5,
					busList: [
						{
							code: 'code60',
							name: '60、付款时间',
							isShow: false
						},
						{
							code: 'code61',
							name: '61、付款金额',
							isShow: false
						},
						{
							code: 'code62',
							name: '62、钱包编号',
							isShow: false
						}
					],
					positions: [1698.5, 731]
				},
				{
					color: '#07FF7D',
					isShow: false,
					spotNum: 4,
					busList: [
						{
							code: 'code63',
							name: '63、转移策略',
							isShow: false
						},
						{
							code: 'code64',
							name: '64、取币金额',
							isShow: false
						},
						{
							code: 'code65',
							name: '65、待转移金额',
							isShow: false
						},
						{
							code: 'code66',
							name: '66、找回金额',
							isShow: false
						}
					],
					positions: [1548.5, 821]
				},
				{
					color: '#07FF7D',
					isShow: false,
					spotNum: 5,
					busList: [
						{
							code: 'code67',
							name: '67、数字货币支付系统签名',
							isShow: false
						}
					],
					positions: [1580.5, 647]
				},
				{
					color: '#00C1FF',
					isShow: false,
					spotNum: 13,
					busList: [
						{
							code: 'code68',
							name: '68、结果展示',
							isShow: false
						}
					],
					positions: [1451.5, 312]
				}
			],
			// 点移动的纵坐标,20个点
			spotBottom30: 0,
			spotBottom25: 0,
			spotBottom20: 0,
			spotBottom15: 0,
			spotBottom13: 0,
			spotBottom10: 0,
			spotBottom8: 0,
			spotBottom5: 0,
			spotBottom4: 0,
			// 定时器
			time1: '',
			// 对象有9个重名的key,不能合并如下对象
			// 业务数据1-8
			businessObj1: {},
			// 业务数据10-14
			businessObj2: {},
			// 业务数据15-34
			businessObj3: {},
			// 业务数据36
			businessObj4: {},
			// 业务数据35,37-41
			businessObj5: {},
			// 信息弹框
			// 公私钥
			isvisible1: false,
			// 公私钥list
			secretKey: {},
			// 弹框标题
			dialogTitle: '',
			// 标准弹框
			isvisible2: false,
			// 标准文本
			standardText: '',
			// 点前点击的code
			activeCode: '',
			// 当前弹框的宽度
			widthSize: 502,
			// code4
			activeName: 0,
			activeTabs: ['数字货币投放系统的标识信息', '货币生成金额', '货币交易信息'],
			// 小任务保存的json
			json_code11_1: {},
			json_code11_2: {},
			// 二次弹框的封装
			isvisible3: false,
			dialogTitle3: false,
			dialogText3: '',
			// 钱包属性信息
			walletTreeData: [],
			// 取币指令
			withdrawArr: ['OP', '取币金额', '钱包标识', '账户信息', '显示'],
			// 数字货币
			isvisible4: false,
			// 追踪
			roleType: 'investor',
			roleNav: [
				{
					name: '投资人',
					type: 'investor'
				},
				{
					name: '监管机构',
					type: 'sfc'
				}
			],
			trackingChainObj1: {},
			trackingChainObj2: {},
			// 来源币明细
			isvisible5: false,
			sourceCurrencyData: [
				{
					code: 'public 100',
					denomination: '100',
					state: '有效',
					curTime: '2021-05-27 11:11:11'
				},
				{
					code: 'public 100',
					denomination: '100',
					state: '有效',
					curTime: '2021-05-27 11:11:11'
				},
				{
					code: 'public 100',
					denomination: '100',
					state: '有效',
					curTime: '2021-05-27 11:11:11'
				},
				{
					code: 'public 100',
					denomination: '100',
					state: '有效',
					curTime: '2021-05-27 11:11:11'
				},
				{
					code: 'public 100',
					denomination: '100',
					state: '有效',
					curTime: '2021-05-27 11:11:11'
				},
				{
					code: 'public 100',
					denomination: '100',
					state: '有效',
					curTime: '2021-05-27 11:11:11'
				},
				{
					code: 'public 100',
					denomination: '100',
					state: '有效',
					curTime: '2021-05-27 11:11:11'
				},
				{
					code: 'public 100',
					denomination: '100',
					state: '有效',
					curTime: '2021-05-27 11:11:11'
				},
				{
					code: 'public 100',
					denomination: '100',
					state: '有效',
					curTime: '2021-05-27 11:11:11'
				},
				{
					code: 'public 100',
					denomination: '100',
					state: '有效',
					curTime: '2021-05-27 11:11:11'
				},
				{
					code: 'public 100',
					denomination: '100',
					state: '有效',
					curTime: '2021-05-27 11:11:11'
				},
				{
					code: 'public 100',
					denomination: '100',
					state: '有效',
					curTime: '2021-05-27 11:11:11'
				}
			],
			// 数字货币结构
			dcepTree: {
				isOpen1: false,
				isOpen2: false,
				isOpen3: false,
				isOpen4: false,
				isOpen5: false,
				isOpen6: false,
				isOpen7: false
			},
			// 筹资人是否有公私钥
			isFunding: false
		};
	},
	inject: ['reload'],
	filters: {
		// 点的移动坐标
		spotStyle (val, that) {
			let obj = {};
			if (val) {
				obj = {
					bottom: that['spotBottom' + val] + 'px'
				};
			}
			return obj;
		}
	},
	watch: {
		inforData: {
			handler () {
				if (this.inforData) {
					// 所有选中的code
					let data = JSON.parse(this.inforData);
					this.inforArr.forEach(item => {
						// 公私钥
						if (item.type === 'secretkey') {
							if (data.indexOf(item.code) === -1) {
								item.isShow = false;
							} else {
								item.isShow = true;
							}
						} else {
							item.isShow = item.busList.some(itemSon => {
								return data.indexOf(itemSon.code) !== -1;
							});
							item.busList.forEach(itemSon => {
								if (data.indexOf(itemSon.code) === -1) {
									itemSon.isShow = false;
								} else {
									itemSon.isShow = true;
								}
							});
						}
					});
				}
			},
			deep: true,
			immediate: true
		}
	},
	created () {
		// 点的动画
		this.getFundingSecretData();
		this.initAnimationSpot();
		this.loadBusinessData();
		this.loadJson();
	},
	methods: {
		// 加载点移动的动画
		initAnimationSpot () {
			this.$nextTick(() => {
				this.time1 = setInterval(() => {
					let arr = [30, 25, 20, 15, 13, 10, 8, 5, 4];
					arr.forEach(item => {
						this['spotBottom' + item] = parseInt(this['spotBottom' + item]) + 8;
						if (this['spotBottom' + item] > (item - 3) * 8) {
							this['spotBottom' + item] = -16;
						}
					});
				}, 500);
			});
		},
		// 1. -获取以中国人民银行为核心的生产数字货币的信息，返回1-8序号的显示信息
		// 2. 数字货币显性化-商业银行发行数字货币的相关信息
		// 3. 数字货币显性化-以数字货币服务商、钱包服务商为核心的信息展示
		// 4.  查询2-8大任务的智能合约，和投资合约信息
		// 5. 2-9-1的大对象接口
		loadBusinessData () {
			let urlArr = ['userIdentityInfo/generateCurrencyProcess', 'bankCurrencyRequest/getBankCoreInfo', 'userDigitalWallet/getUserDigitalWalletInfo', 'userScriptName/findScriptName', 'userPasswordRecord/findUserPasswordRecord'];
			urlArr.forEach((item, index) => {
				this.$ajax({
					method: 'post',
					url: item,
					params: {
					}
				}).then(res => {
					if (res.success && res.data) {
						this['businessObj' + (index + 1)] = res.data;
						if (index === 2) {
							let data = res.data;
							if (data.walletNumber) {
								this.walletTreeData = [
									{
										label: '钱包编号：' + data.walletNumber,
										children: [
											{
												label: '钱包类型：' + data.walletType
											},
											{
												label: '余额上限：' + data.balanceLimit + '元'
											},
											{
												label: '单笔支付上限：' + data.singlePayLimit + '元'
											},
											{
												label: '日累计支付限额：' + data.dayPayLimit + '元'
											},
											{
												label: '年累计支付限额：' + data.yearPayLimit + '元'
											}
										]
									}
								];
							}
						}
					}
				}).catch(err => {
					throw new Error(err);
				});
			});
		},
		// 是否点亮1级
		whetherLightUpOne (item) {
			let isTrue = false;
			let code = item.code;
			// 公私钥
			if (item.type === 'secretkey') {
				// 用户的公私钥是在任务中生成的
				if (code !== 'system_investor1' && code !== 'system_funding') {
					isTrue = true;
				} else {
					if (code === 'system_investor1' && this.businessObj3.walletFlag) {
						isTrue = true;
					}
					if (code === 'system_funding' && this.isFunding) {
						isTrue = true;
					}
				}
			} else {
				isTrue = item.busList.some(itemSon => {
					return this.whetherLightUpTwo(itemSon);
				});
			}
			return isTrue;
		},
		// 是否点亮二级
		whetherLightUpTwo (item) {
			let isTrue = false;
			let code = item.code;
			if (!code) {
				return false;
			}
			if (code === 'code1' && this.businessObj1.digitalCurrencySystemInfo) {
				isTrue = true;
			} else if (code === 'code2' && this.businessObj1.createTime) {
				isTrue = true;
			} else if (code === 'code3' && this.businessObj1.signatureValue) {
				isTrue = true;
			} else if (code === 'code4' && this.businessObj1.identityCode) {
				isTrue = true;
			} else if (code === 'code5' && this.businessObj1.tradeFlag) {
				isTrue = true;
			} else if (code === 'code6' && this.businessObj1.ctrlSign) {
				isTrue = true;
			} else if (code === 'code7' && this.businessObj1.ctrlBit) {
				isTrue = true;
			} else if (code === 'code8' && this.businessObj1.systemSign) {
				isTrue = true;
			} else if (code === 'code9' && this.businessObj1.state > 9) {
				isTrue = true;
				//
			} else if (code === 'code10' && this.businessObj2.issueSign) {
				isTrue = true;
			} else if (code === 'code11' && this.businessObj2.currencyRepo) {
				isTrue = true;
			} else if (code === 'code12' && this.businessObj2.issueRoleFlag) {
				isTrue = true;
			} else if (code === 'code13' && this.businessObj2.issueRoleFlag) {
				isTrue = true;
			} else if (code === 'code14' && this.json_code11_1.bankTypeValue) {
				isTrue = true;
			} else if (code === 'code15' && this.json_code11_2.issuesNumber) {
				isTrue = true;
			} else if (code === 'code16' && this.json_code11_2.issueLimit) {
				isTrue = true;
			} else if (code === 'code17' && this.json_code11_2.depositReserve) {
				isTrue = true;
			} else if (code === 'code18' && this.businessObj2.tradeNumber) {
				isTrue = true;
			} else if (code === 'code19' && this.businessObj2.deduceConey) {
				isTrue = true;
			} else if (code === 'code20' && this.businessObj2.moneyNumber) {
				isTrue = true;
			} else if (code === 'code21' && this.businessObj2.state > 6) {
				isTrue = true;
			} else if (code === 'code22' && this.businessObj2.state > 8) {
				isTrue = true;
				//
			} else if (code === 'code23' && this.businessObj3.userFlag) {
				isTrue = true;
			} else if (code === 'code24' && this.businessObj3.loginName) {
				isTrue = true;
			} else if (code === 'code25' && this.businessObj3.loginPassword) {
				isTrue = true;
			} else if (code === 'code26' && this.businessObj3.publicKeyStr) {
				isTrue = true;
			} else if (code === 'code27' && this.businessObj3.walletFlag) {
				isTrue = true;
			} else if (code === 'code28' && this.businessObj3.certificateNumber) {
				isTrue = true;
			} else if (code === 'code29' && this.businessObj3.certificateStart) {
				isTrue = true;
			} else if (code === 'code30' && this.businessObj3.digitalSign) {
				isTrue = true;
			} else if (code === 'code31' && this.businessObj3.publicKeyStr) {
				isTrue = true;
			} else if (code === 'code32' && this.businessObj3.contractCodeHash) {
				isTrue = true;
			} else if (code === 'code33' && this.businessObj3.walletNumber) {
				isTrue = true;
			} else if (code === 'code34' && this.businessObj3.state > 6) {
				isTrue = true;
			} else if (code === 'code35' && this.businessObj3.walletSign) {
				isTrue = true;
			} else if (code === 'code36' && this.businessObj3.walletCodeSign) {
				isTrue = true;
			} else if (code === 'code37' && this.businessObj3.state > 12) {
				isTrue = true;
			} else if (code === 'code38' && this.businessObj3.walletNumber) {
				isTrue = true;
			} else if (code === 'code39' && this.businessObj3.cardNum) {
				isTrue = true;
			} else if (code === 'code40' && this.businessObj3.instructSign) {
				isTrue = true;
			} else if (code === 'code41' && this.businessObj3.actualMoney) {
				isTrue = true;
			} else if (code === 'code42' && this.businessObj3.recoverMoney) {
				isTrue = true;
			} else if (code === 'code43' && this.businessObj3.investIsRun === 1) {
				isTrue = true;
			} else if (code === 'code44' && this.businessObj3.sfcIsRun === 1) {
				isTrue = true;
			} else if (code === 'code45' && (this.businessObj3.investTrackMark || this.businessObj3.sfcTrackMark)) {
				isTrue = true;
			} else if (code === 'code46' && (this.businessObj3.investAuthMark || this.businessObj3.sfcAuthMark)) {
				isTrue = true;
			} else if (code === 'code47' && this.businessObj3.querySignOrg) {
				isTrue = true;
			} else if (code === 'code48' && ((this.businessObj3.investTrackChains && this.businessObj3.investTrackChains.length > 0) || (this.businessObj3.sfcTrackChains && this.businessObj3.sfcTrackChains.length > 0))) {
				isTrue = true;
			} else if (code === 'code49' && this.businessObj3.queryInstructionsSign) {
				isTrue = true;
			} else if (code === 'code50' && this.businessObj3.digitalCert) {
				isTrue = true;
			} else if (code === 'code51' && this.businessObj3.walletType) {
				isTrue = true;
			} else if (code === 'code52' && this.businessObj3.walletCodeSign) {
				isTrue = true;
			} else if (code === 'code53' && this.businessObj3.walletNumber) {
				isTrue = true;
				//
			} else if (code === 'code54' && this.businessObj5.otpKey) {
				isTrue = true;
			} else if (code === 'code55' && this.businessObj5.otpResult) {
				isTrue = true;
			} else if (code === 'code56' && this.businessObj4.isRun === 1) {
				isTrue = true;
			} else if (code === 'code57' && this.businessObj4.isRun === 1) {
				isTrue = true;
			} else if (code === 'code58' && this.businessObj5.paySign) {
				isTrue = true;
			} else if (code === 'code59' && this.businessObj5.takeCoinMoney) {
				isTrue = true;
			} else if (code === 'code60' && this.businessObj5.payTime) {
				isTrue = true;
			} else if (code === 'code61' && this.businessObj5.payMoney) {
				isTrue = true;
			} else if (code === 'code62' && this.businessObj5.walletNumber) {
				isTrue = true;
			} else if (code === 'code63' && this.businessObj5.state > 8) {
				// 取币付款
				isTrue = true;
			} else if (code === 'code64' && this.businessObj5.state > 8) {
				// takeCoinMone
				isTrue = true;
			} else if (code === 'code65' && this.businessObj5.state > 8) {
				// waitMoney
				isTrue = true;
			} else if (code === 'code66' && this.businessObj5.state > 8) {
				// backMoney
				isTrue = true;
			} else if (code === 'code67' && this.businessObj5.rightSign) {
				isTrue = true;
			} else if (code === 'code68' && this.businessObj5.state > 11) {
				isTrue = true;
			}
			return isTrue;
		},
		// 查询保存结果
		loadJson () {
			let codeArr = ['code11_1', 'code11_2'];
			codeArr.forEach(item => {
				this.$ajax({
					method: 'post',
					url: '/userDataJson/findUserDataJsonMap',
					params: {
						taskCode: item
					}
				}).then(res => {
					if (res.success && res.data) {
						let data = res.data;
						if (data[item]) {
							this['json_' + item] = JSON.parse(data[item].json);
						}
					}
				}).catch(err => {
					throw new Error(err);
				});
			});
		},
		// 点击查询公私钥
		getSecretData (item) {
			if (!this.whetherLightUpOne(item)) {
				this.$message.warning('该系统暂未生成公私钥');
				return false;
			}
			this.dialogTitle = item.name;
			this.secretKey = [];
			this.$ajax({
				method: 'post',
				url: 'userSystemSecret/findUserSystemSecret',
				params: {
					systemCode: item.code
				}
			}).then(res => {
				if (res.success && res.data) {
					this.isvisible1 = true;
					this.secretKey = res.data;
				} else {
					this.$message.warning('该系统暂未生成公私钥');
					return false;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 筹资人是否有公私钥
		getFundingSecretData () {
			this.$ajax({
				method: 'post',
				url: 'userSystemSecret/findUserSystemSecret',
				params: {
					systemCode: 'system_funding'
				}
			}).then(res => {
				if (res.success && res.data) {
					this.isFunding = true;
				} else {
					this.isFunding = false;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 复制
		copyText (index, type) {
			let data = '';
			if (type === 1) {
				data = this.secretKey[index].publickey;
			} else if (type === 2) {
				data = this.secretKey[index].privatekey;
			}
			let clipboard = new Clipboard('.cobyOrderSn', {
				text: function () {
					return data;
				}
			});
			clipboard.on('success', e => {
				this.$message({message: '复制成功', showClose: true, type: 'success'});
				clipboard.destroy();
			});
			clipboard.on('error', e => {
				this.$message({message: '复制失败,', showClose: true, type: 'error'});
				clipboard.destroy();
			});
		},
		// 点击单个标识
		onLookSingleInfo (item) {
			if (!this.whetherLightUpTwo(item)) {
				this.$message.warning('暂未生成');
				return false;
			}
			this.dialogTitle = item.name;
			let code = item.code;
			this.activeCode = item.code;
			if (code === 'code1') {
				this.creatStandHtml(this.businessObj1.digitalCurrencySystemInfo);
			} else if (code === 'code2') {
				let html = `
					<ul class='infoDataformUl'>
						<li>生成金额：${this.businessObj1.currencyAmount}</li>
						<li>数字货币投放系统标识信息：<br>${this.businessObj1.digitalCurrencySystemInfo}</li>
						<li>时间戳：${this.businessObj1.createTime}</li>
					</ul>
				`;
				this.creatStandHtml(html);
			} else if (code === 'code3') {
				this.creatStandHtml(this.businessObj1.signatureValue);
			} else if (code === 'code4') {
				this.creatStandHtml('', 722);
			} else if (code === 'code5') {
				this.creatStandHtml(this.businessObj1.tradeFlag);
			} else if (code === 'code6') {
				this.creatStandHtml(this.businessObj1.ctrlSign);
			} else if (code === 'code7') {
				this.creatStandHtml(this.businessObj1.ctrlBit);
			} else if (code === 'code8') {
				this.creatStandHtml(this.businessObj1.systemSign);
			} else if (code === 'code9') {
				// 9数字货币
				this.isvisible4 = true;
			} else if (code === 'code10') {
				this.creatStandHtml(this.businessObj2.issueSign);
			} else if (code === 'code11') {
				this.creatStandHtml(this.businessObj2.currencyRepo);
			} else if (code === 'code12') {
				this.creatStandHtml(this.businessObj2.issueRoleFlag);
			} else if (code === 'code13') {
				let html = `
					<ul class='infoDataformUl'>
						<li>货币类型：人民币</li>
						<li>发行总量：5000000000</li>
						<li>时间戳：${this.businessObj2.issueTime}</li>
					</ul>
				`;
				this.creatStandHtml(html);
			} else if (code === 'code14') {
				this.creatStandHtml('', 860);
			} else if (code === 'code15') {
				this.creatStandHtml(this.json_code11_2.issuesNumber);
			} else if (code === 'code16') {
				this.creatStandHtml(this.json_code11_2.issueLimit);
			} else if (code === 'code17') {
				this.creatStandHtml(this.json_code11_2.depositReserve);
			} else if (code === 'code18') {
				this.creatStandHtml(this.businessObj2.tradeNumber);
			} else if (code === 'code19') {
				this.creatStandHtml(this.businessObj2.deduceConey);
			} else if (code === 'code20') {
				this.creatStandHtml(this.businessObj2.moneyNumber);
			} else if (code === 'code21') {
				// 13、归属人链条 2-7
				this.creatStandHtml('', 830);
			} else if (code === 'code22') {
				// 14、消息报文 2-9
				this.creatStandHtml();
			} else if (code === 'code23') {
				this.creatStandHtml(this.businessObj3.userFlag);
			} else if (code === 'code24') {
				this.creatStandHtml(this.businessObj3.loginName);
			} else if (code === 'code25') {
				this.creatStandHtml(this.businessObj3.loginPassword);
			} else if (code === 'code26') {
				let html = `
					<ul class='infoDataformUl'>
						<li>公钥串：<br>${this.businessObj3.publicKeyStr}</li>
						<li>私钥串：<br>${this.businessObj3.privateKeyStr}</li>
					</ul>
				`;
				this.creatStandHtml(html);
			} else if (code === 'code27') {
				this.creatStandHtml(this.businessObj3.walletFlag);
			} else if (code === 'code28') {
				this.creatStandHtml(this.businessObj3.certificateNumber);
			} else if (code === 'code29') {
				let html = this.businessObj3.certificateStart + '  ——  ' + this.businessObj3.certificateEnd;
				this.creatStandHtml(html);
			} else if (code === 'code30') {
				this.creatStandHtml(this.businessObj3.digitalSign);
			} else if (code === 'code31') {
				this.creatStandHtml(this.businessObj3.digitalCert);
			} else if (code === 'code32') {
				this.creatStandHtml(this.businessObj3.contractCodeHash);
			} else if (code === 'code33') {
				// 19、钱包属性信息，3-7
				this.creatStandHtml();
			} else if (code === 'code34') {
				// 19、数字货币钱包服务协议3-7
				this.creatStandHtml('', 480);
			} else if (code === 'code35') {
				this.creatStandHtml(this.businessObj3.walletSign);
			} else if (code === 'code36') {
				this.creatStandHtml(this.businessObj3.walletCodeSign);
			} else if (code === 'code37') {
				// 21、数字货币钱包，拿不过来
				this.creatStandHtml('请到实验部分，左侧功能栏处点击数字货币钱包体验');
			} else if (code === 'code38') {
				this.creatStandHtml(this.businessObj3.walletNumber);
			} else if (code === 'code39') {
				this.creatStandHtml(this.businessObj3.cardNum);
			} else if (code === 'code40') {
				// 23、取币指令：4-5
				this.creatStandHtml('', 560);
			} else if (code === 'code41') {
				this.creatStandHtml(this.businessObj3.actualMoney);
			} else if (code === 'code42') {
				this.creatStandHtml(this.businessObj3.recoverMoney);
			} else if (code === 'code43') {
				// 26.投资人追踪脚本：5-1
				this.creatStandHtml('', 900);
			} else if (code === 'code44') {
				// 27.监管机构追踪脚本:5-2
				this.creatStandHtml('', 900);
			} else if (code === 'code45') {
				let html = `
					<ul class='infoDataformUl'>
						<li>投资人的追踪标识：<br>${this.businessObj3.investTrackMark}</li>
						<li>监管机构的追踪标识：<br>${this.businessObj3.sfcTrackMark}</li>
					</ul>
				`;
				this.creatStandHtml(html);
			} else if (code === 'code46') {
				let html = `
					<ul class='infoDataformUl'>
						<li>投资人的授权标识：<br>${this.businessObj3.investAuthMark}</li>
						<li>监管机构的授权标识：<br>${this.businessObj3.sfcAuthMark}</li>
					</ul>
				`;
				this.creatStandHtml(html);
			} else if (code === 'code47') {
				this.creatStandHtml(this.businessObj3.querySignOrg);
			} else if (code === 'code48') {
				// 30.投资人追踪脚本追踪链条5-8，
				this.onChangeRoleScript('investor');
				this.creatStandHtml('', 510);
			} else if (code === 'code49') {
				this.creatStandHtml(this.businessObj3.queryInstructionsSign);
			} else if (code === 'code50') {
				this.creatStandHtml(this.businessObj3.digitalCert);
			} else if (code === 'code51') {
				// 33、钱包信息：6-8，黄色内容
				let html = `
					<ul class='infoDataformUl'>
						<li>钱包标识：${this.businessObj3.walletFlag}</li>
						<li>钱包类型：${this.businessObj3.walletType}</li>
						<li>账户号：${this.businessObj3.cardNum}</li>
						<li>账户名：${this.businessObj3.realName}</li>
						<li>账户余额：${this.businessObj3.balance}</li>
					</ul>
				`;
				this.creatStandHtml(html);
			} else if (code === 'code52') {
				this.creatStandHtml(this.businessObj3.walletCodeSign);
			} else if (code === 'code53') {
				// 34、展示结果：6-11
				this.creatStandHtml('', 770);
			} else if (code === 'code54') {
				this.creatStandHtml(this.businessObj5.otpKey);
			} else if (code === 'code55') {
				this.creatStandHtml(this.businessObj5.otpResult);
			} else if (code === 'code56') {
				// 36、合同生效合约，9-2
				this.creatStandHtml('', 1170);
			} else if (code === 'code57') {
				// 36、投资人投资请求合约，9-2
				this.creatStandHtml('', 900);
			} else if (code === 'code58') {
				this.creatStandHtml(this.businessObj5.paySign);
			} else if (code === 'code59') {
				this.creatStandHtml(this.businessObj5.takeCoinMoney);
			} else if (code === 'code60') {
				this.creatStandHtml(this.businessObj5.payTime);
			} else if (code === 'code61') {
				this.creatStandHtml(this.businessObj5.payMoney);
			} else if (code === 'code62') {
				this.creatStandHtml(this.businessObj5.walletNumber);
			} else if (code === 'code63') {
				this.creatStandHtml('整进整出');
			} else if (code === 'code64') {
				this.creatStandHtml(this.businessObj5.takeCoinMoney);
			} else if (code === 'code65') {
				this.creatStandHtml(this.businessObj5.waitMoney);
			} else if (code === 'code66') {
				this.creatStandHtml(this.businessObj5.backMoney);
			} else if (code === 'code67') {
				this.creatStandHtml(this.businessObj5.rightSign);
			} else if (code === 'code68') {
				// 41、结果展示 9-12
				this.creatStandHtml('', 770);
			}
		},
		// 标准弹框赋值
		creatStandHtml (text, widthSize) {
			this.standardText = text;
			this.isvisible2 = true;
			if (widthSize) {
				this.widthSize = widthSize;
			} else {
				this.widthSize = 502;
			}
		},
		// 小的信息的二次弹框
		secondaryDialog (title, text) {
			this.dialogTitle3 = title;
			this.dialogText3 = text;
			this.isvisible3 = true;
		},
		// 点击查看追踪链条的数据捆
		onChangeRoleScript (type) {
			this.roleType = type;
			this.trackingChainObj1 = {};
			this.trackingChainObj2 = {};
			if (type === 'investor' && (this.businessObj3.investTrackChains && this.businessObj3.investTrackChains.length > 0)) {
				this.trackingChainObj1 = this.businessObj3.investTrackChains[0];
				this.trackingChainObj2 = this.businessObj3.investTrackChains[1];
			} else if (type === 'sfc' && (this.businessObj3.sfcTrackChains && this.businessObj3.sfcTrackChains.length > 0)) {
				this.trackingChainObj1 = this.businessObj3.sfcTrackChains[0];
				this.trackingChainObj2 = this.businessObj3.sfcTrackChains[1];
			}
		},
		// 查看明细
		onViewDetails (type) {
			let text = '待转移';
			if (type === 2) text = '有效';
			this.sourceCurrencyData.forEach(item => {
				item.state = text;
			});
			this.isvisible5 = true;
		},
		// 改变等级
		onChangeLeven (index) {
			this.dcepTree = Object.assign(this.dcepTree, this.$options.data().dcepTree);
			if (index === 1) {
				let obj = {
					isOpen1: true,
					isOpen2: true
				};
				this.dcepTree = Object.assign(this.dcepTree, obj);
			} else if (index === 2) {
				let obj = {
					isOpen1: true,
					isOpen2: true,
					isOpen3: true,
					isOpen4: true,
					isOpen6: true
				};
				this.dcepTree = Object.assign(this.dcepTree, obj);
			} else if (index === 3) {
				let obj = {
					isOpen1: true,
					isOpen2: true,
					isOpen3: true,
					isOpen4: true,
					isOpen5: true,
					isOpen6: true,
					isOpen7: true
				};
				this.dcepTree = Object.assign(this.dcepTree, obj);
			}
		}
	},
	// 页面销毁清除定时器
	beforeDestroy () {
		clearInterval(this.time1);
	}
};
</script>

<style lang="scss" scoped>
.inforCon{
	position: absolute;
	top: 0;
	left: 0;
	width: 1941px;
	height: 932px;
	.inforModel{
		position: absolute;
		left: 100px;
		bottom: 720px;
		.inforKeyUl{
			width: 117.2px;
		}
		.inforUl{
			width: 129px;
			li{
				height: 38px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				padding: 14px 5px 0 35px;
				color: #ffffff;
				font-size: 12px;
				cursor: pointer;
				span{
					margin-left: 4px;
				}
				b{
					font-weight: normal;
				}
			}
			.bgImgKey{
				background: url('./img/key.png') no-repeat center center;
				background-size: 100% 100%;
			}
			.noBgImgKey{
				background: url('./img/nokey.png') no-repeat center center;
				background-size: 100% 100%;
			}
			@for $i from 1 through 6 {
				.bgImg#{$i}{
					background: url('./img/icon0#{$i}.png') no-repeat center center;
					background-size: 100% 100%;
				}
			}
			@for $i from 1 through 6 {
				.noBgImg#{$i}{
					background: url('./img/noIcon0#{$i}.png') no-repeat center center;
					background-size: 100% 100%;
				}
			}
		}
		.inforSwiper{
			margin: 5px 0 0 62.5px;
			b, span{
				width: 4px;
				height: 4px;
				border-radius: 50%;
				margin-top: 4px;
				display: block;
				opacity: 0.3;
			}
			b:first-child, span:first-child {
				margin-top: 0;
			}
			.activeSpot{
				position: relative;
				overflow: hidden;
				b{
					background: #07FF7D;
				}
				p{
					position: absolute;
					bottom: 0;
					left: 0;
					span{
						background: #07FF7D;
						opacity: 1;
					}
					span:nth-child(2) {
						opacity: 0.7;
					}
					span:nth-child(3) {
						opacity: 0.5;
					}
				}
			}
			.color_FFAC07{
				b, p span{
					background: #FFAC07;
				}
			}
			.color_04FDFF{
				b, p span{
					background: #04FDFF;
				}
			}
			.color_00C1FF{
				b, p span{
					background: #00C1FF;
				}
			}
			.color_0ADBE1{
				b, p span{
					background: #00C1FF;
				}
			}
			.color_FF4005{
				b, p span{
					background: #FF4005;
				}
			}
			.color_C43CFF{
				b, p span{
					background: #C43CFF;
				}
			}
			.color_07FF7D{
				b, p span{
					background: #07FF7D;
				}
			}
			.graySpot{
				b{
					background: #ffffff;
				}
			}
		}
	}
}
// 自定义弹框头部
.dominanceDialog{
	/deep/ .el-dialog__header{
		display: none !important;
	}
	/deep/ .el-dialog__body{
		padding: 0 !important;
		background: #081C32 !important;
		color: #ffffff !important;
		font-size: 13px;
		border: 1px solid #3CCADF;
		border-radius: 2px;
		min-height: 200px;
	}
	.dominanceHead{
		position: relative;
		text-align: center;
		.headImg01{
			height: 11px;
			position: relative;
			top: -2px;
		}
		.headImg02{
			position: absolute;
			top: 2px;
			right: 2px;
			height: 40px;
			cursor: pointer;
		}
		div{
			margin-top: 15px;
			.headImg03{
				height: 12px;
			}
			.headImg04{
				height: 12px;
			}
			p{
				font-size: 16px;
				padding: 3px 0 4px;
				line-height: 22px;
			}
		}
	}
}
.dominanceDialog2{
	/deep/ .el-dialog__body{
		border: 0;
		position: relative;
	}
	.clodeImg{
		width: 16px;
		height: 16px;
		position: absolute;
		top: 0;
		right:-27px;
		cursor: pointer;
	}
	.decpUl{
		li{
			overflow: hidden;
			text-align: center;
			img{
				height: 8px;
				cursor: pointer;
				margin-left: 5px;;
			}
			div{
				float: left;
				width: 50%;
			}
			.divOne{
				width: 100%;
				padding:  0 19px;
				height: 80px;
				line-height: 80px;
				text-align: center;
			}
			.divTwo{
				height: 160px;
				line-height: 21px;
				padding:  59px 19px 0;
			}
			.divThree{
				width: 50%;
				height: 72px;
				line-height: 72px;
				padding:  0 19px;
			}
			.divFour{
				width: 100%;
				height: 72px;
				line-height: 72px;
				padding:  0 19px;
			}
			.ident1{
				height: 288px;
				line-height: 288px;
			}
			.ident2{
				height: 360px;
				line-height: 360px;
			}
			.encryption{
				height: 144px;
				line-height: 22px;
				padding-top: 50px;
			}
			.textLeftDiv{
				text-align: left;
			}
		}
	}
	.levenDiv{
		overflow: hidden;
		p{
			line-height: 68px;
			height: 68px;
			float: left;
			width: 80px;
			text-align: center;
			cursor: pointer;
			img{
				height: 11px;
				position: relative;
				top: 1px;
				margin-right: 5px;
			}
		}
		p:nth-child(1) {
			background: #4A4E5C;
		}
		p:nth-child(2) {
			background: #545869;
		}
		p:nth-child(3) {
			background: #5E6375;
		}
		p:nth-child(4) {
			background: #686E82;
		}
	}
}
// 公私钥
.secretKeyUl{
	li{
		border-bottom: 1px dashed #dddddd;
		padding-top: 20px;
		>div{
			margin-bottom: 16px;
			.keyCopy{
				overflow: hidden;
				img{
					height: 12px;
					float: left;
					margin-top: 7px;
				}
				span{
					line-height: 26px;
					float: left;
					margin: 0 10px;
					font-size: 16px;
				}
				img:last-child{
					height: 18px;
					cursor: pointer;
					margin-top: 4px;
				}
			}
			.keyContent{
				line-height: 26px;
				margin-top: 13px;
				font-size: 14px;
			}
		}
	}
	li:first-child{
		padding-top: 0;
	}
	li:last-child{
		border: 0;
	}
}
// 标准弹框
.standardDiv{
	line-height: 26px;
    font-size: 14px;
	word-wrap:break-word;
	margin-top: 10px;
}
/deep/ .infoDataformUl{
	li{
		line-height: 24px;
		margin-bottom: 10px;
	}
	li:last-child{
		margin-bottom:0;
	}
}
// 流程
.processCon{
	padding: 30px 30px 30px;
	.proTitle{
		width: 160px;
		height: 47px;
		line-height: 47px;
		border-radius: 2px;
		font-size: 15px;
		text-align: center;
		margin-left: 202px;
		background: #081C32;
		border-radius: 2px;
		border: 1px solid #268897;
	}
	img{
		width: 100%;
	}
	.imgLine1{
		width: 456px;
		margin: 0 auto;
	}
	ul{
		height: 16px;
		font-size: 15px;
		margin-top: 5px;
		li{
			float: left;
			color: #ffffff;
			cursor: pointer;
		}
		.active{
			color: #3CCADF;
		}
		li:nth-child(1) {
			margin-left: -20px;
		}
		li:nth-child(2) {
			margin: 0 130px 0 84px;
		}
	}
	.bottomTr{
		width: 12px;
		margin-top: 8px;
	}
	.bottom1{
		margin-left: 71px;
	}
	.bottom2{
		margin-left: 299px;
	}
	.bottom3{
		margin-left: 487px;
	}
	.sginActiveDiv{
		text-align: right;
		img{
			width: 37px;
			margin-right: 75px;
		}
		p{
			font-size: 15px;
			color: #3CCADF;
			margin-right: 33px;
		}
	}
	.processInput{
		background: rgba(47, 142, 162, 0.12);
		border: 1px solid #268897;
		padding: 20px 22px;
		margin-top: 16px;
		font-size: 15px;
		p{
			margin-bottom: 12px;
		}
	}
	/deep/ .el-textarea__inner, /deep/ .el-input__inner{
		background: transparent;
		color: #ffffff;
		border-radius: 1px;
		border: 1px solid rgba(255, 255, 255, 0.32);
	}
}
// code14
.choiceCon{
	position: relative;
	.choiceDiv{
		width: 800px;
		margin: 0 auto;
		padding: 30px 0;
		text-align: center;
		border: 1px solid transparent;
		img{
			width: 600px;
		}
		/deep/ .el-select, /deep/ .el-input{
			width: 150px;
		}
		.select2{
			margin-left: 18px;
			/deep/ .el-select, /deep/ .el-input{
				width: 160px;
			}
		}
		.select3{
			margin-left: 46px;
		}
		.select4{
			margin-left: 40px;
		}
		.select5{
			margin-left: 46px;
		}
	}
	/deep/ .el-input__inner{
		background: #081C32;
		border-radius: 2px;
		border: 1px solid #268897;
		color: #ffffff;
		text-align: center;
	}
}
// code21
.currencyCon{
	overflow: hidden;
	width: 676px;
	position: relative;
	margin: 30px auto;
	>img{
		width: 100%;
	}
	.identInfor{
		position: absolute;
		top: 3px;
		left: 5px;
		width: 97px;
		height: 699px;
		border-radius: 9px;
		p{
			width: 100%;
			height: 50%;
			cursor: pointer;
		}
	}
	.currencyVer{
		position: absolute;
		top: 168px;
		right: 414px;
		overflow: hidden;
		div{
			height: 36px;
			font-size: 36px;
			color: #005374;
			letter-spacing: 1px;
			-webkit-text-stroke: 1px #005374;
			float: left;
			padding-top: 1px;
			margin-right: 16px;
		}
	}
	.signModel{
		position: absolute;
		right: 45px;
		bottom: 115px;
		width: 60px;
		height: 60px;
		img{
			width: 100%;
		}
	}
	.currencyControlBit{
		position: absolute;
		left: 160px;
		bottom: 128px;
		color: #005374;
		font-size: 15px;
		font-weight: 600;
		p{
			width: 300px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
}
// code22
.formReCon{
	padding: 15px 20px;
	font-size: 14px;
	.formReUl{
		padding-left: 20px;
		li{
			margin-top: 10px;
			span{
				white-space: nowrap;
				line-height: 20px;
			}
			>div{
				width: 100%;
				margin-top: 5px;
				line-height: 20px;
			}
		}
	}
}
// code33
/deep/ .el-tree{
	background: transparent;
	color: #ffffff;
}
/deep/ .el-tree-node, /deep/ .el-tree-node__content{
	background: transparent !important;
}
// code34
.iphoneModel{
	width: 420px;
	height: 808px;
	margin: 20px auto 0;
	background: url('./img/iphoneBg.png') no-repeat center center;
	background-size: contain;
	.iphoneCon{
		width: 100%;
		height:100%;
		position: relative;
		.walletPage{
			height: 100%;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
	.iphoneRgba{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 105%;
		padding-bottom: 5%;
		color: #ffffff;
		font-size: 13px;
		padding: 0px 20px;
		h3{
			font-weight: normal;
			font-size: 15px;
			text-align: center;
			margin: 60px 0 25px;
		}
		p{
			line-height: 28px;
		}
	}
}
// code40
.dragDiv{
	overflow: hidden;
	margin-top: 30px;
	.dragItem{
		float: left;
		width: 96px;
		height: 44px;
		background: #2BAB36;
		border-radius: 2px;
		border: 1px solid #FFFFFF;
		text-align: center;
		line-height: 42px;
		margin-left: 4px;
		color: #ffffff;
	}
	.dragItem:first-child{
		margin-left: 0;
		background: #D68D00;
	}
}
// code53
.iphoneModel2{
	width: 700px;
	height: 924px;
	margin: 30px auto;
	background: url('./img/iphoneBg.png') no-repeat center center;
	background-size: contain;
	position: relative;
	.iphoneToPimg{
		width: 190px;
		position: absolute;
		top: 24px;
		left: 256px;
		z-index: 1;
	}
	.iphoneCon{
		width: 401px;
		height: 851px;
		position: relative;
		margin: 0 auto;
		top: 24px;
		left: -1px;
		background: url('./img/2-01.png') no-repeat center center;
		background-size: contain;
		// 二级标题
		.headDiv{
			position: absolute;
			top: 50px;
			left: 0;
			color: #222222;
			text-align: center;
			width: 100%;
			i{
				cursor: pointer;
				position: absolute;
				top: 0px;
				left: 13px;
				font-size: 18px;
				font-weight: bold;
			}
			span{
				font-size: 16px;
				line-height: 18px;
				font-weight: bold;
			}
		}
		.balanceAmount1{
			position: absolute;
			top: 196px;
			left: 34px;
			color: #ffffff;
			font-size: 21px;
			width: 106px;
			overflow: hidden;
			text-align: center;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.balanceAmount2{
			position: absolute;
			top: 196px;
			left: 167px;
			color: #ffffff;
			font-size: 21px;
		}
	}
}
// code48
.trackingChainDiv{
	color: #333333;
	ul{
		background: #EFF3FC;
		border-radius: 8px;
		border: 1px solid #90A2C5;
		padding: 24px 29px;
		li{
			line-height: 28px;
			font-size: 15px;
			span{
				color: #3F73D6;
				cursor: pointer;
			}
		}
	}
	div{
		text-align: center;
		margin: 18px 0;
		img{
			width: 26px;
		}
	}
}
.roleNavUl{
	overflow: hidden;
	margin: 20px auto;
	display: inline-block;
	li{
		float: left;
		width: 120px;
		line-height: 36px;
		border-radius: 36px;
		text-align: center;
		cursor: pointer;
		font-size: 15px;
	}
	.active{
		background: #1B82F0;
		color: #ffffff;
	}
}
.demo-table thead th {
    background: #5C6DBA;
    color: #ffffff;
    border: 1px solid #ffffff;
}
</style>
