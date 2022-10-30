let isSystemMaintain = true; // 系统维护中
let search = true; // 开启默认的搜索功能
let sidebarDepth = 3; // 默认侧边栏深度，可以被子分组重写
let sidebar = {
  // "/read-write/": [
  //   {
  //     title: 'book',                  // 分组标题
  //     path: '/read-write/book/',      // 标题的跳转链接，路径以/结尾对应该目录下的README.md
  //     collapsable: false,             // 分组可否折叠
  //     sidebarDepth: 3,                // 侧边栏深度，取值2表示侧边栏可以显示到##的标题
  //     children: [
  //       '/read-write/book/book1',
  //       '/read-write/book/book2',
  //     ]
  //   },
  //   {
  //     title: 'story',
  //     children: [ '/read-write/story/story1' ],
  //     initialOpenGroupIndex: -1 // 默认值是 0
  //   }
  // ],
  '/read-write/': ['a00-读写知识概览.md'],
  '/share/': ['web/aa00-web知识概览'],
  '/work/': ['work1'],
  "/": [""],
};

let nav = [
  { text: "阅读记录", link: "/read-write/" },
  { text: "技术分享", link: "/share/" },
  { text: "作品demos", link: "/work/" },
  { text: 'Github', link: 'https://github.com/githubUser1104/blog-self' }
];
const port = 8012;

// 维护中
if (isSystemMaintain) {
  search = false;
  sidebar = {};
  nav = [];
}
/**
 * 基础配置：https://vuepress.vuejs.org/zh/config/
 * 主题配置：图标、首页、导航栏、侧边栏 https://vuepress.vuejs.org/zh/theme/default-theme-config.html
 */
module.exports = {
  base: '/blog-self/',
  title: "Blog-githubUser1104",
  description: "",
  port,
  themeConfig: {
    search,
    nav,
    sidebar,
    sidebarDepth
  },
};
