<template>
  <div class="footer">
    <div class="linkSection">
    	<p class="linkTitle">About Us</p> 
  		<router-link :to="{ name: 'about'}" class="link">关于</router-link> 
  		<router-link :to="{ name: 'theFaq'}" class="link">FAQ</router-link>
		</div>
		<div class="linkSection">
			<p class="linkTitle">Explore</p> 
			<router-link :to="{ name: 'home'}" class="link router-link-active">首页</router-link> 
			<router-link :to="{ name: 'productList'}" class="link">矿机</router-link> 
			<router-link :to="{ name: 'configInfo'}" class="link">配置说明</router-link>
		</div>
		<div class="linkSection linkSection_media">
			<p class="linkTitle">Contact Us</p> 
			<a href="https://www.facebook.com/ldf Miner-1029835897114795/" target="_Blank" class="link"><span class="mediaIcon i_media_f"></span>@ldfMiner</a> 
			<a href="https://twitter.com/ldfMiner_" class="link"><span target="_Blank" class="mediaIcon i_media_t"></span>@ldfMiner_</a> 
			<a href="mailto:official@ldfminer.com" class="link"><span class="mediaIcon i_media_m"></span>official@lfdminer.com</a>
		</div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: 'footer footer footer footer footer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.footer {
		text-align: left;
		padding: .09rem;
	}
	.footer a.link {
		color: #a0a0a0;
		display: block;
		font-size: .11rem;
	}
</style>
