# webgl-redshift

## I'm going to try to make an open-source big data viz tool with these technologies (It's a fun POC)

### What you'll need to get this example running (I'm thinking of adding a tut here on how to go about doing all this from scratch via the AWS console and SQLWorkbenchJ):
    - AWS Account with a IAM user with Full S3, Redshift and VPC access (You've got some AWS experience)
    - An SQL client (Upload your coordinates JSON file (I've included a canvas random coordinate generator with Redshift JSON formatting to help you get that moving) into S3 (include your credentials) so that you can then upload that data into Redshift with this client)
    - Set your S3 and Redshift URI's in the relevent files
    - npm i
    - node server.js
    - Go to your favorite browser and visit: http://localhost:8080/ and look at some cool spheres in WebGL (They're placed in the 3D environment via the coordinates you provided from a big data cluster wharehouse)
    - Have fun and be sure to cut your Redshift cluster off after you're done (Use a local array of coordinates for WebGL testing as Redshift is expensive to run)
