# SWYNEX Internship - Task 1 Submission Kit

This guide provides everything you need to complete and submit **Task 1: Project Architecture** on the SWYNEX portal and LinkedIn.

---

## 📋 Submission Checklist
- [x] Full-Stack Application Architecture Defined (`ARCHITECTURE.md`)
- [x] Relational Database Models & Schema Designed (`docs/schema.sql` & Prisma)
- [x] RESTful API Routes Defined (`docs/api-spec.json` & backend controllers)
- [x] Frontend Screens & Wireframes Specified (`docs/wireframes.md` & React client)
- [x] Starter Repository Code Built (`backend/`, `frontend/`, `docker-compose.yml`)
- [ ] Push repository to GitHub named `SWYNEX-Project-Architecture`
- [ ] Record a 60–90 second video explanation or demo
- [ ] Publish LinkedIn explanation post mentioning **@SWYNEX Technologies**
- [ ] Submit both URLs on the SWYNEX submission portal

---

## 1. 🚀 How to Push to GitHub

Follow these steps in your terminal inside `h:\swynex`:

```bash
# 1. Initialize git (if not already done)
git init

# 2. Add all files to staging
git add .

# 3. Create your initial commit
git commit -m "feat: complete Task 1 project architecture and starter repository for SWYNEX Technologies"

# 4. Set the default branch to main
git branch -M main

# 5. Create a new public repository on GitHub named:
#    SWYNEX-Project-Architecture
#    URL will look like: https://github.com/Catdas/SWYNEX-Project-Architecture.git

# 6. Link your local repo to GitHub:
git remote add origin https://github.com/Catdas/SWYNEX-Project-Architecture.git

# 7. Push the code to GitHub:
git push -u origin main
```

Your **Task submission link** will be:
`https://github.com/Catdas/SWYNEX-Project-Architecture`

---

## 2. 📱 Ready-to-Publish LinkedIn Post

Copy and paste the template below into your LinkedIn post. Be sure to select the official **@SWYNEX Technologies** company page when typing the mention!

```markdown
🚀 Excited to share that I have completed Task 1 of my internship with @SWYNEX Technologies!

For this milestone, I planned and designed the full-stack architecture for "TaskFlow" — a modern, collaborative Agile Project & Task Management Platform built for high-velocity software engineering teams.

🔑 Key Architecture Highlights:
• 🏗️ System Architecture: Designed a scalable 3-tier client-server system featuring a React 18 + TypeScript frontend, a modular Node.js/Express REST API backend, and multi-container Docker Compose orchestration.
• 🗄️ Relational Data Modeling: Architected normalized PostgreSQL 16 schemas (Users, Workspaces, Projects, Tasks, Comments, and Activity Audit Logs) with strict ACID guarantees, foreign keys, and optimized indexing.
• 📡 RESTful API Gateway: Defined complete versioned endpoints (/api/v1) adhering to REST conventions, JWT HMAC-SHA256 authentication, and role-based access control (RBAC).
• 🎨 Frontend Architecture: Designed responsive Kanban sprint workflows, task detail modals, and sprint velocity analytics dashboards using Tailwind CSS.
• 🛡️ Non-Functional Architecture: Incorporated OWASP security best practices, bcrypt password hashing, CORS protection, and Redis caching.

💡 This task gave me hands-on experience in high-level system design, decoupling business logic, and architecting production-grade software before writing code.

Check out the full architecture document and starter repository here:
👉 https://github.com/Catdas/SWYNEX-Project-Architecture

A big thank you to @SWYNEX Technologies for this incredible learning opportunity!

#SWYNEX #Internship #SystemDesign #SoftwareArchitecture #FullStackDevelopment #WebDevelopment #TypeScript #React #NodeJS #PostgreSQL #SoftwareEngineering
```

---

## 3. 🎥 60–90 Second Video Explanation Script

You can record this video using **Loom**, **OBS Studio**, or your smartphone/webcam while screen-sharing your repository or browser:

### Video Script / Walkthrough:

- **[0:00 - 0:15] Introduction:**
  > *"Hello everyone! I'm Tharun, and today I'm presenting Task 1 of my internship at SWYNEX Technologies: Full-Stack Project Architecture."*

- **[0:15 - 0:35] Product Concept & Problem:**
  > *"I planned and architected **TaskFlow**, a collaborative agile project management platform designed to help development teams organize sprints, manage kanban task boards, and measure team velocity without tool fragmentation."*

- **[0:35 - 0:55] System Design & Database Schema:**
  > *"Here in the architecture document, I've outlined a 3-tier system: a React + TypeScript frontend, a RESTful Node.js and Express backend, and a PostgreSQL relational database managed with Prisma ORM.*
  > *Our ERD contains 7 core entities: Users, Workspaces for multi-tenancy, Projects, Tasks with priority levels and story points, Comments, and Activity Audit Logs."*

- **[0:55 - 1:15] API & Security:**
  > *"All API routes are standardized under `/api/v1`, secured with JWT token authentication and Role-Based Access Control. I also integrated Redis for caching and Docker Compose for one-command containerization."*

- **[1:15 - 1:30] Conclusion & Wrap-up:**
  > *"The starter repository is complete with both backend and frontend boilerplates ready to run. Thank you to SWYNEX Technologies for this opportunity!"*

---

## 4. 📤 Final Submission Form Details

When submitting on the SWYNEX portal:
1. **Task submission link \*:**
   `https://github.com/Catdas/SWYNEX-Project-Architecture`
2. **LinkedIn explanation post link \*:**
   `https://www.linkedin.com/posts/<YOUR_POST_ID>`
3. Click **Submit task**!
