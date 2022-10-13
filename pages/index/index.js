const app = getApp()
const tabService = require("../../utils/tab-service");

Page({
  data: {
  },
  // 在Page onShow声明周期中调用这段方法，就可以实现通过页面更新底部Tab高亮
  onShow() {
    tabService.updateIndex(this, 0);
  }
})