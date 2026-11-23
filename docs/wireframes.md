# TaskFlow - Frontend Screen Specifications & Wireframe Layouts

## Screen 1: Authentication & Onboarding (`/auth/login`, `/auth/register`)
- **Header**: Minimalist TaskFlow logo with theme switch (Dark/Light).
- **Center Card**:
  - Tab Switcher: "Sign In" / "Create Account"
  - Input Fields: Work Email, Password, Full Name (for registration).
  - Social Auth / Single Sign-On (Google / GitHub OAuth buttons).
  - Action Button: "Sign In to TaskFlow" / "Get Started Free".
  - Footer Links: "Forgot Password?", "Terms of Service".

```
+-------------------------------------------------------+
|  [Logo] TaskFlow                         [Theme Moon] |
+-------------------------------------------------------+
|                                                       |
|              +--------------------------+             |
|              |  [ Sign In ]  [Register] |             |
|              +--------------------------+             |
|              | Email Address            |             |
|              | [ user@swynex.tech     ] |             |
|              | Password                 |             |
|              | [ ******************** ] |             |
|              |                          |             |
|              | [ Log In ]               |             |
|              |                          |             |
|              | ------- or continue with ------ |      |
|              | [ G Google ]  [ Git GitHub ]    |      |
|              +--------------------------+             |
|                                                       |
+-------------------------------------------------------+
```

---

## Screen 2: Workspace & Project Dashboard (`/workspaces`)
- **Top Navigation**: Workspace Switcher dropdown, Global Search (`Cmd+K`), Notifications Bell, User Avatar menu.
- **Left Sidebar**:
  - Workspaces list
  - Projects list under active workspace
  - Quick filters ("Assigned to Me", "Starred Tasks", "Sprint Analytics")
- **Main Content**:
  - Welcome Banner with quick workspace metrics (Active Projects, Open Tasks, Sprint Velocity).
  - Project Cards grid: Project title, key (e.g. `SWYN`), team members avatars, completion progress bar, active task count.
  - "New Project" quick action button.

```
+-----------------------------------------------------------------------------+
| TaskFlow | [Workspace: SWYNEX Core v] | [Search Tasks (Ctrl+K)] | (Bell) (Avatar)
+-----------+-----------------------------------------------------------------+
| SIDEBAR   | Projects Overview                               [ + New Project ]
|           |                                                                  
| > Projects| +-----------------------+   +-----------------------+           
|   - Mobile| | Mobile Client (SWYN-M)|   | Cloud API (SWYN-API)  |           
|   - API   | | Status: ACTIVE        |   | Status: ACTIVE        |           
|   - Portal| | Progress: [====--] 65%|   | Progress: [========] 90% |        
|           | | 14 Open Tasks | 4 Devs|   | 3 Open Tasks  | 2 Devs|           
| > Insights| +-----------------------+   +-----------------------+           
|   - Sprints                                                                  
|   - Reports                                                                 
+-----------+-----------------------------------------------------------------+
```

---

## Screen 3: Interactive Agile Kanban Board (`/projects/:projectId/board`)
- **Board Controls**:
  - Filter by Member / Assignee
  - Filter by Priority (Low, Medium, High, Urgent)
  - Search keyword filter
  - View switcher: Kanban Board vs. List Table
  - "Create Task" button (`+ New Issue`)
- **Columns**:
  - `BACKLOG` (Items planned for future sprints)
  - `TO DO` (Committed items ready to be picked up)
  - `IN PROGRESS` (Actively being worked on)
  - `IN REVIEW` (Code review / QA verification)
  - `DONE` (Completed and closed)
- **Task Card UI**:
  - Priority badge (Color coded: Red = Urgent, Amber = High, Blue = Med, Slate = Low)
  - Task Key & Number (e.g., `SWYN-104`)
  - Title & short summary
  - Story point badge
  - Assignee avatar thumbnail & Due date indicator

```
+-----------------------------------------------------------------------------+
| Filter: [Assignee: All v] [Priority: All v] [Search...]  [ + Create Task ]  |
+-------------+---------------+---------------+---------------+---------------+
| BACKLOG (2) | TO DO (4)     | IN PROG (3)   | REVIEW (2)    | DONE (12)     |
+-------------+---------------+---------------+---------------+---------------+
| [SWYN-110]  | [SWYN-105]    | [SWYN-102]    | [SWYN-98]     | [SWYN-90]     |
| Setup CI/CD | OAuth Refactor| Task Board UI | DB Migration  | Redis Cache   |
| (High)      | (Urgent)      | (Medium)      | (High)        | (Done)        |
| [3 pts] (T) | [5 pts] (A)   | [8 pts] (S)   | [3 pts] (K)   | [2 pts] (A)   |
|             +---------------+---------------+---------------+               |
|             | [SWYN-108]    | [SWYN-103]    |                               |
|             | Unit Tests    | API Rate Lim  |                               |
|             | (Medium)      | (High)        |                               |
+-------------+---------------+---------------+---------------+---------------+
```

---

## Screen 4: Task Detail & Discussion Modal (`/tasks/:taskId`)
- **Left Pane (Two-thirds width)**:
  - Editable Title & Status Dropdown
  - Rich Markdown Description (rendered with code blocks & checklists)
  - Subtask checklist with interactive completion checkboxes
  - Activity Feed & Discussion Thread:
    - Comment composer with Markdown preview and @mentions
    - Chronological log of changes (status transitions, assignment logs)
- **Right Sidebar (One-third width)**:
  - Assignee Selector
  - Reporter info
  - Priority dropdown
  - Story points estimate input
  - Due date picker
  - Associated Project & Sprint tags

```
+-------------------------------------------------------------------------+
| [SWYN-102] Implement Interactive Kanban Drag-and-Drop         [Close X] |
+--------------------------------------------+----------------------------+
| DESCRIPTION:                               | DETAILS                    |
| Build smooth Kanban column drag & drop     | Status:    [IN PROGRESS v] |
| using DnD Kit with optimistic UI updates.  | Priority:  [HIGH v]        |
|                                            | Assignee:  [Tharun K.    ] |
| CHECKLIST:                                 | Reporter:  [Tech Lead    ] |
| [x] Column layout and card component       | Estimate:  [ 5 Story Pts ] |
| [x] Drag events and optimistic re-order    | Due Date:  [ Dec 05, 2026] |
| [ ] Persist position to backend PATCH API  |                            |
|                                            | PROJECT                    |
| ACTIVITY & COMMENTS:                       | SWYNEX Web Platform        |
| - Tharun K. moved status to IN PROGRESS    |                            |
| - Sarah L.: "Added the API payload spec!"  | [ Delete Task ]            |
|                                            |                            |
| [ Write a comment... (Markdown supported) ]|                            |
| [ Post Comment ]                           |                            |
+--------------------------------------------+----------------------------+
```

---

## Screen 5: Agile Sprint Velocity & Analytics (`/analytics`)
- **Metrics Bar**:
  - Total Sprints
  - Velocity (Average story points per sprint)
  - Cycle Time / Lead Time (Hours from In-Progress to Done)
  - Bug-to-Feature Ratio
- **Charts**:
  - Sprint Burndown Chart (Ideal trendline vs. Actual completed points)
  - Task Distribution by Status (Donut Chart)
  - Workload by Assignee (Bar Chart showing story points assigned per team member)
