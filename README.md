# Assets Integrity

Example of SRI with webpack

## Usage

```sh
# Install dependecies
yarn install

# Compile assets
yarn run prod

# Serve elements
cd dist
python -m SimpleHTTPServer
```

## Manual generate

```sh
openssl dgst -sha256 -binary dist/bundle.js | openssl base64 -A
openssl dgst -sha384 -binary dist/bundle.js | openssl base64 -A
openssl dgst -sha256 -binary dist/main.css | openssl base64 -A
openssl dgst -sha384 -binary dist/main.css | openssl base64 -A
```

## References

- https://www.srihash.org/
- https://developer.mozilla.org/es/docs/Web/Security/Subresource_Integrity
- https://github.com/jantimon/html-webpack-plugin
- https://github.com/waysact/webpack-subresource-integrity
