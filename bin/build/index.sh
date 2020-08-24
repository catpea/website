#!/usr/bin/env bash

catawampus && cataclysm
rsync -qav --progress .sources/poetry/dist/image ./docs
rsync -qav --progress .sources/poetry/dist/audio ./docs
echo -n "catpea.com" > docs/CNAME
