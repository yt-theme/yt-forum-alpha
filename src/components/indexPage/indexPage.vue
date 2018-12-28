<template>
  <div class="indexPage pos_r">
    <Header></Header>
    <Body></Body>
    <Notify class="indexPageNotify pos_a top_0" v-if="this.$store.state.notifyState.show"></Notify>
  </div>
</template>

<script>
import Header from './header/header'
import Body from './body/body'
import Notify from '../publicCompo/notify'
export default {
  components: {
    Header,
    Body,
    Notify
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
.indexPageNotify {
  left: calc(50% - 105px);
}
</style>
