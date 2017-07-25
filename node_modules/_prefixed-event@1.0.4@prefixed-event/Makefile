all: build

build: clean
	mkdir build
	./node_modules/.bin/browserify -x ./lib/prefixed-event.js -o build/browserified.js

clean:
	rm -rf build

test: build
	./node_modules/.bin/testem

.PHONY: all clean build test
