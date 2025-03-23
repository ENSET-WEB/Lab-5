# Authentication Applications

This repository contains two separate authentication applications built using **React** and **Angular**. Both applications implement user authentication features such as signup, login, and protected routes. A mock backend is provided using **JSON Server** to simulate user data storage.

## Applications Overview

### 1. Authentication Application with React

- **Framework**: React
- **Language**: TypeScript
- **Build Tool**: Vite
- **Features**:
  - User signup and login.
  - Protected routes using `ProtectedRoute` component.
  - Authentication state management with React Context API.
  - Responsive design with CSS.
  - Mock backend using JSON Server.
- **How to Run**:
  1. Install dependencies: `npm install`
  2. Start the mock backend: `npm run json-server`
  3. Start the development server: `npm run dev`
  4. Access the app at `http://localhost:5173`.

### 2. Authentication Application with Angular

- **Framework**: Angular
- **Language**: TypeScript
- **Features**:
  - User signup and login.
  - Protected routes using `AuthGuard`.
  - Authentication state management with `AuthService`.
  - Global and page-specific styling with CSS.
  - Mock backend using JSON Server.
- **How to Run**:
  1. Install dependencies: `ng serve`
  2. Start the mock backend: `npm run json-server`
  3. Start the development server: `npm start`
  4. Access the app at `http://localhost:4200`.

## Shared Features

- **Mock Backend**: Both applications use JSON Server to simulate a backend for user data.
- **User Authentication**: Includes signup, login, and protected routes.
- **Styling**: CSS is used for both global and page-specific styles.

## Folder Structure

```
TP5/
├── Auth-App-React/         # React application
│   ├── src/                # Source code
│   ├── db/                 # Mock backend data
│   ├── package.json        # Project metadata and dependencies
│   └── README.md           # React-specific documentation
├── Authentication-Angular/ # Angular application
│   ├── src/                # Source code
│   ├── package.json        # Project metadata and dependencies
│   └── README.md           # Angular-specific documentation
├── Database/ # Angular application
│   ├── db.json                 # Shared mock backend data
└── README.md               # General documentation
```

## Summary

### React Application

**Pros**:

- Lightweight and fast due to Vite build tool.
- Simple state management using Context API.
- Easier to set up and customize for small to medium projects.

**Cons**:

- Requires additional libraries (e.g., Formik, Yup) for form handling and validation.
- May require more effort for complex state management compared to Angular.

### Angular Application

**Pros**:

- Built-in tools for state management (`AuthService`) and routing (`AuthGuard`).
- Strongly opinionated framework with a structured architecture.
- Better suited for large-scale applications.

**Cons**:

- Heavier and slower to build compared to React with Vite.
- Steeper learning curve due to its complexity and extensive features.
