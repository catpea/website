#!/usr/bin/env bash

bin/stylesheet/index.sh; # this copies into source

rsync -qav --progress .sources/warrior/docs/images/ ./docs/image
rsync -qav --progress .sources/warrior/docs/audio ./docs

rsync -qav --progress .sources/poetry/dist/image ./docs
rsync -qav --progress .sources/poetry/dist/audio ./docs

echo -n "catpea.com" > docs/CNAME

catawampus

# the html generator maybe checking for the presence of images, please run last
cataclysm
