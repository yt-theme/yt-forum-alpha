<template>
  <div class="body_mainArea pos_r over_a">
    <!-- list -->
    <ul class="w_100">
      <template v-for="i in list_dat">
        <li @click="popViewShow(i)" class="body_mainArea_list flex just_bet padd_8 marg_11 bor_ra_3 cur_p">
          <!-- list left -->
          <div class="flex">
            <!-- img -->
            <div class="flex flex_d_c alig_cent">
              <img class="body_mainArea_list_img"/>
              <p>{{i.author}}</p>
            </div>
            <div class="body_mainArea_list_content marg_lr_8">
              <!-- title -->
              <h3>{{i.title}}</h3>
              <!-- content -->
              <small>{{i.content_first}}</small>
              <!-- time -->
              <small>发布时间: {{i.time}}&#8195;最后编辑: {{i.edit_times}}</small>
            </div>
          </div>
          <!-- list right -->
          <div class="body_mainArea_r padd_4 flex flex_d_c">
            <p class="space_nowrap"><span>{{i.reply}}</span>&nbsp;&nbsp;reply</p>
            <p class="space_nowrap"><span>{{i.like}}</span>&nbsp;&nbsp;liked</p>
          </div>
        </li>
      </template>
    </ul>
    <!-- page -->
    <div class="body_mainArea_page flex_betw padd_lr_18">
      <button @click="changePage_sub()" class="flex_cent w_100 cur_p padd_4">{{'<'}}</button>
      <span class="flex_cent w_100">第&nbsp;{{currentPage}}&nbsp;页</span>
      <button @click="changePage_add()" class="flex_cent w_100 cur_p padd_4">{{'>'}}</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list_dat: [
        { id: 1, title: '第一个东西的测试第一个东西的测试第一个东西的测试第一个东西的测试第一个东西的测试第一个东西的测试第一个东西的测试第一个东西的测试第一个东西的测试', edit_times: '2010-10-10', img: '', time: '2010-10-10', content_first: '这是发的第一个东西呢', author: 'a', reply: 10000, like: 10000 },
        { id: 2, title: 'test', img: '', edit_times: '2010-10-10', time: '2010-10-10', content_first: 'testing', author: 'a', reply: 10000, like: 10000 },
        { id: 2, title: 'test', img: '', edit_times: '2010-10-10', time: '2010-10-10', content_first: 'testing', author: 'a', reply: 10000, like: 10000 },
        { id: 2, title: 'test', img: '', edit_times: '2010-10-10', time: '2010-10-10', content_first: 'testing', author: 'a', reply: 1, like: 1 },
        { id: 2, title: 'test', img: '', edit_times: '2010-10-10', time: '2010-10-10', content_first: 'testing', author: 'a', reply: 1, like: 1 },
        { id: 2, title: 'test', img: '', edit_times: '2010-10-10', time: '2010-10-10', content_first: 'testing', author: 'a', reply: 1, like: 1 },
        { id: 2, title: 'test', img: '', edit_times: '2010-10-10', time: '2010-10-10', content_first: 'testing', author: 'a', reply: 1, like: 1 },
        { id: 2, title: 'test', img: '', edit_times: '2010-10-10', time: '2010-10-10', content_first: 'testing', author: 'a', reply: 1, like: 1 },
        { id: 2, title: 'test', img: '', edit_times: '2010-10-10', time: '2010-10-10', content_first: 'testing', author: 'a', reply: 1, like: 1 },
        { id: 2, title: 'test', img: '', edit_times: '2010-10-10', time: '2010-10-10', content_first: 'testing', author: 'a', reply: 1, like: 1 },
        { id: 2, title: 'test', img: '', edit_times: '2010-10-10', time: '2010-10-10', content_first: 'testing', author: 'a', reply: 1, like: 1 },
      ],
      currentPage: this.$route.params.page
    }
  },
  watch: {
    $route(to, from) {
      this.currentPage = Number(to.params.page)
      this.changeRouter_toRequireData(this.currentPage)
    }
  },
  methods: {
    set_popView_article (obj) {
      this.$store.dispatch('set_body_popView_article', obj)
    },
    popViewShow (obj) {
      // 设置popView title 显示内容
      this.set_popView_article({
        title: obj.title,
        author: obj.author,
        id: obj.id,
        time: obj.time,
        reply: obj.reply,
        liked: obj.like
      })
      // popView show
      this.$store.dispatch('set_body_popView_state', true)
    },
    // page sub
    changePage_sub () {
      let that = this
      this.currentPage = (function() { return that.currentPage > 1 ? that.currentPage - 1 : 1 })()
      this.$router.push('/index_page/' + this.currentPage)
    },
    // page add
    changePage_add () {
      this.currentPage = Number(this.currentPage) + 1
      this.$router.push('/index_page/' + this.currentPage)
    },
    // 路由改变请求数据
    changeRouter_toRequireData (page) {

    }
  }
}
</script>

<style scope>
.body_mainArea {
  width: 100%;
  height: 100%;
  padding: 7px;
}
.body_mainArea_list {
  color: #fafafa;
  text-shadow: 0 0 3px #898989;
  background-color: #727272;
}
.body_mainArea_list:hover {
  color: #fafafa;
  text-shadow: 0 0 6px #fafafa;
  box-shadow: 0 0 2000px #414141 inset;
}
.body_mainArea_list .body_mainArea_list_content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fafafa;
}
.body_mainArea_list_img {
  width: 40px;
  height: 40px;
}
.body_mainArea_r {
  justify-content: space-between;
}
.body_mainArea_page {
  position: fixed;
  top: 45px;
  left: 10%;
  border-radius: 0 0 40px 40px;
  color: #fafafa;
  background-color: #7A7E7E;
  border-top: 0;
  border-left: 1px solid #f1f1f3;
  border-right: 1px solid #f1f1f3;
  border-bottom: 1px solid #f1f1f3;
}
.body_mainArea_page> button {
  min-width: 70px;
  background-color: rgba(0, 0, 0, 0);
  color: #fafafa;
  border: 0;
  outline: none;
}
</style>
