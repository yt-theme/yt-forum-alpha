<template>
  <div class="body flex">
    <!-- bar -->
    <!-- <div class="body_left_container">
      <Leftbar :class="{'body_leftBar_container_normal':this.$store.state.body_leftBar_state==false, 'body_leftBar_container': this.$store.state.body_leftBar_state==true}"></Leftbar>
    </div> -->

    <!-- area -->
    <div class="body_main_container">
      <Mainarea></Mainarea>
    </div>

    <!-- right -->
    <div class="body_right_container">
      <Bodyright></Bodyright>
    </div>

    <!-- pop -->
    <Popview v-if="$store.state.body_popView_state"></Popview>
    <PopPub v-show="$store.state.body_popPub_state"></PopPub>
  </div>
</template>

<script>
// import Leftbar from './bodyCompo/body_leftBar'
import Mainarea from './bodyCompo/body_mainArea'
import Bodyright from './bodyCompo/body_right'
import Popview from './bodyCompo/body_popView'
import PopPub from './bodyCompo/body_popPub'
export default {
  components: {
    // Leftbar,
    Mainarea,
    Bodyright,
    Popview,
    PopPub
  },
  data () {
    return {

    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>

<style scope>
.body {
  height: calc(100vh - 47px);
}
.body_right_container {
  width: 200px;
}
.body_main_container {
  width: 100%;
}
/* .body_leftBar_container {
  position: fixed;
  left: 0;
  top: 10%;
}
.body_leftBar_container_normal {
  position: fixed;
  left: -140px;
  top: 10%;
  transition: left 0.5s;
} */
</style>
