/**
 * Create a response object.
 *
 * @param {string} code - Response status code: '200', '400', etc.
 * @param {string} message - Response body's message.
 * @returns {Promise} Error or response object.
 */
function createResponseObject(code, message) {
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

    // If a message was supplied, add it to the response, otherwise empty object.
    if(message && message.length > 0) {
      response.body = JSON.stringify({ 'response': message });
    }

//    console.debug('createResponseObject(): response =', JSON.stringify(response, null, 2),'\n');
    return resolve(response);
  });
}

exports = module.exports = createResponseObject;
