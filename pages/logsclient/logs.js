const tabService = require("../../utils/tab-service");

Page({
  data: {},
  update(event) {
    let data = event.currentTarget.dataset;
    wx.showToast({
      title: data.role,
      icon: 'none'
    })
    tabService.updateRole(this, data.role, 2);
  },
  onShow() {
    tabService.updateIndex(this, 2);
  }
})