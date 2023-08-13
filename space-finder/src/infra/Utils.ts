import * as cdk from 'aws-cdk-lib'

export function getSuffixFromStack(stack: cdk.Stack){
    const shortStackId = cdk.Fn.select(2, cdk.Fn.split('/', stack.stackId))
    return  cdk.Fn.select(4, cdk.Fn.split('-', shortStackId))
}