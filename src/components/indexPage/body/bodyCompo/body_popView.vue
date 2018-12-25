<template>
  <div class="body_popView">
    <!-- close -->
    <i @click="popViewClose()" class="body_popView_close"></i>
    <!-- content -->
    <div class="body_popView_content">
      <!-- title -->
      <div class="body_popView_title flex_betw">
        <!-- title -->
        <div class="w_80">
          <h4>标题: {{this.$store.state.body_popView_article.title.length>19 ? this.$store.state.body_popView_article.title.substring(0, 19) + '...' : this.$store.state.body_popView_article.title}}</h4>
          <h4>作者: {{this.$store.state.body_popView_article.author}}</h4>
          <h4>文章流水号: {{this.$store.state.body_popView_article.id}}</h4>
          <h4>发布时间: {{this.$store.state.body_popView_article.time}}</h4>
        </div>
        <div class="t_align_r  w_20">
          <span>回复: {{this.$store.state.body_popView_article.reply}}</span>&#8195;
          <span>喜欢: {{this.$store.state.body_popView_article.liked}}</span>
        </div>
      </div>
      <!-- main -->
      <div class="body_popView_main over_a flex">

        <!-- left -->
        <div class="w_80 h_100 over_a">
          <!-- 编辑模式 -->
          <template v-if="editStat">
            <textarea class="wh_100 over_a resize_non bor_0">
              {{contentData.content}}
            </textarea>
          </template>
          <!-- 非编辑模式 -->
          <template v-else>
            <template v-if="contentData.content_type=='web'">
              <div v-html="contentData.content" class="wh_100">{{contentData.content}}</div>
            </template>
            <template v-else-if="contentData.content_type=='txt'">
              <div v-text="contentData.content" class="wh_100">{{contentData.content}}</div>
            </template>
          </template>
        </div>

        <!-- right -->
        <div style="min-width: 140px;" class="w_20 h_100 over_a">
          <ul class="li_s_n">
            <template v-for="i in replyData_list">
              <li class="bor_l_wh marg_tb_2e padd_l_8">

                <!-- top -->
                <div class="w_20 flex">
                  <img style="border: 1px solid red; width: 30px; height: 30px;" :src="i.user_logo" class="block"/>
                  <span class="marg_4">{{i.user_name}}</span>
                </div>

                <!-- bottom -->
                <div>
                  <span>{{i.content}}</span>
                </div>

              </li>
            </template>
          </ul>
        </div>

      </div>
      <!-- footer -->
      <div class="body_popView_footer flex">
        <div class="w_80">
          <template v-if="current_editable">
            <template v-if="editStat==false">
              <button @click="edit()" class="bor_ra_3 bor_0 padd_4 bgc_ligh_gray">编辑</button>
            </template>
            <template v-else-if="editStat==true">
              <button @click="save()" class="bor_ra_3 bor_0 padd_4 bgc_ligh_gray">保存</button>
              <button @click="cancelEdit()" class="bor_ra_3 bor_0 padd_4 marg_lr_8 bgc_ligh_gray">取消编辑</button>
            </template>
          </template>
        </div>
        <div style="min-width: 140px;" class="w_20 flex just_bet">
          <i></i>
          <div>
            <button class="bor_ra_3 bor_0 padd_4 marg_lr_8 bgc_ligh_gray">回复</button>
            <button class="bor_ra_3 bor_0 padd_4 bgc_ligh_gray">喜欢</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contentData: {
        content: '<input/>',
        content_type: 'web', // web or txt
        extra: {

        }
      },
      // 编辑权限
      current_editable: true,
      // 是否正在编辑
      editStat: false,
      // 评论
      replyData_list: [
        {
          id: 1,
          user_logo: '',
          user_name: 'ytusyds',
          content: "评论评论评论评论评论评论评语领班琟分文不值主食一",
        },
        {
          id: 2,
          user_logo: '',
          user_name: 'ytus',
          content: "评论评论评论评论评论评论评语领班琟分文不值主食一",
        },
        {
          id: 3,
          user_logo: '',
          user_name: 'ys',
          content: "评论评论评论评论评论评论评语领班琟分文不值主食一",
        },
         {
          id: 3,
          user_logo: '',
          user_name: 'ys',
          content: "评论评论评论评论评论评论评语领班琟分文不值主食一",
        },
         {
          id: 3,
          user_logo: '',
          user_name: 'ys',
          content: "评论评论评论评论评论评论评语领班琟分文不值主食一",
        },
         {
          id: 3,
          user_logo: '',
          user_name: 'ys',
          content: "评论评论评论评论评论评论评语领班琟分文不值主食一",
        },
      ]
    }
  },
  methods: {
    popViewClose () {
      this.$store.dispatch('set_body_popView_state', false)
    },
    edit () {
      this.editStat = true
    },
    save () {
      this.editStat = false
    },
    cancelEdit () {
      this.editStat = false
    }
  },
  mounted () {
    // 加载时请求 内容 数据
  }
}
</script>

<style scope>
.body_popView {
  position: fixed;
  top: 5vh;
  left: 5vw;
  width: 90vw;
  height: 90vh;
  border: 2px solid rgba(255,255,255,0.5);
  background-color: #464646;
  border-radius: 11px;
  color: #f1f1f3;
}
.body_popView_close {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.5);
  background-color: #464646;
  cursor: pointer;
}
.body_popView_content {
  height: 100%;
}
.body_popView_title, .body_popView_main, .body_popView_footer {
  padding: 11px;
}
.body_popView_title {
  height: 50px;
  vertical-align: bottom;
}
.body_popView_title> div:first-child> h4 {
  float: left;
  margin-right: 5%;
}
.body_popView_main {
  height: calc(100% - 100px);
}
.body_popView_footer {
  height: 50px;
}
</style>
