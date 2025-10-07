# 🖥️ CYBER WEB FRONTEND

## Description

**CYBER WEB FRONTEND** is the user interface of the Cyber Web project.  
It provides the client-side experience for browsing, filtering, and purchasing products, fully integrated with the [Cyber Web Backend](https://github.com/lucashss88/cyber-web-backend.git).

---

## Main Features

- Product listing with pagination and sorting
- Filters by price, brand, category, and tags
- **Shopping Cart System** with localStorage persistence and quantity management
- **Complete Checkout Flow** with multi-step process (Address, Shipping, Payment)
- **Address Management** with CRUD operations and default addresses
- **Payment Processing** with form validation and multiple payment methods
- **Order Confirmation** with order details and tracking information
- **User Authentication** with Clerk integration and protected routes
- **Cart Notifications** with visual indicators in header
- Responsive and modern design with Tailwind CSS
- Integration with the Cyber Web API
- Interactive product cards and shopping actions

---

## Tech Stack

- **React (Vite)** – Fast frontend framework
- **TypeScript** – Static typing and safety
- **Tailwind CSS** – Utility-first CSS framework
- **Clerk** – Authentication and user management
- **React Router** – Client-side routing
- **Context API** – State management for cart and order data
- **PostCSS & Autoprefixer** – CSS processing (pre-configured)

---

## Getting Started

### Development (Local)

#### Option 1: Node.js Development

1. **Clone and install:**

```bash
git clone https://github.com/danielacvmelo/cyber-web-frontend.git
cd cyber-web-frontend
npm install
```

2. **Configure environment:**
   Ensure `.env` file exists with required environment variables for local development.

3. **Start development server:**

```bash
npm run dev
```

App available at: `http://localhost:5173`

#### Option 2: Docker Development

1. **Start with Docker:**

```bash
npm run docker:dev
```

App available at: `http://localhost:5173`

2. **Stop Docker:**

```bash
npm run docker:stop
```

> ⚠️ **Backend Required:** Make sure [Cyber Web Backend](https://github.com/lucashss88/cyber-web-back) is running on port 3001

---

## Production

### Docker Production (Standalone)

1. **Start production container:**

```bash
npm run docker:prod
```

App available at: `http://localhost:5173`

2. **Stop production container:**

```bash
npm run docker:stop-prod
```

### Build and Preview (Node.js)

Generate an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## E-commerce Features

### Shopping Cart

- Add/remove products with quantity management
- Persistent cart data using localStorage
- Real-time price calculations with taxes and shipping
- Visual cart indicator in header

### Checkout Process

1. **Address Step**: Select or add delivery addresses
2. **Shipping Step**: Choose shipping method and delivery options
3. **Payment Step**: Enter payment details with validation
4. **Order Confirmation**: Review order details and track order

### Authentication

- Secure user authentication with Clerk
- Protected checkout routes
- Automatic cart synchronization for authenticated users

### Address Management

- CRUD operations for user addresses
- Default addresses with backup system
- Address validation and formatting

---

## Development Notes

- **Tailwind CSS Extension (VS Code):**
  Optional, but recommended. It provides class name autocompletion and syntax highlighting.
- **PostCSS:**
  Already included and configured in the project. No extra installation needed by the user.
- **Authentication:**
  Clerk is configured for user management. Make sure to set up your Clerk project and add the publishable key to your environment variables.
- **CORS Configuration:**
  Production uses Vite proxy (`/api` → backend) to resolve CORS issues. Development can use direct URLs.

---

## AWS Deploy

### Environment Setup

The project supports multiple environments:

- **Local Development**: `npm run dev` (uses `.env.local`)
- **Production**: `npm run prod` (uses `.env.prod`)

### Environment Configuration

The project requires different environment variables for each environment:

**Development (`.env` / `.env.local`):**

- `VITE_API_URL`: Backend API URL (typically localhost:3001)
- `VITE_CLERK_PUBLISHABLE_KEY`: Clerk authentication key for development
- `VITE_ENVIRONMENT`: Environment identifier

**Production (`.env.prod`):**

- `VITE_API_URL`: Uses `/api` with Vite proxy to avoid CORS issues
- `VITE_CLERK_PUBLISHABLE_KEY`: Clerk authentication key for production
- `VITE_ENVIRONMENT`: Set to 'production'
- `VITE_S3_BUCKET_URL`: AWS S3 bucket URL for product images

> **Note:** Environment files are included in the repository with proper configurations.

### Available Scripts

| Script                     | Description                  | Port |
| -------------------------- | ---------------------------- | ---- |
| `npm run dev`              | Development server (Node.js) | 5173 |
| `npm run docker:dev`       | Development server (Docker)  | 5173 |
| `npm run docker:prod`      | Production server (Docker)   | 5173 |
| `npm run docker:stop`      | Stop development Docker      | -    |
| `npm run docker:stop-prod` | Stop production Docker       | -    |
| `npm run build`            | Build for production         | -    |
| `npm run preview`          | Preview production build     | 4173 |

### Deploy to EC2

1. **Upload files to EC2**:

   ```bash
   scp -r . ubuntu@3.150.125.39:/home/ubuntu/cyber-web-frontend
   ```

2. **Connect to EC2 and run production**:

   ```bash
   ssh ubuntu@3.150.125.39
   cd /home/ubuntu/cyber-web-frontend
   sudo docker-compose -f docker-compose.prod.yml up -d --build --no-cache
   ```

3. **Stop production**:

   ```bash
   sudo docker-compose -f docker-compose.prod.yml down
   ```

### URLs de Acesso:

- **Frontend**: http://3.150.125.39:5173
- **Backend**: http://3.150.125.39:3001
- **API**: http://3.150.125.39:3001/api

### Docker Commands (EC2)

**Production:**

```bash
# Start production
sudo docker-compose -f docker-compose.prod.yml up -d --build --no-cache

# Stop production
sudo docker-compose -f docker-compose.prod.yml down

# View logs
sudo docker-compose -f docker-compose.prod.yml logs -f

# Complete rebuild
sudo docker-compose -f docker-compose.prod.yml down
sudo docker system prune -f
sudo docker-compose -f docker-compose.prod.yml up -d --build --no-cache
```

**Development:**

```bash
# Start development
sudo docker-compose up -d --build --no-cache

# Stop development
sudo docker-compose down
```

4. **Configure Security Groups**:
   - Port 5173 (Frontend)
   - Port 22 (SSH)
   - Port 3001 (Backend API)

---

## Frontend & Backend

- **Backend:** [Cyber Web Backend](https://github.com/lucashss88/cyber-web-back.git)
- **Frontend:** [Cyber Web Frontend](https://github.com/lucashss88/cyber-web-frontend.git)

---

## Authors

- [@lucashss88](https://github.com/lucashss88)
