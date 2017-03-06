#!/bin/bash

whoami >> ./src/index.html
echo ' CI build and push to firebase on' >> ./src/index.html
zdump CET >> ./src/index.html
rm ./src/assets/git-latest-commit.txt
touch ./src/assets/git-latest-commit.txt
git log --pretty=format:"%h - %an, %ar : %s" -1 --graph > ./src/assets/git-latest-commit.txt
# git log HEAD -1 > ./src/assets/git-latest-commit.txt
