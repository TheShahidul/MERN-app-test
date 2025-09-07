# BP Bazar MERN Project

## Table of Contents

- Project Overview
- Tech Stack
- Architecture
- Folder Structure
- Key Features
- Backend Details
- Frontend Details
- Authentication & Security
- State Management
- Styling & UI
- Setup & Installation
- Development Workflow
- Important Files
- Future Improvements
- License

---

## Project Overview

This project is a full-stack e-commerce web application built using the MERN stack (MongoDB, Express.js, React, Node.js) with TypeScript, Redux Toolkit, and Tailwind CSS. It demonstrates modern web development practices, including authentication, state management, RESTful APIs, and a responsive, component-driven UI. The application allows users to browse products, manage a shopping cart, and perform authentication.

---

## Tech Stack

- Frontend: React (TypeScript), Redux Toolkit, Vite, Tailwind CSS
- Backend: Node.js, Express.js, TypeScript
- Database: MongoDB (Mongoose ODM)
- Authentication: JWT, bcrypt, custom Express middleware
- Build Tools: Vite, PostCSS
- Linting & Formatting: ESLint, Prettier

---

## Architecture

- Monorepo: Contains both frontend and backend in a single repository for easier development and deployment.
- API-Driven: The backend exposes RESTful endpoints consumed by the React frontend.
- Type Safety: TypeScript is used throughout for maintainability and scalability.
- State Management: Redux Toolkit centralizes application state, especially for cart and user authentication.
- Responsive UI: Tailwind CSS ensures mobile-first, adaptive design.

---

## Folder Structure

```
MERN/
│
├── src/                # Frontend source code
│   ├── app/            # Redux store configuration
│   ├── assets/         # Images and static assets
│   ├── components/     # Reusable UI components
│   ├── features/       # Redux slices (e.g., cart)
│   ├── pages/          # Page components (Dashboard, Shop, Auth, Home)
│   └── api.ts          # API calls to backend
│
├── MERN-app/
│   └── server/         # Backend source code
│       ├── src/
│       │   ├── config/         # Database configuration
│       │   ├── middleware/     # Custom Express middleware (auth, error handling)
│       │   ├── models/         # Mongoose models (User, Product, etc.)
│       │   ├── routes/         # Express route handlers (auth, products)
│       │   └── types/          # Type definitions for Express and models
│       ├── server.js           # Server entry (JavaScript)
│       └── index.ts            # Server entry (TypeScript)
│
├── public/             # Static files
├── package.json        # Project metadata and scripts
├── tailwind.config.js  # Tailwind CSS configuration
├── vite.config.ts      # Vite configuration
└── README.md           # Project documentation
```

---

## Key Features

- User Authentication: Secure login and registration using JWT and bcrypt.
- Product Catalog: Browse products with images, categories, and details.
- Shopping Cart: Add, remove, and update products in the cart; persistent state via Redux.
- Responsive Design: Mobile-friendly layouts and components.
- Protected Routes: Only authenticated users can access certain pages (e.g., dashboard).
- Custom Middleware: Handles authentication and error responses on the backend.
- TypeScript Everywhere: Ensures type safety and reduces runtime errors.

---

## Backend Details

- Express Server: Handles API requests, serves static files, and manages middleware.
- MongoDB via Mongoose: Stores user and product data; schemas defined in models/.
- Authentication: 
  - JWT tokens issued on login/signup.
  - Passwords hashed with bcrypt.
  - Middleware (authMiddleware.ts) protects sensitive routes.
- Routes:
  - /api/auth: User registration, login, profile.
  - /api/products: Product listing, details (future: CRUD for admin).
- Config: 
  - db.ts manages MongoDB connection.
  - Environment variables stored in .env.

---

## Frontend Details

- React with TypeScript: Component-based architecture for maintainability.
- Redux Toolkit: Centralized state for cart, user, and products.
- Routing: Page navigation via React Router (if used).
- Components: 
  - ProductCard, LoadingSpinner, NavBar, Footer, carousels, banners, etc.
- Pages: 
  - DashboardPage, ShopDashboard, SigninPage, SignupPage, HomePage (with subcomponents).
- API Integration: 
  - api.ts handles all HTTP requests to backend endpoints.
- Assets: 
  - Organized images for products, shop logos, etc.

---

## Authentication & Security

- JWT Authentication: 
  - Tokens stored in HTTP-only cookies or localStorage.
  - Middleware checks token validity for protected routes.
- Password Hashing: 
  - User passwords are hashed before storage.
- Role-Based Access (future): 
  - Admin vs. user permissions for product management.

---

## State Management

- Redux Toolkit: 
  - Slices for cart, user, products.
  - Actions and reducers for updating state.
- Provider Setup: 
  - main.tsx wraps <App /> with Redux <Provider>.

---

## Styling & UI

- Tailwind CSS: 
  - Utility-first CSS for rapid UI development.
  - Custom configuration in tailwind.config.js.
- Responsive Components: 
  - Carousels, grids, banners, and sidebars.
- Modern UX: 
  - Loading spinners, call-to-action sections, trending products, and special offers.

---

## Setup & Installation

### Backend

```
cd MERN-app/server
npm install
npm run dev   # Starts server with nodemon (TypeScript)
```

### Frontend

```
npm install
npm run dev   # Starts Vite development server
```

### Environment Variables

Create a .env file in MERN-app/server/ with:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

---

## Development Workflow

- Linting: Run npm run lint to check code quality.
- Formatting: Use Prettier for consistent code style.
- Hot Reloading: Vite and nodemon enable fast development cycles.
- Type Checking: TypeScript ensures type safety across the stack.

---

## Important Files

- src/main.tsx: React entry point, Redux provider setup.
- src/app/store.ts: Redux store configuration.
- src/features/cart/cartSlice.ts: Cart state management.
- server/src/index.ts: Express server entry (TypeScript).
- server/src/models/User.ts: User schema and authentication logic.
- server/src/routes/auth.ts: Auth routes (login, signup).
- server/src/middleware/authMiddleware.ts: JWT authentication middleware.
- server/src/config/db.ts: MongoDB connection logic.

---

## Future Improvements

- Product management (CRUD for admin)
- Payment gateway integration
- User roles and permissions
- Order history and tracking
- Unit and integration tests
- Enhanced error handling and logging

---

## License

MIT

---

This README is designed to provide a complete overview for AI models to analyze your project’s architecture, tech stack, and implementation details. Expand or modify sections as needed for your report or documentation.
