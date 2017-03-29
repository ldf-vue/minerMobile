<template>
  <div class="productDetail" id="productDetail">
    <mt-swipe :auto="0" class="autoSwipe" :prevent="true" >
		  <mt-swipe-item class="swipeItem one" v-for='pic in pics' :key="pic.id">
				<img :src="pic" />
		  </mt-swipe-item>
		</mt-swipe>



		<div class="description">
			<p class="product_name">
				{{ title[lan] }}
	  		<span class="product_hot">{{ $t('detail.hot') }}</span>
  		</p> 
  		<p class="product_ifo">&nbsp;&nbsp;
				{{ keywords[lan] }}
  		</p> 

  		<p class="product_price"> {{ $t('detail.price') }}：
	  		<span class="price_rmb">¥ {{ choose_price }}</span>
  		</p>

  		<div class="product_choose">
  			<p class="product_choose_text">{{ $t('detail.standard') }}</p>

  			<label id="0" class="product_btn" v-for="(price, index) in prices" :class="{'choose_price':choose_price==price.price[lan]}" v-on:click.prevent="addCLass(index)">
  				<span>{{ price.standard[lan] }}</span>
				</label>

			</div> 

			<div class="product_choose">
				<p class="product_choose_text">{{ $t('detail.num') }}</p>
				<span class="num_btn" @click="chooseNum('decrease')">-</span> 
				<div class="choose_num_border">
					<input min="1" class="choose_num" :value="choose_num">
				</div> 
				<span class="num_btn" @click="chooseNum('increase')">+</span>
			</div>
			<md-button class="md-primary md-raised" @click="openDialog('dialog4')">
				<span class="buy_btn" @click.native="openDialog('dialog4')">{{ $t('detail.buy') }}</span>
			</md-button>

		</div>
		<md-dialog-alert
		  :md-title="'Contact Us'"
		  :md-content-html="'About our product, please contact us, the telephone: 1234567890. we will be happy to help you.'"
		  :md-ok-text="'OK'"
		  @open="onOpen"
		  @close="onClose"
		  ref="dialog4" v-if="lan">
		</md-dialog-alert>
		<md-dialog-alert
		  :md-title="'联系我们'"
		  :md-content-html="'咨询购买请联系我们，联系电话：1234567890。我们将竭诚为您服务！'"
		  :md-ok-text="'确定'"
		  @open="onOpen"
		  @close="onClose"
		  ref="dialog4" v-else>
		</md-dialog-alert>

		<!-- 商品详情 -->
		<md-tabs>

		  <md-tab id="specification" md-label="产品规格">
		    <div v-if="parameter" class="parameter_box">
					<h4 class="parameter">{{ $t('detail.table_detail_title') }}</h4>
					
					<table class="details_table">
		      <!-- ============================中文====================================== -->
		      	<tr>
		          <td class="detail_td td_name" v-if="detail.Hash_Rate">{{$t("detail.Hash_Rate")}}</td>
		          <td class="detail_td td_data" v-if="detail.Hash_Rate">{{detail.Hash_Rate}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Total_Hash">{{$t("detail.Total_Hash")}}</td>
		          <td class="detail_td td_data" v-if="detail.Total_Hash">{{detail.Total_Hash}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Power_Consumption">{{$t("detail.Power_Consumption")}}</td>
		          <td class="detail_td td_data" v-if="detail.Power_Consumption">{{detail.Power_Consumption}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Power_Efficiency">{{$t("detail.Power_Efficiency")}}</td>
		          <td class="detail_td td_data" v-if="detail.Power_Efficiency">{{detail.Power_Efficiency}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Input_Voltage">{{$t("detail.Input_Voltage")}}</td>
		          <td class="detail_td td_data" v-if="detail.Input_Voltage">{{detail.Input_Voltage}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Rated_Voltage">{{$t("detail.Rated_Voltage")}}</td>
		          <td class="detail_td td_data" v-if="detail.Rated_Voltage">{{detail.Rated_Voltage}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.EER">{{$t("detail.EER")}}</td>
		          <td class="detail_td td_data" v-if="detail.EER">{{detail.EER}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Chips_Per_Unit">{{$t("detail.Chips_Per_Unit")}}</td>
		          <td class="detail_td td_data" v-if="detail.Chips_Per_Unit">{{detail.Chips_Per_Unit}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Number_Chips">{{$t("detail.Number_of_Chips")}}</td>
		          <td class="detail_td td_data" v-if="detail.Number_Chips">{{detail.Number_Chips}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Operation_Panel">{{$t("detail.Operation_Panel")}}</td>
		          <td class="detail_td td_data" v-if="detail.Operation_Panel">{{detail.Operation_Panel}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Overclock">{{$t("detail.Overclock")}}</td>
		          <td class="detail_td td_data" v-if="detail.Overclock">{{detail.Overclock}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Dimensions">{{$t("detail.Dimensions")}}</td>
		          <td class="detail_td td_data" v-if="detail.Dimensions">{{detail.Dimensions}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Weight">{{$t("detail.Weight")}}</td>
		          <td class="detail_td td_data" v-if="detail.Weight">{{detail.Weight}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Cooling">{{$t("detail.Cooling")}}</td>
		          <td class="detail_td td_data" v-if="detail.Cooling">{{detail.Cooling}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Operating_Temperature">{{$t("detail.Operating_Temperature")}}</td>
		          <td class="detail_td td_data" v-if="detail.Operating_Temperature">{{detail.Operating_Temperature}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Operating_Humidity">{{$t("detail.Operating_Humidity")}}</td>
		          <td class="detail_td td_data" v-if="detail.Operating_Humidity">{{detail.Operating_Humidity}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Noise_Specifications">{{$t("detail.Noise_Specifications")}}</td>
		          <td class="detail_td td_data" v-if="detail.Noise_Specifications">{{detail.Noise_Specifications}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Network_Connection">{{$t("detail.Network_Connection")}}</td>
		          <td class="detail_td td_data" v-if="detail.Network_Connection">{{detail.Network_Connection}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Power_Interface">{{$t("detail.Power_Interface")}}</td>
		          <td class="detail_td td_data" v-if="detail.Power_Interface">{{detail.Power_Interface}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Connection_Supply">{{$t("detail.Connection_to_the_Supply")}}</td>
		          <td class="detail_td td_data" v-if="detail.Connection_Supply">{{detail.Connection_Supply}}</td>
		        </tr>
		        <!-- ============================英文============================= -->
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Hash_Rate_en">{{$t("detail.Hash_Rate")}}</td>
		          <td class="detail_td td_data" v-if="detail.Hash_Rate_en">{{detail.Hash_Rate_en}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Total_Hash_en">{{$t("detail.Total_Hash")}}</td>
		          <td class="detail_td td_data" v-if="detail.Total_Hash_en">{{detail.Total_Hash_en}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Power_Consumption_en">{{$t("detail.Power_Consumption")}}</td>
		          <td class="detail_td td_data" v-if="detail.Power_Consumption_en">{{detail.Power_Consumption_en}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Power_Efficiency_en">{{$t("detail.Power_Efficiency")}}</td>
		          <td class="detail_td td_data" v-if="detail.Power_Efficiency_en">{{detail.Power_Efficiency_en}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Input_Voltage_en">{{$t("detail.Input_Voltage")}}</td>
		          <td class="detail_td td_data" v-if="detail.Input_Voltage_en">{{detail.Input_Voltage_en}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Rated_Voltage_en">{{$t("detail.Rated_Voltage")}}</td>
		          <td class="detail_td td_data" v-if="detail.Rated_Voltage_en">{{detail.Rated_Voltage_en}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.EER_en">{{$t("detail.EER")}}</td>
		          <td class="detail_td td_data" v-if="detail.EER_en">{{detail.EER_en}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Chips_Per_Unit_en">{{$t("detail.Chips_Per_Unit")}}</td>
		          <td class="detail_td td_data" v-if="detail.Chips_Per_Unit_en">{{detail.Chips_Per_Unit_en}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Number_Chips_en">{{$t("detail.Number_of_Chips")}}</td>
		          <td class="detail_td td_data" v-if="detail.Number_Chips_en">{{detail.Number_Chips_en}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Operation_Panel_en">{{$t("detail.Operation_Panel")}}</td>
		          <td class="detail_td td_data" v-if="detail.Operation_Panel_en">{{detail.Operation_Panel_en}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Overclock_en">{{$t("detail.Overclock")}}</td>
		          <td class="detail_td td_data" v-if="detail.Overclock_en">{{detail.Overclock_en}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Dimensions_en">{{$t("detail.Dimensions")}}</td>
		          <td class="detail_td td_data" v-if="detail.Dimensions_en">{{detail.Dimensions_en}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Weight_en">{{$t("detail.Weight")}}</td>
		          <td class="detail_td td_data" v-if="detail.Weight_en">{{detail.Weight_en}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Cooling_en">{{$t("detail.Cooling")}}</td>
		          <td class="detail_td td_data" v-if="detail.Cooling_en">{{detail.Cooling_en}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Operating_Temperature_en">{{$t("detail.Operating_Temperature")}}</td>
		          <td class="detail_td td_data" v-if="detail.Operating_Temperature_en">{{detail.Operating_Temperature_en}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Operating_Humidity_en">{{$t("detail.Operating_Humidity")}}</td>
		          <td class="detail_td td_data" v-if="detail.Operating_Humidity_en">{{detail.Operating_Humidity_en}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Noise_Specifications_en">{{$t("detail.Noise_Specifications")}}</td>
		          <td class="detail_td td_data" v-if="detail.Noise_Specifications_en">{{detail.Noise_Specifications_en}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Network_Connection_en">{{$t("detail.Network_Connection")}}</td>
		          <td class="detail_td td_data" v-if="detail.Network_Connection_en">{{detail.Network_Connection_en}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Power_Interface_en">{{$t("detail.Power_Interface")}}</td>
		          <td class="detail_td td_data" v-if="detail.Power_Interface_en">{{detail.Power_Interface_en}}</td>
		        </tr>
		        <tr>
		          <td class="detail_td td_name" v-if="detail.Connection_Supply_en">{{$t("detail.Connection_to_the_Supply")}}</td>
		          <td class="detail_td td_data" v-if="detail.Connection_Supply_en">{{detail.Connection_Supply_en}}</td>
		        </tr>
		      </table>
					
				</div>

				<h1 v-else>{{ $t('detail.notParams') }}</h1>
		  </md-tab>
			
		  <md-tab id="pictureDetails" md-label="图片详情">
		    <div v-if="pics_details">
		    	<p>人生的磨难是很多的，所以我们不可对于每一件轻微的伤害都过于敏感。在生活磨难面前，精神上的坚强和无动于衷是我们抵抗罪恶和人生意外的最好武器。 —— 洛克</p>
		    	<p>人生的磨难是很多的，所以我们不可对于每一件轻微的伤害都过于敏感。在生活磨难面前，精神上的坚强和无动于衷是我们抵抗罪恶和人生意外的最好武器。 —— 洛克</p>
		    </div>

		    <h1 v-else>{{ $t('detail.notParams') }}</h1>
		  </md-tab>

		  <md-tab id="notice" md-label="注意事项">
		    <div class="sold_ifo">
		    	<h4 class="soli_title">{{ $t('detail.title1') }}</h4>
		    	{{ $t('detail.content1_1') }}<br />
		    	{{ $t('detail.content1_2') }}<br />
		    	{{ $t('detail.content1_3') }}<br />
		    	{{ $t('detail.content1_4') }}<br />
		    	{{ $t('detail.content1_5') }}
    		</div>
		  </md-tab>

		  <md-tab id="postSale" md-label="售后说明">
		    <div class="sold_ifo">
		    	<h4 class="soli_title">{{ $t('detail.title2') }}</h4>
		    	{{ $t('detail.content2_1_1') }}<br />
		    	{{ $t('detail.content2_1_2') }}<br />
		    	{{ $t('detail.content2_1_3') }}<br /><br />
		    	{{ $t('detail.content2_2_1') }}<br />
		    	{{ $t('detail.content2_2_2') }}<br />
		    	{{ $t('detail.content2_2_3') }}<br />
		    	{{ $t('detail.content2_2_4') }}<br />
		    	{{ $t('detail.content2_2_5') }}<br />
		    	{{ $t('detail.content2_2_6') }}<br /><br />
		    	{{ $t('detail.content2_3_1') }}<br />
		    	{{ $t('detail.content2_3_2') }}
    		</div>
		  </md-tab>

		</md-tabs>
  </div>
</template>

<script>
import '../assets/js/detail-package.js'
import store from '../vuex/vuex.js'
import api from '../../static/js/api.js'

export default {
  name: 'productDetail',
  data () {
    return {
      msg: 'productDetail productDetail productDetail',
      choose_price: '',
      choose_num: 1,
      pics: [],
      title: [],
      keywords: [],
      parameter: '',
      param_items: [],
      param_details: [],
      pics_details: '',
      detail: '',
      prices: [],
      product: []
    }
  },
  computed: {
    lan: function () {
      return (store.state.lan === 'cn') ? 0 : 1
    }
  },
  mounted: function () {
    var _id = this.$route.params.id
    this.$http({
      url: api.baseUrl + 'getDetails?id=' + _id,
      method: 'GET'
    }).then(function (data) {
      var re = data.body
      // console.log(re)
      this.re = re
      this.pics = re.pics
      this.title = re.title
      this.keywords = re.keywords
      this.parameter = re.parameter
      this.prices = re.prices
      this.choose_price = re.prices[0].price[this.lan]
      if (this.parameter) {
        this.param_details = re.param_details
        var table = this.re.param_details[this.lan]
        this.detail = table
      }
      this.pics_details = (re.pics_details.length !== 0) ? 1 : 0
    })
  },
  watch: {
    lan: function () {
      var table = this.re.param_details[this.lan]
      this.detail = table
    }
  },
  methods: {
    addCLass: function (index) {
      this.choose_price = this.re.prices[index].price[this.lan]
    },
    chooseNum: function (param) {
      if (param === 'increase') {
        this.choose_num ++
      } else {
        this.choose_num === 1 || this.choose_num --
      }
    },
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    onOpen () {
      // console.log('Opened')
    },
    onClose (type) {
      // console.log('Closed', type)
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
		/*background: red;*/
	}
	#productDetail .two {
		/*background: yellow;*/
	}
	#productDetail .three {
		/*background: #0089dc;*/
	}
	/* 商品描述 */
	.description {
		margin-top: .08rem;
    padding-bottom: .1rem;
	}
	.product_name {
    font-size: .25rem;
    color: #333;
    margin-bottom: 10px;
  }
  .product_hot {
    padding: 0 .1rem;
    height: .22rem;
    line-height: .23rem;
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
	#app #productDetail .md-button{
		box-shadow: #fff 0 0 0;
		margin: .07rem 0;
		margin: 0;
		padding: 0;
		position: relative;
		left: 21% !important;
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
		margin-right: .1rem;
		width: .7rem;
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
    /*margin: .07rem 0;*/
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
	#productDetail .hide {
		display: none;
	}
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
