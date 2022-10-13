const tabService = require("../../../utils/tab-service");

Page({
  data: {},
  onShow() {
    tabService.updateIndex(this, 0);
  }
})