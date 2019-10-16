<template>
  <div>
    <van-nav-bar title="登录" />
    <form action>
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          placeholder="请输入用户名"
        />
        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
        <van-button type="info" block @click='goLogin'>登录</van-button>
      </van-cell-group>
    </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        mobile: '18801185985',
        code: '246810'
      }
    }
  },
  components: {},
  computed: {},
  mounted: {},
  methods: {
    async goLogin () {
      const res = await request({
        methods: 'post',
        url: '/app/v1_0/authorizations',
        data: this.data
      })
    }
  }
}
</script>
<style lang='less' scoped>
//   .van-nav-bar {
//   background-color: #0096fa;

//   .van-nav-bar__title {
//     color: white;
//   }
// }
</style>
