<template>
  <div class="body_popView pos_r">
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
        <div style="min-width: 140px;" class="w_20 h_100 over_a marg_l_8">
          <ul class="li_s_n">
            <template v-for="i in replyData_list">
              <li class="bor_l_wh marg_b_2e padd_l_8">

                <!-- top -->
                <div class="flex_betw">
                  <div class="flex">
                    <img style="border: 1px solid red; width: 30px; height: 30px;" :src="i.user_logo" class="block"/>
                    <span class="marg_4">{{i.user_name}}</span>
                  </div>
                  <!-- <button class="bor_ra_3 bor_0 padd_2 bgc_ligh_gray marg_2 space_nowrap">回复</button> -->
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
      <div class="body_popView_footer flex_betw">
        <div>
          <template v-if="current_editable">
            <template v-if="editStat==false">
              <button @click="edit()" class="bor_ra_3 bor_0 padd_4 bgc_ligh_gray bor_wh">编辑</button>
            </template>
            <template v-else-if="editStat==true">
              <button @click="save()" class="bor_ra_3 bor_0 padd_4 bgc_ligh_gray bor_wh">保存</button>
              <span class="pos_r">
                <input style="width: 4.5em; opacity: 0;" type="file" class="pos_a bor_ra_3 bor_0 bgc_ligh_gray marg_0" value="上传图片">
                <button @click="uploadFile()" class="bor_ra_3 top_0 bor_0 padd_4 bgc_ligh_gray bor_wh">上传文件</button>
                <button v-if="uploadFile_number>0" @click="showUploadFileList()" :class="{'bgc_opa_gray white_color': uploadFileList_show, 'bor_ra_3 bor_0 padd_4 bgc_ligh_gray bor_wh': true}">选择文件</button>
              </span>
              <button @click="cancelEdit()" class="bor_ra_3 bor_0 padd_4 bgc_ligh_gray bor_wh">取消编辑</button>
            </template>
          </template>
        </div>
        <div style="min-width: 140px;" class="flex just_bet">
          <i></i>
          <div class="flex_cent">
            <!-- 回复输入-->
            <textarea style="height: 29px;"  v-if="isReply" placeholder="评论" class="body_popView_replyTextarea bgc_gray bor_ra_3 resize_non bor_0 wh_100 marg_lr_8 padd_4">{{replyContent}}</textarea>
            <button v-if="isReply" class="bor_ra_3 bor_0 padd_4 bgc_ligh_gray bor_wh">发送</button>
            <button @click="reply()" :class="{'bgc_dark white_color': isReply, 'bor_ra_3 bor_0 padd_4 marg_lr_8 bgc_ligh_gray bor_wh': true}">评论</button>
            <button class="bor_ra_3 bor_0 padd_4 bgc_ligh_gray bor_wh">喜欢</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 文件选择框 -->
    <div v-if="uploadFileList_show" class="body_popView_fileBox pos_a bgc_dark bor_ra_5">
      <Uploadfilelistbox></Uploadfilelistbox>
    </div>
  </div>
</template>

<script>
import Uploadfilelistbox from "../../../publicCompo/uploadFileListBox"
export default {
  components: {
    Uploadfilelistbox
  },
  data () {
    return {
      contentData: {
        content: '<input/>',
        content_type: 'web', // web or txt
        extra: {

        }
      },
      // 文件数量
      uploadFile_number: 1,
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
      ],
      // 评论 显示弹窗
      isReply: false,
      // 评论 文字
      replyContent: '',
      // 显示 文件选择框
      uploadFileList_show: false
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
      this.uploadFileList_show = false
    },
    cancelEdit () {
      this.editStat = false
      // 文件选择框关闭
      this.uploadFileList_show = false
    },
    // 评论
    reply () {
      this.isReply = !this.isReply
    },
    // 显示文件选择框
    showUploadFileList () {
      this.uploadFileList_show = ! this.uploadFileList_show
    }

  },
  mounted () {
    // 加载时请求 内容 数据
  }
}
</script>

<style scope>
.body_popView {
  position: absolute;
  top: 7.9vh;
  left: 5vw;
  width: 90vw;
  min-width: 860px;
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
.body_popView_replyTextarea {
  width: 190px;
  height: 100%;
}
.body_popView_fileBox {
  left: 4px;
  bottom: 61px;
}
</style>
