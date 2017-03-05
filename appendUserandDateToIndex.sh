#!/bin/bash

whoami >> ./src/index.html
echo ' Continuous Integration build on' >> ./src/index.html
date >> ./src/index.html
