#!/bin/bash

whoami >> ./src/index.html
echo ' Continuous Integration build on' >> ./src/index.html
zdump CET >> ./src/index.html
