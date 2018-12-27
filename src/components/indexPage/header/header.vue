<template>
  <div class="header padd_8 flex">
      <!-- line no1 -->
      <div class="header_left flex_cent space_nowrap">
        环视地球分部
      </div>
      <div class="header_main_area flex_betw">
        <div class="header_main_area_search">
          <input placeholder="Search"/>
        </div>
        <div>
          <button @click="publish()" :class="{'bgc_opa_gray white_color': isPub, 'bor_ra_3 bor_0 padd_4 marg_lr_8 bgc_ligh_gray bor_wh': true}">发布</button>
        </div>
      </div>
      <template v-if="loginStat">
        <div class="header_right flex_arou pos_r">
          <!-- top -->
          <b>{{userName}}</b>
          <b>level: {{level}}</b>
          <!-- pop menu -->
          <ul class="pos_a bgc_ligh_gray gray_dark_color bor_ra_3 cur_p opacity">
            <li @click="logout()" class="padd_lr_18">注销</li>
          </ul>
        </div>
      </template>
      <template v-else>
        <div class="header_right flex_arou pos_r">
          <!-- top -->
          <b></b>
          <b>请登录</b>
          <!-- pop menu -->
          <ul class="pos_a right_0 z_999 padd_8 bgc_ligh_gray gray_dark_color bor_ra_3 opacity flex">
            <li>
              <form>
                <input v-model="form_name" type="text" class="bgc_dark marg_4 bor_0 white_color bor_ra_3 padd_4"/>
                <input v-model="form_pswd" type="password" class="bgc_dark marg_4 bor_0 white_color bor_ra_3 padd_4"/>
                <input type="submit"  @click="login()" class="cur_p marg_4 bgc_dark bor_0 white_color bor_ra_3 padd_4" value="登录">
              </form>
            </li>
          </ul>
        </div>
      </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // login
      userName: 'yt',
      level: 1,

      form_name: '',
      form_pswd: '',

      loginStat: false,

      // pub
      isPub: false,
    }
  },
  methods: {
    publish() {
      this.isPub = !this.isPub
      this.isPub ? this.$store.dispatch('set_body_popPub_state', true) : this.$store.dispatch('set_body_popPub_state', false)
    },
    logout () {
      alert('out')
    },
    login () {
      if (!this.form_name && !this.form_pswd) {
        return false
      }
      alert('in')
    }
  },
  mounted () {

  }
}
</script>

<style scope>
.header {
  min-height: 45px;
  background-color: #7A7E7E;
  color: #f1f1f1;
}
.header_left {
  text-shadow: 0 0 11px #f1f1f1;
}
.header_left, .header_right {
  width: 10%;
  min-width: 40px;
}
.header_main_area {
  position: relative;
  width: 80%;
  padding: 0 11px;
}
.header_right {

}
.header_right> ul {
  list-style: none;
  display: none;
}
.header_right:hover> ul {
  display: block;
}
.header_main_area_search {

}
.header_main_area_search> input {
  border: 0;
  outline: none;
  background-color: #f1f1f1;
  border-radius: 50px;
  color: #7A7E7E;
  margin: 2px;
  padding: 4px 20px;
}
</style>
