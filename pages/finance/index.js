const tabService = require("../../utils/tab-service");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    yecai_url: '',
    yecaiPermission: false,
    num: 0,
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // this.queryUserPermission()
    tabService.updateIndex(this, 1);
  },
})