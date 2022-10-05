// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 's5822a8elh';
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/prod`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-za4kqc6c.us.auth0.com',
  clientId: 'j1pSvXJ2NAwaz85oS0iQ03wEHsCZFjPc',
  callbackUrl: 'http://localhost:3000/callback'
}