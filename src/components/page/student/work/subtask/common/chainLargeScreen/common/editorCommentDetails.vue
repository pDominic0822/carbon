<!--
 * @Author: liujiatian
 * @Date: 2019-02-25 20:45:37
 -->
<template>
	<ul class='assemblyUl noScroll assemblyUlSon' style='padding-left:0;'>
		<li>
			<div class='eventDiv'>
				<div class='iconDiv eventRun'>
					<img src="./img/c01.png" alt="">
				</div>
				<div class='eventDivCon' style='width:205px'>
					<span>当</span>
					<span>开始</span>
					<span>被点击</span>
				</div>
			</div>
		</li>
		<li v-if='roleType === "investor"'>
			<div class='funDiv'>
				<div class='iconDiv'>
					<img src="./img/c03.png" alt="">
				</div>
				<div class='funDivCon'>
					<span>定义函数</span>
					<p class='textPradus'>投资人追踪请求</p>
				</div>
			</div>
			<ul class='assemblyUl assemblyUlSon'>
				<li>
					<div class='funDiv2'>
						投资人追踪请求
						<div class='draggableSingle'>
							<p><template v-if='jsonObj.trackingRequests[0].length > 0'>{{jsonObj.trackingRequests[0][0].label}}</template></p>
						</div>
						<div class='draggableSingle'>
							<p><template v-if='jsonObj.trackingRequests[1].length > 0'>{{jsonObj.trackingRequests[1][0].label}}</template></p>
						</div>
						<div class='draggableSingle'>
							<p><template v-if='jsonObj.trackingRequests[2].length > 0'>{{jsonObj.trackingRequests[2][0].label}}</template></p>
						</div>
					</div>
				</li>
				<li>
					<div class='funDiv'>
						<div class='iconDiv'>
							<img src="./img/c03.png" alt="">
						</div>
						<div class='funDivCon'>
							<span>定义函数</span>
							<p class='textPradus'>追踪标识</p>
						</div>
					</div>
					<ul class='assemblyUl assemblyUlSon'>
						<li>
							<div class='funDiv2'>
								追踪标识
								<div class='draggableSingle'>
									<p><template v-if='jsonObj.trackingMark.length > 0'>{{jsonObj.trackingMark[0].label}}</template></p>
								</div>
							</div>
						</li>
						<li>
							<div class='funDiv2'>
								返回
								<p class='textPradus'>数字货币名</p>
							</div>
						</li>
					</ul>
				</li>
				<li>
					<div class='funDiv'>
						<div class='iconDiv'>
							<img src="./img/c03.png" alt="">
						</div>
						<div class='funDivCon'>
							<span>定义函数</span>
							<p class='textPradus'>追踪标识</p>
						</div>
					</div>
					<ul class='assemblyUl assemblyUlSon'>
						<li>
							<div class='funDiv2'>
								投资人追踪请求
								<p class='textPradus'>追踪信息</p>
								<p class='textPradus'>金额使用情况</p>
							</div>
						</li>
						<li>
							<div class='funDiv'>
								<div class='iconDiv'>
									<img src="./img/c03.png" alt="">
								</div>
								<div class='funDivCon'>
									<span>定义函数</span>
									<p class='textPradus'>追踪信息</p>
								</div>
							</div>
							<ul class='assemblyUl assemblyUlSon'>
								<li>
									<div class='funDiv2'>
										追踪信息
										<div class='draggableSingle'>
											<p><template v-if='jsonObj.trackingInfo[0].length > 0'>{{jsonObj.trackingInfo[0][0].label}}</template></p>
										</div>
										<div class='draggableSingle'>
											<p><template v-if='jsonObj.trackingInfo[1].length > 0'>{{jsonObj.trackingInfo[1][0].label}}</template></p>
										</div>
										<div class='draggableSingle'>
											<p><template v-if='jsonObj.trackingInfo[2].length > 0'>{{jsonObj.trackingInfo[2][0].label}}</template></p>
										</div>
										<div class='draggableSingle'>
											<p><template v-if='jsonObj.trackingInfo[3].length > 0'>{{jsonObj.trackingInfo[3][0].label}}</template></p>
										</div>
									</div>
								</li>
								<li>
									<div class='detectDiv'>
										设置  显示输入
										<div class='draggableSingle'>
											<p><template v-if='jsonObj.setTrackingInfo[0].length > 0'>{{jsonObj.setTrackingInfo[0][0].label}}</template></p>
										</div>
										<span>为</span>
										<p class='noTextPradus'></p>
									</div>
								</li>
								<li>
									<div class='detectDiv'>
										设置  显示输入
										<div class='draggableSingle'>
											<p><template v-if='jsonObj.setTrackingInfo[1].length > 0'>{{jsonObj.setTrackingInfo[1][0].label}}</template></p>
										</div>
										<span>为</span>
										<p class='noTextPradus'></p>
									</div>
								</li>
								<li>
									<div class='detectDiv'>
										设置  显示输入
										<div class='draggableSingle'>
											<p><template v-if='jsonObj.setTrackingInfo[2].length > 0'>{{jsonObj.setTrackingInfo[2][0].label}}</template></p>
										</div>
										<span>为</span>
										<p class='noTextPradus'></p>
									</div>
								</li>
								<li>
									<div class='detectDiv'>
										设置  显示输入
										<div class='draggableSingle'>
											<p><template v-if='jsonObj.setTrackingInfo[3].length > 0'>{{jsonObj.setTrackingInfo[3][0].label}}</template></p>
										</div>
										<span>为</span>
										<p class='noTextPradus'></p>
									</div>
								</li>
								<li>
									<div class='funDiv'>
										<div class='iconDiv'>
											<img src="./img/c03.png" alt="">
										</div>
										<div class='funDivCon'>
											<span>定义函数</span>
											<p class='textPradus'>企业工商注册登记信息</p>
										</div>
									</div>
									<ul class='assemblyUl assemblyUlSon'>
										<li>
											<div class='funDiv2'>
												企业工商注册登记信息
												<div class='draggableSingle'>
													<p><template v-if='jsonObj.enterpriseName.length > 0'>{{jsonObj.enterpriseName[0].label}}</template></p>
												</div>
											</div>
										</li>
										<li>
											<div class='funDiv2'>
												返回
												<p class='textPradus'>企业法人</p>
												<p class='textPradus'>对公账户</p>
												<p class='textPradus'>股权信息</p>
												<p class='textPradus'>纳税人识别号</p>
												<p class='textPradus'>登记机关</p>
											</div>
										</li>
										<li>
											<div class='controlDiv'>
												<div class='ctTop'>
													<span>如果</span>
													<div class='operaDiv2'>
														<div class='draggableSingle'>
															<p><template v-if='jsonObj.transferAccount.length > 0'>{{jsonObj.transferAccount[0].label}}</template></p>
														</div>
														<el-select v-model="jsonObj.accountRelation" disabled placeholder="" style='width:80px;margin-left:8px;'>
															<el-option
															v-for="item in operaOptions7"
															:key="item.value"
															:label="item.label"
															:value="item.value">
															</el-option>
														</el-select>
														<div class='draggableSingle'>
															<p><template v-if='jsonObj.corporateAccount.length > 0'>{{jsonObj.corporateAccount[0].label}}</template></p>
														</div>
													</div>
												</div>
												<div class='ctCenter'>
													<p class='ctCenterP'></p>
													<div class='ctCenterCon'>
														<div class='funDiv2'>
															返回
															<p class='textPradus'>转账账户为企业账户</p>
														</div>
													</div>
												</div>
												<div class='ctTop ctTop2'>
													<span>否则</span>
												</div>
												<div class='ctCenter'>
													<p class='ctCenterP'></p>
													<div class='ctCenterCon'>
														<div class='funDiv2'>
															返回
															<p class='textPradus'>转账账户非企业账户</p>
														</div>
													</div>
												</div>
												<div class='ctBottom'></div>
											</div>
										</li>
									</ul>
								</li>
								<li>
									<div class='funDiv'>
										<div class='iconDiv'>
											<img src="./img/c03.png" alt="">
										</div>
										<div class='funDivCon'>
											<span>定义函数</span>
											<p class='textPradus'>去向币所有者</p>
										</div>
									</div>
									<ul class='assemblyUl assemblyUlSon'>
										<li>
											<div class='funDiv2'>
												追踪标识
												<div class='draggableSingle'>
													<p><template v-if='jsonObj.dcepName.length > 0'>{{jsonObj.dcepName[0].label}}</template></p>
												</div>
											</div>
										</li>
										<li>
											<div class='funDiv2'>
												返回
												<p class='textPradus'>去向币所有者</p>
												<p class='textPradus'>后续参与方</p>
											</div>
										</li>
									</ul>
								</li>
								<li>
									<div class='funDiv'>
										<div class='iconDiv'>
											<img src="./img/c03.png" alt="">
										</div>
										<div class='funDivCon'>
											<span>定义函数</span>
											<p class='textPradus'>来源币所有者信息签名</p>
										</div>
									</div>
									<ul class='assemblyUl assemblyUlSon'>
										<li>
											<div class='funDiv2'>
												追踪标识
												<div class='draggableSingle'>
													<p><template v-if='jsonObj.sourceCurrencyInfo.length > 0'>{{jsonObj.sourceCurrencyInfo[0].label}}</template></p>
												</div>
											</div>
										</li>
										<li>
											<div class='funDiv2'>
												返回
												<p class='textPradus'>来源币所有者信息签名</p>
											</div>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<div class='funDiv'>
								<div class='iconDiv'>
									<img src="./img/c03.png" alt="">
								</div>
								<div class='funDivCon'>
									<span>定义函数</span>
									<p class='textPradus'>使用用途</p>
								</div>
							</div>
							<ul class='assemblyUl assemblyUlSon'>
								<li>
									<div class='funDiv2'>
										使用用途
										<p class='textPradus'>数字货币名</p>
									</div>
								</li>
								<li>
									<div class='funDiv2'>
										返回
										<p class='textPradus'>使用用途</p>
									</div>
								</li>
								<li>
									<div class='actionDiv'>
										设置
										<span class='textPradus'>投资金额</span>
										<span>为</span>
										<div class='draggableSingle'>
											<p><template v-if='jsonObj.investmentAmount.length > 0'>{{jsonObj.investmentAmount[0].label}}</template></p>
										</div>
									</div>
								</li>
								<li>
									<div class='actionDiv'>
										设置
										<span class='textPradus'>规定用途</span>
										<span>为&nbsp;把</span>
										<span class='textPradus'>“购买文教生产设备,购买办公用品原材料”</span>
										<span style='margin: 0 3px;'>按</span>
										<el-select v-model="jsonObj.separate" disabled placeholder="" style='width:60px;'>
											<el-option
											v-for="item in operaOptions4"
											:key="item.value"
											:label="item.label"
											:value="item.value">
											</el-option>
										</el-select>
										分开成列表
									</div>
								</li>
								<li>
									<div class='controlDiv'>
										<div class='ctTop'>
											<span>如果</span>
											<div class='operaDiv2'>
												<el-select v-model="jsonObj.prescribedUse" disabled placeholder="" style='width:80px;margin-left:8px;'>
													<el-option
													v-for="item in prescribedUseOptions"
													:key="item.value"
													:label="item.label"
													:value="item.value">
													</el-option>
												</el-select>
												<span style='margin:0 6px;'>中包含</span>
												<div class='draggableSingle'>
													<p><template v-if='jsonObj.usePurpose.length > 0'>{{jsonObj.usePurpose[0].label}}</template></p>
												</div>
											</div>
										</div>
										<div class='ctCenter'>
											<p class='ctCenterP'></p>
											<div class='ctCenterCon'>
												<div class='funDiv2'>
													返回
													<p class='textPradus'>使用用途合法</p>
												</div>
											</div>
										</div>
										<div class='ctTop ctTop2'>
											<span>否则</span>
										</div>
										<div class='ctCenter'>
											<p class='ctCenterP'></p>
											<div class='ctCenterCon'>
												<div class='funDiv2'>
													返回
													<p class='textPradus'>使用用途不合法</p>
												</div>
											</div>
										</div>
										<div class='ctBottom'></div>
									</div>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<li>
					<div class='funDiv'>
						<div class='iconDiv'>
							<img src="./img/c03.png" alt="">
						</div>
						<div class='funDivCon'>
							<span>定义函数</span>
							<p class='textPradus'>设置查询条件</p>
						</div>
					</div>
					<ul class='assemblyUl assemblyUlSon'>
						<li>
							<div class='detectDiv'>
								设置  显示输入
								<div class='draggableSingle'>
									<p><template v-if='jsonObj.setQueryCriteria[0].length > 0'>{{jsonObj.setQueryCriteria[0][0].label}}</template></p>
								</div>
								<span>为</span>
								<p class='noTextPradus'></p>
							</div>
						</li>
						<li>
							<div class='detectDiv'>
								设置  显示输入
								<div class='draggableSingle'>
									<p><template v-if='jsonObj.setQueryCriteria[1].length > 0'>{{jsonObj.setQueryCriteria[1][0].label}}</template></p>
								</div>
								<span>为</span>
								<p class='noTextPradus'></p>
							</div>
						</li>
						<li>
							<div class='funDiv2'>
								返回
								<p class='textPradus'>已作废的数字货币</p>
								<p class='textPradus'>查询私钥证书</p>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</li>
		<li v-if='roleType === "sfc"'>
			<div class='funDiv'>
				<div class='iconDiv'>
					<img src="./img/c03.png" alt="">
				</div>
				<div class='funDivCon'>
					<span>定义函数</span>
					<p class='textPradus'>投资人追踪请求</p>
				</div>
			</div>
			<ul class='assemblyUl assemblyUlSon'>
				<li>
					<div class='funDiv2'>
						投资人追踪请求
						<div class='draggableSingle'>
							<p><template v-if='jsonObj.trackingRequests[0].length > 0'>{{jsonObj.trackingRequests[0][0].label}}</template></p>
						</div>
						<div class='draggableSingle'>
							<p><template v-if='jsonObj.trackingRequests[1].length > 0'>{{jsonObj.trackingRequests[1][0].label}}</template></p>
						</div>
						<div class='draggableSingle'>
							<p><template v-if='jsonObj.trackingRequests[2].length > 0'>{{jsonObj.trackingRequests[2][0].label}}</template></p>
						</div>
					</div>
				</li>
				<li>
					<div class='funDiv'>
						<div class='iconDiv'>
							<img src="./img/c03.png" alt="">
						</div>
						<div class='funDivCon'>
							<span>定义函数</span>
							<p class='textPradus'>追踪标识</p>
						</div>
					</div>
					<ul class='assemblyUl assemblyUlSon'>
						<li>
							<div class='funDiv2'>
								追踪标识
								<div class='draggableSingle'>
									<p><template v-if='jsonObj.trackingMark.length > 0'>{{jsonObj.trackingMark[0].label}}</template></p>
								</div>
							</div>
						</li>
						<li>
							<div class='funDiv2'>
								返回
								<p class='textPradus'>数字货币名</p>
							</div>
						</li>
					</ul>
				</li>
				<li>
					<div class='funDiv'>
						<div class='iconDiv'>
							<img src="./img/c03.png" alt="">
						</div>
						<div class='funDivCon'>
							<span>定义函数</span>
							<p class='textPradus'>追踪标识</p>
						</div>
					</div>
					<ul class='assemblyUl assemblyUlSon'>
						<li>
							<div class='funDiv2'>
								投资人追踪请求
								<p class='textPradus'>追踪信息</p>
								<p class='textPradus'>金额使用情况</p>
							</div>
						</li>
						<li>
							<div class='funDiv'>
								<div class='iconDiv'>
									<img src="./img/c03.png" alt="">
								</div>
								<div class='funDivCon'>
									<span>定义函数</span>
									<p class='textPradus'>追踪信息</p>
								</div>
							</div>
							<ul class='assemblyUl assemblyUlSon'>
								<li>
									<div class='funDiv2'>
										追踪信息
										<div class='draggableSingle'>
											<p><template v-if='jsonObj.trackingInfo[0].length > 0'>{{jsonObj.trackingInfo[0][0].label}}</template></p>
										</div>
										<div class='draggableSingle'>
											<p><template v-if='jsonObj.trackingInfo[1].length > 0'>{{jsonObj.trackingInfo[1][0].label}}</template></p>
										</div>
										<div class='draggableSingle'>
											<p><template v-if='jsonObj.trackingInfo[2].length > 0'>{{jsonObj.trackingInfo[2][0].label}}</template></p>
										</div>
										<div class='draggableSingle'>
											<p><template v-if='jsonObj.trackingInfo[3].length > 0'>{{jsonObj.trackingInfo[3][0].label}}</template></p>
										</div>
									</div>
								</li>
								<li>
									<div class='detectDiv'>
										设置  显示输入
										<div class='draggableSingle'>
											<p><template v-if='jsonObj.setTrackingInfo[0].length > 0'>{{jsonObj.setTrackingInfo[0][0].label}}</template></p>
										</div>
										<span>为</span>
										<p class='noTextPradus'></p>
									</div>
								</li>
								<li>
									<div class='detectDiv'>
										设置  显示输入
										<div class='draggableSingle'>
											<p><template v-if='jsonObj.setTrackingInfo[1].length > 0'>{{jsonObj.setTrackingInfo[1][0].label}}</template></p>
										</div>
										<span>为</span>
										<p class='noTextPradus'></p>
									</div>
								</li>
								<li>
									<div class='detectDiv'>
										设置  显示输入
										<div class='draggableSingle'>
											<p><template v-if='jsonObj.setTrackingInfo[2].length > 0'>{{jsonObj.setTrackingInfo[2][0].label}}</template></p>
										</div>
										<span>为</span>
										<p class='noTextPradus'></p>
									</div>
								</li>
								<li>
									<div class='detectDiv'>
										设置  显示输入
										<div class='draggableSingle'>
											<p><template v-if='jsonObj.setTrackingInfo[3].length > 0'>{{jsonObj.setTrackingInfo[3][0].label}}</template></p>
										</div>
										<span>为</span>
										<p class='noTextPradus'></p>
									</div>
								</li>
								<li>
									<div class='funDiv'>
										<div class='iconDiv'>
											<img src="./img/c03.png" alt="">
										</div>
										<div class='funDivCon'>
											<span>定义函数</span>
											<p class='textPradus'>企业工商注册登记信息</p>
										</div>
									</div>
									<ul class='assemblyUl assemblyUlSon'>
										<li>
											<div class='funDiv2'>
												企业工商注册登记信息
												<div class='draggableSingle'>
													<p><template v-if='jsonObj.enterpriseName.length > 0'>{{jsonObj.enterpriseName[0].label}}</template></p>
												</div>
											</div>
										</li>
										<li>
											<div class='funDiv2'>
												返回
												<p class='textPradus'>企业法人</p>
												<p class='textPradus'>对公账户</p>
												<p class='textPradus'>股权信息</p>
												<p class='textPradus'>纳税人识别号</p>
												<p class='textPradus'>登记机关</p>
											</div>
										</li>
										<li>
											<div class='controlDiv'>
												<div class='ctTop'>
													<span>如果</span>
													<div class='operaDiv2'>
														<div class='draggableSingle'>
															<p><template v-if='jsonObj.taxIdentNum.length > 0'>{{jsonObj.taxIdentNum[0].label}}</template></p>
														</div>
														<el-select v-model="jsonObj.legitimate" disabled placeholder="" style='width:80px;margin-left:8px;'>
															<el-option
															v-for="item in operaOptions2"
															:key="item.value"
															:label="item.label"
															:value="item.value">
															</el-option>
														</el-select>
													</div>
												</div>
												<div class='ctCenter'>
													<p class='ctCenterP'></p>
													<div class='ctCenterCon'>
														<div class='funDiv2'>
															返回
															<p class='textPradus'>主体资格合法</p>
														</div>
													</div>
												</div>
												<div class='ctTop ctTop2'>
													<span>否则</span>
												</div>
												<div class='ctCenter'>
													<p class='ctCenterP'></p>
													<div class='ctCenterCon'>
														<div class='funDiv2'>
															返回
															<p class='textPradus'>转账账户为企业账户</p>
														</div>
													</div>
												</div>
												<div class='ctBottom'></div>
											</div>
										</li>
										<li>
											<div class='controlDiv'>
												<div class='ctTop'>
													<span>如果</span>
													<div class='operaDiv2'>
														<div class='draggableSingle'>
															<p><template v-if='jsonObj.transferAccount.length > 0'>{{jsonObj.transferAccount[0].label}}</template></p>
														</div>
														<el-select v-model="jsonObj.accountRelation" disabled placeholder="" style='width:80px;margin-left:8px;'>
															<el-option
															v-for="item in operaOptions7"
															:key="item.value"
															:label="item.label"
															:value="item.value">
															</el-option>
														</el-select>
														<div class='draggableSingle'>
															<p><template v-if='jsonObj.corporateAccount.length > 0'>{{jsonObj.corporateAccount[0].label}}</template></p>
														</div>
													</div>
												</div>
												<div class='ctCenter'>
													<p class='ctCenterP'></p>
													<div class='ctCenterCon'>
														<div class='funDiv2'>
															返回
															<p class='textPradus'>转账账户为企业账户</p>
														</div>
													</div>
												</div>
												<div class='ctTop ctTop2'>
													<span>否则</span>
												</div>
												<div class='ctCenter'>
													<p class='ctCenterP'></p>
													<div class='ctCenterCon'>
														<div class='funDiv2'>
															返回
															<p class='textPradus'>转账账户非企业账户</p>
														</div>
													</div>
												</div>
												<div class='ctBottom'></div>
											</div>
										</li>
									</ul>
								</li>
								<li>
									<div class='funDiv'>
										<div class='iconDiv'>
											<img src="./img/c03.png" alt="">
										</div>
										<div class='funDivCon'>
											<span>定义函数</span>
											<p class='textPradus'>去向币所有者</p>
										</div>
									</div>
									<ul class='assemblyUl assemblyUlSon'>
										<li>
											<div class='funDiv2'>
												追踪标识
												<div class='draggableSingle'>
													<p><template v-if='jsonObj.dcepName.length > 0'>{{jsonObj.dcepName[0].label}}</template></p>
												</div>
											</div>
										</li>
										<li>
											<div class='funDiv2'>
												返回
												<p class='textPradus'>去向币所有者</p>
												<p class='textPradus'>后续参与方</p>
											</div>
										</li>
									</ul>
								</li>
								<li>
									<div class='funDiv'>
										<div class='iconDiv'>
											<img src="./img/c03.png" alt="">
										</div>
										<div class='funDivCon'>
											<span>定义函数</span>
											<p class='textPradus'>来源币所有者信息签名</p>
										</div>
									</div>
									<ul class='assemblyUl assemblyUlSon'>
										<li>
											<div class='funDiv2'>
												追踪标识
												<div class='draggableSingle'>
													<p><template v-if='jsonObj.sourceCurrencyInfo.length > 0'>{{jsonObj.sourceCurrencyInfo[0].label}}</template></p>
												</div>
											</div>
										</li>
										<li>
											<div class='funDiv2'>
												返回
												<p class='textPradus'>来源币所有者信息签名</p>
											</div>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<div class='funDiv'>
								<div class='iconDiv'>
									<img src="./img/c03.png" alt="">
								</div>
								<div class='funDivCon'>
									<span>定义函数</span>
									<p class='textPradus'>金额使用情况</p>
								</div>
							</div>
							<ul class='assemblyUl assemblyUlSon'>
								<li>
									<div class='actionDiv'>
										设置
										<el-select v-model="jsonObj.setTotalFinancing" disabled placeholder="" style='width:100px;'>
											<el-option
											v-for="item in totalFinanciOptions"
											:key="item.value"
											:label="item.label"
											:value="item.value">
											</el-option>
										</el-select>
										<span>为</span>
										<div class='draggableSingle'>
											<p><template v-if='jsonObj.setTotalFinancingMoney.length > 0'>{{jsonObj.setTotalFinancingMoney[0].label}}</template></p>
										</div>
									</div>
								</li>
								<li>
									<div class='controlDiv'>
										<div class='ctTop'>
											<span>如果</span>
											<div class='operaDiv2'>
												<div class='draggableSingle'>
													<p><template v-if='jsonObj.amountUsed.length > 0'>{{jsonObj.amountUsed[0].label}}</template></p>
												</div>
												<el-select v-model="jsonObj.moneyRelation" disabled placeholder="" style='width:80px;margin-left:8px;'>
													<el-option
													v-for="item in operaOptions7"
													:key="item.value"
													:label="item.label"
													:value="item.value">
													</el-option>
												</el-select>
												<div class='draggableSingle'>
													<p><template v-if='jsonObj.totalFinancing.length > 0'>{{jsonObj.totalFinancing[0].label}}</template></p>
												</div>
											</div>
										</div>
										<div class='ctCenter'>
											<p class='ctCenterP'></p>
											<div class='ctCenterCon'>
												<div class='funDiv2'>
													返回
													<p class='textPradus'>金额使用情况</p>
												</div>
											</div>
										</div>
										<div class='ctTop ctTop2'>
											<span>否则</span>
										</div>
										<div class='ctCenter'>
											<p class='ctCenterP'></p>
											<div class='ctCenterCon'>
												<div class='listCodeDiv'>
													解除合同
												</div>
											</div>
										</div>
										<div class='ctBottom'></div>
									</div>
								</li>
								<li>
									<div class='funDiv2'>
										返回
										<p class='textPradus'>金额使用情况</p>
									</div>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<li>
					<div class='funDiv'>
						<div class='iconDiv'>
							<img src="./img/c03.png" alt="">
						</div>
						<div class='funDivCon'>
							<span>定义函数</span>
							<p class='textPradus'>设置查询条件</p>
						</div>
					</div>
					<ul class='assemblyUl assemblyUlSon'>
						<li>
							<div class='detectDiv'>
								设置  显示输入
								<div class='draggableSingle'>
									<p><template v-if='jsonObj.setQueryCriteria[0].length > 0'>{{jsonObj.setQueryCriteria[0][0].label}}</template></p>
								</div>
								<span>为</span>
								<p class='noTextPradus'></p>
							</div>
						</li>
						<li>
							<div class='detectDiv'>
								设置  显示输入
								<div class='draggableSingle'>
									<p><template v-if='jsonObj.setQueryCriteria[1].length > 0'>{{jsonObj.setQueryCriteria[1][0].label}}</template></p>
								</div>
								<span>为</span>
								<p class='noTextPradus'></p>
							</div>
						</li>
						<li>
							<div class='funDiv2'>
								返回
								<p class='textPradus'>已作废的数字货币</p>
								<p class='textPradus'>查询私钥证书</p>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'editorComment',
	props: ['roleType', 'jsonData'],
	data () {
		return {
			// 代码区域
			operaOptions2: [
				{
					label: '是偶数',
					value: 1
				},
				{
					label: '是奇数',
					value: 2
				},
				{
					label: '是质数',
					value: 3
				},
				{
					label: '是整数',
					value: 4
				},
				{
					label: '是正数',
					value: 5
				},
				{
					label: '是负数',
					value: 6
				},
				{
					label: '成立',
					value: 7
				},
				{
					label: '不成立',
					value: 8
				},
				{
					label: '生效',
					value: 9
				},
				{
					label: '未生效',
					value: 10
				},
				{
					label: '合法',
					value: 11
				},
				{
					label: '不合法',
					value: 12
				}
			],
			operaOptions4: [
				{
					label: ',',
					value: 1
				},
				{
					label: '空格',
					value: 2
				},
				{
					label: '-',
					value: 3
				},
				{
					label: '.',
					value: 4
				},
				{
					label: '；',
					value: 5
				}
			],
			operaOptions7: [
				{
					label: '=',
					value: 1
				},
				{
					label: '≠',
					value: 2
				},
				{
					label: '<',
					value: 3
				},
				{
					label: '≤',
					value: 4
				},
				{
					label: '>',
					value: 5
				},
				{
					label: '≥',
					value: 6
				}
			],
			prescribedUseOptions: [
				{
					label: '规定用途',
					value: 1
				}
			],
			totalFinanciOptions: [
				{
					label: '甲方',
					value: 1
				},
				{
					label: '注册资本',
					value: 2
				},
				{
					label: '实缴资本',
					value: 3
				},
				{
					label: '股东',
					value: 4
				},
				{
					label: '王小亮',
					value: 5
				},
				{
					label: '筹资总额',
					value: 6
				}
			],
			jsonObj: {}
		};
	},
	inject: ['reload'],
	components: {
	},
	created () {
		this.jsonObj = JSON.parse(this.jsonData);
	},
	methods: {
	},
	watch: {
		jsonData: {
			handler () {
				if (this.jsonData) {
					this.jsonObj = JSON.parse(this.jsonData);
				}
			},
			deep: true,
			immediate: true
		}
	}
};
</script>

<style lang="scss" scoped>
// 拖拽组件
.assemblyUl{
	width: 100%;
	height: 100%;
	margin-top: 0;
	overflow-y: auto;
	font-size: 14px;
	position: relative;
	>li{
		margin-bottom:16px;
		/deep/ .el-select{
			width: 80px;
			margin-right: 5px;
		}
		/deep/ .el-date-editor{
			width: 88px;
			margin-right: 5px;
			.el-input__prefix, .el-input__suffix{
				display: none;
			}
		}
		/deep/ .el-input__inner{
			height: 30px;
			line-height: 30px;
			color: #222222;
			font-size: 13px;
			padding: 0 6px;
			border: 0;
		}
		/deep/ .el-input-number{
			width: 50px;
			margin: 0 8px;
		}
		/deep/ .el-input-number{
			.el-input__inner{
				border-radius: 20px;
				color: #200000;
			}
		}
		/deep/ .el-input__inner:focus{
			border-color: transparent;
		}
		.diamondDiv1{
			background: url('./img/diamond1.png') no-repeat no-repeat;
			height:30px;
			line-height: 30px;
			background-size: 100% 100%;
			display: inline-block;
			vertical-align: middle;
			margin-left: 8px;
			position: relative;
			top: -1px;
			width:84px;
			/deep/ .el-input{
				width: 64px;
				margin-left: 10px;
			}
		}
		.textPradus{
			height: 30px;
			line-height: 30px;
			background: #FFFFFF;
			border-radius: 15px;
			padding: 0 16px;
			text-align: center;
			color: #222222;
			display: inline-block;
			margin-left: 8px;
		}
		.noTextPradus{
			height: 30px;
			background: #dddddd;
			border-radius: 15px;
			display: inline-block;
			margin-left: 8px;
			width: 102px;
			vertical-align: bottom;
			margin-bottom: 5px;
		}
		.inputPradus{
			width: 88px;
			margin-left: 5px;
			/deep/ .el-input__inner{
				border-radius: 20px;
				color: #200000;
				text-align: center;
			}
		}
		.draggableSingle{
			display: inline-block;
			overflow: hidden;
			height: 40px;
			line-height: 40px;
			vertical-align: bottom;
			p{
				height: 30px;
				background: #ffffff;
				border-radius: 15px;
				display: inline-block;
				margin-left: 8px;
				min-width: 102px;
				vertical-align: bottom;
				margin-bottom: 5px;
				color: #222222;
				line-height: 30px;
				text-align: center;
				padding: 0 15px;
			}
		}
	}
	>li:last-child{
		margin-bottom:0;
	}
}
.assemblyUl{
	.isStartDragActive{
		margin-bottom: 8px;
		.assemblyUlSon{
			min-height: 8px;
		}
	}
}
.assemblyUlSon{
	padding-left: 40px;
	>li:first-child{
		margin-top: 10px;
	}
}
.noScroll::-webkit-scrollbar{
	width: 0;
	height: 0;
}
// 事件
.eventDiv{
	position: relative;
	padding: 6px 0;
	.eventDivCon{
		height: 36px;
		line-height: 36px;
		background: #126EFD;
		border-radius: 18px;
		margin-left: 24px;
		padding-left: 24px;
		position: relative;
		span{
			padding-right: 5px;
		}
		.deleteIcon{
			position: absolute;
			top: 10px;
			right: 5px;
			cursor: pointer;
		}
	}
	.iconDiv{
		width: 48px;
		height: 48px;
		background: #126EFD;
		border-radius: 50%;
		text-align: center;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		img{
			height: 22px;
			margin-top: 13px;
		}
	}
	.eventRun{
		font-size: 15px;
		img{
			height: 28px;
			width: 28px;
			margin-top: 10px;
		}
	}
}
.eventDiv2{
	padding: 0;
	.eventDivCon{
		border-radius: 0 18px 18px 0;
		margin-left: 0;
		padding-left: 18px;
	}
}
// 控制
.controlDiv{
	.ctTop{
		height: 50px;
		background: #01A2F3;
		border-radius: 0px 100px 100px 0px;
		line-height: 50px;
		padding: 0 24px 0 20px;
		width: auto;
		display: inline-block;
	}
	.ctTop2{
		width: 164px;
		height: 40px;
		line-height: 40px;
	}
	.ctCenter{
		min-height: 30px;
		display: flex;
		.ctCenterP{
			width: 20px;
			background: #01A2F3;
		}
		.ctCenterCon{
			flex-grow: 1;
			padding:10px
		}
	}
	.ctBottom{
		width: 143px;
		height: 24px;
		background: #01A2F3;
		border-radius: 0px 100px 100px 0px;
	}
	.controlDivMin{
		width: 114px;
		height: 40px;
		line-height: 40px;
		background: #01A2F3;
		border-radius: 0px 100px 100px 0px;
		padding-left: 20px;
	}
}
// 动作
.actionDiv{
	display: inline-block;
	min-width: 80px;
	height: 40px;
	line-height: 40px;
	background: #01B08D;
	border-radius: 0px 20px 20px 0px;
	padding: 0 24px 0 14px;
	span{
		margin-left: 8px;
	}
}
// 侦测
.detectDiv{
	display: inline-block;
	min-width: 80px;
	height: 40px;
	line-height: 40px;
	background: #3EB15D;
	border-radius: 0px 20px 20px 0px;
	padding: 0 24px 0 14px;
	span{
		margin-left: 8px;
	}
}
// 运算
.operaDiv{
	display: inline-block;
	height: 40px;
	line-height: 40px;
	background: #64B545;
	border-radius: 20px;
	padding: 0 24px 0 14px;
	span{
		margin-left: 8px;
	}
}
.operaDiv2{
	background: url('./img/diamond2.png') no-repeat no-repeat;
	height:40px;
	line-height: 40px;
	background-size: 100% 100%;
	display: inline-block;
	padding: 0 24px 0 14px;
}
// 变量
.variableDiv{
	display: inline-block;
	height: 40px;
	background: #DCB404;
	border-radius: 0px 20px 20px 0px;
	line-height: 40px;
	padding: 0 24px 0 14px;
}
// 函数
.funDiv{
	position: relative;
	padding: 6px 0;
	.funDivCon{
		display: inline-block;
		height: 36px;
		line-height: 36px;
		background: #DE911D;
		border-radius: 18px;
		margin-left: 24px;
		padding: 0 24px;
		span{
			padding-right: 5px;
		}
	}
	.iconDiv{
		width: 48px;
		height: 48px;
		background: #DE911D;
		border-radius: 50%;
		text-align: center;
		position: absolute;
		top: 0;
		left: 0;
		img{
			height: 20px;
			width: 20px;
			margin-top: 14px;
		}
	}
}
.funDiv2{
	display: inline-block;
	height: 40px;
	line-height: 40px;
	background: #DE911D;
	border-radius: 0px 20px 20px 0px;
	padding: 0 24px 0 14px;
}
.funDiv3{
	display: inline-block;
	height: 40px;
	line-height: 40px;
	height: 40px;
	background: #DE911D;
	border-radius: 20px;
	text-align: center;
	padding: 0 30px;
	min-width: 90px;
}
// 列表
.listCodeDiv{
	display: inline-block;
	min-width: 80px;
	height: 40px;
	line-height: 40px;
	background: #CF503D;
	border-radius: 0px 20px 20px 0px;
	padding: 0 24px 0 14px;
	span{
		margin-left: 8px;
	}
}
</style>
