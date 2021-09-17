#!/usr/bin/env bash

set -e

read_env_file() {
  while IFS= read -r line; do
    IFS="=" read -a myarray <<< $line
    kv=(${line//=/ });
    key=${kv[0]};
    val=${kv[1]};
    val=$val | sed -r 's/^"|"$//g';
    echo "${kv[0]}=${kv[1]}";
    echo $val
    export "$key=$val"
  done < "$1";
}


if [ -f ./.env ]; then
  read_env_file "./.env";
fi
