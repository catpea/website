#!/usr/bin/env bash
TEMPLATE_ROOT=`cataclysm -l template-root`;
WEBSITE_ROOT=`cataclysm -l root`;
INPUT_FILE="${TEMPLATE_ROOT}/colors.png";
OUTPUT_FILE="${WEBSITE_ROOT}/colors.txt";
# echo "${INPUT_FILE}";
# echo "${OUTPUT_FILE}";
convert "${INPUT_FILE}" -colors 32 -depth 8 -format '%c' histogram:info:- | awk '{print $3}' | shuf | head -n 16 > "${OUTPUT_FILE}";
