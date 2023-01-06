#!/usr/bin/env bash

set -ex

project_name=$1

# Output
echo "--------------------- Merging to master ---------------------"
rm -rf ./*

git clone ssh://git@gitlab.caas.olympe.io/olympeio/extensions/${project_name}.git
cd ${project_name}

git config user.name "gitlab-runner"
git config user.email gitlab-runner@olympe.ch

# Checkout master branch and clean it up locally
git status
git checkout master

git status
git merge origin/develop -X theirs --no-ff --no-edit
git status
cat package.json

# Replace dependencies to stable one on master
sed -i -e 's/"dev"/"stable"/g' package.json
git add package.json
git diff-index --quiet HEAD || git commit -m "Updating dependencies"

# Push to remote
git push

sh ./bumpVersion.sh

# Build stable package
npm install
npm run build
cd dist
npm publish --tag stable

# Success
echo "--------------------- Merging to master complete ---------------------"
cd ..
rm -rf ./${project_name}
