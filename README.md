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
   Ensure `.env` file exists with:

```env
VITE_API_URL=http://localhost:3001
VITE_CLERK_PUBLISHABLE_KEY=pk_test_cmVsZXZhbnQtdG9hZC04OS5jbGVyay5hY2NvdW50cy5kZXYk
VITE_ENVIRONMENT=local
```

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

> ⚠️ **Backend Required:** Make sure [Cyber Web Backend](https://github.com/lucashss88/cyber-web-backend.git) is running on port 3001

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

---

## AWS Deploy

### Environment Setup

The project supports multiple environments:

- **Local Development**: `npm run dev` (uses `.env.local`)
- **Production**: `npm run prod` (uses `.env.prod`)

### Environment Files

**`.env`**:

```env
VITE_API_URL=http://localhost:3001
VITE_CLERK_PUBLISHABLE_KEY=pk_test_ZXh0cmEtcmF2ZW4tNzEuY2xlcmsuYWNjb3VudHMuZGV2JA
VITE_ENVIRONMENT=local
```

**`.env.local`** (Development):

```env
VITE_API_URL=http://localhost:3001
VITE_CLERK_PUBLISHABLE_KEY=your_local_clerk_key
VITE_ENVIRONMENT=local
```

**`.env.prod`** (Production):

```env
VITE_API_URL=http://3.150.125.39:3001
VITE_CLERK_PUBLISHABLE_KEY=pk_test_ZXh0cmEtcmF2ZW4tNzEuY2xlcmsuYWNjb3VudHMuZGV2JA
VITE_ENVIRONMENT=production
VITE_S3_BUCKET_URL=https://cyber-web--lhss-products-images.s3.us-east-2.amazonaws.com
```

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
   npm run docker:prod
   ```

### URLs de Acesso:
- **Frontend**: http://3.150.125.39:5173
- **Backend**: http://3.150.125.39:3001
- **API**: http://3.150.125.39:3001/api

3. **Configure Security Groups**:
   - Port 80 (HTTP)
   - Port 443 (HTTPS)
   - Port 22 (SSH)
   - Port 3001 (Backend API)

---

## Frontend & Backend

- **Backend:** [Cyber Web Backend](https://github.com/lucashss88/cyber-web-backend.git)
- **Frontend:** [Cyber Web Frontend](https://github.com/danielacvmelo/cyber-web-frontend.git)

---

## Authors

- [@lucashss88](https://github.com/lucashss88)
- [@danielacvmelo](https://github.com/danielacvmelo)
- [@edgarneto12](https://github.com/edgarneto12)
- [@VitorBeckenkamp](https://github.com/VitorBeckenkamp)
- [@Sandro-A-Moraes](https://github.com/Sandro-A-Moraes)
