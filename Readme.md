# Bundling cometd with custom code using rollup
I'm trying to build a bundle containing cometd and its client code into a single file bundle using rollupjs.

The code fails, however because rollupjs rewrites `this` to `undefined` - causing errors in the cometd startup code.

See cometd [issue #863](https://github.com/cometd/cometd/issues/863)
