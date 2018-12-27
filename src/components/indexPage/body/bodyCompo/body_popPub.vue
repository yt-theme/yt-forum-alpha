<template>
<div class="body_popPub pos_f">
  <!-- inner -->
  <div class="body_popPub_inner w_100 bor_ra_3 bgc_dark white_color padd_8">
    <!-- title -->
    <input class="bor_0 bor_ra_3 padd_4" placeholder="标题"/>
    &#8195;
    类型:
    &nbsp;
    <select :value="selectedType" class="bor_0 bor_ra_3 padd_4">
      <option value="web">web</option>
      <option value="txt">txt</option>
    </select>
    <!-- func btn -->
    <div class="padd_tb_8">
      <span class="pos_r">
        <input ref="popPub_input_file" @change="selectFile()" style="width: 4.5em; opacity: 0;" type="file" name="file" class="pos_a bor_ra_3 bor_0 bgc_ligh_gray marg_0">
        <button class="bor_ra_3 top_0 bor_0 padd_4 bgc_ligh_gray bor_wh">选择文件</button>
      </span>
      <span style="top: 6px;" class="pos_r over_h inl_block h_100">
        <span>{{selectedFile_prop.name}}</span>&nbsp;
        <span>{{selectedFile_prop_size}}</span>
        <!-- 上传时效果 -->
        <span v-if="uploadingStat" class="body_popPub_uploadStyle pos_a bottom_0"></span>
      </span>
      <template v-if="selectedFile_prop">
        <button @click="addFile()" class="bor_ra_3 top_0 bor_0 padd_4 bgc_ligh_gray bor_wh">添加</button>
        <button @click="clearSelectedFile()" class="bor_ra_3 top_0 bor_0 padd_4 bgc_ligh_gray bor_wh">清除</button>
      </template>
    </div>
    <!-- content -->
    <textarea class="bor_0 bor_ra_3 padd_4 w_100 resize_non" placeholder="内容"></textarea>
    <!-- bottom -->
    <div class="padd_tb_8">
        <button class="bor_ra_3 top_0 bor_0 padd_4 bgc_ligh_gray bor_wh">发布</button>
        <button class="bor_ra_3 top_0 bor_0 padd_4 bgc_ligh_gray bor_wh">取消</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      // 类型
      selectedType: "web",
      // 已选文件对象
      selectedFile_prop: '',
      // 正在上传状态
      uploadingStat: false,
    }
  },
  computed: {
    selectedFile_prop_size () {
      if (this.selectedFile_prop) {
        let size = Number(this.selectedFile_prop.size)
        if (size>0 && size<1000) {
          return '( ' + size + 'b )'
        } else if (size>1000 && size<1000000) {
          return '( ' + (size / 1000).toFixed(2) + 'kb )'
        } else if (size>1000000) {
          return '( ' + (size / 1000 /1000).toFixed(2) + 'mb )'
        }
      } else {
        return ''
      }
    }
  },
  methods: {
    selectFile () {
      let fileSelecter = this.$refs.popPub_input_file
      let selectedFile = fileSelecter.files
      // 显示文件名
      this.selectedFile_prop = selectedFile[0]

      // 读取文件
      let reader = new FileReader()
      reader.readAsDataURL(selectedFile[0])
      console.log(reader)

    },
    // 向后端添加文件
    addFile () {
      this.uploadingStat = true
    },
    // 清除已选择文件
    clearSelectedFile () {
      this.$refs.popPub_input_file.value = ''
      this.selectedFile_prop = ''
      this.uploadingStat = false
    },
  }
}
</script>

<style scope>
.body_popPub {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.9);
  padding: 3vh 3vw;
}
.body_popPub_inner {
  height: calc(94vh - 45px);
  border: 2px solid #f1f1f3;
}
.body_popPub_inner select {
  width: 100px;
}
.body_popPub_inner textarea {
  height: calc(100% - 2em - 80px);
}
@keyframes uploadStyle {
  0% { left: 0; }
  100% { left: 100%; }
}
.body_popPub_uploadStyle {
  display:inline-block;
  height: 2px;
  width: 30px;
  box-shadow: 0 0 17px #f1f1f3 inset;
  animation: uploadStyle 1s infinite;
}
</style>

