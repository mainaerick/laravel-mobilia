# Laravel Inertia React TypeScript Project

This repository contains a modern **Laravel** application integrated with **Inertia.js**, **React**, and **TypeScript**. The project leverages Laravel Sail for local development, a MySQL database, and other services such as Redis and Mailpit.
Here are some screenshots showcasing the Mobilia project:

## Home Page
<table>
  <tr>
    <td align="center">
      <img src="Mobilia/Screenshot 2024-12-15 140356.png" alt="Home Page" width="200px">
      <br>
    </td>
    <td align="center">
      <img src="Mobilia/Screenshot 2024-12-15 140447.png" alt="Features Section" width="200px">
      <br>
    </td>
    <td align="center">
      <img src="Mobilia/Screenshot 2024-12-15 140503.png" alt="Contact Page" width="200px">
      <br>
    </td>
  </tr>
</table>

## Shop Page
<table>
  <tr>
    <td align="center">
      <img src="Mobilia/Screenshot 2024-12-15 140520.png" alt="Home Page" width="200px">
      <br>
    </td>
  </tr>
</table>

## Product View Page
<table>
  <tr>
    <td align="center">
      <img src="Mobilia/Screenshot 2024-12-15 140553.png" alt="Home Page" width="200px">
      <br>
    </td>
  </tr>
</table>

## Cart Page
<table>
  <tr>
    <td align="center">
      <img src="Mobilia/Screenshot 2024-12-15 140614.png" alt="Home Page" width="200px">
      <br>
    </td>
  </tr>
</table>
---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Prerequisites](#prerequisites)
4. [Local Development Setup](#local-development-setup)
5. [Project Structure](#project-structure)
6. [Available Scripts](#available-scripts)
7. [Environment Configuration](#environment-configuration)
8. [Image Management Features](#image-management-features)
9. [Database Migrations](#database-migrations)
10. [Deployment](#deployment)
11. [License](#license)

---

## 1. Project Overview

This project provides a **single-page application (SPA)** using Laravel as the backend and React.js as the frontend framework. Inertia.js is used to bridge Laravel and React seamlessly, enabling a smooth development experience with modern web technologies.

Key Features:
- Laravel for robust backend logic.
- React with TypeScript for strongly-typed and maintainable frontend development.
- Inertia.js for seamless server-side rendering and frontend communication.
- Laravel Sail for containerized local development.
- Image management with previews, uploads, and default settings.

---

## 2. Technologies Used

- **Laravel**: PHP framework for backend development
- **Inertia.js**: Server-side rendering without a full API
- **React.js**: Frontend library for building the UI
- **TypeScript**: Static typing for JavaScript
- **Laravel Sail**: Docker-based development environment
- **MySQL**: Relational database
- **Redis**: Caching layer
- **Mailpit**: Email testing service
- **Vite**: Build tool for modern frontend development

---

## 3. Prerequisites

Before starting the project, ensure you have the following installed:

- **Docker** & **Docker Compose**: For Sail-based development
- **Node.js** & **npm/yarn**: For frontend package management
- **Composer**: PHP dependency manager

---

## 4. Local Development Setup

Follow these steps to set up the project locally:

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd <project-directory>
```

### Step 2: Install Backend Dependencies

```bash
composer install
```

### Step 3: Start Laravel Sail

```bash
./vendor/bin/sail up
```
> This will start Docker containers for MySQL, Redis, and other services defined in the `docker-compose.yml`.

### Step 4: Install Frontend Dependencies

```bash
npm install
```

### Step 5: Build Frontend Assets

```bash
npm run dev
```

### Step 6: Configure Environment Variables

Copy the example `.env` file:

```bash
cp .env.example .env
```

Update the `.env` file with database credentials and other configurations:

```dotenv
APP_NAME=Laravel
APP_URL=http://localhost
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

### Step 7: Run Migrations

```bash
./vendor/bin/sail artisan migrate
```

### Step 8: Serve the Application

Visit the application at:

```
http://localhost
```

---

## 5. Project Structure

```plaintext
├── app/                    # Laravel backend files
├── resources/js/           # React frontend code
│   ├── Components/         # Reusable React components
│   ├── Pages/              # Inertia.js pages
│   ├── hooks/              # Custom hooks
│   ├── routes/             # Frontend routes (Inertia)
│   ├── types/              # TypeScript types
│   └── utils/              # Utility functions
├── routes/web.php          # Laravel routes (Inertia setup)
├── database/               # Migrations, seeders, and factories
├── public/                 # Public assets
├── .env                    # Environment configuration
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── docker-compose.yml      # Laravel Sail setup
```

---

## 6. Available Scripts

### Backend Commands

- **Run Laravel Artisan Commands**:
  ```bash
  ./vendor/bin/sail artisan <command>
  ```
- **Run Migrations**:
  ```bash
  ./vendor/bin/sail artisan migrate
  ```

### Frontend Commands

- **Development Server**:
  ```bash
  npm run dev
  ```
- **Production Build**:
  ```bash
  npm run build
  ```
- **Type Checking**:
  ```bash
  npm run type-check
  ```

---

## 7. Environment Configuration

Environment variables are stored in the `.env` file. Key variables include:

```dotenv
APP_NAME=Laravel
APP_URL=http://localhost
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=example_db
DB_USERNAME=root
DB_PASSWORD=secret
```

---

## 8. Image Management Features

This project includes the following image management features:

1. **Image Upload**: Upload and store any image format.
2. **Image Preview**: Preview uploaded images before saving.
3. **Validation**: Enforce size and format restrictions.
4. **Reverting Changes**: Reset image changes or restore defaults.

> Images are stored securely in the database with appropriate validation.

---

## 9. Database Migrations

Run the following command to create database tables:

```bash
./vendor/bin/sail artisan migrate
```

To rollback migrations:

```bash
./vendor/bin/sail artisan migrate:rollback
```

---

## 10. Deployment

To deploy the application, follow these steps:

1. **Production Build**:
   ```bash
   npm run build
   ```
2. **Optimize Laravel Application**:
   ```bash
   ./vendor/bin/sail artisan optimize
   ```
3. **Deploy to Server**: Use your preferred deployment method (e.g., Forge, Docker, AWS).

---



