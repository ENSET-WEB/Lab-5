# Authentication Application with Angular

This project is a simple authentication application built using **Angular** and **TypeScript**. It includes features like user signup, login, and protected routes. The application uses **JSON Server** as a mock backend to store user data.

## Features

- **User Authentication**: Users can sign up and log in with their credentials.
- **Protected Routes**: Certain pages are accessible only to authenticated users.
- **State Management**: Authentication state is managed using Angular services and `BehaviorSubject`.
- **Responsive Design**: The application is styled to look good on various screen sizes.
- **Mock Backend**: JSON Server is used to simulate a backend for user data.

## Project Structure

### Components and Pages

1. **`AppComponent`**:

   - The root component of the application.
   - Configures the router outlet for navigation.

2. **Pages**:

   - **`LoginComponent`**:
     - Allows users to log in by providing their username and password.
     - Validates credentials by querying the mock backend.
   - **`SignupComponent`**:
     - Enables users to create an account by providing a username, email, and password.
     - Sends the data to the mock backend for storage.
   - **`HomeComponent`**:
     - A protected page accessible only to logged-in users.
     - Displays user information and provides a logout button.

3. **AuthGuard**:

   - A route guard that restricts access to certain routes based on the user's authentication status.

4. **AuthService**:
   - Manages the authentication state (logged-in user) using `BehaviorSubject`.
   - Provides methods for login, signup, logout, and checking authentication status.

### Mock Backend

- **`db.json`**:
  - Stores user data in a JSON format.
  - Used by JSON Server to simulate a backend.

### Styling

- CSS files are used for styling individual pages (`login.component.css`, `signup.component.css`, `home.component.css`) and global styles (`styles.css`).

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
   npm start
   ```
   The application will be available at `http://localhost:4200`.

## Key Scripts

- `npm start`: Starts the Angular development server.
- `npm run build`: Builds the application for production.
- `npm run test`: Runs unit tests.
- `npm run json-server`: Starts JSON Server to simulate a backend.

## Dependencies

- **Angular**: Framework for building web applications.
- **RxJS**: For reactive programming and state management.
- **JSON Server**: Mock backend for development.

## Folder Structure

```
Authentication-Angular/
├── src/                    # Source code
│   ├── app/                # Application code
│   │   ├── components/     # Angular components
│   │   │   ├── login/      # Login page
│   │   │   ├── signup/     # Signup page
│   │   │   └── home/       # Home page
│   │   ├── services/       # Angular services
│   │   │   └── auth.service.ts
│   │   ├── guards/         # Route guards
│   │   │   └── auth.gards.ts
│   │   ├── models/         # Data models
│   │   │   └── user.model.ts
│   │   ├── app.routes.ts   # Application routes
│   │   ├── app.config.ts   # Application configuration
│   │   └── app.component.ts # Root component
│   ├── styles.css          # Global styles
│   ├── index.html          # Main HTML file
│   └── main.ts             # Application entry point
├── angular.json            # Angular CLI configuration
├── package.json            # Project metadata and dependencies
├── tsconfig.json           # TypeScript configuration
├── tsconfig.app.json       # TypeScript configuration for the app
├── tsconfig.spec.json      # TypeScript configuration for tests
└── README.md               # Project documentation
```
