<template>
<div class="indexPage">
  <Header></Header>
  <Body></Body>
</div>
</template>

<script>
import Header from './header/header'
import Body from './body/body'
export default {
  components: {
    Header,
    Body
  },
  methods: {

  },
  mounted () {

  }
}
</script>

<style scope>
.indexPage {
  width: 100vw;
  min-width: 875px;
  height: 100vh;
}
</style>
