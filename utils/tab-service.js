const clients = [{
    "selectedIconPath": "/public/images/batBar/home_active.png",
    "iconPath": "/public/images/batBar/home.png",
    "pagePath": "pages/serviceField/tabhome/index",
    "text": "首页"
  },
  {
    "selectedIconPath": "/public/images/batBar/finance_active.png",
    "iconPath": "/public/images/batBar/finance.png",
    "pagePath": "pages/serviceField/tabcombo/index",
    "text": "我的套餐"
  },
  {
    "selectedIconPath": "/images/footer-01-h.png",
    "iconPath": "/images/footer-01.png",
    "pagePath": "pages/logsclient/logs",
    "text": "客户log页"
  }
]

const users = [{
    "selectedIconPath": "/public/images/batBar/home_active.png",
    "iconPath": "/public/images/batBar/home.png",
    "pagePath": "pages/index/index",
    "text": "首页"
  },
  {
    "selectedIconPath": "/public/images/batBar/home_active.png",
    "iconPath": "/public/images/batBar/finance.png",
    "pagePath": "pages/finance/index",
    "text": "业财一体"
  },
  {
    "selectedIconPath": "/images/footer-01-h.png",
    "iconPath": "/images/footer-01.png",
    "pagePath": "pages/logsclient/logs",
    "text": "客户log页"
  }
]

// Tab页的data
let tabData = {
  userType: 0,
  tabIndex: 0,
  tabBar: {
    "custom": true,
    "color": "#363A44",
    "selectedColor": "#363A44",
    "borderStyle": "black",
    list: [{
        "selectedIconPath": "/public/images/batBar/home_active.png",
        "iconPath": "/public/images/batBar/home.png",
        "pagePath": "pages/index/index",
        "text": "首页"
      },
      {
        "selectedIconPath": "/public/images/batBar/home_active.png",
        "iconPath": "/public/images/batBar/finance.png",
        "pagePath": "pages/finance/index",
        "text": "业财一体"
      },
      {
        "selectedIconPath": "/images/footer-01-h.png",
        "iconPath": "/images/footer-01.png",
        "pagePath": "pages/logsclient/logs",
        "text": "客户log页"
      }
    ]
  }
}

// 更新角色
const updateRole = (that, role, index) => {
  if (role == '1') {
    tabData.tabBar.list = users
  } else if (role == '2') {
    tabData.tabBar.list = clients
    // tabData.tabBar.list[1]['text'] = '去你的client log'
  }
  wx.switchTab({
    url: `/${tabData.tabBar.list[index]['pagePath']}`,
  })
  updateIndex(that, index)
  // updateTab(that);
}

// 更新底部高亮
const updateIndex = (that, index) => {
  tabData.tabIndex = index;
  updateTab(that);
}

// 更新Tab状态
const updateTab = (that) => {
  if (typeof that.getTabBar === 'function' && that.getTabBar()) {
    that.getTabBar().setData(tabData);
  }
}

// 将可调用的方法抛出让外面调用
module.exports = {
  updateRole,
  updateTab,
  updateIndex
}