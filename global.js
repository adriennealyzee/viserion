import { AWSEC3 } from './config/config';

global.HOST = 'http://127.0.0.1:8080';
// global.HOST = 'http://ec2-54-203-8-222.us-west-2.compute.amazonaws.com:8080';
// global.HOST = 'http://spindleapp.com:8080';

global.AWSEC3 = {
  keyPrefix: 'uploads/',
  bucket: 'viserion-hr',
  region: 'us-east-1',
  accessKey: AWSEC3.accessKey,
  secretKey: AWSEC3.secretKey,
  successActionStatus: 201,
};

// global.HOST= 'http://542a9fa6.ngrok.io'; //ngrok business plan
