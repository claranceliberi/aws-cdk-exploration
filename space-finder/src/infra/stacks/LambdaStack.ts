import { Duration, Stack, StackProps } from "aws-cdk-lib";
import { LambdaIntegration } from "aws-cdk-lib/aws-apigateway";
import { LambdaFunction } from "aws-cdk-lib/aws-events-targets";
import { Runtime, Tracing } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { join } from 'path';

export class LambdaStack extends Stack{

    public readonly spacesLambdaIntegration: LambdaIntegration

    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props)

        const spacesLambda = new NodejsFunction(this, 'SpacesLambda', {
            runtime: Runtime.NODEJS_18_X,
            handler: 'handler',
            entry: (join(__dirname, '..','..', 'services', 'spaces', 'handler.ts')),
            // environment: {
            //     TABLE_NAME: props.spacesTable.tableName
            // },
            tracing: Tracing.ACTIVE,
            timeout: Duration.minutes(1)
        });

        this.spacesLambdaIntegration = new LambdaIntegration(spacesLambda)
    }
}