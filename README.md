# google-cloud-helloworld

A sample Google Cloud application using

* a Vue.js frontend,
* a Node.js express backend,
* a Google Cloud Function.

Things to note:

* Fronted/Backend are deployed to Google Cloud as two services in an App Engine.
  The frontend is the default service of the App. Routing to the backend is done
  via a dispatch.yaml.
* When running locally, the Google Cloud Function is executed using
  the [Functions Framework](https://cloud.google.com/functions/docs/functions-framework).

## Prerequisites

* [Node.js](https://nodejs.org),
* [Vue.js CLI](https://cli.vuejs.org/),
* [Google Cloud SDK](https://cloud.google.com/sdk/) for deploying to Google Cloud.

## Building

To build, execute `build.sh`.

## Running locally

To run locally, execute `run.sh`. Note that run.sh starts services in the background.
Termination is not supported yet; the Node.js processes need to be killed manually to
terminate the application.

## Deploying to Google Cloud

To deploy to Google Cloud, use Google Cloud SDK to link your
Google Cloud project. Then execute `deploy.sh`.
