<template>
  <div id="Switchlan" class="Switchlan" hide="true">
    <div class="choose" @click="showLan">
      <img v-bind:src="chooseLan" alt="语言" id="language" />
    </div>
    <div id="select" class="select hide">
      <img src="../../static/img/cn.png" alt="中文" @click='changeLanguage("cn")' id="cn" />
      <img src="../../static/img/en.png" alt="English" @click='changeLanguage("en")' id="en" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import store from '../vuex/vuex.js'

export default {
  name: 'Switchlan',
  data () {
    return {
      msg: 'Switchlan',
      lan: window.localStorage.getItem('lan') || window.localStorage.setItem('lan', 'cn') || 'cn'
    }
  },
  computed: {
    chooseLan () {
      var lanPic
      if (this.lan === 'cn') {
        lanPic = '../../static/img/cn.png'
      } else {
        lanPic = '../../static/img/en.png'
      }
      return lanPic
    }
  },
  methods: {
    showLan () {
      if (this.$el.getAttribute('hide') === 'true') {
        this.$el.setAttribute('hide', 'false')
        document.getElementById('select').className = 'select'
      } else {
        this.$el.setAttribute('hide', 'true')
        document.getElementById('select').className = 'select hide'
      }
    },
    changeLanguage (type) {
      Vue.config.lang = type
      store.commit('increment', type)
      document.getElementById('Switchlan').setAttribute('hide', 'true')
      document.getElementById('select').className = 'select hide'
      if (type === 'cn') {
        document.getElementById('language').setAttribute('src', '../../static/img/cn.png')
      } else {
        document.getElementById('language').setAttribute('src', '../../static/img/en.png')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Switchlan {
    position: absolute;
    top: .195rem;
    right: .17rem;
  }
  .choose {
    padding-right: .015rem;
  }
  .choose img {
    width: .28rem;
    height: .28rem;
  }
  .select {
    position: absolute;
    margin-top: .05rem;
    top: .25rem;
    right: 0.003rem;
    width: .3rem;
  }
  .select img {
    margin-top: .03rem;
    width: .3rem;
    max-width: 1000%;
    height: .3rem;
  }
</style>
