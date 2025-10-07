FROM node:20-alpine AS builder

WORKDIR /app

# Build arguments
ARG VITE_API_URL
ARG VITE_CLERK_PUBLISHABLE_KEY
ARG VITE_ENVIRONMENT
ARG VITE_S3_BUCKET_URL

# Set as environment variables
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_CLERK_PUBLISHABLE_KEY=$VITE_CLERK_PUBLISHABLE_KEY
ENV VITE_ENVIRONMENT=$VITE_ENVIRONMENT
ENV VITE_S3_BUCKET_URL=$VITE_S3_BUCKET_URL

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build:prod

FROM nginx:1.25.3-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]