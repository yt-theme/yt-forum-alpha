<template>
  <div class="body_right">
    <!-- 公告 -->
    <div class="body_right_notify padd_8 marg_t_8 bgc_red over_h pos_r">
      <span class="white_color over_h space_nowrap pos_a block">{{announcement}}</span>
    </div>
    <!-- 应用图标 -->
    <div class="over_a">
      <ul class="li_s_n white_color">
      <template v-for="i in applicationList">
        <li class="text_cent cur_p marg_tb_8">
          <a :href="i.url" target="_blank" class="wh_100 block padd_8 white_color text_dec_non">{{i.label}}</a>
        </li>
      </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      announcement: '公告: 地产产产产主主是民和和的地地发在',
      applicationList: [
        { id: 1, label: "纵向通信", url: "#/zchat"},
      ]
    }
  }
}
</script>

<style scope>
@keyframes announcementScroll {
  0% { transform: translateX(200px) }
  100% { transform: translateX(-100%) }
}
.body_right {

}
.body_right_notify, .body_right ul> li {
  height: 36px;
  border-radius: 36px 0 0 36px;
}
.body_right ul> li {
  background-color: #7A7E7E;
}
.body_right_notify> span {
  animation: announcementScroll 13s linear infinite;
}
</style>
