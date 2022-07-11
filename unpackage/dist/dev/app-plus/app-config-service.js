
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/menu/menu","pages/take-foods/take-foods","pages/mine/mine","pages/pay/pay","pages/remark/remark","pages/packages/index","pages/packages/detail","pages/balance/balance","pages/login/login","pages/address/address","pages/address/add","pages/integrals/integrals","pages/attendance/attendance","pages/orders/orders","pages/orders/detail","pages/mine/member-code","pages/coupons/coupons","pages/mine/userinfo","pages/integrals/flow","pages/integrals/detail","pages/review/review","pages/activities/invite","pages/services/services","pages/invoice/invoice","pages/services/help-center","pages/giftcard/giftcard","pages/advertise/advertise","pages/cityselect/cityselect"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#919293","selectedColor":"#97AF13","backgroundColor":"#fff","borderStyle":"black","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/images/tabBar/index.png","selectedIconPath":"static/images/tabBar/index_selected.png"},{"pagePath":"pages/menu/menu","text":"点餐","iconPath":"static/images/tabBar/drink.png","selectedIconPath":"static/images/tabBar/drink_selected.png"},{"pagePath":"pages/take-foods/take-foods","text":"取餐","iconPath":"static/images/tabBar/take.png","selectedIconPath":"static/images/tabBar/take_selected.png"},{"pagePath":"pages/mine/mine","text":"我的","iconPath":"static/images/tabBar/mine.png","selectedIconPath":"static/images/tabBar/mine_selected.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"nxdc-milktea","compilerVersion":"3.3.11","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/menu/menu","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"商家","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/take-foods/take-foods","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"奈雪の茶","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"奈雪乐园","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/pay/pay","meta":{},"window":{"navigationBarTitleText":"奈雪の茶","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/remark/remark","meta":{},"window":{"navigationBarTitleText":"奈雪の茶","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/packages/index","meta":{},"window":{"navigationBarTitleText":"券包商品","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","enablePullDownRefresh":true}},{"path":"/pages/packages/detail","meta":{},"window":{"navigationBarTitleText":"购买劵包","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","enablePullDownRefresh":true}},{"path":"/pages/balance/balance","meta":{},"window":{"navigationBarTitleText":"会员储值","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/address/address","meta":{},"window":{"navigationBarTitleText":"我的地址","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/address/add","meta":{},"window":{"navigationBarTitleText":"奈雪の茶","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/integrals/integrals","meta":{},"window":{"navigationStyle":"custom","onReachBottomDistance":50}},{"path":"/pages/attendance/attendance","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/orders/orders","meta":{},"window":{"navigationBarTitleText":"历史订单","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","enablePullDownRefresh":true,"onReachBottomDistance":50}},{"path":"/pages/orders/detail","meta":{},"window":{"navigationBarTitleText":"订单详情","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/mine/member-code","meta":{},"window":{"navigationBarTitleText":"会员码","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/coupons/coupons","meta":{},"window":{"navigationBarTitleText":"我的卡券","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/mine/userinfo","meta":{},"window":{"navigationBarTitleText":"用户信息","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/integrals/flow","meta":{},"window":{"navigationBarTitleText":"积分明细","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/integrals/detail","meta":{},"window":{"navigationBarTitleText":"兑换详情","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/review/review","meta":{},"window":{"navigationBarTitleText":"奈雪の茶","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/activities/invite","meta":{},"window":{"navigationBarTitleText":"奈雪の茶","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/services/services","meta":{},"window":{"navigationBarTitleText":"奈雪の茶","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/invoice/invoice","meta":{},"window":{"navigationBarTitleText":"奈雪の茶","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/services/help-center","meta":{},"window":{"navigationBarTitleText":"帮助中心","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/giftcard/giftcard","meta":{},"window":{"navigationBarTitleText":"礼品卡列表","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","disableScroll":true}},{"path":"/pages/advertise/advertise","meta":{},"window":{"navigationBarTextStyle":"black"}},{"path":"/pages/cityselect/cityselect","meta":{},"window":{"navigationBarTitleText":"城市选择"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});