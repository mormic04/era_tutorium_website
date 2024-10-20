#!/bin/bash

# this file should be placed on the server to publish the static build with the correct access rights for the tum lxhalle webserver

echo "Publishing new ERA Tutorpage"
echo "============================"
cd home_page/html-data/
echo "rename build directory"
rm -rf era
mv out era
echo "set correct access rights"
chmod -R 705 era
echo "loading materials"
cd era-materials
git pull
cd ..
chmod -R 705 era-materials
echo "======================="
echo "published successfully!