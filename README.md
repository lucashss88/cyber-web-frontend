
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

Follow the steps below to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/danielacvmelo/cyber-web-frontend.git
cd cyber-web-frontend
````

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root of the project and add the required environment variables:

Example:
```env
VITE_API_URL=http://localhost:3001
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

> ⚠️ Make sure the [Cyber Web Backend](https://github.com/lucashss88/cyber-web-backend.git) is running locally or update the URL above with the deployed API.
> 
> 🔑 Get your Clerk keys from [Clerk Dashboard](https://dashboard.clerk.com/) for authentication features.

### 4. Start the development server

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

---

## Build and Preview

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

* **Tailwind CSS Extension (VS Code):**
  Optional, but recommended. It provides class name autocompletion and syntax highlighting.
* **PostCSS:**
  Already included and configured in the project. No extra installation needed by the user.
* **Authentication:**
  Clerk is configured for user management. Make sure to set up your Clerk project and add the publishable key to your environment variables.

---

## Frontend & Backend

* **Backend:** [Cyber Web Backend](https://github.com/lucashss88/cyber-web-backend.git)
* **Frontend:** [Cyber Web Frontend](https://github.com/danielacvmelo/cyber-web-frontend.git)

---

## Authors

* [@lucashss88](https://github.com/lucashss88)
* [@danielacvmelo](https://github.com/danielacvmelo)
* [@edgarneto12](https://github.com/edgarneto12)
* [@VitorBeckenkamp](https://github.com/VitorBeckenkamp)
* [@Sandro-A-Moraes](https://github.com/Sandro-A-Moraes)

