/*
 * @Author: w
 * @Date: 2020-09-03 16:31:19
 * @LastEditors: w
 * @LastEditTime: 2020-09-04 11:24:40
 */
self.version = '20190401235958'
importScripts('https://cdn.jsdelivr.net/npm/workbox-sw@4.3.1/build/workbox-sw.min.js');

if (workbox) {
  console.log("Yay! Workbox is loaded 🎉");
} else {
  console.log("Boo! Workbox didn't load 😬");
}


var cacheFiles = [
  {
    url: 'index.html',
    revision: 'v1' // 加revision，版本改了以後，sw.js 在 application 上會更新
  },
  {
    url: 'manifest.json',
    revision: 'v1' // 加revision，版本改了以後，sw.js 在 application 上會更新
  },
  // {
  //   url:'images/RackMultipart20200831-4-bewn1k.jpg',
  //   revision: 'v1'
  // },
  // {
  //   url:'https://ucarecdn.com/ce666c6b-8a89-40ac-a37a-fcab45fa29ce/',
  //   revision: 'v1'
  // }
];
workbox.precaching.precacheAndRoute(cacheFiles);


self.addEventListener('install', () => {
  // 安装回调的逻辑处理
  console.log('service worker 安装成功')
})


self.addEventListener('activate', () => {
  // 激活回调的逻辑处理
  console.log('service worker 激活成功')
})

self.addEventListener('fetch', evt => {
  console.log('service worker 抓取请求成功: ' + evt.request.url)
})