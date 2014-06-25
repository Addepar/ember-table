#!/bin/bash

for FILE in `find . -name "*.coffee" -type file -o -path './src/' -o -path './app/'`
do 
    if [ -e $FILE ] ; then
        JS=${FILE//.coffee/.js}

        echo "converting ${FILE} to ${JS}"
        coffee -c "$FILE"
        rm -f "$FILE"
    else     
        echo "File: {$1} does not exist!"
    fi
done
