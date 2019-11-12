<template>
  <div  class="layout">
    <Layout>
      <Sider style="margin-right:15px;background:transparent;height: 100%">
        <InsideMenu></InsideMenu>
      </Sider>
      <Content>
        <Card :bordered="false">
          <p slot="title">基本信息</p>
          存储量
        </Card>
        <br>
        <Card :bordered="false">
          <p slot="title">基础配置</p>
        </Card>
      </Content>
    </Layout>
  </div>
</template>
<script>
import InsideMenu from '@/view/components/menu/InsideMenu'

export default {
  name: 'overview',
  props: {

  },
  components: {InsideMenu},
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
