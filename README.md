
# Project Introduction: Deploying a Node.js App to AWS CloudFront

In this project, we will guide you through the process of deploying a Node.js web application to AWS CloudFront, a content delivery network (CDN) service.
CloudFront provides high-speed and secure delivery of your web content to users around the world, improving performance and reducing latency. 
We will cover each step, from setting up your Node.js app to configuring AWS services and deploying the application to CloudFront.

# STEPS


Project Introduction: Deploying a Node.js App to AWS CloudFront

In this project, we will guide you through the process of deploying a Node.js web application to AWS CloudFront, a content delivery network (CDN) service. CloudFront provides high-speed and secure delivery of your web content to users around the world, improving performance and reducing latency. We will cover each step, from setting up your Node.js app to configuring AWS services and deploying the application to CloudFront.

Project Outline:

Setting Up the Node.js App:

Install Node.js and npm on your local machine.
Create the structure of your Node.js app, including HTML, CSS, JavaScript files, and any other assets.
Set up a basic Express.js server to serve your app locally.

1. Setting up the Node.js App:

Install Node.js and npm (Node Package Manager) on your local machine if not already installed.
Create a new directory for your project and navigate into it.

2. Configurations Involved:

Create your project files, such as `index.html`, `style.css`, and `script.js.`
Set up your Node.js server in a file named `app.js:`

3. Creating S3 Buckets:

Log in to AWS Management Console.
Navigate to Amazon S3.
Click "Create Bucket":
Bucket name: Enter a unique name.
Region: Choose a region.
Configure options as needed.
Set static website hosting:
Enable website hosting.
Index document: `index.html`.
Click "Create Bucket".

![bakare-bucket](https://github.com/bakare-rasheed/react-app/assets/114327344/f4170c8a-6683-4395-bb3f-9ba41cceb61c)

![bakare-bucket2](https://github.com/bakare-rasheed/react-app/assets/114327344/dbe86b3a-4452-42d3-b78f-1d0d2e606040)


4. Creating CloudFront Distribution:

Navigate to Amazon CloudFront:
Click "Create Distribution":
Web distribution.
Choose your S3 bucket as the origin.
Configure additional settings (e.g., cache behavior, SSL).
Create the distribution.
Note down the CloudFront domain name.

![bakare-cloudfront](https://github.com/bakare-rasheed/react-app/assets/114327344/e259fd0d-6bb0-4420-8176-5e7bab4e9122)

![bakare-origin-access](https://github.com/bakare-rasheed/react-app/assets/114327344/61a1bd8c-508e-477f-81d8-c1766af7e120)

![bakare-s3-web](https://github.com/bakare-rasheed/react-app/assets/114327344/1c65484c-46c9-49c3-858d-2aa1f25f452a)


5. AWS CodePipeline:

Set up GitHub repository:
Create a new repository on GitHub.
Install AWS CLI and configure it with your AWS credentials.
Create an IAM role for CodePipeline and CodeBuild with necessary permissions.
Create a buildspec.yml file in your project directory:

![bakare-yml](https://github.com/bakare-rasheed/react-app/assets/114327344/1a46a7a2-96df-43fb-b550-4cd657700bff)

![bakare-tree](https://github.com/bakare-rasheed/react-app/assets/114327344/7932aaaa-0a02-4350-8189-543e44c9e738)

![bakare-build1](https://github.com/bakare-rasheed/react-app/assets/114327344/4eea4599-b2a7-4f4a-aba1-7438515f4fb4)


![bakare-build2](https://github.com/bakare-rasheed/react-app/assets/114327344/09bca26d-9ee1-4de1-ab1a-e21e62e0ddc8)


6. Permissions:

Attach policies like AmazonS3FullAccess and CloudFrontFullAccess to your IAM role for CodePipeline and CodeBuild.

![bakare-policy](https://github.com/bakare-rasheed/react-app/assets/114327344/bb74c289-b4d9-4769-bfc3-3057c318fb94)

![bakare-policy2](https://github.com/bakare-rasheed/react-app/assets/114327344/baea7cb2-b4b7-4a08-99f9-7d9e25e48e8b)

7. Deploy and Test:

Push your project to the GitHub repository.
Create a new CodePipeline in AWS Management Console:
Source: GitHub repository.

![bakare-cloufront](https://github.com/bakare-rasheed/react-app/assets/114327344/da48bb6a-843f-4f04-8812-50e90d2f2ee3)

Build: AWS CodeBuild.


Deploy: Amazon S3.
Follow the on-screen instructions to configure each stage of the pipeline.
Once the pipeline is set up, it will automatically build and deploy your app.
