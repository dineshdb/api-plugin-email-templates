export default `<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<base href="{{homepage}}">
	<title>Order Confirm Email</title>
	<style type="text/css">
		/* Media Query for mobile */

		@media screen and (max-width: 599px) {

			/* This resizes tables and images to be 100% wide with a proportionate width */
			table[class=emailwrapto100pc],
			td[class=emailwrapto100pc],
			img[class=emailwrapto100pc] {
				width: 100% !important;
				height: auto !important;
			}

			table[class=emailwrapto90pc],
			td[class=emailwrapto90pc],
			img[class=emailwrapto90pc] {
				width: 90% !important;
				height: auto !important;
				margin: 0 auto !important;
			}

			td[class=padding] {
				padding-left: 0 !important;
				padding-right: 0px !important;
			}

			td[class=nopadding] {
				padding-left: 0 !important;
				padding-right: 0 !important;
				padding-bottom: 0 !important;
				padding-top: 0 !important;
			}

			td[class=textalignCenter] {
				text-align: center !important;
			}

			img[class=resize] {
				width: 90% !important;
				height: 50px !important;
			}

			img[class=resize100] {
				width: 100% !important;
				height: auto !important;
			}

			img[class=resize1001] {
				width: 100% !important;
				height: auto !important;
				padding: 10px 0 !important;
			}

			td[class=tabs] {
				padding-left: 0 !important;
				padding-right: 0 !important;
				text-align: center !important;
				width: 90% !important;
				float: left !important;
				margin: 0 5% !important;
			}

			td[class=tabsnopadd] {
				padding-left: 0 !important;
				padding-right: 0 !important;
				padding-bottom: 0 !important;
				padding-top: 0 !important;
				text-align: center !important;
				width: 90% !important;
				float: left !important;
				margin: 0 5% !important;
			}

			td[class=tabs100pc] {
				padding-left: 0 !important;
				padding-right: 0 !important;
				text-align: center !important;
				width: 100% !important;
				float: left !important;
				margin: 0 0% !important;
			}

			td[class=invisible] {
				display: none !important;
			}

			td[class=noheight] {
				height: auto;
				padding-bottom: 20px;
			}
		}

		/* Additional Media Query for tablets */

		@media screen and (min-width: 620px) and (max-width: 1024px) {

			/* Same as above */
			/*table[class=emailwrapto100pc], img[class=emailwrapto100pc]{width:auto !important; max-width:738px; height:auto !important;}*/
			a[href^=tel] {
				color: inherit;
				text-decoration: none;
			}

			a img,
			img {
				border: 0;
				outline: 0;
			}

			.a5q {
				display: none !important;
			}

			table table table div {
				display: none !important;
			}
		}
	</style>
	<script type="application/ld+json">	{{{ jsonldString }}} </script>

</head>

<body style="margin:0; padding:0;">
	<table width="100%" border="0" cellspacing="0" cellpadding="0" class="emailwrapto100pc">
		<tr>
			<td align="center" valign="middle">
				<table width="600" border="0" cellspacing="0" cellpadding="0" class="emailwrapto100pc">
					<tr>
						<td valign="top" align="left">
							<table width="100%" border="0" cellspacing="0" cellpadding="0" class="emailwrapto100pc">
								<tr>
									<td height="10" align="left" valign="top" style="font-size:1px; line-height:1px;">
										&nbsp;</td>
								</tr>
								<tr>
									<td height="4" align="left" valign="top" bgcolor="#EF4537"
										style="font-size:1px; line-height:1px;">&nbsp;</td>
								</tr>
								<tr>
									<td align="center" valign="top">
										<table width="545" border="0" cellspacing="0" cellpadding="0"
											class="emailwrapto90pc">
											<tr>
												<td valign="top" align="left">
													<table width="100%" border="0" cellspacing="0" cellpadding="0"
														class="emailwrapto100pc">

														<!-- Begin Header -->
														<tr>
															<td height="34" align="left" valign="top"
																style="font-size:1px; line-height:1px;">&nbsp;</td>
														</tr>
														<tr>
															<td align="left" valign="top">
																<a href="{{homepage}}"><img
																		src="https://www.hamropatro.com/images/hamropatro.png"
																		width="49" height="49" alt="logo"></a>
															</td>
														</tr>
														<tr>
															{{#if order.exception}}
																<td align="center>
																<div style="background-color: #f9ccbb; min-height: 3em; display: flex; text-align: center; justify-content: center;align-items: center; flex-direction: column;">
																	<div
																		style="font-size:14px; line-height:normal; color:#da0610; font-family:Arial, helvetica; font-weight:bold; text-align: center; "> Exception: </div>
																	<div style="text-align: center; "> {{ order.exception.content }}</div>
																	
																</div>
																</td>
															{{/if}}
														</tr>
														<tr>
															<td height="31" align="left" valign="top"
																style="font-size:1px; line-height:1px;">&nbsp;</td>
														</tr>
														<!-- End Header -->

														<!-- Begin Body -->
														<div>
															<div>
																<span
																	style="font-size:14px; line-height:normal; color:#4c4c4d; font-family:Arial, helvetica; font-weight:bold;">Order
																	Number:</span>
																<a href="{{orderUrl}}"
																	style="color:#1999dd;">{{order.referenceId}}</a>
															</div>
															<div>
																<span
																	style="font-size:14px; line-height:normal; color:#4c4c4d; font-family:Arial, helvetica; font-weight:bold;">Order
																	Date:</span> {{orderDate}}
															</div>
															<div>
																<span
																	style="font-size:14px; line-height:normal; color:#4c4c4d; font-family:Arial, helvetica; font-weight:bold;">Payment
																	Type:</span>
																{{#each billing.payments}}
																{{this.displayName}} ({{this.displayAmount}})
																{{/each}}
															</div>
															{{#if order.preferredDeliveryDate}}
															<div>
																<span
																	style="font-size:14px; line-height:normal; color:#4c4c4d; font-family:Arial, helvetica; font-weight:bold;">Delivery
																	Date:</span>
																{{ order.preferredDeliveryDate }}
															</div>
															{{/if}}

															{{#if order.message}}
															<div>
																<span
																	style="font-size:14px; line-height:normal; color:#4c4c4d; font-family:Arial, helvetica; font-weight:bold;">Message:</span>
																{{ order.message }}
															</div>
															{{/if}}

															{{#if order.messageOnItem}}
															<div>
																<span
																	style="font-size:14px; line-height:normal; color:#4c4c4d; font-family:Arial, helvetica; font-weight:bold;">Message
																	on Cake:</span>
																{{ order.messageOnItem }}
															</div>
															{{/if}}

															<br style="height:2px; background-color: gray" />
															<div
																style="font-size:14px; line-height:normal; color:#4c4c4d; font-family:Arial, helvetica; font-weight:bold;">
																Delivery Address:</div>
															<div
																style="font-size:10px; line-height:normal; color:#4c4c4d; font-family:Arial, helvetica;">
																{{#with shipping.address}}
																{{this.fullName}} {{this.phone}}<br>
																{{this.address}}<br>
																{{this.city}} {{this.region}} {{this.postal}}
																{{/with}}
															</div>

															<br style="height:2px; background-color: gray" />
															<div
																style="font-size:14px; line-height:normal; color:#4c4c4d; font-family:Arial, helvetica; font-weight:bold;">
																Billing Address:</div>
															<div
																style="font-size:10px; line-height:normal; color:#4c4c4d; font-family:Arial, helvetica;">
																{{#with billing.address}}
																{{this.fullName}} {{this.phone}}<br>
																{{this.address}}<br>
																{{this.city}} {{this.region}} {{this.postal}}
																{{/with}}
															</div>
														</div>

														{{#if order.requestedImageUrls.length }}
														<h3>Photos and videos</h3>
														<div style="display: flex; margin-top: 20px; margin-bottom: 20px;">
															{{#with order.requestedImageUrls}}
															<a href="{{ this }}" alt="Open this image on a new tab" target="_blank" noopener noreferrer download>
																<img style="max-height: 128px; padding: 5px;" align=left alt="Image you requested from your loved ones"
																	src="{{ this }}"></img>
															</a>
															{{/with}}

															{{#with order.requestedVideoUrls}}
															<a href="{{ this }}" alt="Open this video on a new tab" target="_blank" noopener noreferrer download>
																<video controls	style="max-height: 128px; padding: 5px;" align=left height="128" width="256" poster="https://www.hamropatro.com/images/hamropatro.png">
																	<source src="{{this}}" type="video/mp4" />
																	<img src="https://www.hamropatro.com/images/hamropatro.png" style="max-height: 120px;" title="Your browser does not support the <video> tag" />
																</video>
															</a>
															{{/with}}
														</div>
														{{/if}}


														<tr>
															<td align="left" valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0" class="emailwrapto100pc">
																	<tbody>
																		{{#each combinedItems}}
																		<tr>
																			<td valign="top" align="left">
																				<a style="text-decoration: none; color: #333;"
																					href="/product/{{productSlug}}">
																					<table width="100%" border="0"
																						cellspacing="0" cellpadding="0"
																						class="emailwrapto100pc">
																						<tbody>
																							<tr>
																								<td valign="top"
																									align="left">
																									<table width="110"
																										border="0"
																										cellspacing="0"
																										cellpadding="0"
																										class="emailwrapto100pc">
																										<tbody>
																											<tr>
																												<td valign="middle"
																													align="left"
																													height="15"
																													style="line-height:1px; font-size:1px;">
																													&nbsp;
																												</td>
																											</tr>
																											<tr>
																												<td valign="middle"
																													align="left"
																													style="font-size:12px; line-height:normal; color:#4c4c4d; font-family:Arial, helvetica;">
																													{{quantity}}
																													x
																												</td>
																												<td valign="top"
																													align="center"
																													width="30"
																													style="line-height:1px; font-size:1px;">
																													&nbsp;
																												</td>
																												<td valign="middle"
																													align="left">
																													{{#if
																													imageURLs}}
																													<img src="{{thumbnail}}"
																														width="50"
																														height="50"
																														alt="" />
																													{{else}}
																													<img src="{{placeholderImage}}"
																														width="50"
																														height="50"
																														alt="" />
																													{{/if}}
																												</td>
																											</tr>
																										</tbody>
																									</table>
																								</td>
																								<td width="180">&nbsp;
																								</td>
																								<td valign="middle"
																									align="left">
																									<table width="360"
																										border="0"
																										cellspacing="0"
																										cellpadding="0"
																										class="emailwrapto100pc">
																										<tbody>
																											<tr>
																												<td align="left"
																													valign="middle"
																													style="font-size:12px; line-height:normal; color:#4c4c4d; font-family:Arial, helvetica;">
																													{{variantTitle}}
																												</td>
																												<td align="right"
																													valign="middle"
																													style="font-size:12px; line-height:normal; color:#4c4c4d; font-family:Arial, helvetica;">
																													{{price.currency.code}}
																													{{price.displayAmount}}
																												</td>
																											</tr>
																										</tbody>
																									</table>
																								</td>
																							</tr>
																						</tbody>
																					</table>
																				</a>
																			</td>
																		</tr>
																		<tr>
																			<td valign="top" align="left" height="15"
																				style="line-height:1px; font-size:1px;">
																				&nbsp;</td>
																		</tr>
																		<tr>
																			<td valign="top" align="left" height="2"
																				style="line-height:1px; font-size:1px; border-top:solid 2px #efefee;">
																				&nbsp;</td>
																		</tr>
																		{{/each}}
																		<tr>
																			<td valign="top" align="right">
																				<table width="210" border="0"
																					cellspacing="0" cellpadding="0"
																					class="emailwrapto100pc">
																					<tbody>
																						<tr>
																							<td valign="top"
																								align="left" height="20"
																								style="line-height:1px; font-size:1px;">
																								&nbsp;</td>
																						</tr>
																						<tr>
																							<td valign="top"
																								align="right"
																								style="font-size:12px; line-height:normal; color:#4c4c4d; font-family:Arial, helvetica;">
																								Subtotal:
																								{{price.currency.code}}
																								{{billing.subtotal}}
																							</td>
																						</tr>
																						<tr>
																							<td valign="top"
																								align="right"
																								style="font-size:12px; line-height:normal; color:#4c4c4d; font-family:Arial, helvetica;">
																								Shipping:
																								{{price.currency.code}}
																								{{billing.shipping}}
																							</td>
																						</tr>
																						<tr>
																							<td valign="top"
																								align="right"
																								style="font-size:12px; line-height:normal; color:#4c4c4d; font-family:Arial, helvetica;">
																								Discounts:
																								{{price.currency.code}}
																								{{billing.discounts}}
																							</td>
																						</tr>
																						<tr>
																							<td valign="top"
																								align="left" height="10"
																								style="line-height:1px; font-size:1px;">
																								&nbsp;</td>
																						</tr>
																						<tr>
																							<td valign="top"
																								align="left" height="2"
																								style="line-height:1px; font-size:1px; border-top:solid 1px #a2a1a3;">
																								&nbsp;</td>
																						</tr>
																						<tr>
																							<td valign="top"
																								align="left" height="10"
																								style="line-height:1px; font-size:1px;">
																								&nbsp;</td>
																						</tr>
																						<tr>
																							<td valign="top"
																								align="right"
																								style="font-size:12px; line-height:normal; color:#4c4c4d; font-family:Arial, helvetica;">
																								Previous Total:
																								{{price.currency.code}}
																								{{billing.total}}</td>
																						</tr>
																						<tr>
																							<td valign="top"
																								align="left" height="10"
																								style="line-height:1px; font-size:1px;">
																								&nbsp;</td>
																						</tr>
																						<tr>
																							<td valign="top"
																								align="left" height="2"
																								style="line-height:1px; font-size:1px; border-top:solid 3px #4c4d4e;">
																								&nbsp;</td>
																						</tr>
																						<tr>
																							<td valign="top"
																								align="left" height="10"
																								style="line-height:1px; font-size:1px;">
																								&nbsp;</td>
																						</tr>
																						<tr>
																							<td valign="top"
																								align="left">
																								<table width="100%"
																									border="0"
																									cellspacing="0"
																									cellpadding="0">
																									<tbody>
																										<tr>
																											<td valign="top"
																												align="left"
																												style="font-size:12px; line-height:normal; color:#a2a1a3; font-family:Arial, helvetica;">
																												NEW
																												TOTAL:
																											</td>
																											<td valign="top"
																												align="right"
																												style="font-size:22px; line-height:normal; color:#4c4c4d; font-family:Arial, helvetica;">
																												{{price.currency.code}}
																												{{billing.adjustedTotal}}
																											</td>
																										</tr>
																									</tbody>
																								</table>
																							</td>
																						</tr>
																					</tbody>
																				</table>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>




														<!-- End Body -->

														<!-- Begin footer -->
														<tr>
															<td height="32" align="left" valign="top"
																style="font-size:1px; line-height:1px;">&nbsp;</td>
														</tr>
														<tr>
															<td height="1" align="left" valign="middle"
																bgcolor="#EF4537"
																style="font-size:1px; line-height:1px;">&nbsp;</td>
														</tr>
														<tr>
															<td height="15" align="left" valign="top"
																style="font-size:1px; line-height:1px;">&nbsp;</td>
														</tr>
														<tr>
															<td align="left" valign="top"
																style="font-family:Arial, Helvetica, sans-serif; font-size:12px; font-weight:normal; line-height:17px;">
																You received this email because you created an order
																with {{shopName}}. Questions or suggestions? Email us at
																<a href="mailto:{{contactEmail}}"
																	style="text-decoration:none; color:#EF4537;">{{contactEmail}}</a>
															</td>
														</tr>
														<!-- Begin Social Icons -->
														{{#if socialLinks.display}}
														<tr>
															<td height="21" align="left" valign="top"
																style="font-size:1px; line-height:1px;">&nbsp;</td>
														</tr>
														<tr>
															<td align="left" valign="top">
																<table width="100%" border="0" cellspacing="0"
																	cellpadding="0" class="emailwrapto100pc">
																	<tr>
																		{{#if socialLinks.twitter.display}}
																		<td width="26" align="left" valign="top">
																			<a href="{{socialLinks.twitter.link}}"><img
																					src="{{socialLinks.twitter.icon}}"
																					width="26" height="26"
																					alt="twt_icon"></a>
																		</td>
																		{{/if}}
																		{{#if socialLinks.facebook.display}}
																		<td width="10" align="left" valign="top">&nbsp;
																		</td>
																		<td width="26" align="left" valign="top">
																			<a href="{{socialLinks.facebook.link}}"><img
																					src="{{socialLinks.facebook.icon}}"
																					width="26" height="26"
																					alt="fb_icon"></a>
																		</td>
																		{{/if}}
																		{{#if socialLinks.googlePlus.display}}
																		<td width="10" align="left" valign="top">&nbsp;
																		</td>
																		<td>
																			<a href="{{socialLinks.googlePlus.link}}"><img
																					src="{{socialLinks.googlePlus.icon}}"
																					width="26" height="26"
																					alt="g_plus_icon"></a>
																		</td>
																		{{/if}}
																	</tr>
																</table>
															</td>
														</tr>
														<tr>
															<td height="28" align="left" valign="top"
																style="font-size:1px; line-height:1px;">&nbsp;</td>
														</tr>
														{{else}}
														<tr>
															<td height="15" align="left" valign="top"
																style="font-size:1px; line-height:1px;">&nbsp;</td>
														</tr>
														{{/if}}
														<!-- End Social Icons -->
														<tr>
															<td height="3" align="left" valign="top" bgcolor="#EF4537"
																style="font-size:1px; line-height:1px;">&nbsp;</td>
														</tr>
														<tr>
															<td height="18" align="left" valign="top"
																style="font-size:1px; line-height:1px;">&nbsp;</td>
														</tr>
														<tr>
															<td align="left" valign="top"
																style="font-family:Arial, Helvetica, sans-serif; font-size:12px; font-weight:normal; line-height:12px; color:#4d4c4d;">
																&copy; {{copyrightDate}}
																{{#if legalName}}{{legalName}}{{else}}Hamro
																Patro{{/if}}. All rights reserved</td>
														</tr>
														<tr>
															<td height="8" align="left" valign="top"
																style="font-size:1px; line-height:1px;">&nbsp;</td>
														</tr>
														<tr>
															<td align="left" valign="top"
																style="font-family:Arial, Helvetica, sans-serif; font-size:10px; font-weight:normal; line-height:10px; color:#787878;">
																{{#if physicalAddress}}{{physicalAddress.address}},
																{{physicalAddress.city}}, {{physicalAddress.region}}
																{{physicalAddress.postal}}{{/if}}</td>
														</tr>
														<!-- End footer -->

													</table>
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>

</body>`
