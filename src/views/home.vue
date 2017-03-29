<template>
  <div class="home" id="home">
		<mt-swipe :auto="4000" class="autoSwipe" :prevent="true">
		  <mt-swipe-item class="swipeItem one">
				<img src="https://www.pandaminer.com/static/img/ac/indexBanner_userFeedback.png" />
		  </mt-swipe-item>
		  <mt-swipe-item class="swipeItem two">
		  	<img src="https://www.pandaminer.com/static/img/ac/indexBanner_userFeedback.png" />
		  </mt-swipe-item>
		  <mt-swipe-item class="swipeItem three">
				<img src="https://www.pandaminer.com/static/img/ac/indexBanner_userFeedback.png" />
		  </mt-swipe-item>
		</mt-swipe>
		
		<h2 class="hotTitle">{{ $t('homeContent.hotProducts.hot') }}</h2>
		<div class="phone-viewport">
		  <md-list class="custom-list md-triple-line" v-for="hot in hotProducts" :key="hot.id">

			  <router-link :to="{ path: 'productDetail/' + hot._id }">
			    <md-list-item class="listsItem" disabled>
			      <md-avatar>
			        <img :src="hot.pics[0]" alt="People" class="pictures">
			      </md-avatar>

			      <div class="md-list-text-container">
			        <h1 class="title">{{ hot.title[lan] }}</h1>
			        <p class="description test-ellipsis">{{ hot.keywords[lan] }}</p>
			      </div>

			      <md-button class="md-icon-button md-list-action buyNow">
			        <md-icon>
			        	<!-- <router-link :to="{ path: 'productDetail/id=22' }">buy</router-link> -->
			        </md-icon>
			      </md-button>

			      <md-divider class="md-inset"></md-divider>
			    </md-list-item>
		    </router-link>
				
		  </md-list>
		</div>
		<div class="moreProducts">
			<router-link to="productList">{{ $t('homeContent.hotProducts.more') }}...</router-link>
		</div>
		
		<div class="productsIntro">
			<h2 class="introTitle">什么是显卡矿机？</h2>
			<div class="definition">
				<p>显卡矿机是支持多种虚拟货币算法挖矿的挖矿装置。不同于普通显卡，显卡矿机是通过多张高配置显卡，定制化、高兼容的机箱，以及专业的矿机架等专门针对挖矿需求优化设计的设备组装而成。</p> 
				<p>显卡矿机极具灵活性，能针对不同的虚拟货币运行不同的算法，做到一机多用。在比特币矿机更新换代速度日益放缓且价格日渐增高的今天，显卡矿机不失为更好的虚拟币投资选择。</p>
			</div>
			<ul class="featureList">
				<li class="featureItem">
					<p class="compare">对比普通显卡挖矿</p>
					<!-- <p class="feature">多张顶级配置显卡，更高算力更低功耗</p> -->
				</li>
				<li class="featureItem featureItem_center">
					<p class="compare">对比比特币矿机挖矿</p>
					<!-- <p class="feature">更短回本周期，全网算力攀升较缓和
						<br>可适用于多种虚拟加密货币算法
					</p> -->
					</li>
				<li class="featureItem">
					<p class="compare">&nbsp;</p>
					<!-- <p class="feature">高性价比，极低部署成本！</p> -->
				</li>
			</ul>
		</div>
		
		<div class="companyIntro">
			<p class="companyLogo">Ldf Miner</p>
			<div class="content">
			<h2>我们是谁？</h2>
			<h3>全球首家专业显卡矿机制造商 提供虚拟货币算法解决方案</h3>
			<p>&nbsp;&nbsp;蜂巢矿机是一家全球领先的加密货币硬件设备专业制造商，伴随着规模日益扩大的虚拟币采矿业，集合了众多行业内专业人士，组建成一支全方位的团队，在半年内研发出适用于多种虚拟货币的显卡矿机。未来我们将会不断优化产品方案，以满足日新月异的挖矿需求。我们的愿景是将熊猫矿机打造成为虚拟币硬件设备全球第一品牌。</p>
		</div>
		</div>

  </div>
</template>

<script>
import '../assets/js/home-package.js'
import store from '../vuex/vuex.js'
import api from '../../static/js/api.js'

// import { locales } from '../assets/js/home-package.js'
// console.log(locales)
export default {
  name: 'home',
  data () {
    return {
      msg: 'home home home',
      hotProducts: []
    }
  },
  computed: {
    lan: function () {
      return (store.state.lan === 'cn') ? 0 : 1
    }
  },
  mounted: function () {
    this.$http({
      url: api.baseUrl + 'getHots',
      method: 'GET'
    }).then(function (data) {
      // console.log(data.body)
      var re = data.body
      for (var i = 0; i < re.length; i++) {
        this.hotProducts.push(re[i])
      }
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.home {
		/*height: 2000px;*/
		background: #fbf8f8;
	}
	.autoSwipe {
		height: 1.8rem;
		width: 100%;
		/*background: red;*/
	}
	.autoSwipe .swipeItem {
		/*line-height: 1.8rem;*/
	}
	.autoSwipe .swipeItem img {
		width: 100%;
		height: 100%;
	}
	#home .one {
		/*background: red;*/
	}
	#home .two {
		/*background: yellow;*/
	}
	#home .three {
		/*background: #0089dc;*/
	}
	.hotProducts {
		height: 350px;
		width: 100%;
		background: yellow;
	}
	.hotProducts .hotOne {
		
	}
	.hotProducts .hotTwo {
		
	}

	/* 热门的样式 */
	#home .hot {
		height: 1.3rem;
		background: red;
	}
	
	.hotTitle {
		padding-top: .075rem;
		position: relative;
		/*display: inline-block;*/
		text-align: left;
		color: rgba(0,0,0,.54);
    padding-left: .09rem;
    font-family: Roboto,sans-serif;
    font-size: .24rem;
    font-weight: 300;
    background: #fbf8f8;
	}
	.hotTitle:before {
		/*content: '';
		display: inline-block;
		width: .8rem;
		height: 0;
		border-top: 1px solid;
		position: absolute;
		top: .09rem;
		left: -.91rem;*/
	}
	.hotTitle:after {
		content: "";
    display: block;
    width: .25rem;
    height: .04rem;
    margin-top: .125rem;
    background: #f8b600;
		/*content: '';
		display: inline-block;
		width: .8rem;
		height: 0;
		border-top: 1px solid;
		position: absolute;
		top: .09rem;
		margin-left: .11rem;*/
	}
	#home .md-list-text-container {
    width: 70%;
	}
	#home .md-button {
		height: 1.6rem;
	}
	#home .md-list {
		padding: 0;
    background: #fbf8f8;
	}
	#home .pictures {
		/*background: red;*/
	}
	#home .md-avatar {
		width: 2.2rem;
		height: 1.2rem;
		border-radius: 5px;
	}
	#home .title {
		color: #000;
	}
	#home .md-inset {
		margin-left: 0;
		/*box-shadow: 0 0 .5px #888;*/
	}
	#home .md-list a:nth-child(2) li .md-inset {
		/*box-shadow: 0 0 0 #fbf8f8;
		background: #fbf8f8;*/
	}
	.moreProducts {
		padding-top: .08rem;
		background: #fbf8f8;
	}
	.moreProducts:after {
		/*content: '';
		display: inline-block;
		width: .08rem;
		height: .08rem;
		position: absolute;
		top: .07rem;
		margin-left: .025rem;
		transform: rotate(45deg);
		-webkit-transform: -webkit-rotate(45deg);
		border: 1px solid;
		border-bottom-width: 0;
		border-left-width: 0;
		color: rgba(0,0,0,.54);*/
	}
	#home .moreProducts a {
		color: rgba(0,0,0,.54);
	}

	/* 矿机介绍 */
	.productsIntro {
		padding: .09rem;
		position: relative;
		height: 2.4rem;
		margin-top: .08rem;
		color: #fff;
		background: url('../../static/img/bg.jpg') 50% 50% no-repeat;
		background-size: 100% 2.5rem;
	}
	.productsIntro h2 {
		padding-top: .08rem;
		margin-bottom: .05rem;
	}
	.productsIntro p {
		font-size: .12rem;
		line-height: .16rem;
	}

	.featureList {
    position: absolute;
    /*left: .15rem;*/
    top: 1.75rem;
    /*width: 1000px;*/
    text-align: center;
    font-size: 0;
	}
	.featureList .featureItem {
    /*width: 285px;*/
    display: inline-block;
    vertical-align: top;
    padding-top: .1rem;
    padding-left: .49rem;
	}
	.featureList .compare {
    font-size: .12rem;
    color: #666;
    padding-top: .1rem;
	}
	.featureList .feature {
    color: #fff;
    font-size: .16rem;
    line-height: .25rem;
	}
	.featureList .featureItem_center {
    padding: .1rem .35rem;
	}

	/* 公司介绍 */
	.companyIntro {
		margin-bottom: .1rem;
		padding: .1rem .09rem;
	}
	.companyIntro .companyLogo {
    background-image: url('../../static/img/logo.png');
    background-repeat: no-repeat;
    background-size: 100%;
    width: 1.5rem;
    height: 1.2rem;
    text-indent: -9999px;
    margin: -.35rem auto .05rem;
	}
	.companyIntro .content {
		margin: 0 auto;
		text-align: left;
	}
	.content h2 {
    font-size: .26rem;
    margin-bottom: .15rem;
    text-align: center;
	}
	.content h3 {
    font-size: .22rem;
    margin-bottom: .15rem;
    line-height: .27rem;
    text-align: center;
    font-weight: 600;
	}
	.content p {
    line-height: 25px;
    font-size: .13rem;
	}
</style>
