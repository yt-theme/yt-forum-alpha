<template>
  <div class="zchat wh_100v flex">
    <!-- left -->
    <div class="zchat_left w_20">
      <ul class="li_s_n">
        <template v-for="i in friendList">
          <li class="bgc_opa_gray bor_ra_3 white_color marg_4 padd_4">
            <img :src="i.logo_url"/>
            <h3>{{i.name}}</h3>
          </li>
        </template>
      </ul>
    </div>
    <!-- body -->
    <div class="zchat_body w_80">

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      friendList: [
        { id: 1, name: "u001", logo_url: "" },
        { id: 2, name: "u002", logo_url: "" },
        { id: 3, name: "u003", logo_url: "" },
      ]
    }
  },
  methods: {
    // chatArea_style () {
    //   for (let i=this.chatData.length; i>0; i--) {
    //     let inner = this.$refs.zchatChatAreaInner
    //     let innerW = this.$refs.zchatChatAreaInner.style.offsetWidth
    //     let area = document.querySelector("#zchatlistArea_>li:nth-child(" + ( i ) +")")
    //     if ( area.offsetWidth > innerW ) {
    //       rea.style.left = 100 - i * 7 + "%"
    //       area.style.top = 100 - i * 7 + "%"
    //     }
    //     area.style.left = i * 7 + "%"
    //     area.style.top = i * 7 + "%"
    //     area.style.opacity =  i/10
    //   }

    // }
  },
  mounted () {
    document.title = "zchat"
    // this.chatArea_style()
  }
}
</script>

<style scope>
.zchat_left, .zchat_body {
  border: 1px solid red;
}
.zchat_left {
  min-width: 200px;
}
.zchat_left> li {

}
.zchat_body {
  min-width: 200px;
}
</style>
