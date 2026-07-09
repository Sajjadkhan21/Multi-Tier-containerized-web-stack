# --- Stage 1: Build/Prepare stage ---
FROM node:alpine AS builder
WORKDIR /app
COPY ./src ./src

# --- Stage 2: Production environment using Nginx ---
FROM nginx:alpine
# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*
# Copy static files from builder stage to nginx static directory
COPY --from=builder /app/src /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]