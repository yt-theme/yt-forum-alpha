<template>
<div @mouseleave="leave_leftBar" class="body_leftBar">
  <div @mouseenter="enter_onOff_menu" :class="{'body_leftBar_onOff_active':this.$store.state.body_leftBar_state==true,
    'body_left_actionBtn': true,
    'body_leftBar_onOff': this.$store.state.body_leftBar_state==false}"></div>
</div>
</template>

<script>
export default {
  methods: {
    enter_onOff_menu () {
      this.$store.dispatch('set_body_leftBar_state', !this.$store.state.body_leftBar_state)
    },
    leave_leftBar () {
      this.$store.dispatch('set_body_leftBar_state', false)
    }
  }
}
</script>

<style scope>
.body_leftBar {
  width: 10vw;
  min-width: 100px;
  max-width: 140px;
  height: 80%;
  min-height: 200px;
  border-radius: 0 10px 10px 0;
  /* border: 3px solid #2E3787; */
  border-left: 0;
  box-shadow: 0 0 1000px #7A7E7E inset;
}
.body_left_actionBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  box-shadow: 0 0 1000px #7A7E7E inset;
  border-radius: 0 50% 50% 0;
  margin-top: 11px;
}
.body_leftBar_onOff {
  position: fixed;
  left:0;
  top: 10vh;
}
.body_leftBar_onOff_active {
  position: fixed;
  top: 10vh;
  left: -140px;
}
</style>
