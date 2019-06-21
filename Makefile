run: build
	node src/server.js

build:
	npm run rollup

prep:
	npm install
