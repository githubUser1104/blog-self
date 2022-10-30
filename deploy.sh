#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
npm run build
# 进入生成的文件夹
cd docs/.vuepress/dist
# 创建.nojekyll 防止Github Pages build错误
touch .nojekyll
# 将生成的网页提交到gh-pages支线
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:githubUser1104/blog-self.git master:gh-pages
cd -