# FAQ

::: tip

- <Badge text ="dev" vertical="middle"/> Only related to development.
  :::

Questions and suggestions are welcome at [Issue](https://github.com/YunYouJun/hexo-theme-yun/issues).

You can also join [QQ Group](https://shang.qq.com/wpa/qunwpa?idkey=3bd19a05aaccb2b60c396295c8617b3a9e667821a495e8cd7e1698ff95ab61c6) (389401003) for feedback and discussion.

> If it is a general problem (such as BUG feedback, new feature suggestions), it is best to give feedback in the Issue, so that other people can participate in the discussion and reduce duplication.

---

## Self-checking Common Problem Solution

Check if the file or warehouse name is right.

Check if the `url` under `_config.yml` in the `Hexo` working directory is set correctly. (This part is automatically generated when Hexo is initialized)

```yaml
# If your site is put in a subdirectory
# set url as 'https://yoursite.com/child' and root as '/child/'
url: https://www.yunyoujun.cn
root: /
```

Check whether the theme configurations are done in the `yun.yml` file and has been saved.
Check whether the following steps have been performed:

- `hexo clean`: clear the local cache
- `hexo g`: generate a new static file
- `hexo s`: local viewing effect (if normal, use `hexo d` to redeploy)

Check whether the local browser cache have been forcibly refreshed (Windows: `Ctrl + F5`, Mac: `Shift + Cmd + R`).

Check if it is the latest version.

If you still have problems, you can push your project code as a Hexo branch to GitHub.

> [Associate with remote warehouse](https://www.yunyoujun.cn/share/how-to-build-your-site/#与远程仓库建立关联)

Use the GitHub source file address to ask questions in the group chat (389401003), or initiate [ISSUE](https://github.com/YunYouJun/hexo-theme-yun/issues).

## `hexo server` :The article only renders part of the content <Badge text="dev"/>

In the process of developing the theme, I found that only a part of a long article can be rendered, and the second half cannot be displayed normally.
At first, I thought it was a problem of `hexo-renderer-pug`. After a day of tossing around, I finally discovered that it seemed to be a problem of `hexo-browsersync` during development.

Related Issue: [Problem with long pages](https://github.com/hexojs/hexo-browsersync/issues/15)

### Temporary Solution

Set the following in the root directory of `_config.yml`

```yaml
server:
  compress: true
```

> <https://github.com/hexojs/hexo-browsersync/issues/15#issuecomment-573492492>
