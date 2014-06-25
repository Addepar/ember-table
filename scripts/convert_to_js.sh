#!/bin/bash

# Find all coffee files in src and app
for COFFEE in `find . -name "*.coffee" -type file -o -path './src/' -o -path './app/'`
do
  if [ -e $COFFEE ] ; then
    # Figure out what the JS file should be called
    JS=${COFFEE//.coffee/.js}

    echo "converting ${COFFEE} to ${JS}"

    # Convert single line coffeescript comments to multiline comments so they are output
    ruby scripts/coffee_comment_converter.rb "$COFFEE"

    # Bare: no top level module
    # No header: Don't include the converted by coffeescript header
    coffee --bare --no-header --compile "$COFFEE"

    # Delete the coffee file after
    rm -f "$COFFEE"
  else
    echo "File: {$1} does not exist!"
  fi
done
