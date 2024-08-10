var rule = {
  title: '策驰影院',
  host: 'http://www.ccyy5.vip',
  class_name: '电影&电视剧&综艺&动漫',
  class_url: 'dianying&dianshiju&dongman&zongyi',
  searchUrl: '/sou/?wd=**',
  searchable: 2,
  quickSearch: 0,
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  url: '/list/fyclass/page/fypage/',
  filterable: 0,
  filter_url: '',
  filter: {},
  filter_def: {},
  detailUrl: '/index.php/vod/detail/id/fyid.html',
  play_parse: true,
  lazy: "js:\n  let html = request(input);\n  let hconf = html.match(/r player_.*?=(.*?)</)[1];\n  let json = JSON5.parse(hconf);\n  let url = json.url;\n  if (json.encrypt == '1') {\n    url = unescape(url);\n  } else if (json.encrypt == '2') {\n    url = unescape(base64Decode(url));\n  }\n  if (/\\.(m3u8|mp4|m4a|mp3)/.test(url)) {\n    input = {\n      parse: 0,\n      jx: 0,\n      url: url,\n    };\n  } else {\n    input = url && url.startsWith('http') && tellIsJx(url) ? {parse:0,jx:1,url:url}:input;\n  }",
  limit: 6,
  推荐: 'ul.swiper-wrapper li;a&&title;.lazyload&&data-original;.item-status&&Text;a&&href',
  一级: '.vod-list ul li;a&&title;.lazyload&&data-original;.item-status&&Text;a&&href',
  二级: {
    title: 'h1&&Text;.row&&span&&Text',
    img: '.lazyload&&data-original',
    desc: '.row&&Text;.row&&span:eq(2)&&Text;.row&&span:eq(1)&&Text;.row&&span:eq(3)&&Text;.row&&span:eq(4)&&Text;',
    content: '.text.text-row&&Text',
    tabs: '.swiper-wrapper li',
    lists: '.ewave-playlist-content:eq(#id) li',
  },
  搜索: '*',
}