<template>
	<b-container fluid class="no-padding">
		<Nav></Nav>
		<b-container fluid id="jobs">
			<div class="title">
				<h2>所有職缺</h2>
				<h5>若對我們職缺有興趣，請點選“立即填寫履歷”！</h5>
			</div>


			<b-card no-body>
				<b-tabs pill card v-model="tabIndex" class="mytab">
					<b-tab title="國泰人壽" :title-link-class="linkClass(0)">
						<div class="job">
							<h4>客服系統整合工程師</h4>
							<h5>國泰人壽 / 國泰產險</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>客服中心(Contact Center)資訊系統及電話語音系統之規劃、開發與維運。</li>
									<li>客服資通訊科技之應用研究及導入評估。<br></li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>具IP網路、語音通訊、客戶服務相關系統開發經驗者尤佳。</li>
									<li> 無相關經驗但有意願學習客服系統(含交換機,IVR)相關知識技能者亦可。<br></li>
									<li> 具Java EE、HTML、JavaScript、Java等開發經驗者尤佳。</li>
								</ul>
							</div>
						</div>
						<div class="job">
							<h4>應用系統開發工程師></h4>
							<h5>國泰人壽</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>國壽人壽審查契約、理賠、保單變更、人事管理、財務投資系統等線上系統建置，以支持壽險公司營運。</li>
									<li>國泰人壽官網(B2C)、員工網站(B2E)、保險電子商務系統、客戶關係管理系統、行銷支援系統及資訊業務部門各項專案系統之建置、開發及維護。</li>
									<li>iOS／Android App相關專案之系統開發及維護。</li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>大學日間部以上，理、工、商、管理學院相關系所畢業。</li>
									<li>熱愛程式開發，無資訊背景亦可。</li>
									<li>具備Java EE、HTML、JavaScript等開發經驗者，已考取Java專業證照者佳。</li>
									<li>有iOS / Android App開發、測試、上架、性能優化經驗者，附個人相關作品者尤佳。</li>
									<li>熟悉前端UI框架運用或具RWD開發經驗尤佳。</li>
									<li>為儲備行動化App設計人員，具備Objective C、HTML5、CSS3開發經驗者尤佳。</li>
								</ul>

							</div>
						</div>
						<div class="job">
							<h4>應用系統分析工程師</h4>
							<h5>國泰人壽</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>國壽人壽審查契約、理賠、保單變更、人事管理、投資型商品、團險、意外險、財務投資等線上系統規劃，以支持壽險公司營運，除了系統分與維護，更能了解壽險公司整體經營之狀況</li>
									<li>國泰人壽官網(B2C)、員工網站(B2E)、保險電子商務、客戶關係管理及行銷支援等線上系統之分析規劃，以提供壽險公司內外部客戶行銷、服務及電子商務之最佳化平台。</li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>大學日間部以上，理、工、商、管理學院相關系所畢業。</li>
									<li>對壽險系統維護俱有1年以上相關經驗。</li>
									<li>有參與設計過壽險系統專案、電子商務系統維護或具備Java、Objective C程式開發經驗者尤佳。</li>
								</ul>
							</div>
						</div>
						<div class="job">
							<h4>伺服器系統管理工程師(Linux、Windows、AIX)</h4>
							<h5>國泰人壽</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>規劃、維運Linux Server平台，及相關軟硬體建置、維護與監控。</li>
									<li>資訊系統專案架構之規劃、評估與建置。</li>
									<li>評估、導入開源技術或新資訊科技應用。</li>
								</ul>
								<br>
								<ul>
									<li>大學日間部以上，理、工、商、管理學院相關系所畢業。</li>
									<li>歡迎具下列任一領域經驗、專長或證照者：</li>
									<ul>
										<li>Unix-like系統相關管理、Java Based應用伺服器管理。</li>
										<li>負載平衡管理、儲存及備份設備等基本概念。</li>
										<li>Java、Web Application、網路及通訊等基本概念。</li>
										<li>虛擬化平台 (VMware vSphere／Microsoft Hyper-V／Power VM) 等基本概念。</li>
										<li>大型架構(超過100台伺服器)系統維運經驗者。</li>
									</ul>
								</ul>
							</div>
						</div>
						<div class="job">
							<h4>應用伺服器系統工程師(WAS、JBoss)</h4>
							<h5>國泰人壽</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>負責應用伺服器系統(IBM WAS、Red Hat JBoss)管理。</li>
									<li> 電腦作業系統(Linux、Windows 或AIX)管理。</li>
								</ul>
								<br>
								<ul>
									<li>大學日間部以上，理、工、商、管理學院相關系所畢業。</li>
									<li>歡迎具下列任一領域經驗、專長或證照者：</li>
									<ul>
										<li>Java Based應用伺服器管理。</li>
										<li>Linux、Windows 或AIX管理。</li>
										<li>大型架構(超過100台伺服器)系統維運經驗者。</li>
										<li>專案團隊經驗者或小型工作團隊經驗者。</li>
									</ul>
								</ul>
							</div>
						</div>
						<div class="job">
							<h4>資料庫系統管理工程師(DB2、SQL、Open source)</h4>
							<h5>國泰人壽</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>資料庫及相關軟硬體建置、維護與監控。</li>
									<li>資料庫效能分析與優化調校。</li>
									<li>資訊系統專案架構之規劃、評估與建置。</li>
								</ul>
								<br>
								<ul>
									<li>大學日間部以上，理、工、商、管理學院相關系所畢業。</li>
									<li>歡迎具下列任一領域經驗、專長或證照者：</li>
									<ul>
										<li>AIX、Linux系統相關管理。</li>
										<li>DB2或SQL Server系統管理。</li>
										<li>大型資料庫管理及設計經驗者。</li>
									</ul>
								</ul>
							</div>
						</div>
						<div class="job">
							<h4>雲端虛擬化系統工程師(VMWare、Hyper-V)</h4>
							<h5>國泰人壽</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>規劃、維運雲端虛擬化技術平台，並協助轉移現有系統至雲端平台。</li>
									<li>評估、導入雲端、開源技術或新資訊科技應用。</li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>大學日間部以上，理、工、商、管理學院相關系所畢業。</li>
									<li>具VMware、Hyper-V虛擬化技術、Windows、Linux伺服器作業系統或Jboss應用伺服器等任一技術建置、維運有經驗者尤佳，有意願者亦可。</li>
									<li>對雲端、開源技術或新資訊科技應用評估、規劃與發展有意願者。</li>
								</ul>
							</div>
						</div>
						<div class="job">
							<h4>網路系統管理工程師</h4>
							<h5>國泰人壽</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>規劃、維運企業網路系統、無線網路、防火牆之建置、維護與監控。</li>
									<li>網路系統專案架構之規劃、評估與建置。</li>
									<li>評估、導入網路安全技術或網路新科技應用。</li>
								</ul>
								<br>
								<ul>
									<li>大學日間部以上，理、工、商、管理學院相關系所畢業。</li>
									<li>歡迎具下列任一領域經驗、專長或證照者：</li>
									<ul>
										<li>熟悉TCP/IP網路架構及規劃(Router/Switch/Wireless)。</li>
										<li>CCNA證照。</li>
										<li>Windows、UNIX、Linux等作業系統經驗者。</li>
										<li>專案團隊經驗者或小型工作團隊經驗者。</li>
									</ul>
								</ul>
							</div>
						</div>
						<div class="job">
							<h4>應用系統品質管理工程師</h4>
							<h5>國泰人壽</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								負責應用系統迴歸架構、測試自動化及效能監測之規劃、開發與維護。<br>
								<br>
								職位要求：<br>
								<ul>
									<li>歡迎無資訊背景但對軟體測試及程式開發有興趣者。</li>
									<li>具HTML、JavaScript、Java EE開發經驗者或軟體開發測試證照尤佳。</li>
								</ul>
							</div>
						</div>
						<div class="job">
							<h4>大數據資料工程師</h4>
							<h5>國泰人壽</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>因應金融業務場景，開發大數據資料蒐集、清洗及邏輯處</li>
									<li>規劃大數據資料倉儲與應用平台(如：機器學習平台、商業智慧工具)架構。</li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>大學日間部以上，數理統計、資工資管等相關等系所畢。</li>
									<li>熟悉資料結構與關聯式資料庫存取語言SQL並具備ETL相關技術。</li>
									<li>熟悉Hadoop架構與Spark。</li>
									<li>具備程式撰寫能力(R或Python)。</li>
									<li>具大數據機器學習相關開發框架經驗者尤佳，如：Caffe、Theano、TensorFlow、Torch。</li>
								</ul>
							</div>
						</div>
						<div class="job">
							<h4>前端工程師 (Front-end Developer)</h4>
							<h5>國泰人壽</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>與UX/UI及開發人員共同合作，規劃與設計網路投保、會員網站及行銷類網站的</li>
									<li>網頁程式開發。</li>
									<li>串接Ajax、Restful API。</li>
									<li>前端技術研究。</li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>對前端開發</li>
									<li>善於溝通、對改善產品使用者經驗有強烈的興趣與企圖心。</li>
									<li>熟悉JavaScript、CSS等開發，有相關工作經驗者尤佳。</li>
									<li>熟悉任一前端框架(Angular, React, Vue)、具RWD網站開發或各式版型模組化能力、具UX/UI經驗、具後端經驗者尤佳。</li>
								</ul>
							</div>
						</div>
						<div class="job">
							<h4>智能客服研發工程師</h4>
							<h5>國泰人壽</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>運用語音辨識，語意理解等技術於對話機器人，知識庫等客服應用系統之規劃、開發與維護。</li>
									<li>客服資通訊科技之應用研究及導入評估。</li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>大學日間部以上，理、工、商、管理學院相關系所畢業。</li>
									<li>具Java EE、JavaScript、Node-RED等開發經驗。</li>
									<li>具ChatBot，語音辨識應用之經驗者尤佳。</li>
								</ul>
							</div>
						</div>
						<div class="job">
							<h4>行動化App開發工程師</h4>
							<h5>國泰人壽</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>iOS／Android App相關專案之系統開發</li>
									<li>加入App敏捷團隊，與 UX/UI 及後端開發人員共同合作。</li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>熱愛程式開發，無資訊背景者可。</li>
									<li>善於溝通、對改善產品使用者經驗有強烈的興趣與企圖心。</li>
									<li>有 iOS/Android App 開發、測試、上架、性能優化經驗者尤佳，附個人相關作品。</li>
									<li>有使用 Git 軟體開發經驗。</li>
									<li>熟悉RESTful規範。</li>
									<li>具下列任一項目者尤佳：</li>
									<ul>
										<li>iOS以Swift/Objective-C為主要開發語言，熟CocoPods/Carthage。</li>
										<li>Android 熟 Kotlin。</li>
										<li>Design pattern/MVC/Git flow。 </li>
										<li>Jenkins軟體開發工具經驗。</li>
										<li>Agile團隊經驗。</li>
									</ul>
								</ul>
							</div>
						</div>
						<div class="job">
							<h4>機器學習研發工程師</h4>
							<h5>國泰人壽</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>利用統計分析、機器學習演算法等技術實作解決業務問題。</li>
									<li>在跨部門合作專案中協助單位透過大數據分析模型萃取資料價值，並設計數據應用解決方案。</li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>大學日間部以上，數理統計、資工資管等相關等系所畢。</li>
									<li>熟悉統計分析及預測模型建置。</li>
									<li>熟悉機器學習演算法，並具備程式撰寫能力(R或Python)。</li>
									<li>具備資料視覺化呈現能力。</li>
									<li>思考邏輯清晰、具備良好溝通能力與簡報技巧。</li>
								</ul>
							</div>
						</div>
						<div class="job">
							<h4>資訊安全防護工程師</h4>
							<h5>國泰人壽</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>協助建立並執行公司資訊安全管理機制。</li>
									<li>資安之法令遵循、風險評估之執行情況彙整，並維持資訊安全國際認證有效性。</li>
									<li>專案的資安面規劃與評估、資安相關專案之規劃與執行。 </li>
									<li>資訊安全教育與宣導。</li>
									<li>內外部資訊安全查核協調，及委外資安管理與查核。</li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>對資訊業務內容、資訊安全管理機制有基本的了解。</li>
									<li>大學資訊、商學或保險相關科系畢，碩士或具相關國際認證經驗者尤佳。</li>
									<li>具備資訊、電腦稽核或風管等相關工作經驗。</li>
									<li>基本英文聽、說、讀、寫能力。</li>
									<li>思考邏輯清晰、具備良好溝通能力。</li>
									<li>具備ISO 27001、27017、BS10012維護經驗者尤佳。</li>
								</ul>
							</div>
						</div>
						<div class="job">
							<h4>資訊安全制度管理工程師</h4>
							<h5>國泰人壽</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>資安防護架構優化與潛在風險改善。 </li>
									<li>資訊專案資訊安全技術規劃設計、資安相關專案之規劃與執行。 </li>
									<li>協助進階資安事故緊急應變處理。</li>
									<li>協助內部資安威脅/弱點管理/異常之深度分析、外部威脅情蒐分析處理。</li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>對資訊業務內容、資訊安全管理機制有深入的了解。</li>
									<li>大學資訊相關科系畢，碩士或具相關國際認證經驗者尤佳。</li>
									<li>具備資訊、資安管理相關工作經驗。</li>
									<li>基本英文聽、說、讀、寫能力。</li>
									<li>思考邏輯清晰、具備良好溝通能力。</li>
									<li>具SIEM、DLP、病毒防護、惡意攻擊分析、弱點掃描執行與分析經驗者尤佳</li>
									<li>具CHFI、CISSP證照者尤佳。</li>
								</ul>
							</div>
						</div>

						<div class="job">
							<h4>東南亞語系儲備資訊人員(越南、印尼)</h4>
							<h5>國泰人壽</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>開發、維運資訊系統，應用系統發展或硬體平台維護。</li>
									<li>諳越南或印尼文，擔任台灣與當地溝通橋樑。</li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>大學日間部以上，理、工、商、管理學院相關系所畢業。</li>
									<li>對資訊工作有興趣，無相關背景者亦歡迎報名。</li>
									<li>熟悉越南或印尼文，聽、讀、說、寫可。</li>
								</ul>
							</div>
						</div>
					</b-tab>

					<b-tab title="國泰世華銀行" :title-link-class="linkClass(1)">
						<div class="job">
							<h4>APP軟體工程師</h4>
							<h5>國泰世華銀行</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>開發及維護系統，進而瞭解銀行相關業務。</li>
									<li>負責前端APP程式開發。</li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>具Android或iOS一年以上開發經驗。</li>
									<li>具良好溝通協調、問題解決與邏輯思考能力，能團隊合作亦可獨立作業。</li>
								</ul>
							</div>
						</div>
						<div class="job">
							<h4>ITSM系統管理人員</h4>
							<h5>國泰世華銀行</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>設計、開發、升級、維護、監控BMC Remedy 與MyIT系統，並支援事故管理、問題管理、知識庫管理、變更管理、服務請求、CMDB管理表單與工具維護。</li>
									<li>以 Rest API或Web Service方式整合BMC Remedy與國泰世華系統，以及資產與組態資料庫(Asset & CMDB)和DevOps系統整合與維護。</li>
									<li>維護BMC Remedy與MyIT的系統，與DBA和IT維運團隊合作共同解決各類問題。</li>
									<li>執行系統與資料庫備份，確保人員與檔案資料保持最新狀態，主導異地備援演練。</li>
									<li>建置與維護BMC ADDM (自動掃描與蒐集資料庫)系統，需蒐集與建置各類應用程式、伺服器、資料庫、網路等。</li>
									<li>設計、維護各類資訊服務報表、KPI報表與儀表版。</li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>大學日間部以上，資訊工程、資訊管理、應用數學相關系所。 </li>
									<li>兩年(含)以上，具備 C++、C#、Java等任一程式開發經驗。</li>
									<li>熟悉Windows 與 Linux系統管理，具備系統管理員或系統支援經驗者佳。</li>
									<li>具備技術文件撰寫與報告能力，英文基本閱讀與溝通能力。</li>
									<li>具備ITIL v3 認證或對ITIL有興趣者。</li>
								</ul>
							</div>
						</div>
						<div class="job">
							<h4>大數據開發維運工程師</h4>
							<h5>國泰世華銀行</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>資料平台維護工作及問題追蹤管理。 </li>
									<li>資料處理流程自動化程式開發及監控。 </li>
									<li>系統架構規劃及文件撰寫。</li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>大學日間部以上，資管、資工相關研究所畢業者尤佳。 </li>
									<li>工作資歷一年以上，具資料庫處理、API程式開發及系統維運相關經驗尤佳。</li>
									<li>熟悉Linux安裝及操作。 </li>
									<li>具備系統異常時，自我研究處理能力。 </li>
									<li>具備資料導檔及處理經驗。 </li>
									<li>操作分散式儲存及運算平台之管理經驗者尤佳，例如Hadoop、Hive、MongoDB、Sqoop等。 </li>
									<li>熟悉SQL等程式語言，具Python程式能力尤佳。 </li>
									<li>有利用Apache Spark、Flink等工具做分散式計算，具備Backend server開發經驗尤佳，(REST API、Access to any SQL or NoSQL DB) 。</li>
								</ul>
							</div>
						</div>
						<div class="job">
							<h4>系統分析工程師</h4>
							<h5>國泰世華銀行</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>開發及維護銀行核心系統，進而瞭解銀行相關業務，如：數據分析、信用卡、存/放款等。 </li>
									<li>網站使用者體驗、介面設計及前端互動程式開發。</li>
									<li>負責系統分析等相關業務，如進行需求訪談、撰寫需求規格書等。 </li>
									<li>金融科技如行動支付、人工智能(理財、客服) 等應用研發。</li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>大學日間部以上，理、工、商、管理學院相關系所畢業。</li>
									<li>具一年以上之銀行資訊系統維護經驗。 </li>
									<li>需熟悉系統分析技巧。 </li>
									<li>有資料庫的使用經驗尤佳。</li>
								</ul>
							</div>
						</div>
						<div class="job">
							<h4>測試規劃人員</h4>
							<h5>國泰世華銀行</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>規劃各項應用系統之測試方法、規範、文件及標準程序，並評估導入系統測試所需之相關技術及工具。</li>
									<li>審核系統測試計劃，以利上線品質可確保於資訊系統內穩定運作。</li>
									<li>控管系統測試計劃的實施，與協調與處理測試過程之相關需求。</li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>具四年資料管制/資料庫/系統管理/</li>系統開發建置維護或開發經驗，熟悉測試理論，了解軟體各種測試類型、方法及技巧，並具備使用測試管理工具及測試輔助工具的經驗。
									<li>曾擔任金融機構大型專案經理經驗尤佳。</li>
									<li>具基本英文讀、寫能力。 </li>
									<li>具測試管理、開發經驗、DevOps經驗、專案管理或IT相關專業技術證照。</li>
								</ul>
							</div>
						</div>
						<div class="job">
							<h4>程式開發工程師</h4>
							<h5>國泰世華銀行</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>負責程式設計開發及維護系統，進而瞭解銀行等相關業務。</li>
									<li>網站應用程式開發。</li>
									<li>行動裝置App設計、開發與維護。</li>
									<li>負責系統後端API程式開發和單元測試。</li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>大學日間部以上，理、工、商、管理學院相關系所畢業。</li>
									<li>需熟悉下列任一程式語言：.NET（C#）、Java、C、COBOL等。</li>
									<li>使用過Spring framework尤佳 </li>
									<li>有資料庫的使用經驗尤佳。 </li>
									<li>對程式開發有興趣，無資訊背景亦可。</li>
								</ul>
							</div>
						</div>
						<div class="job">
							<h4>數據應用工程師</h4>
							<h5>國泰世華銀行</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>數據資料處理、MIS分析應用。 </li>
									<li>視覺化應用開發。</li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>大學日間部以上，資管、資工相關系所尤佳。 </li>
									<li>工作資歷一年以上，具資料庫處理及程式開發相關經驗尤佳。</li>
									<li>具使用管理資料庫經驗、熟SQL語言。</li>
									<li>具資料庫結構概念。</li>
									<li>具高度學習成長能力、主動積極、配合度高。 </li>
									<li>有興趣發展成為數據分析專業資訊人員者優先。</li>
								</ul>
							</div>
						</div>
					</b-tab>


					<b-tab title="國泰產險" :title-link-class="linkClass(2)">
						<div class="job">
							<h4>客服系統整合工程師</h4>
							<h5>國泰人壽 / 國泰產險</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>客服中心(Contact Center)資訊系統及電話語音系統之規劃、開發與維運。</li>
									<li>客服資通訊科技之應用研究及導入評估。<br></li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>具IP網路、語音通訊、客戶服務相關系統開發經驗者尤佳。</li>
									<li> 無相關經驗但有意願學習客服系統(含交換機,IVR)相關知識技能者亦可。<br></li>
									<li> 具Java EE、HTML、JavaScript、Java等開發經驗者尤佳。</li>
								</ul>
							</div>
						</div>
						<div class="job">
							<h4>JAVA程式開發師</h4>
							<h5>國泰產險</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>程式開發及系統維護。</li>
									<li>網站開發及維護。</li>
									<li>電腦技術研究評估。</li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>兩年以上Java應用系統開發經驗。 </li>
									<li>熟悉資料庫設計(DB2)及資料庫查詢語言(SQL)。 </li>
									<li>具WebSphere、JBoss、Tomcat等使用經驗以及UNIX環境操作經驗尤佳。</li>
								</ul>
							</div>
						</div>
					</b-tab>

					<b-tab title="國泰證券" :title-link-class="linkClass(3)">
						<div class="job">
							<h4>資料工程師</h4>
							<h5>國泰證券</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>異質資料庫數據整合。</li>
									<li>數據分析、應用之相關程式(C#或VB.Net或Python)開發。</li>
									<li>資料庫SQL語法開發。</li>
									<li>協助企劃、行銷團隊進行數據分析。</li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>熟T-SQL語法及Stored Procedure開發。</li>
									<li>熟MS SQL Server SSIS開發。</li>
									<li>有C#或ASP.Net、Python等程式語言經驗者尤佳。</li>
									<li>了解證券、期貨等金融商品交易流程尤佳。</li>
									<li>二年以上程式設計及專案開發經驗。</li>
								</ul>
							</div>
						</div>
						<div class="job">
							<h4>數據分析師</h4>
							<h5>國泰證券</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>針對客戶交易資料、行為數據進行資料挖掘及資料探勘。</li>
									<li>進行客戶分群、並依經營策略建立相關模型。</li>
									<li>洞察市場與客戶需求，預測市場趨勢變化。</li>
									<li>依據數據分析的結果、提出應用執行方案與客群經營方案建議。</li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>具統計、資料分析能力，且熟悉相關軟體操作(SAS/SPSS經驗尤佳)。</li>
									<li>具資料探勘、商業分析、或客戶行為洞察之相關實務工作經驗尤佳。</li>
									<li>了解證券、期貨等金融商品交易流程。</li>
								</ul>
							</div>
						</div>
						<div class="job">
							<h4>金融交易工程師</h4>
							<h5>國泰證券</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>設計開發股票、權證、期貨、選擇權和複委託交易系統。</li>
									<li>多國市場交易開發。</li>
									<li>自動交易策略開發。</li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>無經驗者需為資訊相關科系。</li>
									<li>能團隊合作。</li>
									<li>邏輯性佳，對開發系統有熱忱。</li>
									<li>有理財交易經驗佳。</li>
									<li>使用C++/Java(Server)或C#(Client)開發。</li>
								</ul>
							</div>
						</div>
						<div class="job">
							<h4>網頁程式開發師</h4>
							<h5>國泰證券</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>公司官網(含PC及行動)網頁程式規劃設計。</li>
									<li>客戶服務相關專區及行銷專案網頁程式設計。</li>
									<li>網頁式下單交易平台維運及與內部資訊系統串接程式開發。</li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>熟悉ASP.NET、C#、JQuery、HTML5、JavaScript等網站開發技術。</li>
									<li>了解證券、期貨等金融商品交易流程。</li>
								</ul>
							</div>
						</div>
						<div class="job">
							<h4>UX設計師</h4>
							<h5>國泰證券</h5>
							<b-link to="/resume" class="btn">立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>配合PM/SA進行使用者需求訪談，解析使用者需求及痛點。</li>
									<li>進行使用者研究，產出wireframe、story board、user journey map，以溝通研究動查結果。</li>
									<li>引進產業最新的UI/UX思維或技術，以提升團隊競爭力。</li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
									<li>數位媒體、人因互動、資工、資管相關科系畢業。</li>
									<li>具備3年以上相關經驗。</li>
									<li>了解證券、期貨等金融商品交易流程。</li>
								</ul>
							</div>
						</div>
					</b-tab>


					<b-tab title="國泰人壽 台中場" :title-link-class="linkClass(4)">
						<div class="job">
							<h4>應用系統開發工程師</h4>
							<h5>國泰人壽 台中場（已截止）</h5>
							<b-link to="/resume" class="btn" disabled>立即填寫履歷</b-link>
							<div class="line"></div>
							<div class="content">
								工作說明：<br>
								<ul>
									<li>國壽人壽審查契約、理賠、保單變更、人事管理、財務投資系統等線上系統建置，以支持壽險公司營運。</li>
									<li>國泰人壽官網(B2C)、員工網站(B2E)、保險電子商務系統、客戶關係管理系統、行銷支援系統及資訊業務部門各項專案系統之建置、開發及維護。</li>
									<li>iOS／Android App相關專案之系統開發及維護。</li>
								</ul>
								<br>
								職位要求：<br>
								<ul>
										<li>熱愛程式開發，無資訊背景亦可。</li>
										<li>具備Java EE、HTML、JavaScript等開發經驗者，已考取Java專業證照者佳。</li>
										<li>有iOS / Android App開發、測試、上架、性能優化經驗者，附個人相關作品者尤佳。</li>
										<li>熟悉前端UI框架運用或具RWD開發經驗尤佳。</li>
										<li>為儲備行動化App設計人員，具備Objective C、HTML5、CSS3開發經驗者尤佳。</li>
								</ul>
							</div>
						</div>
					</b-tab>
				</b-tabs>
			</b-card>
		</b-container>
	</b-container>
</template>

<script>
import Nav from '@/components/nav';

export default {
	name: 'Jobs',
	components: {
		Nav
	},
	data() {
		return {
			tabIndex: 0
		}
	},
	methods: {
    linkClass (idx) {
      if (this.tabIndex === idx) {
        return ['bg-light', 'text-muted']
      } else {
        return ['bg-light', 'text-muted']
      }
    }
  }
}
</script>

<style lang="sass" scoped>

	#jobs
		padding: 100px 10vw
		color: $black

		h4
			span
				font-size: 16px

		ul
			li
				list-style: decimal

			ul
				li
					list-style: lower-alpha


		.title
			text-align: center

		.job
			padding-top: 100px

		.line
			height: 3px
			background: $black
			margin: 30px 0

		.btn
			position: absolute
			right: 0px
			margin-right: 1.7vw
			background: $green
			width: 110px
			height: 30px
			margin-top: -50px
			color: $white
			font-size: 14px
			line-height: 16px
			text-align: center

</style>
