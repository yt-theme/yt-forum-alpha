<template>
  <div @click="notifyClick()" class="notify padd_8 bgc_red bor_ra_5 white_color text_shad_dark text_cent">
      <p v-if="this.$store.state.notifyState.title" class="marg_4"><b>{{this.$store.state.notifyState.title}}</b></p>
      <p v-if="this.$store.state.notifyState.content" class="marg_4">{{this.$store.state.notifyState.content}}</p>
  </div>
</template>

<script>
export default {
  methods: {
    notifyClick () {
      this.$store.dispatch("set_notifyState", {title: "", content: "", show: false})
    }
  }
}
</script>

<style scope>
.notify {
  width: 210px;
}
</style>
