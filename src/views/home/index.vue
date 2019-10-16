<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <el-container class="top-info">
      <el-aside width="auto">
        <el-image
          style="width: 100px; height: 100px"
          :src="userInfo.logo"
          fit="cover"
        />
      </el-aside>
      <el-main>
        <h3>{{userInfo.username}}，您好，欢迎您的到来！</h3>
        <p>上次登录时间：{{lastLoginTime}}</p>
      </el-main>
    </el-container>
    </van-tabs>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
</style>
