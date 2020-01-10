<template>
  <div>
    <el-button type="primary" @click='logout'>退出</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    logout () {
      // 清除token
      window.sessionStorage.clear()
      // 返回到登录页面
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="less" scoped>
</style>
