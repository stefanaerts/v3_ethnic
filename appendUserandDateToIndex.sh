#!/bin/bash

whoami >> ./src/index.html
echo ' CI build and push to firebase on' >> ./src/index.html
zdump CET >> ./src/index.html
# rm ./src/assets/git-latest-commit.txt
# touch ./src/assets/git-latest-commit.txt
# git log --pretty=format:"%h - %an, %ad : %s" --date=format:'%Y-%m-%d %H:%M:%S' -1 --graph > ./src/assets/git-latest-commit.txt

git log --pretty=format:"%h - %an, %ad : %s" --date=format:'%Y-%m-%d %H:%M:%S' -1 --graph >> ./src/index.html

