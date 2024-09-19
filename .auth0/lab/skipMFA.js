/**
* Handler that will be called during the execution of a PostLogin flow.
*
* @param {Event} event - Details about the user and the context in which they are logging in.
* @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
*/
exports.onExecutePostLogin = async (event, api) => {
  // Check if a passkey was used to authenticate
  const skipMFA = event.authentication?.methods.some(
    (method) => method.name === "passkey"
  );

  // If a passkey was used skip MFA
  if (skipMFA) {
    api.multifactor.enable("none");
  }
 };
