#!/bin/bash

echo "Starting Docker deployment..."

echo "Stopping existing containers..."
docker-compose down 2>/dev/null || true

echo "Building Docker image..."
docker-compose build --no-cache

echo "Starting containers..."
docker-compose up -d

echo "Cleaning up unused images..."
docker image prune -f

echo "Deploy completed! Application running on port 80"
docker-compose ps