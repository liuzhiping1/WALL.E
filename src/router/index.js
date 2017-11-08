import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const page = Object.freeze({
    home: resolve => require(['@c/Home'],resolve),
    led: resolve => require(['@c/Led'],resolve),
    camera: resolve => require(['@c/Camera'],resolve),
    thermometer: resolve => require(['@c/Thermometer'],resolve),
    control: resolve => require(['@c/Control'],resolve),
    accelerometer: resolve => require(['@c/Accelerometer'],resolve),
    proximity: resolve => require(['@c/Proximity'],resolve)
})

export default new Router({
  mode:'history',
  routes: [
    {path:'/home',name:'home',component:page.home},
    {path:'/led',name:'led',component:page.led},
    {path:'/camera',name:'camera',component:page.camera},
    {path:'/thermometer',name:'thermometer',component:page.thermometer},
    {path:'/control',name:'control',component:page.control},
    {path:'/accelerometer',name:'accelerometer',component:page.accelerometer},
    {path:'/proximity',name:'proximity',component:page.proximity}
  ]
})
