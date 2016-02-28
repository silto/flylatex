#!/bin/bash

service = mongod

if (( $(ps -ef | grep -v grep | grep $service | wc -l) > 0 ))
then
    echo "$service already running."
else
    echo "$service not running..."
    mongod --config db/db_config.conf
    echo "... launched!"
    exit 1
fi
