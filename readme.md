# 🚀 Multi-Tier Containerized Web Stack

A production-ready **multi-tier web application** built using **Docker Compose**, consisting of an **Nginx Frontend**, **Node.js/Express Backend**, and **MongoDB Database**.

This project demonstrates container orchestration, service networking, persistent storage, environment variable management, and production-ready Docker image creation.

---

## 📌 Architecture

```text
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
```

---

# ✨ Features

- Multi-container application using Docker Compose
- Static frontend served by Nginx
- REST API built with Node.js & Express
- MongoDB persistent database
- Docker bridge networking
- Persistent Docker volumes
- Environment variable configuration using `.env`
- Optimized Dockerfiles with `.dockerignore`
- Health check API endpoint
- Clean and production-ready project structure

---

# 🛠 Tech Stack

| Component | Technology |
|-----------|------------|
| Frontend | Nginx (Alpine) |
| Backend | Node.js, Express |
| Database | MongoDB |
| Containerization | Docker |
| Orchestration | Docker Compose |
| Language | JavaScript |

---

# 📁 Project Structure

```text
docker-multi-tier-app/
│
├── backend/
│   ├── src/
│   │   └── server.js
│   ├── Dockerfile
│   ├── package.json
│   └── .dockerignore
│
├── frontend/
│   ├── src/
│   │   └── index.html
│   ├── Dockerfile
│   └── .dockerignore
│
├── .env
├── docker-compose.yml
└── README.md
```

---

# ⚙️ Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

MONGO_ROOT_USER=admin
MONGO_ROOT_PASSWORD=supersecurepassword

MONGO_URI=mongodb://admin:supersecurepassword@database:27017/mydb?authSource=admin
```

---

# 🚀 Getting Started

## 1. Clone Repository

```bash
git clone https://github.com/aadityapalsagwan/docker-multi-tier-app.git

cd docker-multi-tier-app
```

---

## 2. Build Containers

```bash
docker compose build
```

---

## 3. Start Application

```bash
docker compose up -d
```

---

## 4. Verify Running Containers

```bash
docker compose ps
```

View logs:

```bash
docker compose logs -f
```

---

# 🌐 Application URLs

| Service | URL |
|----------|-----|
| Frontend | http://localhost:8080 |
| Backend API | http://localhost:5000 |
| Health Check | http://localhost:5000/api/health |

Expected response:

```json
{
  "status": "Healthy",
  "message": "Hello from the Dockerized Backend API!",
  "database_status": "Connected"
}
```

---

# 🧹 Cleanup

Stop containers:

```bash
docker compose down
```

Remove containers and volumes:

```bash
docker compose down -v
```

---

# 📖 Useful Docker Commands

```bash
docker compose ps

docker compose logs -f

docker compose restart

docker compose down

docker compose down -v
```

---

# 📚 Learning Outcomes

This project demonstrates:

- Docker Image Creation
- Multi-stage Docker Builds
- Docker Compose
- Container Networking
- Named Volumes
- Environment Variables
- MongoDB Integration
- REST API Development
- Nginx Configuration
- Production-ready Project Structure

---

# 👨‍💻 Author

**Aaditya Pal**

Cloud & DevOps Engineer

---

## 🌐 Connect with Me

**GitHub**

https://github.com/aadityapalsagwan

**LinkedIn**

https://www.linkedin.com/in/aadityapalsagwan

---

⭐ If you found this project helpful, consider giving it a star!