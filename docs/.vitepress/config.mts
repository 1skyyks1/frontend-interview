import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Frontend Interview",
  description: "前端算法 · 手撕 · 八股文",
  base: '/frontend-interview/',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  markdown: {
    math: true
  },
  cleanUrls: true,

  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '算法', link: '/dsa/', activeMatch: '/dsa/' },
      { text: '手撕', link: '/impls/', activeMatch: '/impls/' },
      { text: '八股文', link: '/interview/', activeMatch: '/interview/' }
    ],

    sidebar: {
      '/dsa/': [
        {
          text: '开始',
          items: [
            { text: '总览', link: '/dsa/' }
          ]
        },
        {
          text: 'LeetCode',
          collapsed: false,
          items: [
            { text: '41. 缺失的第一个正数', link: '/dsa/leetcode/41-first-missing-positive' },
            { text: '53. 最大子数组和', link: '/dsa/leetcode/53-maximum-subarray' },
            { text: '56. 合并区间', link: '/dsa/leetcode/56-merge-intervals' },
            { text: '76. 最小覆盖子串', link: '/dsa/leetcode/76-minimum-window-substring' },
            { text: '189. 轮转数组', link: '/dsa/leetcode/189-rotate-array' },
            { text: '238. 除自身以外数组的乘积', link: '/dsa/leetcode/238-product-of-array-except-self' },
            { text: '239. 滑动窗口最大值', link: '/dsa/leetcode/239-sliding-window-maximum' },
            { text: '643. 子数组最大平均数 I', link: '/dsa/leetcode/643-maximum-average-subarray-i' },
            { text: '1456. 定长子串中元音的最大数目', link: '/dsa/leetcode/1456-maximum-number-of-vowels-in-a-substring-of-given-length' }
          ]
        },
        {
          text: '常考/热点题',
          collapsed: false,
          items: [

          ]
        }
      ],

      '/impls/': [
        {
          text: '手撕实现',
          items: [
            { text: '总览', link: '/impls/' },
            { text: 'Promise.all', link: '/impls/promise-all' },
            { text: 'Throttle 节流', link: '/impls/throttle' }
          ]
        }
      ],

      '/interview/': [
        {
          text: '八股文',
          items: [
            { text: '总览', link: '/interview/' },
            { text: 'JavaScript', link: '/interview/js' },
            { text: 'ES6', link: '/interview/es6' },
            { text: 'CSS', link: '/interview/css' },
            { text: 'Vue', link: '/interview/vue' },
            { text: '计网', link: '/interview/network' },
            { text: 'Webpack', link: '/interview/webpack' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/1skyyks1/FE-Algorithm-Interview' }
    ],

    search: {
      provider: 'local'
    }
  }
})