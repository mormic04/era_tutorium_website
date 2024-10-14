#!/bin/bash

# this file should be placed on the server to publish the static build with the correct access rights for the tum lxhalle webserver

echo "Publishing new ERA Tutorpage"
echo "============================"

echo "rename build directory"
mv out era
echo "set correct access rights"
chmod -R 705 era
echo "======================="
echo "published successfully!"