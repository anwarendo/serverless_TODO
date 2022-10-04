import 'source-map-support/register'
import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
// import * as middy from 'middy'
// import { cors } from 'middy/middlewares'
import { getAllTodos } from '../../helpers/todos'
// import { getUserId } from '../utils';

// TODO: Get all TODO items for a current user
export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  // Write your code here
  console.log("Processing Event ", event);
  const authorization = event.headers.Authorization;
  const split = authorization.split(' ');
  const jwtToken = split[1];

  const todos = await getAllTodos(jwtToken);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
        "items": todos,
    }),
  }
}

// handler.use(
//   cors({
//     credentials: true
//   })
// )
