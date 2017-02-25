# boilerplate-web-ts

This is a simple variation on [Boilerplate-web](https://github.com/lucclaesen/boilerplate-web) supporting typescript instead of ES6+. Please consult the readme of the
original boilerplate for more on what I intended it for.

There's not an awfull lot I needed to change in order to exchange babel for the typescript compiler:

- extend the default list of extensions recognized by webpack (extend config.resolve.extensions)
- use the ts-loader instead of the babel-loader in the webpack config.
- transform the jsconfig.json into a tsconfig.json
- change some .js into .ts extensions in 
    . webpack.config.js
    . package.json
    . tests/index.ts
- in order to get the tests running:
    * rely on ts-node's register function in tests/support/node-setup.js

And that's basically it... which demonstrates the soundness of my initial boilerplate.

Note that the development infrastructure (automation scripts, development and dist server, node test infrastructure) still remain plain ES2015 code, for which I still rely
on Babel.