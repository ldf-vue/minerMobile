<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view class="router"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from 'vue'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// 这里注册组件，使用该方法，不使用 new Vue，否则组件注册不成功
Vue.component('Navbar', Navbar)
Vue.component('Footer', Footer)

export default {
  name: 'app'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 64px;
    background: #fbf8f8;
  }
  a {
    /*text-decoration: none !important;*/
  }
  .router {
    max-width: 450px;
    margin: .64rem auto .1rem;
  }
  #app .md-dialog-actions {
    position: relative;
  }
  #app .md-dialog-actions:before {
    background-color: #d9d9da;
  }
  #app .md-primary {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: #048aef;
  }
</style>
