---
title: StudioPortal - Official Project Specification
author: Architected by Antigravity
date: April 2026
---

# StudioPortal: White-Label Agency Client Portal
## Full Project Specification & Architecture Document

---

## 1. Executive Summary
**StudioPortal** is a premium, white-labeled client management and invoicing operating system built tailored for design studios, boutique development agencies, and high-end freelancers. 
It replaces the disjointed experience of using Google Drive, Email, and random Stripe links with a centralized, cinematic web dashboard. Agencies can onboard clients, track project milestones, share high-fidelity deliverables, and collect payments through an elevated, single-pane-of-glass interface.

## 2. The Problem Statement
High-end service providers lose credibility when their client hand-off and management process is fragmented across multiple non-premium tools. 
- **Fragmentation:** Clients lose track of Dropbox/Drive links, emails, and invoices.
- **Brand Dilution:** Standard invoice templates and third-party tools lack the agency's bespoke brand identity ("Studio" aesthetics).
- **Payment Friction:** Processing payments across different deliverables often results in delays and confusion.

## 3. The Solution
An integrated SAAS application where agencies create "Projects" and invite "Clients".
Clients access a beautifully designed portal where they can:
1. Review project roadmaps.
2. Download deliverables securely.
3. Provide feedback on specific milestones.
4. Pay invoices directly through embedded Stripe integration.

---

## 4. Technical Architecture
This application is designed as a modern, decoupled Full-Stack Web Application.

### 4.1. Core Tech Stack
* **Frontend Framework:** Next.js (App Router) for Server-Side Rendering (SSR) and unparalleled SEO/Performance performance.
* **Styling:** Tailwind CSS combined with Framer Motion to handle advanced, dynamic micro-animations and "Glassmorphism" UI designs.
* **Database:** MySQL relational database.
* **ORM:** Prisma or Drizzle ORM for strictly typed database operations and seamless migrations.
* **Authentication:** NextAuth (Auth.js) securely handling Role-Based Access Control (Agencies vs. Clients).
* **Payment Gateway:** Stripe API integration for automated invoicing and checkout flows.

### 4.2. Recommended Deployment Strategy
* **Frontend API & CDN:** Vercel (Next.js native hosting with Serverless Edge capabilities).
* **Database Hosting:** PlanetScale, Aiven, or Railway (Fully managed, scalable MySQL).
* **Asset Storage:** AWS S3 or Cloudflare R2 for storing client deliverables securely.

---

## 5. Core System Entities & Database Schema Details

A relational database (MySQL) is required to accurately model the business logic. Below is a high-level representation of our Schema Objects:

### 5.1 Entities
**`AgencyUser`**
- Represents the owner or employee of the agency.
- Has many `Projects` and `Clients`.

**`Client`**
- Represents the customer.
- Has secure portal access logic (Magic Links or password).
- Has many `Projects`.

**`Project`**
- Tied to a `Client` and an `AgencyUser`.
- Tracks `status` (Active, In-Review, Completed).
- Has many `Milestones`, `Deliverables`, and `Invoices`.

**`Invoice`**
- Contains `totalAmount`, `status` (Unpaid, Paid, Past Due).
- Tied to a specific `StripePaymentIntent_ID`.

---

## 6. Functional Requirements & User Flows

### 6.1 Agency (Admin) User Flow
1. **Dashboard:** Gives an overview of all active projects, total revenue, and outstanding invoices.
2. **Client Onboarding:** Agency creates a new client and triggers an automated, branded welcome email.
3. **Project Management:** Upload final assets, update statuses on an iterative timeline.
4. **Billing Generation:** Admin uses a UI to draft an invoice. The interface generates a Stripe link behind the scenes.

### 6.2 Client User Flow
1. **Authentication:** Client clicks a magic link in their email to access their secure workspace (No password to remember).
2. **Project Workspace:** Client is greeted with a premium, animated timeline of their current project.
3. **Asset Review:** Client previews and downloads files. 
4. **Checkout Experience:** Client clicks "Pay Invoice", which opens a customized Stripe Checkout interface for Apple Pay/Credit card processing.

---

## 7. Development & Implementation Phases

### Phase 1: Infrastructure & Scaffolding
- Initialize Next.js with Tailwind CSS & Shadcn/ui.
- Setup Vercel deployment pipeline.
- Provision MySQL database and initialize Prisma connection.

### Phase 2: Database & Authentication
- Build out the Prisma Schema.
- Implement NextAuth for Agency login.
- Implement Magic Links for Client login routing.

### Phase 3: Agency Dashboard UI (The "Studio" Aesthetic)
- Build the data-tables, project creation modals, and client management pages.
- Integrate rich animations and dark-mode themes.

### Phase 4: Client Portal & Operations
- Build the dynamic `[clientId]` routing for customized client views.
- Implement AWS S3 image/asset upload configurations.

### Phase 5: Stripe Implementation & Production Polish
- Integrate Stripe API for invoice generation.
- Configure Webhooks to automatically update Invoice statuses in MySQL upon successful payments.
- Final QA, performance optimizations, and domain setup.

---
*End of Document*
