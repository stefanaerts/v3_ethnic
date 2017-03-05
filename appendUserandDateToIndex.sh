#!/bin/bash

whoami >> ./src/index.html
echo 'CI build on ' >> ./src/index.html
date >> ./src/index.html
