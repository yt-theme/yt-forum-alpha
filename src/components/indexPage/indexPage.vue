<template>
<div class="indexPage">
  <!-- header -->
  <Header></Header>
  <Body></Body>
  <!-- <Footer></Footer> -->
</div>
</template>

<script>
import Header from './header/header'
import Body from './body/body'
import Footer from './footer/footer'
export default {
  components: {
    Header,
    Body,
    Footer
  }
}
</script>

<style scope>
.indexPage {
  width: 100vw;
  min-width: 356px;
  height: 100vh;
}
</style>
