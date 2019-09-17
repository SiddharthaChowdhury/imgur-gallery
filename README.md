# Image gallery (Imgur gallery API)

A simple gallery with random images from [Imgur](https://apidocs.imgur.com/?version=latest) including some basic filter offered by Imgur.

## This project structure

- **app** : bootstraped with `create-react-app`
- **server**: simple server with Express.js

# Getting Started

- First of all! [Register your app with Imgur](vhttps://api.imgur.com/oauth2/addclient). To make Imgur API calls, you will need a "Client_ID" for  **Authorization**. You can get Client_ID by registering your app with [Imgur HERE](https://api.imgur.com/oauth2/addclient).  

- **FYI**: While registering you app with Imgur `Authorization callback URL:` in the form can be `#` (need not be a valid URL, for development).

- Once registered keep safe the **"Client_ID"**, we will need it in the next step


## Setting up server

1. `cd server`
3. create file `nodemon.json` and the following line
4. `{"env":{"client_id": "<Client_ID>"}}`
5. Where `<Client_ID>` is the one you got from registering your app with Imgur above
6. `npm install`
7. `npm start`

## Setting up app

1. `cd app`
2. `npm install`
3. `npm start`

Done!!


