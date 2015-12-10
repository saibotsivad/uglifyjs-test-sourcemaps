# uglifyjs-test-sourcemaps

A repo to hold a test app for uglifyjs testing

You can serve with whatever, but `http-serve` is pretty nice. `npm install -g http-serve`

The final `out.js.map` of `npm run build1` should be equivalent to `npm run build2`.

> Note: I was not able to get the `sourcesContent` to be populated when running
> `uglifyjs` directly (in `build2`), thus the `save-sources.js` and `populate-sources.js`
> hack. I think this is possibly a commandline parameter I am missing in uglify-js?

## uglify with broken sourcemaps

Build the system: `npm run build1`

Run the server: `npm run serve`

Open it in the browser, look at the error thrown in the console.

Set a breakpoint where the error is thrown.

#### Expected

The breakpoint should work.

#### Actual

The breakpoint is **not** caught.

## uglify with correct sourcemaps

Build the system: `npm run build2`

Run the server: `npm run serve`

Open it in the browser, look at the error thrown in the console.

Set a breakpoint where the error is thrown.

#### Expected

The breakpoint should work.

#### Actual

The breakpoint **is** caught.
