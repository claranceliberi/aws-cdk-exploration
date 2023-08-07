import * as cdk from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from "constructs";

export class PhotosStack extends cdk.Stack {

    private stackSuffix: string;
    public readonly photosBucketArn: string;

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
    
      this.initializeSuffix();

      const photosBucket = new Bucket(this, 'PhotosBucket2', {
        bucketName: `photos-bucket-${this.stackSuffix}`
        });

        this.photosBucketArn = photosBucket.bucketArn;

        
    }

    private initializeSuffix(){
        const shortStackId = cdk.Fn.select(2, cdk.Fn.split('/', this.stackId))
        this.stackSuffix = cdk.Fn.select(4, cdk.Fn.split('-', shortStackId))
    }
  }
  