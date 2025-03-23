# Authentication Application with React, TypeScript, and Vite

This project is a simple authentication application built using **React**, **TypeScript**, and **Vite**. It includes features like user signup, login, and protected routes. The application uses **JSON Server** as a mock backend to store user data.

## Features

- **User Authentication**: Users can sign up and log in with their credentials.
- **Protected Routes**: Certain pages are accessible only to authenticated users.
- **State Management**: Authentication state is managed using React Context API.
- **Responsive Design**: The application is styled to look good on various screen sizes.
- **Mock Backend**: JSON Server is used to simulate a backend for user data.

## Project Structure

### Components and Pages

1. **`App.tsx`**:

   - The main entry point for the application.
   - Configures routes using `react-router-dom`.
   - Wraps the application with the `AuthProvider` for authentication state management.

2. **Pages**:

   - **`Login.tsx`**:
     - Allows users to log in by providing their username and password.
     - Validates credentials by querying the mock backend.
   - **`Signup.tsx`**:
     - Enables users to create an account by providing a username, email, and password.
     - Sends the data to the mock backend for storage.
   - **`Home.tsx`**:
     - A protected page accessible only to logged-in users.
     - Displays user information and provides a logout button.

3. **ProtectedRoute**:

   - A higher-order component that restricts access to certain routes based on the user's authentication status.

4. **AuthContext**:
   - Manages the authentication state (logged-in user) using React Context API.
   - Provides `login` and `logout` methods.

### Mock Backend

- **`db.json`**:
  - Stores user data in a JSON format.
  - Used by JSON Server to simulate a backend.

### Styling

- CSS files are used for styling individual pages (`Login.css`, `Signup.css`, `Home.css`) and global styles (`App.css`, `index.css`).

## How to Run the Project

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Start the Mock Backend**:

   ```bash
   npm run json-server
   ```

   This will start JSON Server on `http://localhost:5000`.

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## Key Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint to check for code quality.
- `npm run json-server`: Starts JSON Server to simulate a backend.

## Dependencies

- **React**: Frontend library for building user interfaces.
- **React Router**: For routing and navigation.
- **Axios**: For making HTTP requests.
- **Formik** and **Yup**: For form handling and validation.
- **JSON Server**: Mock backend for development.

## Folder Structure

```
Auth-App-React/
├── db/                     # Mock backend data
│   └── db.json
├── src/                    # Source code
│   ├── context/            # Context API for authentication
│   │   └── AuthContext.tsx
│   ├── pages/              # Application pages
│   │   ├── Login.tsx
│   │   ├── Signup.tsx
│   │   ├── Home.tsx
│   │   ├── Login.css
│   │   ├── Signup.css
│   │   └── Home.css
│   ├── routes/             # Protected route component
│   │   └── ProtectedRoute.tsx
│   ├── App.tsx             # Main application component
│   ├── App.css             # Global styles
│   ├── index.css           # Global styles
│   ├── main.tsx            # Application entry point
│   └── vite-env.d.ts       # TypeScript environment definitions
├── .gitignore              # Files to ignore in Git
├── package.json            # Project metadata and dependencies
├── tsconfig.json           # TypeScript configuration
├── tsconfig.app.json       # TypeScript configuration for the app
├── tsconfig.node.json      # TypeScript configuration for Node.js
├── vite.config.ts          # Vite configuration
└── README.md               # Project documentation
```
