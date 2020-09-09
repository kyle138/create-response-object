# create-response-object
NPM Module. A very, very tiny object creator for lambda-proxy responses. Primarily for 200 and 400 responses with an optional message. Also supports 301 and 302 responses with redirect URI.

## Install
npm install --save create-response-object

## Usage
```javascript
createResponseObject('200','Hello world!');
 ```

#### Options
* **code:** (optional) The HTTP status code to return. Defaults to '200'.  
   {string} '200', '301', '302', '400', etc.
* **message:** (optional) The response body's message.  
   {string} 'Hello World'.
* **uri:** (required for 301|302) The redirect uri.

## Example
```javascript
const createResponseObject = require('create-response-object');

exports.handler = async (event, context) => {
  return await createResponseObject('200','Hello World!');
  // or
  // return await createResponseObject('400','Something went wrong!');
  // or
  // return await createResponseObject('301','','https://www.npmjs.com/package/create-response-object');
};
```
Will output:
```javascript
{
    "statusCode": "200",
    "body": "Hello World!",
    "headers": {
        "Content-Type": "application/json"
    }
}
```

## Credit
This function, as small as it is, draws inspiration from [jroberson](https://github.com/jroberson).
