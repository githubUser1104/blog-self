# blog-self

## init
```shell
# github new repository: blog-self
git clone git@github.com:githubUser1104/blog-self.git
# add README.md
# add .gitignore
```

## vuepress
- [vuepress官方文档](https://vuepress.vuejs.org/zh/)
  ```shell
  npm init && npm install -D vuepress
  mkdir docs && echo '# Hello VuePress' > docs/README.md
  ```

- package.json
  ```json
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs",
  },
  ```

- `npm run dev` -访问-> `http://localhost:8080/`