import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda"
import { v4 } from "uuid"
import {S3Client, ListBucketsCommand} from '@aws-sdk/client-s3'

const s3Client = new S3Client({})

async function handler(event: APIGatewayProxyEvent, context:Context){

    const response : APIGatewayProxyResult = {
        statusCode: 200,
        body: JSON.stringify(`Hello from Lambda, here are your buckets:  `)
    }

    return response
}

export {handler}