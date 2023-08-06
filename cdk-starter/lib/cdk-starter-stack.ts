import * as cdk from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

class L3Bucket extends Construct {
  constructor(scope: Construct, id: string, expiration: number) {
    super(scope, id);

    new Bucket(this, 'L3Bucket', {
      lifecycleRules: [{
        expiration: Duration.days(expiration)
      }]
    });
  }
}

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

        // create an s3 bucket 3 ways:
        new CfnBucket(this, 'MyL1Bucket', {
          lifecycleConfiguration:{
            rules:[{
              expirationInDays: 1,
              status: 'Enabled'
            }]
          }
        });

        const duration = new cdk.CfnParameter(this, 'duration', {
            default: 6,
            minValue:1,
            maxValue: 10,
            type: 'Number'
        })

    new Bucket(this,  'MyL2Bucket', {
      lifecycleRules:[{
        expiration:  Duration.days(duration.valueAsNumber)
      }]
    })
  }
}
