<template>
  <div class="productList" id="productList">

		<mt-loadmore :auto-fill='false' :bottom-method="loadBottom" :bottom-all-loaded="false" ref="loadmore">
		  <ul>
		    <li v-for="item in list">

		    	<md-list-item disabled class="lists">
				    <md-avatar>
				      <img :src="item.pics[0]" alt="People">
				    </md-avatar>

				    <div class="md-list-text-container">
				      <h1 class="title">{{ item.title[lan] }}</h1>
		        	<p class="description test-ellipsis">{{ item.keywords[lan] }}</p>
		        	<!-- <p class="description">Wish I could come, but I'm out of town ...</p> -->
				    </div>

				    <md-button class="md-icon-button md-list-action buyNow">
				      <md-icon>
								<router-link :to="{ path: 'productDetail/' + item._id }">buy</router-link>
				      </md-icon>
				    </md-button>

				    <md-divider class="md-inset"></md-divider>
				  </md-list-item>

		    </li>
		  </ul>
		</mt-loadmore>

  </div>
</template>

<script>
import store from '../vuex/vuex.js'
import api from '../../static/js/api.js'

// var _a = 55
export default {
  name: 'productList',
  data () {
    return {
      msg: 'productList productList productList',
      list: [],
      boolean: false
    }
  },
  computed: {
    lan: function () {
      return (store.state.lan === 'cn') ? 0 : 1
    }
  },
  mounted: function () {
    this.$http({
      url: api.baseUrl + 'getLists',
      method: 'GET'
    }).then(function (data) {
      // console.log(data.body)
      var re = data.body
      for (var i = 0; i < re.length; i++) {
        this.list.push(re[i])
      }
    })
  },
  methods: {
    // loadTop () {
    //   console.log(1)
    //   this.$refs.loadmore.onTopLoaded()
    // },
    loadBottom () {
      // 若数据已全部获取完毕
      // if (_a >= 60) {
      //   console.log(2)
      //   this.allLoaded = true
      // } else {
      //   console.log(3)
      //   this.list.push(_a++)
      //   this.allLoaded = false
      // }
      this.$refs.loadmore.onBottomLoaded()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#productList .md-inset {
		margin-left: 0;
	}
	#productList .md-list-text-container {
		/*padding: .12rem .16rem;*/
    width: 70%;
	}
	
	#productList .md-avatar {
		width: 2rem;
		height: 1rem;
		border-radius: 10px;
	}
	#productList .title {
		color: rgba(68, 62, 62, 0.9);
	}
	#productList .md-button {
		padding: .12rem .16rem !important;
	}
	#productList .buyNow {
		height: .3rem;
		width: 1rem;
		background: #f8b600;
		border-radius: 6px;
	}
	#productList .md-list-item .md-icon a {
		color: #fff;
	}
</style>
