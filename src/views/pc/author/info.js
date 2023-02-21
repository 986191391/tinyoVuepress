export default {
  authorBaseInfo: [{
    label: 'Email',
    value: 'yzfcool.tinyo@qq.com',
  }, {
    label: '地区',
    value: '深圳 龙岗区',
  }, {
    label: '手机',
    value: '13414103545',
  }, {
    label: '学历',
    value: '2019届全日制本科',
  }],
  resumeInfo: [{
    title: '教育经历',
    main: {
      id: 'edu',
      type: 'normal',
      content: '2015-09 至 2019-07   广州大学华软软件学院   电子信息工程   全日制本科',
    }
  }, {
    title: '工作经历',
    main: {
      id: 'job',
      type: 'nestList',
      content: [{
        time: '2021-06 至今',
        company: '深圳市维恩贝特科技有限公司 | 前端开发工程师',
        list: ['1. 敏捷开发模式, 交通银行交银慧校项目系统需求开发迭代。', '2. 前端团队管理/工作计划/提效模版及开发规范制定开发(项目结构/开发配置/团队文档/培训)。', '3. 系统重构及公用高频组件封装。']
      }, {
      //   time: '2020-11 至 2021-06',
      //   company: '深圳恒合互联网络科技有限公司 | 前端开发工程师',
      //   list: ['1. 主要负责管理端/企业端/小程序端的新功能开发迭代, 基于原生JS/JQuery官网开发。']
      // }, {
        time: '2019-07 至 2021-05',
        company: '深圳市光速软件科技有限公司 | 前端开发工程师',
        list: ['1. 敏捷开发模式, 参与每个迭代任务的评估, AC(验收标准)的编写。', '2. 前端模块的新功能逻辑/UI开发, 全局组件和全局样式的编写。', '3. 独自开发公司内部使用的算法测试工具 (JSON对比工具), 独自开发公司官网。'],
      }]
    }
  }, {
    title: '技术栈',
    main: {
      id: 'technology',
      type: 'list',
      content: [
        '熟练使用语意化标签/DIV+CSS/Flex布局,Less/Sass预处理器。',
        '熟练使用Vue/React、JavaScript/ES6, 使用过TypeScript/NodeJs/MySQL 。',
        '熟练使用客户端Elementui/antdesign,移动端antmobile/vantui组件库。',
        '熟练使用Git代码管理工具、实际使用Uni-App/Dva/Taro/Ngnix。',
      ]
    }
  }, {
    title: '项目经验',
    main: {
      id: 'project',
      type: 'nestList',
      content: [{
        time: '2021-11 至今',
        label: '[个人项目] 我的个人网站(Web) && yzfCool微信小程序',
        // http://43.139.113.7:8081 (未绑定域名)；微信小程序可搜索yzfcool(苹果用户, 暂未兼容安卓)。
        list: [
          '访问路径:chat me',
          '项目描述:想要写出让人眼前一亮的东西, 学习永无止境。',
          '项目介绍:个人网站使用Vue2/Vue3框架(原使用react, 后转为vue); 微信小程序使用UniApp, JS/ES6编写, Git代码管理。引入ramda/moment/lodash等。',
          '项目难点:随屏幕滚动的自我介绍动画, 五子棋小游戏, 类虚拟Dom(JSON文件)的页面渲染/节点高亮, 敏捷看板泳道, 基于fabric绘图, 小程序微信原生表情包制作等。',
          '参与开发:项目的编写, 服务器构建部署。'
        ]
      }, {
        time: '2021-07 至 2023-04',
        label: '[维恩贝特] 交银慧校系统(管理端/客户端/移动端)',
        list: [
          '项目描述:交通银行APP内置系统项目, 用于地区教育局对学校/教师/学生信息管理统计操作等。',
          '项目介绍:基于Dva React框架。根据业务功能类/函数组件交替编写, git版本迭代,JavaScript/ES6,Less预处理器,Antdesignmobile组件库,moment/loadsh函数库。',
          '技术难点:动态化电子合同方案研究, 动态化表单组件的设计与封装, 级联表格业务组件封装。',
          '参与开发:项目组前端人员工作管理, 开发模版的设计编写/公用高频组件的设计封装, 系统代码重构, 文档编写/前端项目培训。'
        ]
      }, {
      //   time: '2020-11 至 2021-04',
      //   label: '[恒合互联] 001首营企业端/管理端/小程序',
      //   list: [
      //     '项目描述:项目已上线, 用于线上电子资料的数据交换存储签章等功能。',
      //     '项目介绍:React 框架。类组件和函数组件交替式编写、Git 代码管理、Redux 进行状态管理、Axios 对接后端接口、 JavaScript/ES6 编写逻辑代码、Sass 预处理、Ant Design组件库。',
      //     '技术难点:在图片和PDF文件中自定义拖拽盖章的功能实现过程。',
      //     '参与开发:该项目部分前端页面逻辑的编写, 收费/广告模块功能的开发, 旧代码 / 低效代码重构。'
      //   ],
      // }, {
        time: '2019-07 至 2020-03',
        label: '[光速软件] 基于 Electron + Vue 的 JSON 对比工具',
        list: [
          '项目描述:项目组内部算法流程测试工具。',
          '项目介绍:Vue2 框架。JavaScript/ES6/TypeScript, Electron Api, ramda/moment函数库, Less 预处理,elementui/antdesignvue组件库。',
          '技术难点:新旧算法设计稿对应节点的属性对比, 可操作区域的缩放。',
          '参与开发:基于Electron项目独立完成。'
        ],
      }, {
        time: '2020-03 至 2021-05',
        label: '[光速软件] CodeFun && 官网（code.fun）',
        list: [
          '访问路径:https://code.fun/',
          '项目描述:通过Sketch/PS将设计稿导出, 在codefun中编辑后一键生成小程序/PC源代码。',
          '项目介绍:Vue2框架。Git代码管理、Flex布局、Less预处理、TypeScript/JavaScript/ES6、引用Ramda.js函数库、Element UI 组件库/ iconFont 图标库。',
          '技术难点:可操作区域操作后的撤销重做功能, 画板的拖拽功能, 资源管理器/页面选择器/icon选择器的屏幕适配功能等。官网的更新日志的发布。',
          '参与开发:官网的制作由独自完成。基于Element 的公共组件二次封装及工程中所有组件的公共样式。'
        ],
      }]
    }
  }, {
    title: '自我评价',
    main: {
      id: 'assessment',
      type: 'list',
      content: [
        '工作方面:基础知识扎实, 拥有良好的代码编写习惯(代码洁癖！), 有较强的抗压能力！工作能力常被认可, 争当优秀员工。能很好的完成布置的任务, 不拖拉。善于记录遇到的问题, 遇到问题及时沟通解决。',
        '个人方面:责任感强, 看重感情。个性沉稳慢热闷骚, 熟悉后能够带动大家的气氛。喜欢篮球、音乐, 有很强的团队荣誉感, 喜欢有活力为共同目标进步的团队。个人上进心敬业心较强, 喜欢挑战很多新鲜的技术任务来提升自己。望能够找到一个志趣相投的团队共同发展, respect!'
      ]
    }
  }]
}
  