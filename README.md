# Geek Collision - node.js streams2 dojo

http://www.geekcollision.org/2013/03/dojo-nodejs-streams-at-hemingways-94.html

Thanks to all participants!

## Material

The nyanstream example is here:

https://github.com/epeli/node-nyanstream

The live coded solutions are on the master branch:

https://github.com/epeli/streams-dojo/tree/master

My reference solutions are on the reference branch:

https://github.com/epeli/streams-dojo/tree/reference

Blank exercises can be found from the blank branch:

https://github.com/epeli/streams-dojo/tree/blank

The dojo timer is here:

http://jsfiddle.net/uda82/1/

The used editor was Sublime Text 2:

http://www.sublimetext.com/

node.js streams documentation

http://nodejs.org/api/stream.html

## Instructions

Get node.js 0.10 http://nodejs.org/

Global installation of Mocha

    [sudo] npm install -g mocha

get this repo

    git clone https://github.com/epeli/streams-dojo
    cd streams-dojo

start from blank

    git checkout -t origin/blank

install local dependencies

    npm install

each task can be tested with mocha

    cd 1-write
    mocha test.js

Watch for changes with `-w`

    mocha -w test.js

