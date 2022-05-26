# Migration Guide

When you upgrade your theme, you may encounter some incompatible updates.

## v1.10.1

Use [hexo-generator-searchdb](https://github.com/next-theme/hexo-generator-searchdb) instead of [hexo-generator-search](https://github.com/wzpan/hexo-generator-search).

```bash
npm un hexo-generator-search
npm i hexo-generator-searchdb
```

See [hexo-generator-searchdb](https://github.com/next-theme/hexo-generator-searchdb) for more configuration.

## Migrated from 1.x to versions after v1.8.x

<Badge>v1.8.x</Badge> use npm packages for distribution and installation.

Do it in the blog root directory:

```bash
npm install hexo-theme-yun@latest
```

Then move 'source/\_data/yun.yml' to the root directory and rename it to '\_config.yun.yml'.

## Reward configuration

v0.9.2 merged the original `reward_settings` with the `reward` configuration.

Please refer to [reward | theme configuration](/en/guide/config.html#reward) to modify it.
