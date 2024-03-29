/* HTTP Cloud Function.
*
* @param {Object} req Cloud Function request context.
* @param {Object} res Cloud Function response context.
*/
exports.helloGET = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send('Hello from Cloud Functions and Cloud Source Repositories');
};

