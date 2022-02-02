# Prerequisites 
    nodejs
    vscode

## To run
1. npm i
2. node index.js

## To test
1. npm run test


### AWS Cloud deployment
You could deploy this as serverless lambda function which would take a json payload of the 2 datasets and return a json object. This would require an API Gateway path to be setup to call the lambda function.
Changes to the code would need to be made in order to accomodate for the lambda event handler which would be the entry point.