<template>
  <div class="uploadFileListBox wh_100 padd_b_8">
    <!-- 已选文件url -->
    <div class="marg_8">
      <input ref="uploadFileListBoxInput" :value="current" class="w_100 bor_0 bor_ra_3 padd_4" placeholder="点击文件复制路径 点击删除无确认提示"/>
    </div>
    <!-- 文件列表 -->
    <ul class="block over_a">
      <template v-for="i in dataList" >
        <li @click="clickFile(i.file_url)" class="space_nowrap flex marg_8">
          <span style="text-overflow: ellipsis; " class="block w_80 over_h cur_p" :title="i.file_name">{{i.file_name}}</span>
          <button class="w_20 bor_ra_3 top_0 bor_0 padd_4 bgc_ligh_gray bor_wh">删除</button>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      // 当前已选文件url
      current: '',
      dataList: [
        {id: 1, file_name: '1上传下载图片二进制返dfasfafasfsafsafsafasfaf回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/1上传下载图片二进制返回文件.txt"},
        {id: 2, file_name: '2上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/2上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
        {id: 3, file_name: '3上传下载图片二进制返回文件.txt', file_url: "http://176.122.143.231:7999/upload_file/3上传下载图片二进制返回文件.txt"},
      ]
    }
  },
  methods: {
    clickFile (url) {
      this.current = url
      this.$refs.uploadFileListBoxInput.select()
      document.execCommand("Copy");
      this.$store.dispatch("set_notifyState", {title: "复制", content: "已复制到剪贴板", show: true})
    }
  }
}
</script>

<style scope>
.uploadFileListBox input {
  height: 27px;
}
.uploadFileListBox> ul {
  height: calc(100% - 43px);
  max-height: 340px;
}
</style>
