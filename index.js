/**
 * Create a response object.
 *
 * @param {string} code - Response status code: '200', '400', etc.
 * @param {string} message - Response body's message.
 * @param {string} uri - Redirect URI for '301' and '302' responses.
 * @returns {Promise} Error or response object.
 */
function createResponseObject(code, message, uri) {
  return new Promise((resolve, reject) => {
//    console.debug(`createResponseObject() parameter(s):\n code = ${code}\n message = ${message}\n`);

    // Set default code
    code = (code && code.length > 0) ? code : '200';

    // Create response object.
    let response = {
      statusCode: code,
      headers: {
        'Content-Type': 'application/json',
      }
    };

    // Check if this is a redirect
    if(code == '301' || code == '302') {
      // Check if uri parameter is supplied.
      if(uri && uri.length > 0) {
        response.headers.Location = uri;
        //    console.debug('createResponseObject(): response =', JSON.stringify(response, null, 2),'\n');
        return resolve(response);
      } else {
      // Missing URI
        return reject('The uri parameter is required for 301 and 302 redirects.');
      }
    } else {  // Non-redirect responses
      // If a message was supplied add it to the response.
      if(message && message.length > 0) {
        response.body = JSON.stringify({ 'response': message });
      }
      //    console.debug('createResponseObject(): response =', JSON.stringify(response, null, 2),'\n');
      return resolve(response);
    } // End if(301||302)
  }); // End promise
} // End createResponseObject

exports = module.exports = createResponseObject;
