// import Vue from 'vue'
// import VueResource from 'vue-resource'
import { locales } from './lan-packs.js'

// Vue.use(VueResource)

locales.en.homeContent = {
  hotProducts: {
    hot: 'Popular products',
    more: 'More products'
  },
  session1: {
    title: 'LDFMINER-WORL\'s 1ST AND Global Sales',
    subTitle: 'Multi-Algorithm Mining | Only 100 Units for Batch 1',
    lernMore: 'Learn More'
  },
  session2: {
    title: 'Buy Now',
    subTitle: '支持多币种挖矿 正式发售限量100台',
    lernMore: '了解更多'
  }
}
locales.cn.homeContent = {
  hotProducts: {
    hot: '热门商品',
    more: '了解更多商品'
  },
  session1: {
    title: 'ldf矿机——全球首创，全球销售',
    subTitle: '支持多币种挖矿 正式发售限量100台',
    lernMore: '了解更多'
  },
  session2: {
    title: '立即购买',
    subTitle: '支持多币种挖矿 正式发售限量100台',
    lernMore: '了解更多'
  }
}

// Vue.http.get('http://www.lingyun.party/app1/getHots').then(function (data) {
//   // console.log(data.body)
//   var re = data.body
//   locales.cn.homeContent.hotProducts.title = []
//   locales.en.homeContent.hotProducts.title = []
//   for (var i = 0, len = re.length; i < len; i++) {
//     locales.cn.homeContent.hotProducts.title.push(re[i]['title'][0])
//     locales.en.homeContent.hotProducts.title.push(re[i]['title'][1])
//   }
//   // console.log(locales)

//   // locales.en.homeContent
// }, function () {
//   console.log('error')
// })

export { locales }
