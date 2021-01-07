export default `<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Order Folloup Email</title>
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

			a img {
				border: 0;
				outline: 0;
			}

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
															<td height="31" align="left" valign="top"
																style="font-size:1px; line-height:1px;">&nbsp;</td>
														</tr>
														<!-- End Header -->

														<!-- Begin Body -->
														<div>
															<p>Namaste!</p>
															<p>Thank you for using Hamro Gifts to send gifts to your friends and family in Nepal. 
															We would love to know your feedback so that we can provide better service in the future.</p>
															
															<p>Please rate your experience here - <a href="https://forms.gle/j2EjqNb8gT3ZZbD47">https://forms.gle/j2EjqNb8gT3ZZbD47</a></p>
															
															<p>Thank you once again for using our services.</p>
															
															<p>
															With best regards,<br/>
															Hamro Gifts Support Team
															</p>
														
														</div>
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
