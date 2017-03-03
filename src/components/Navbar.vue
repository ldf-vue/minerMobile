<template>
  <div class="Navbar" id="Navbar">
  	<md-toolbar>
		  <md-button class="md-icon-button" @click="toggleLeftSidenav">
		    <md-icon>
					<div class="menuIcon">
		    		<i></i>
		    		<i></i>
		    		<i></i>
		    	</div>
		    </md-icon>
		  </md-button>

		  <div class="logo">
    		<a href="javascript:void(0);">
    			<img src="data:image/png;base64,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">
    		</a>
    	</div>
			
		</md-toolbar>

		<Switchlan></Switchlan>

		<md-sidenav id="hideMenu" class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
		  <md-toolbar class="md-large">
		    <div class="md-toolbar-container">
		      <h3 class="md-title">侧边导航内容</h3>
		    </div>
		  </md-toolbar>
			
			<div>
				<ul>
	        <li v-for="item in items" class="navItem" @click="hideMenu">
	          <router-link :to="{ name: item.href}" :class="{'on':item.href==curHref}">
	            <!-- <a>{{ item.name }}</a> -->
	            <a>{{ $t('nav['+item.number+'].name') }}</a>
	          </router-link>
	        </li>
	      </ul>
			</div>
		  
		</md-sidenav>

  </div>
</template>

<script>
import Vue from 'vue'
import Switchlan from './Switchlan'

Vue.component('Switchlan', Switchlan)

export default {
  name: 'Navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [
        {name: '首页', href: 'home', number: 0},
        {name: '矿机', href: 'productList', number: 1},
        // {name: '配置说明', href: 'configInfo', number: 2},
        {name: '关于', href: 'about', number: 3},
        {name: 'FAQ', href: 'theFaq', number: 4}
      ],
      curHref: 'home',
      number: 0
    }
  },
  watch: {
    '$route': 'routeChange'
  },
  methods: {
    routeChange () {
      this.curHref = this.$route.name
      document.body.scrollTop = 0
      if (this.curHref === 'productDetail') {
        this.curHref = 'productList'
      }
    },
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    open (ref) {
      // console.log('Opened: ' + ref)
      // 处理左边栏弹出 height 100%
      document.getElementById('Navbar').style.height = '100%'
    },
    close (ref) {
      // console.log('Closed: ' + ref)
      setTimeout(function () {
        document.getElementById('Navbar').style.height = '.6rem'
      }, 350)
    },
    hideMenu () {
      this.$refs.leftSidenav.toggle()
      // this.close('left')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.Navbar {
		position: fixed;
    right: 0;
    top: 0;
    left: 0;
    z-index: 1030;
    width: 100%;
    /*height: 100%;*/
	}
	.Navbar nav {
		/*height: .6rem;*/
		background: rgba(151, 55, 44, .5);
	}
	.logo {
		float: left;
		/*margin-top: .125rem;*/
		margin-left: .1rem;
	}
	
	.logo img {
		height: .3rem;
		width: 1.4rem;
	}
	.menuIcon {
		float: left;
	}
	.menuIcon i {
		display: block;
		width: .25rem;
		height: .04rem;
		margin-top: .035rem;
		border-top: 3.5px solid #6e63c3;
		/*border-radius: 2.5px;*/
		/*border-top-left-radius: 2px;*/
	}

	.navItem .on a {
    color: #32c057;
  }
  .navItem {
  	line-height: .5rem;
  	text-align: left;
  	padding-left: .18rem;
  }
  .navItem a {
  	display: inline-block;
    width: 100%;
    height: 100%;
  }

</style>
<style type="text/css">
	/* 重写一些组件的样式*/
	#Navbar .md-sidenav .md-sidenav-content {
		width: 1.5rem;
	}
	#Navbar .md-theme-default.md-toolbar {
		background-color: rgba(241, 185, 119, 0.9);
	}
	#Navbar .md-icon {
    width: .24rem;
    min-width: .24rem;
    height: .24rem;
    min-height: .24rem;
	}
	#Navbar .md-button.md-icon-button {
     width: .4rem; 
     min-width: .4rem; 
    height: .4rem;
    margin: 0 .06rem;
    padding: .08rem;
    border-radius: 50%;
    line-height: .24rem;
	}
	#Navbar .md-toolbar.md-large {
		min-height: .5rem;
	}
	#Navbar .md-toolbar.md-large {
		padding: 0 .07rem;
	}
</style>
