# 额外依赖库支持

## 字数统计

安装 [hexo-symbols-count-time](https://github.com/theme-next/hexo-symbols-count-time)

```sh
npm install hexo-symbols-count-time
# or
# yarn add hexo-symbols-count-time
```

进入博客根目录的配置文件 `_config.yml`

```yml
symbols_count_time:
  symbols: true
  time: true
  total_symbols: true
  total_time: true
```

进入博客根目录的配置文件 `source/_data/yun.yml`

```yml
symbols_count_time:
  item_text_post: true
  item_text_total: true
  awl: 2
  wpm: 250
```

> 更多信息及使用方法请参见 [hexo-symbols-count-time | GitHub](https://github.com/theme-next/hexo-symbols-count-time)。
