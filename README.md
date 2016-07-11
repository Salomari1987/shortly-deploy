Shortly: Deployment
==============

In this sprint, you will learn about deployment and various build tools. The tools and techniques you gain experience 
with here will allow you to kick off your group project with a bang.

## Orientation

We're giving you a canonical version of the Shortly-express repo to start with. Before diving in, do a code review. 
Take a few minutes with your partner and compare this canonical repo to your work from the last sprint. How was your 
app architected differently? Could your code be DRYer, or was it well organized? Are there any functional differences 
between your apps and this one? You can often learn as much from reading code as you can from writing it.

For the basic requirements you will be using Heroku. Heroku is powerful but easy to work with. It is an excellent 
service to use for your first foray into deployment. After completing the basic requirements, you will have the 
opportunity to deploy your app, with less guidance, on other services.

## Tests

You will find all tests are in pending state. They are all written for [MongoDB](https://www.mongodb.org/). Before 
starting on your mongo refactor, remove 'x' from each `describe` block.

## Basic requirements

### Prep work

Before we get started, there is some prep work we need to complete. Mainly getting a Heroku account and installing the
Heroku CLI toolbetl.

 * [ ] Create a [Heroku](https://www.heroku.com/) account
 * [ ] Install the [Heroku Toolbelt](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)

### Setup your application for Deployment

Running an application on a third-party host like Heroku isn't the same as running it locally. The most common 
difference you'll notice immediately is what port the server runs on. This section will help you prepare your 
application for deployment on Heroku.

 * [ ] Update how the server's `port` is set. [Hint](https://nodejs.org/api/process.html#process_process_env)
 * [ ] Run the application locally and make sure it still works
 * [ ] Add a [Procfile](https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-a-procfile)

### Deploy your application

We're ready to deploy! Create a Heroku application and deploy your application's code to it. 

 * [ ] [Create a Heroku application](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app) for shortly-deploy
 * [ ] [Deploy](https://devcenter.heroku.com/articles/getting-started-with-nodejs#push-local-changes) your application to your new Heroku endpoint
 * [ ] Make sure the application works on Heroku, take it for a test spin!


### Adding build tools

Now that our application is deployed and working, let's visit build tools and how they can improve our deployment. 
Building and deploying an app involves a number of important tasks that need to be performed in a certain order. When 
you're trying to rapidly prototype your app, this can become repetitive and is prone to error. Grunt is a super useful 
tool that can automate a wide variety of tasks for you. Still not convinced? Read 
[this](http://24ways.org/2013/grunt-is-not-weird-and-hard/) article about the advantages of using Grunt. Let Grunt do 
the work!

 * [ ] Use [Grunt](http://gruntjs.com/) to create a build script
 * [ ] Concatenate files before deployment
 * [ ] Uglify your code using Grunt before deployment -- Don't forget to update your views to point to the minified versions of your asset files in the public/dist folder (CSS, JS). The folder public/dist is already .gitignored for you, but make sure that you aren't committing your compiled scripts and CSS to your Github repo.
 * [ ] Run jshint before deployment -- if jshint fails, the build process should exit
 * [ ] Run your Mocha tests before deployment -- if any tests fail, the build process should exit
 * [ ] Set a Grunt-based [build pack](https://devcenter.heroku.com/articles/buildpacks) to your Heroku application. [Example](https://github.com/mbuchetics/heroku-buildpack-nodejs-grunt)

When you're done, you will have programmed a hierarchy of tasks that can be run with a single command. Run `grunt deploy` to build and host your app on a local dev server, and run `grunt deploy --prod` when you're ready to push up to the production server

### Refactor your database

In the previous sprint, our shortened links were stored using sqlite, a server-less database engine. Sqlite is great 
for development, but it's not well suited for well-trafficked production sites for 
[various reasons](http://stackoverflow.com/questions/913067/sqlite-as-a-production-database-for-a-low-traffic-site).

  * [ ] Refactor the app to use MongoDB/Mongoose, and run it locally
  * [ ] Add [MongoLabs](https://addons.heroku.com/mongolab) to your Heroku application as an [Add-On](https://addons.heroku.com/). This may require you to enter billing information but don't fret, their is a free tier!
  * [ ] Refactor your database code to handle both enviroments--if you're running the app locally, it should connect to a local database, and when you navigate to your deployed site, it should connect to your hosted Mongo instance

## Extra Credit

### Automated deployment

Having a script for deployment is advantageous and greatly simplifies matters. However it still requires manual 
interaction to be triggered. Continuous integration (CI) and/or continuous delivery (CD) can provide additional benefits
to our workflow.

 * [ ] Create a second application for this project (we'll call it staging)
 * [ ] Setup automatic deployment of the master branch to this staging server
 * [ ] Enable Heroku pipelines for streamlining successful staging deployments directly to the production server
 * [ ] Integrate your project with CircleCI so that PRs are automatically tested and upon success, merged.

### Refactor `server.js` to use promises

  * [ ] Several routes in the server use nested callbacks. Refactor them all to use promises. Consider using [Bluebird](https://github.com/petkaantonov/bluebird), a popular and performant promise library.


## Nightmare mode

### Use another cloud service

Heroku is great but not the be all and end all of solutions. There are many other providers that have better (and worse)
deployment platforms and services.

 * [ ] Deploy your site to another service ([AWS](https://http://aws.amazon.com/), [DigitalOcean](https://www.digitalocean.com), [Windows Azure](https://azure.microsoft.com))
