#!/bin/bash

whoami >> ./src/index.html
echo ' CI build and push to firebase on' >> ./src/index.html
zdump CET >> ./src/index.html
git log HEAD -1 > ./src/assets/git-latest-commit.txt
