<template>
  <div  class="layout">
    <Layout>
      <Sider style="margin-right:15px;background:transparent;height: 100%">
        <InsideMenu :active-name="currentBucket"></InsideMenu>
      </Sider>
      <Content>
        <Card>
          <Menu ref="menu" mode="horizontal" :theme="theme" active-name="1">
            <MenuItem name="1">
              <Icon type="ios-paper" />
              <router-link :to="'/bucket/' + this.$route.params.dc + '/' + this.$route.params.bucket +'/overview'">概览</router-link>
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-people" />
              <router-link :to="'/bucket/' + this.$route.params.dc + '/' + this.$route.params.bucket +'/object'">文件管理</router-link>
            </MenuItem>
          </Menu>
          <br>
          <Card :bordered="false">
            <p slot="title">基础数据</p>
          </Card>
          <br>
          <Card :bordered="false">
            <p slot="title">访问域名</p>
          </Card>
          <br>
          <Card :bordered="false">
            <p slot="title">基础设置</p>
          </Card>
        </Card>

      </Content>
    </Layout>
  </div>
</template>
<script>
import {getBucketList} from '@/api/data'
import InsideMenu from './components/menu/InsideMenu'
export default {
  name: 'bucket_overview',
  props: {

  },
  components: {InsideMenu},
  data () {
    return {
      theme: 'light',
      buckets: [],
      currentBucket: ''
    }
  },
  methods: {
    selectMenu (name) {
      this.activeName = name
    }
  },
  mounted () {
    this.currentBucket = this.$route.params.bucket
    getBucketList().then((res) => {
      this.buckets = res.data
    }).catch(function (error) {
      console.log(error)
    })
  },
  watch: {
    '$route' () {
      this.$refs.menu.currentActiveName = '1'
    }
  }
}
</script>
<style>
  #uploadFile .ivu-drawer,#createDir .ivu-drawer {
    margin-top: 50px;
  }

  /*#uploadFile .ivu-modal-content{
    height: 100%;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  #filelist .ivu-table-cell i{
    margin-right: 10px;
    display: inline;
  }*/
  .demo-upload-list {
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    margin-right: 4px;
  }

  .demo-upload-list img {
    width: 100%;
    height: 100%;
  }

  .demo-upload-list-cover {
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .6);
  }

  .demo-upload-list:hover .demo-upload-list-cover {
    display: block;
  }

  .demo-upload-list-cover i {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
  }

  .oss-rc-icon-file {
    background-image: url(../assets/images/filetypeicon-150-150.png);
    background-repeat: no-repeat;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    width: 24px;
    height: 24px;
    background-position: -30px 0
  }

  @media (-webkit-min-device-pixel-ratio: 1.5),(min-resolution: 144dpi) {
    .oss-rc-icon-file {
      background-image: url(../assets/images/filetype-icon-300-300.png);
      background-size: 150px 150px
    }
  }

  .oss-rc-icon-file.file-folder {
    background-position: 0 0
  }

  .oss-rc-icon-file.file-bmp, .oss-rc-icon-file.file-gif, .oss-rc-icon-file.file-jpeg, .oss-rc-icon-file.file-jpg, .oss-rc-icon-file.file-png, .oss-rc-icon-file.file-webp {
    background-position: -60px 0
  }

  .oss-rc-icon-file.file-3gp, .oss-rc-icon-file.file-avi, .oss-rc-icon-file.file-mkv, .oss-rc-icon-file.file-mov, .oss-rc-icon-file.file-mp4, .oss-rc-icon-file.file-rm, .oss-rc-icon-file.file-rmvb, .oss-rc-icon-file.file-vod, .oss-rc-icon-file.file-wmv {
    background-position: -90px 0
  }

  .oss-rc-icon-file.file-mp3 {
    background-position: -120px 0
  }

  .oss-rc-icon-file.file-pdf {
    background-position: 0 -30px
  }

  .oss-rc-icon-file.file-doc, .oss-rc-icon-file.file-docx, .oss-rc-icon-file.file-pages {
    background-position: -30px -30px
  }

  .oss-rc-icon-file.file-key, .oss-rc-icon-file.file-ppt, .oss-rc-icon-file.file-pptx {
    background-position: -60px -30px
  }

  .oss-rc-icon-file.file-numbers, .oss-rc-icon-file.file-xls, .oss-rc-icon-file.file-xlsx {
    background-position: -90px -30px
  }

  .oss-rc-icon-file.file-ini, .oss-rc-icon-file.file-log, .oss-rc-icon-file.file-txt {
    background-position: -120px -30px
  }

  .oss-rc-icon-file.file-asp, .oss-rc-icon-file.file-c, .oss-rc-icon-file.file-cpp, .oss-rc-icon-file.file-css, .oss-rc-icon-file.file-go, .oss-rc-icon-file.file-groovy, .oss-rc-icon-file.file-h, .oss-rc-icon-file.file-htm, .oss-rc-icon-file.file-html, .oss-rc-icon-file.file-java, .oss-rc-icon-file.file-js, .oss-rc-icon-file.file-json, .oss-rc-icon-file.file-jsp, .oss-rc-icon-file.file-jsx, .oss-rc-icon-file.file-less, .oss-rc-icon-file.file-lua, .oss-rc-icon-file.file-php, .oss-rc-icon-file.file-py, .oss-rc-icon-file.file-sass, .oss-rc-icon-file.file-scss, .oss-rc-icon-file.file-ts, .oss-rc-icon-file.file-tsx, .oss-rc-icon-file.file-xml {
    background-position: 0 -60px
  }

  .oss-rc-icon-file.file-7z, .oss-rc-icon-file.file-gz, .oss-rc-icon-file.file-jar, .oss-rc-icon-file.file-rar, .oss-rc-icon-file.file-tar, .oss-rc-icon-file.file-war, .oss-rc-icon-file.file-zip {
    background-position: -30px -60px
  }

  .oss-rc-glyph::before {
    content: '';
    line-height: 1;
    font-family: oss-console-icf !important;
    font-size: inherit;
    font-weight: 200;
    font-style: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    display: inline-block;
    transition: all 200ms ease;
    vertical-align: middle;
  }

  .oss-rc-glyph.glyph-back:before {
    content: '\e600';
  }

  .filename {
    margin-left: 15px;
  }

  .back {
    font-size: 24px;
  }

  .next-form-item-extra {
    margin-top: 8px;
    color: #9b9ea0;
    font-size: 12px;
    line-height: 1.5;
  }
  .oss-intl-lines {
    line-height: 1.6;
  }
  .oss-intl-lines p, .oss-intl-lines ul, .oss-intl-lines ol {
    margin-top: 8px;
    margin-bottom: 8px;
    line-height: inherit !important;
  }
  .oss-intl-lines p:last-child, .oss-intl-lines ul:last-child, .oss-intl-lines ol:last-child {
    margin-bottom: 0;
  }
  .oss-intl-lines ol {
    list-style: decimal outside;
  }
  .oss-intl-lines ul, .oss-intl-lines ol {
    margin-left: 2em;
  }
  .oss-intl-lines p, .oss-intl-lines ul, .oss-intl-lines ol {
    margin-top: 8px;
    margin-bottom: 8px;
    line-height: inherit !important;
  }
  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .oss-intl-lines ul li:first-child, .oss-intl-lines ol li:first-child {
    margin-top: 0;
  }
  .demo-drawer-footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px solid #e8e8e8;
    padding: 10px 16px;
    text-align: right;
    background: #fff;
  }
  .ivu-table-bar{
    padding: 10px 20px;
    border-bottom: 1px solid #e8e8e8;
    min-height: 45px;
  }
  .ivu-table-bar i{
    margin-right: 30px;
    margin-left: 3px;
  }
</style>
