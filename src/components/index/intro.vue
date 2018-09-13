<template>
	<b-container fluid id="intro" class="py-5">
		<b-row>
			<b-col cols="6" offset="2">
				<img src="@/assets/img/ITs-Time-shadow.png" class="w-100 py-5" alt="IT's Time">
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="8" offset="2">
				<p class="py-5 content">
					「IT'S TIME」 為國泰金控旗下（國泰人壽、國泰世華銀行、國泰產險、國泰證券）四間公司，針對資訊人才聯合推出的大型徵才計畫，計畫名稱顧名思義，便是：現在正是資訊人才大顯身手的好時機，國泰不但提供相對優渥的薪酬和在職培訓條件，甚至還體貼關照到面試者等待結果的心情，面試後當日稍晚便可收到是否錄取的回覆。本計劃旨在為有志投入金融資訊科技的新鮮人或初出社會轉職者解決所有應徵煩惱，投遞一次履歷，經書審通過即可在一日內面試至多四間公司，面試結束後如被錄取，當天就可收到聘用回覆，讓 IT 人有好薪情。
				</p>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: 'Intro'
}
</script>

<style lang="sass" scoped>
	#intro
		background-color: $white

		.content
			color: $black
			font-family: PingFangTC-Regular, Heiti TC, Meiryo, "微軟正黑體", Microsoft JhengHei, "標楷體", DFKai-sb
			font-size: 1.25em
			text-align: justify
			letter-spacing: 0.15em
			line-height: 2em
</style>
