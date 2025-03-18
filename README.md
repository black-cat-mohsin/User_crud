### Naming convention for this Projects

1. Folder & Non- Component file Name: `kebab-case` --/user-card
2. Component file and Component Name: `PascalCase` --LogInForm

3. Function and normal variables : `camelCase` -- fetchUser(), userNames,

4. Constant Variable: `UPPER_CASE_SNAKE_CASE`

### Various types of naming conventtions:

- **Pascal Case** : `PascalCase -- Ex: LogingForm, AuthContext`
- **Camel Case** : `camelCase -- Ex: firstName, lastName`
- **Snake Case** : `snake_case -- Ex: first_name, last_name`
- **Screaming Snake Case**: `SCREAMING_SNAKE_CASE -- Ex: FIRST_NAME, LAST_NAME`
- **Kebab Case** : `kebab-case -- Ex: first-name, last-name`

## Suggested Project Structure from Claude AI

#### This is a Barrel Export Pattern with Three-File-Component Pattern

my-react-app/
│── public/  
│── src/
│ ├── assets/  
│ ├── components/  
│ │ ├── UserCard/  
│ │ │ ├── UserCard.jsx
│ │ │ ├── UserCard.module.css
│ │ │ ├── UserCard.test.jsx
│ │ │ ├── index.jsx # Barrel Export
│ │ ├── Modal/
│ │ │ ├── Modal.jsx
│ │ │ ├── Modal.module.css
│ │ │ ├── Modal.test.jsx
│ │ │ ├── index.jsx
│ │ ├── Button/
│ │ │ ├── Button.jsx
│ │ │ ├── Button.module.css
│ │ │ ├── Button.test.jsx
│ │ │ ├── index.jsx
│ ├── pages/  
│ │ ├── Login/  
│ │ │ ├── Login.jsx
│ │ │ ├── Login.module.css
│ │ │ ├── Login.test.jsx
│ │ │ ├── index.jsx
│ │ ├── Signup/  
│ │ │ ├── Signup.jsx
│ │ │ ├── Signup.module.css
│ │ │ ├── Signup.test.jsx
│ │ │ ├── index.jsx
│ │ ├── Dashboard/  
│ │ │ ├── Dashboard.jsx
│ │ │ ├── Dashboard.module.css
│ │ │ ├── Dashboard.test.jsx
│ │ │ ├── index.jsx
│ ├── layouts/  
│ │ ├── AuthLayout.jsx  
│ │ ├── MainLayout.jsx  
│ │ ├── index.jsx # Barrel Export
│ ├── hooks/  
│ │ ├── useAuth.js  
│ │ ├── index.js # Barrel Export for Hooks
│ ├── context/  
│ │ ├── AuthContext.js  
│ │ ├── index.js # Barrel Export for Context
│ ├── services/  
│ │ ├── authService.js  
│ │ ├── userService.js  
│ │ ├── index.js # Barrel Export for Services
│ ├── routes/  
│ │ ├── AppRouter.jsx  
│ │ ├── index.jsx # Barrel Export for Routes
│ ├── styles/  
│ │ ├── global.css  
│ │ ├── variables.css  
│ ├── App.jsx  
│ ├── main.jsx  
│── .env  
│── package.json  
│── vite.config.js
