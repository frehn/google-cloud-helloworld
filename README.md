A sample Google Cloud application using

* a vue.js frontend,
* a node.js express backend,
* a Google Cloud Function.

# Prerequisites

* [Node.js](https://nodejs.org),
* [vue.js CLI](https://cli.vuejs.org/),
* [Google Cloud SDK](https://cloud.google.com/sdk/) for deploying to Google Cloud.

# Building

To build, execute `build.sh`.

# Running locally

To run locally, execute `run.sh`. Note that run.sh starts services in the background.
Termination is not supported yet; the Node.js processes need to be killed manually to
terminate the application.

# Deploying to Google Cloud

To deploy to Google Cloud, use Google Cloud SDK to link your
Google Cloud project. Then execute `deploy.sh`.
