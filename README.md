# Multi-Tier-containerized-web-stack
Highly optimized multi-tier web stack (Nginx, Node.js/Express, MongoDB) containerized and orchestrated using Docker and Docker Compose.Docker watch Features multi-stage builds, healthchecks, and data persistence.

                ┌────────────────────┐
                │      Browser       │
                └─────────┬──────────┘
                          │
                    Port 8080
                          │
                ┌─────────▼─────────┐
                │   Nginx Frontend  │
                └─────────┬─────────┘
                          │
                    Internal Network
                          │
                ┌─────────▼─────────┐
                │ Node.js Express API│
                └─────────┬─────────┘
                          │
                    MongoDB Driver
                          │
                ┌─────────▼─────────┐
                │     MongoDB       │
                └───────────────────┘

    Multi-container application using Docker Compose
Static frontend served by Nginx
REST API built with Node.js & Express
MongoDB persistent database
Docker bridge networking
Persistent Docker volumes
Environment variable configuration using .env
Optimized Dockerfiles with .dockerignore
Health check API endpoint
Clean and production-ready project structure


Environment Variables
Create a .env file in the project root.

PORT=5000

MONGO_ROOT_USER=admin
MONGO_ROOT_PASSWORD=supersecurepassword

MONGO_URI=mongodb://admin:supersecurepassword@database:27017/mydb?authSource=admin

🚀 Getting Started
1. Clone Repository
git clone https://github.com/aadityapalsagwan/docker-multi-tier-app.git

cd docker-multi-tier-app
2. Build Containers
docker compose build
3. Start Application
docker compose up -d
4. Verify Running Containers
docker compose ps
View logs:

docker compose logs -f
🌐 Application URLs
Service	URL
Frontend	http://localhost:8080
Backend API	http://localhost:5000
Health Check	http://localhost:5000/api/health
Expected response:

{
  "status": "Healthy",
  "message": "Hello from the Dockerized Backend API!",
  "database_status": "Connected"
}
🧹 Cleanup
Stop containers:

docker compose down
Remove containers and volumes:

docker compose down -v

📖 Useful Docker Commands
docker compose ps

docker compose logs -f

docker compose restart

docker compose down

docker compose down -v


