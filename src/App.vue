<template>
  <div id="App">
     <el-container>
       <el-aside width="200px">
         <el-row>
           <el-col :span="24">
            <el-menu
              @select="handleMenuSelect"
              :default-active="currRouteName"
              :default-opens="currRouteName"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              :router="true">
              <el-menu-item index="description">
                <i class="el-icon-document"></i>
                <span >介绍</span>
              </el-menu-item>
              <el-menu-item index="intergration">
                <i class="el-icon-more"></i>
                <span >集合</span>
              </el-menu-item>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>模块</span>
                </template>
                  <el-menu-item index="led">LED灯</el-menu-item>
                  <el-menu-item index="camera">摄像机</el-menu-item>
                  <el-menu-item index="thermometer">温度计</el-menu-item>
                  <el-menu-item index="proximity">测距仪</el-menu-item>
                  <el-menu-item index="gps">gps定位</el-menu-item>
                  <el-menu-item index="control">方向遥控</el-menu-item>
              </el-submenu>
              <el-menu-item index="settings">
                <i class="el-icon-setting"></i>
                <span>设置</span>
              </el-menu-item>
            </el-menu>
          </el-col>
         </el-row>
       </el-aside>
       <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
       </el-container>
     </el-container>
  </div>
</template>

<script>
export default {
    name: 'home',
    components: {

    },
    computed: {
        currRouteName() {
            return this.$store.state.currRouteName
        }
    },
    data() {
        return {
            defaultOpens: [3]
        }
    },
    methods: {
        handleMenuSelect(index) {
            this.$store.commit('saveRouteName',index)
        }
    },
    directives: {

    },
    mounted() {
        this.$router.push({name:this.currRouteName})
    }
}
</script>

<style scoped lang="less" scoped>
  .el-header, .el-footer {
    background-color: #E9EEF3;
    border-bottom: 1px solid #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: right;
    line-height: 40px;
    height: 100vh;
    overflow: hidden;
    min-width: 900px;
  }
  #App {
    min-width: 1200px;
  }
</style>
