import 'source-map-support/register'

import {APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
// import * as middy from 'middy'
// import { cors, httpErrorHandler } from 'middy/middlewares'

import { generateUploadUrl } from '../../helpers/todos'
// import { getUserId } from '../utils'

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const todoId = event.pathParameters.todoId
  // TODO: Return a presigned URL to upload a file for a TODO item with the provided id
  console.log("Processing Event ", event);
  const url = await generateUploadUrl(todoId);

  return {
    statusCode: 202,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
        uploadUrl: url,
    })
  };

  return undefined
}

// handler
//   .use(httpErrorHandler())
//   .use(
//     cors({
//       credentials: true
//     })
//   )
