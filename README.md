# SWYNEX-Project-Architecture

[![SWYNEX Internship](https://img.shields.io/badge/SWYNEX-Internship%20Task%201-blue.svg)](https://swynex.tech)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL%2016-336791)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Container-Docker%20Compose-2496ED)](https://www.docker.com/)

> **Task 1 Submission: Full-Stack Application Architecture**  
> **Internship Track:** Full-Stack Web Development / Software Engineering  
> **Company:** SWYNEX Technologies  
> **Author:** Tharun M.  

---

## 🌟 Executive Summary

**TaskFlow** is a modern, collaborative Agile Project & Task Management Platform designed for engineering teams and agile squads. It combines the intuitive interaction of real-time Kanban sprint boards with enterprise-grade data isolation, role-based access control (RBAC), and team velocity analytics.

This repository contains the complete architectural specifications, relational data models (PostgreSQL + Prisma), RESTful API route definitions (Node.js/Express + TypeScript), interactive frontend wireframes (React + Tailwind CSS), and multi-container Docker deployment configs.

---

## 📐 Architecture Documentation Links

| Document | Purpose |
| :--- | :--- |
| 📄 [**ARCHITECTURE.md**](./ARCHITECTURE.md) | **Primary Architecture Specification**: System design, data models, API specs, security, and non-functional requirements. |
| 🗄️ [**docs/schema.sql**](./docs/schema.sql) | Production PostgreSQL DDL database schema with foreign keys and indexes. |
| 📡 [**docs/api-spec.json**](./docs/api-spec.json) | OpenAPI 3.0 REST API schema specification. |
| 🖼️ [**docs/wireframes.md**](./docs/wireframes.md) | Frontend screen layouts, component hierarchy, and user journeys. |
| 🐳 [**docker-compose.yml**](./docker-compose.yml) | Multi-container orchestration (PostgreSQL, Redis, Backend, Frontend). |
| 🚀 [**TASK_1_SUBMISSION_GUIDE.md**](./TASK_1_SUBMISSION_GUIDE.md) | GitHub push commands, LinkedIn post template, and video explanation script. |

---

## 🏗️ High-Level System Architecture

```mermaid
flowchart TD
    subgraph ClientLayer ["1. Presentation Layer (Frontend)"]
        SPA["React 18 + TypeScript SPA\n(Vite / Tailwind CSS)"]
        State["State Management\n(TanStack Query + Zustand)"]
        SPA <--> State
    end

    subgraph GatewayLayer ["2. Application Gateway & API Layer"]
        Nginx["Reverse Proxy / Nginx\n(SSL Termination, Rate Limiting)"]
        Express["Node.js / Express REST API\n(TypeScript)"]
        AuthMiddleware["JWT & RBAC Middleware"]
        Controller["Modular Route Controllers\n(Auth, Workspaces, Projects, Tasks)"]
        ServiceLayer["Business Logic Services Layer"]

        Nginx --> Express
        Express --> AuthMiddleware
        AuthMiddleware --> Controller
        Controller --> ServiceLayer
    end

    subgraph DataLayer ["3. Data & Storage Layer"]
        Prisma["Prisma ORM / Query Builder"]
        Postgres[("PostgreSQL 16 Relational DB\n(ACID, Foreign Keys, Indexes)")]
        Redis[("Redis In-Memory Cache\n(Session Store, Rate Limits, PubSub)")]

        ServiceLayer --> Prisma
        Prisma --> Postgres
        ServiceLayer <--> Redis
    end

    ClientLayer <-->|HTTPS / JSON REST API| Nginx
```

---

## 🗃️ Relational Entity-Relationship Diagram (ERD)

```mermaid
erDiagram
    USERS ||--o{ WORKSPACE_MEMBERS : "joins"
    USERS ||--o{ WORKSPACES : "owns"
    USERS ||--o{ PROJECTS : "leads"
    USERS ||--o{ TASKS : "reported_by"
    USERS ||--o{ TASKS : "assigned_to"
    USERS ||--o{ COMMENTS : "authors"
    USERS ||--o{ ACTIVITY_LOGS : "acts"

    WORKSPACES ||--|{ WORKSPACE_MEMBERS : "contains"
    WORKSPACES ||--o{ PROJECTS : "houses"
    WORKSPACES ||--o{ ACTIVITY_LOGS : "logs"

    PROJECTS ||--o{ TASKS : "tracks"

    TASKS ||--o{ COMMENTS : "has"

    USERS {
        uuid id PK
        varchar email UK
        varchar password_hash
        varchar full_name
        text avatar_url
        boolean is_active
        timestamp created_at
    }

    WORKSPACES {
        uuid id PK
        varchar name
        varchar slug UK
        uuid owner_id FK
    }

    PROJECTS {
        uuid id PK
        uuid workspace_id FK
        varchar name
        varchar key
        enum status
    }

    TASKS {
        uuid id PK
        uuid project_id FK
        int task_number
        varchar title
        enum status
        enum priority
        int points
    }
```

---

## 🚀 Quick Start & Local Setup

### Option 1: Run with Docker Compose (Recommended)
Clone the repository and run all services (Database, Redis, API, and Frontend) in a single command:

```bash
# Clone the repository
git clone https://github.com/Catdas/SWYNEX-Project-Architecture.git
cd SWYNEX-Project-Architecture

# Start all containers
docker-compose up --build
```
- **Frontend Web UI:** `http://localhost:5173`
- **Backend API:** `http://localhost:5000`
- **Healthcheck:** `http://localhost:5000/health`

---

### Option 2: Run Locally (Bare Metal)

#### Backend Setup:
```bash
cd backend
npm install
npm run build
npm start
```

#### Frontend Setup:
```bash
cd frontend
npm install
npm run dev
```

---

## 📂 Repository Structure

```
SWYNEX-Project-Architecture/
├── .env.example                       # Sample environment variables
├── .gitignore                         # Standard git ignore definitions
├── docker-compose.yml                 # Multi-container local orchestration
├── README.md                          # Project overview & quickstart
├── ARCHITECTURE.md                    # Core architecture design specification
├── TASK_1_SUBMISSION_GUIDE.md         # Submission links & LinkedIn post kit
├── docs/                              # Supplementary architecture artifacts
│   ├── api-spec.json                  # OpenAPI 3.0 REST route definitions
│   ├── schema.sql                     # Raw PostgreSQL DDL table definitions
│   └── wireframes.md                  # Screen-by-screen layouts & specs
├── backend/                           # Node.js + Express + TypeScript service
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   ├── prisma/
│   │   └── schema.prisma              # Prisma ORM schema
│   └── src/
│       ├── config/                    # Config & environment variables
│       ├── controllers/               # API endpoint business logic
│       ├── middlewares/               # JWT authentication & error handlers
│       ├── routes/                    # Modular Express routes
│       └── server.ts                  # Server entry point
└── frontend/                          # React + TypeScript + Tailwind CSS client
    ├── Dockerfile
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    ├── index.html
    └── src/
        ├── components/                # Navbar, Sidebar, KanbanBoard, TaskCard
        ├── pages/                     # Dashboard, Board, Analytics, Login
        ├── services/                  # API data clients & mock data
        ├── types/                     # Shared TypeScript data contracts
        ├── App.tsx                    # Main App router
        └── main.tsx                   # React root entry
```

---

## 🔒 Security & Best Practices
- **Authentication:** Stateless signed JSON Web Tokens (JWT) with HTTP-only refresh tokens.
- **Password Security:** Salted hashing with `bcrypt` (work factor 12).
- **Network Hardening:** `helmet` security headers, strict `cors` whitelist, and IP rate limiting with `express-rate-limit`.
- **Validation:** Strict schema enforcement via `zod` to prevent malformed payloads and injection attacks.

---

## 📝 Internship Submission Details
- **Program:** SWYNEX Technologies Internship Program
- **Task:** Task 1 - Project Architecture
- **Repository Name:** `SWYNEX-Project-Architecture`
