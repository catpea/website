#!/usr/bin/env bash
mkdir -p ./docs
rsync -qav --progress .sources/server/docs/ ./docs
echo catpea.com > ./docs/CNAME
