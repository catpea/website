#!/usr/bin/env bash

bin/stylesheet/index.sh; # this copies into source
catawampus && cataclysm
rsync -qav --progress .sources/poetry/dist/image ./docs
rsync -qav --progress .sources/poetry/dist/audio ./docs
echo -n "catpea.com" > docs/CNAME
