# Create a WebSocket using nginx, Socket.io and Docker

## Configuration of a nginx proxy server

This project simulates an environment composed by three microservices.

The `webapp-web-server` stores and delivers the web application which contains an (useful) web socket client to retrieve a random number. 
The `socket-web-server` connects the `socket` service with the browser, handling the request configurations and protocol.

--------------------------------------------------------------------------------

### Prerequisites

What things you need to install the software

```
docker 17+
docker-compose 1.19.0+

```

--------------------------------------------------------------------------------

### Development

```bash
# Change the directory to the docker development 
cd docker/dev

# Create a .env file with your local application folder
echo "APP_FOLDER=/path-to-your-local/app" > .env 

# Run the services using docker compose
sudo docker-compose up -d

# Add these lines to your /etc/hosts:
# 127.0.0.1       www.example.com
# 127.0.0.1       example.com
# 127.0.0.1       socket.example.com

# Open your web browser and go to http://www.example.com:8080 
# For testing the WebSocket click the button and watch the console logs

```

#### Docker services

```
# Web server
Port: 8080

# WebSocket web server
Port: 8081

```

--------------------------------------------------------------------------------

## Authors

- **Simone Adelchino** - [_claclacla_](https://twitter.com/_claclacla_)

--------------------------------------------------------------------------------

## License

This project is licensed under the MIT License

--------------------------------------------------------------------------------

## Acknowledgments

- [nginx](https://www.nginx.com/)
- [Docker](https://www.docker.com/)
- [Socket.io](https://socket.io/)
- [A nginx reverse proxy](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/)