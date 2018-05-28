#!/usr/bin/env node

const {execSync} = require('child_process');
const awsCloudfrontInvalidate = require('aws-cloudfront-invalidate');
// Expect following system variables:
// AWS_ACCESS_KEY_ID
// AWS_SECRET_ACCESS_KEY
// CLOUDFRONT_DISTRIBUTION_ID
require('dotenv').config();

const params = [
  `--cwd './public/'`,
  `--bucket 'www.sinkkala.fi'`,
  `--region 'eu-central-1'`,
  `--deleteRemoved`,
  `--gzip`,
].join(' ');

console.log(params);

execSync(
  `node ./node_modules/s3-deploy/dist/index.js './public/**' ${params}`,
  {
    env: process.env,
    stdio: [0,1,2],
  }
);

awsCloudfrontInvalidate(process.env.CLOUDFRONT_DISTRIBUTION_ID).then((data) => {
  console.log('invalidating created', data.Invalidation.Id);
});
