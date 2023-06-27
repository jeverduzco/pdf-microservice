# PDF Microservice

PDF Microservice is a simple Express.js based microservice that converts HTML pages into PDF files using Puppeteer. It provides a straightforward and efficient way to create PDF files from any given URL.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Docker
- Node.js
- NPM

### Building the Docker image

To build the Docker image for this project, navigate to the project directory and run the following command:

```
docker build -t pdf-microservice .
```

This command builds a Docker image from the Dockerfile included in this repository, and tags the image as `pdf-microservice`.

### Running the microservice

Once the Docker image is built, you can start the microservice by running the following command:

```
docker run -p 8080:8080 pdf-microservice
```

The microservice will start and listen on port 8080. You can adjust the port mapping as needed.

## Usage

The microservice exposes a single endpoint at `/pdf`. This endpoint accepts a GET request with two optional query parameters: `url` and `name`.

- `url`: The URL of the webpage you want to convert into a PDF. This is a required parameter.
- `name`: The desired name of the output PDF file. If not provided, the default name is "file".

Here's an example request:

```
http://localhost:8080/pdf?url=https://example.com&name=myfile
```

## Running the Tests

You can run the test suite with the following command:

```
npm test
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details