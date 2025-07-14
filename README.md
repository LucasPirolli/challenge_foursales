# Foursales Challenge

This project is a user management application developed as a technical challenge for Foursales. It demonstrates skills in React, Redux, Redux-Saga, TypeScript, and styled-components, with a clean and modular architecture.

## Features

- List and search users with debounce
- Favorite/unfavorite users
- View detailed user information
- Fast navigation with React Router
- Global state management with Redux Toolkit
- Side effects handled via Redux-Saga
- Fully styled with styled-components

## Tech Stack

- **React**
- **TypeScript**
- **Redux Toolkit**
- **Redux-Saga**
- **Styled-components**
- **React Router DOM**
- **Lodash.debounce**
- **JSONPlaceholder API** (mock data)

## Project Structure

```
src/
├── api/             # API service abstraction
├── assets/          # Static files like logos and icons
├── components/      # Reusable UI components
├── features/        # Redux slices and sagas for users & favorites
├── hooks/           # Custom React hooks
├── pages/           # Main views (Home, Favorites, UserDetails)
├── styles/          # Global and component-level styles
├── types/           # TypeScript type definitions
├── store/           # Redux store setup
└── App.tsx          # Application root
```

## Getting Started

### Prerequisites

- Node.js (LTS version)
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/LucasPirolli/challenge_foursales
cd challenge_foursales

# 2. Install dependencies
npm install

# 3. Run the application
npm run dev
```

_Challenge completed with attention to code quality, scalability, and modern React architecture._

