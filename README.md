# CrowdCube

CrowdCube is a full-stack crowdfunding application that allows users to create campaigns, make donations, and track active campaigns.

---

## Live Demo & Repositories

* **Frontend Live:** [https://crowd-cube-app.web.app](https://crowd-cube-app.web.app)
* **Backend Live:** [https://crowdcube-server.onrender.com](https://crowdcube-server.onrender.com)
* **Frontend GitHub:** [https://github.com/arman685913/CrowdCube-client.git](https://github.com/arman685913/CrowdCube-client.git)
* **Backend GitHub:** [https://github.com/arman685913/CrowdCube-server](https://github.com/arman685913/CrowdCube-server.git)
* **Assignment Requirement:** [https://docs.google.com/document/u/0/d/1LBwPtnVCpu_GvFNMVX5vSDDZf-Ux00bzR_S1s4yuFsg/mobilebasic](https://docs.google.com/document/u/0/d/1LBwPtnVCpu_GvFNMVX5vSDDZf-Ux00bzR_S1s4yuFsg/mobilebasic)

---

## Table of Contents

* [Features](#features)
* [Technologies](#technologies)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
* [API Routes](#api-routes)
* [Environment Variables](#environment-variables)
* [Deployment](#deployment)

---

## Features

* User registration and profile updates
* Create, update, delete, and view campaigns
* Track donations for campaigns
* Fetch active campaigns
* Serverless deployment for backend on Vercel
* Responsive React frontend

---

## Technologies

* **Frontend:** React.js, React Router, TailwindCSS, DaisyUI
* **Backend:** Node.js, Express.js, MongoDB Atlas
* **Deployment:** Vercel (backend), Render / Vercel (frontend)
* **Others:** CORS, dotenv

---

## Project Structure

```
CrowdCube/
├─ CrowdCube-server/      # Backend
│  ├─ api/                # Serverless routes for Vercel
│  ├─ package.json
│  └─ ...
├─ CrowdCube-client/      # Frontend
│  ├─ src/
│  ├─ package.json
│  └─ ...
```

---

## Getting Started

### Backend Setup

1. Clone the repository

```bash
git clone https://github.com/arman685913/CrowdCube-server.git
cd CrowdCube-server
```

2. Install dependencies

```bash
npm install
```

3. Add environment variables (create `.env.local` in project root)

```env
DATABASE=yourMongoDBUsername
PASS=yourMongoDBPassword
```

4. Run locally

```bash
npm run dev
```

The backend will run on `http://localhost:3000`.

---

### Frontend Setup

1. Clone the repository

```bash
git clone https://github.com/arman685913/CrowdCube-client.git
cd CrowdCube-client
```

2. Install dependencies

```bash
npm install
```

3. Update API base URL in frontend `.env` or config:

```
VITE_API_URL=http://localhost:3000
```

4. Run locally

```bash
npm run dev
```

The frontend will run on `http://localhost:5173`.

---

## API Routes

### Users

| Method | Route         | Description         |
| ------ | ------------- | ------------------- |
| POST   | /users        | Create a new user   |
| PATCH  | /users/:email | Update user profile |

### Donations

| Method | Route    | Description        |
| ------ | -------- | ------------------ |
| GET    | /donated | Get all donations  |
| POST   | /donated | Add a new donation |

### Campaigns

| Method | Route             | Description                   |
| ------ | ----------------- | ----------------------------- |
| GET    | /campaigns        | Get all campaigns             |
| GET    | /campaigns/active | Get active campaigns (next 6) |
| GET    | /campaigns/:id    | Get single campaign by ID     |
| POST   | /campaigns        | Create a new campaign         |
| PUT    | /campaigns/:id    | Update a campaign             |
| DELETE | /campaigns/:id    | Delete a campaign             |

> **Note:** For Vercel deployment, backend API URL becomes `https://crowd-cube-server-five.vercel.app/api`

---

## Environment Variables

* **Backend (`.env.local`)**

```
DATABASE=<Your MongoDB username>
PASS=<Your MongoDB password>
```

* **Frontend (`.env`)**

```
VITE_API_URL=<Backend URL, e.g., https://crowd-cube-server-five.vercel.app/api>
```

---

## Deployment

* **Backend:** Deployed on Vercel
* **Frontend:** Deployed on Render / Vercel

> Serverless backend ensures all Express routes are compatible with Vercel functions.
