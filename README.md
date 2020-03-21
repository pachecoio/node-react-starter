# node-react-starter
A simple fullstack starter application using Node.js, Express.js, React.js and MongoDB

To run this project you need to add the backend and frontend dependencies.
In the root of the project run the following command

```
$ npm install
```

Then, navigate to the client directory and run the following command:

```
recommended
$ yarn
```
or
```
npm install
```

### Running the Dev container

To run the application, use the following command:

```
$ docker-compose up
```

The frontend will be running at http://localhost:3000

The backend will be running at http://localhost:5000

### Running the Prod test container

To run the application, use the following command:

```
$ docker-compose -f docker-compose-test-prod.yml up
```
