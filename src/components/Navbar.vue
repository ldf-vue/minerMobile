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
    			<img src="../../static/img/logo.png">
    		</a>
    	</div>
			
		</md-toolbar>

		<Switchlan></Switchlan>

		<md-sidenav id="hideMenu" class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
		  <md-toolbar class="md-large">
		    <div class="md-toolbar-container sideBar">
		      <h3 class="md-title">{{ $t('navSidebar') }}</h3>
		    </div>
		  </md-toolbar>
			
			<div>
				<ul>
	        <li v-for="item in items" class="navItem" @click="hideMenu">
	          <router-link :to="{ name: item.href}" :class="{'on':item.href==curHref}">
	            <!-- <a>{{ item.name }}</a> -->
	            <a class="icon">{{ $t('nav['+item.number+'].name') }}</a>
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
    position: relative;
		/*height: .6rem;*/
	}
	.logo {
		float: left;
		/*margin-top: .125rem;*/
		margin-left: .06rem;
    overflow: hidden;
    height: .64rem;
	}
	
	.logo img {
		height: .9rem;
		width: 1.1rem;
    margin-top: -.125rem;
	}
	.menuIcon {
		float: left;
	}
	.menuIcon i {
		display: block;
		width: .25rem;
		height: .04rem;
		margin-top: .035rem;
		border-top: 3.5px solid #f8b600;
		/*border-radius: 2.5px;*/
		/*border-top-left-radius: 2px;*/
	}

	#Navbar .navItem .on a {
    color: #5cbcd4;
  }
  .navItem {
  	line-height: .6rem;
  	text-align: left;
  	padding-left: .18rem;
  }
  .navItem a {
  	display: inline-block;
    width: 100%;
    height: 100%;
    position: relative;
  }
  .navItem .icon {
    position: relative;
  }
  .navItem .icon:before {
    content: '';
    display: inline-block;
    width: .4rem;
    height: .4rem;
    background-image: url('../../static/img/sunny.png');
    background-repeat: no-repeat;
    background-size: .35rem;
    background-color: #fff; 
    position: relative;
    top: .12rem;
    margin-right: .15rem;
    border-radius: 50%;
    background-position: 50%;
  }
  #Navbar .navItem:nth-child(2) .icon:before {
    background-image: url('../../static/img/cloudy.png');
  }
  #Navbar .navItem:nth-child(3) .icon:before {
    background-image: url('../../static/img/snow.png');
  }
  #Navbar .navItem:nth-child(4) .icon:before {
    background-image: url('../../static/img/rainy.png');
  }

</style>
<style type="text/css">
	/* 重写一些组件的样式*/
	#Navbar .md-sidenav .md-sidenav-content {
		width: 2.5rem;
    background: #31333d;
	}
  #Navbar .sideBar {
    background: #31333d;
    color: #fff;
  }
  #Navbar .md-toolbar .md-title:first-child {
    margin-left: .18rem;
  }
  #Navbar .md-sidenav-content {
    background: #31333d;
  }
	#Navbar .md-theme-default.md-toolbar {
		background-color: #fff;
    box-shadow: 0 0 3px #888888;
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
		padding: 0;
    position: relative;
	}
  #Navbar .md-theme-default a {
    color: #fff;
    font-weight: 600;
  }
</style>
