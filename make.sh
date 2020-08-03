#!/usr/bin/env bash
if [ -d .src ]; then
  cd .src
  git pull
  cd ..
else
  git clone --depth 1 git@github.com:catpea/poetry.git .src
fi

elderflower
