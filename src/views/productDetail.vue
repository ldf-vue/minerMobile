<template>
  <div class="productDetail" id="productDetail">
    <mt-swipe :auto="0" class="autoSwipe" :prevent="true">
		  <mt-swipe-item class="swipeItem one">1</mt-swipe-item>
		  <mt-swipe-item class="swipeItem two">2</mt-swipe-item>
		  <mt-swipe-item class="swipeItem three">3</mt-swipe-item>
		</mt-swipe>

		<div class="description">
			<p class="product_name">PandaMiner B1 Plus
	  		<span class="product_hot">热门</span>
  		</p> 
  		<p class="product_ifo">&nbsp;&nbsp;最新PandaMiner B1 Plus矿机所采用核心GPU为RX480，更高算力更低功耗！</p> 
  		<p class="product_price"> 价格：
	  		<span class="price_rmb">¥ 15,500.00</span>
  		</p> 
  		<div class="product_choose">
  			<p class="product_choose_text">产品规格</p> 
  			<label id="0" class="product_btn choose_price">
  				<input type="radio" class="product_btn_input" value="0"> 
  				<span>矿机+电源</span>
				</label>
				<label id="1" class="product_btn">
					<input type="radio" class="product_btn_input" value="1"> 
					<span>矿机（无电源）</span>
				</label>
			</div> 
			<div class="product_choose">
				<p class="product_choose_text">购买台数</p>
				<span class="num_btn">-</span> 
				<div class="choose_num_border">
					<input min="1" class="choose_num" value="1">
				</div> 
				<span class="num_btn">+</span>
			</div>
			<!-- <div class="product_choose"> -->
				<!-- <p class="product_choose_text opacity">排版需要</p> -->
				<span class="buy_btn">立即购买</span>
			<!-- </div> -->
			
		</div>

		<!-- 商品详情 -->
		<md-tabs>
		  <md-tab id="specification" md-label="产品规格">
		    <div class="parameter_box">
					<h4 class="parameter">规格参数</h4>
					<table class="details_table">
						<tr>
							<td class="detail_td td_name">额定算力</td>
							<td class="detail_td td_data">6TH/S（-5%至＋10%）</td>
						</tr>
						<tr></tr>
						<tr>
							<td class="detail_td td_name">墙上功耗</td>
							<td class="detail_td td_data">900W（-5%至＋15%）</td>
						</tr>
						<tr></tr>
						<tr></tr>
						<tr></tr>
						<tr>
							<td class="detail_td td_name">能耗比</td>
							<td class="detail_td td_data">150W/T</td>
						</tr>
						<tr></tr>
						<tr>
							<td class="detail_td td_name">芯片数量</td>
							<td class="detail_td td_data">72枚 (16纳米 A3212芯片)</td>
						</tr>
						<tr></tr>
						<tr>
							<td class="detail_td td_name">超频</td>
							<td class="detail_td td_data">+0%~+10%</td>
						</tr>
						<tr>
							<td class="detail_td td_name">外形尺寸</td>
							<td class="detail_td td_data">340*136*150 mm3</td>
						</tr>
						<tr>
							<td class="detail_td td_name">整机重量</td>
							<td class="detail_td td_data">4.3kg</td>
						</tr>
						<tr></tr>
						<tr>
							<td class="detail_td td_name">工作温度</td>
							<td class="detail_td td_data">-5℃ 至 40℃</td>
						</tr>
						<tr></tr>
						<tr></tr>
						<tr></tr>
						<tr>
							<td class="detail_td td_name">电源接口</td>
							<td class="detail_td td_data">8 单路 6PIN 接口</td>
						</tr>
						<tr></tr>
						<tr></tr>
						<tr></tr>
						<tr></tr>
						<tr></tr>
						<tr></tr>
						<tr></tr>
						<tr></tr>
						<tr></tr>
						<tr></tr>
						<tr></tr>
						<tr></tr>
						<tr></tr>
						<tr></tr>
						<tr></tr>
						<tr></tr>
						<tr></tr>
						<tr></tr>
						<tr></tr>
						<tr></tr>
						<tr></tr>
					</table>
				</div>
		  </md-tab>

		  <md-tab id="pictureDetails" md-label="图片详情">
		    <p>人生的磨难是很多的，所以我们不可对于每一件轻微的伤害都过于敏感。在生活磨难面前，精神上的坚强和无动于衷是我们抵抗罪恶和人生意外的最好武器。 —— 洛克</p>
		    <p>人生的磨难是很多的，所以我们不可对于每一件轻微的伤害都过于敏感。在生活磨难面前，精神上的坚强和无动于衷是我们抵抗罪恶和人生意外的最好武器。 —— 洛克</p>
		  </md-tab>

		  <md-tab id="notice" md-label="注意事项">
		    <div class="sold_ifo">
		    	<h4 class="soli_title">注意事项</h4>
		    	1. 机器变形或者部件脱落，请不要通电，联系售后处理。<br />
		    	2. 在安装或维护时请先装矿机断电，再进行维护。<br />
		    	3. 接线时一定要注意电源线的方向,接反会引起电源或矿机故障。<br />
		    	4. 注意防尘防潮，以免影响矿机正常工作。<br />
		    	5. 当电源的实际输出达不到矿机所需求时，算力会提升不上去。
    		</div>
		  </md-tab>

		  <md-tab id="postSale" md-label="售后说明">
		    <div class="sold_ifo">
		    	<h4 class="soli_title">售后说明</h4>
		    	1）投资需谨慎，本显卡矿机一经售出，不支持退款或退货；<br />
		    	2）到货后180天内支持返修；<br />3）矿机价格可能会根据市场情况调整而不做事先通知和价格补偿，敬请谅解；<br /><br />
		    	1.买家私自拆卸，改装元器件；<br />
		    	2.在到货后，遭遇天气等自然灾害受损；<br />
		    	3.进水、电路板和元器件受潮、出现腐蚀造成的损坏；<br />
		    	4.买家购买劣质电源造成的损坏；<br />
		    	5.电路板存在毁痕迹的或者芯片被烧毁的；<br />
		    	6.一切由买家自行造成的损坏；<br /><br />
		    	如果您有其他任何疑问可咨询：<br />
		    	电话: 18617127006
    </div>
		  </md-tab>

		</md-tabs>
  </div>
</template>

<script>
export default {
  name: 'productDetail',
  data () {
    return {
      msg: 'productDetail productDetail productDetail'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#productDetail {
		/*padding: .09rem;*/
	}
	#productDetail .autoSwipe {
		height: 2.8rem;
		width: 100%;
	}
	.autoSwipe .swipeItem {
		line-height: 2.8rem;
	}
	#productDetail .one {
		background: red;
	}
	#productDetail .two {
		background: yellow;
	}
	#productDetail .three {
		background: #0089dc;
	}
	/* 商品描述 */
	.description {
		margin-top: .08rem;
	}
	.product_name {
    font-size: .25rem;
    color: #333;
    margin-bottom: 10px;
  }
  .product_hot {
    padding: 0 .1rem;
    height: .22rem;
    line-height: .22rem;
    color: #fff;
    border-radius: 2px;
    font-size: .14rem;
    display: inline-block;
    vertical-align: top;
    background-color: #ff7611;
	}
	.product_ifo {
    font-size: .16rem;
    color: #666;
    margin-top: .14rem;
    padding: 0 .09rem;
    text-align: left;
	}
	.product_price {
    background-color: #f1f1f3;
    font-size: .16rem;
    height: .5rem;
    line-height: .5rem;
    padding: 0 .1rem;
    margin: .1rem 0;
	}
	.product_btn {
    height: .38rem;
    line-height: .38rem;
    font-size: .16rem;
    display: inline-block;
    background-color: #fff;
    padding: 0 .1rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    color: #333;
    margin-right: .1rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
	}
	.product_btn_input {
    opacity: 0;
    outline: none;
    position: absolute;
    z-index: -1;
    left: -999px;
   }
   .choose_price {
    	border-color: #f8b600;
		}
	.product_choose {
		text-align: left;
		padding: .09rem;
	}
	.product_choose_text {
		display: inline-block;
		margin-right: .1rem
	}

	.num_btn {
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    display: inline-block;
    vertical-align: top;
	}
	.num_btn {
    width: .4rem;
    height: .38rem;
    line-height: .38rem;
    font-size: .28rem;
    color: #999;
    text-align: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
	}
	.choose_num_border{
    width: 1.2rem;
    height: .28rem;
    padding-top: .2rem;
    padding-bottom: .15rem;
    margin: 0 .1rem;
    position: relative;
	}
	.choose_num_border, .num_btn {
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    display: inline-block;
    vertical-align: middle;
	}
	.choose_num {
    width: 100%;
    display: block;
    text-align: center;
    font-size: .16rem;
    border: none;
    background: none;
    outline: none;
    position: absolute;
    bottom: .07rem;
	}
	.opacity {
		color: #fff;
	}
	.buy_btn {
    
    width: 1.5rem;
    height: .38rem;
    line-height: .38rem;
    font-size: .2rem;
    margin: .07rem 0;
    background-color: #f8b600;
    border: 1px solid #f8b600;
    color: #fff;
    border-radius: 4px;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
	}

	/* 产品介绍 */
	.parameter, .soli_title {
    font-size: .26rem;
    margin: 0 0 .3rem;
    text-align: center;
	}
	.details_table {
    margin: 0 auto;
	}
	.td_name {
    width: .9rem;
	}
	.detail_td {
    padding: .13rem .25rem;
    text-align: center;
    border: 1px solid #e5e5e5;
    margin-left: -1px;
	}
	.sold_ifo{
    margin: 0 auto;
    line-height: .26rem;
    padding: .2rem .35rem;
    border: 1px solid #e5e5e5;
    text-align: left;
	}
</style>
