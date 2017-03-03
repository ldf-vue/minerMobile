<template>
  <div class="theFaq">
    <div class="faqWrap">
    	<h2 class="pageTitle">FAQ</h2> 
    	<h3 class="subTitle">支付问题</h3> 
    	<div class="questionItem">
    		<p class="question">问：你们接受什么样的付款方式？</p> 
    		<p class="answer">答：我们接受比特币支付以及人民币银行转账（仅限中国地区）。我们的机器以人民币定价出售，折算实时比特币价格。</p>
  		</div> 
  		<h3 class="subTitle">发货问题</h3> 
  		<div class="questionItem">
  			<p class="question">问：你们接受什么样的付款方式？</p> 
  			<p class="answer">答：我们接受比特币支付以及人民币银行转账（仅限中国地区）。我们的机器以人民币定价出售，折算实时比特币价格。</p>
			</div> 
			<h3 class="subTitle">退款退货</h3> 
			<div class="questionItem">
				<p class="question">问：你们接受什么样的付款方式？</p> 
				<p class="answer">答：我们接受比特币支付以及人民币银行转账（仅限中国地区）。我们的机器以人民币定价出售，折算实时比特币价格。</p>
			</div> 
			<h3 class="subTitle">售后维修和其他</h3>
		</div>
  </div>
</template>

<script>
export default {
  name: 'theFaq',
  data () {
    return {
      msg: 'theFaq theFaq theFaq'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.theFaq {
		text-align: left;
		padding: .09rem;
		background-color: #f1f1f3;
	}
	.faqWrap {
    margin: 0 auto;
    padding-bottom: .6rem;
  }
  .faqWrap .pageTitle {
    font-size: .26rem;
    padding: .15rem 0;
	}
	.faqWrap .subTitle {
    font-size: .18rem;
    margin-bottom: .1rem;
    padding-top: .15rem;
	}
</style>
