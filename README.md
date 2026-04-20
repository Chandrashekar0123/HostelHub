# HostelHub Enterprise SaaS

**HostelHub Enterprise** is a centralized management infrastructure designed to streamline operations, automate rent collection, and scale property portfolios with an enterprise-grade platform built for modern administrators.

![Landing Page Header](./docs/screenshots/landing_page.png)

## 🚀 Key Features

*   **Multi-Role Access Control**: Dedicated portals for Residents, Property Owners, Operations Staff, and System Administrators.
*   **Revenue Telemetry**: Real-time monitoring of MRR, occupancy velocity, and financial health.
*   **Operational Intelligence**: Biometric-ready attendance tracking and high-priority maintenance escalation matrix.
*   **Resident Experience**: Seamless property discovery, room booking, and ledger management.

## 🖼️ Portal Overviews

### Resident Portal
Comprehensive search and booking interface with real-time room availability.
![Tenant Portal](./docs/screenshots/tenant_portal.png)

### Management Dashboard (Owner)
Audit inbound payments, manage unit assignments, and track inventory logistics.
<img width="1366" height="607" alt="image" src="https://github.com/user-attachments/assets/3695dc1a-c292-427f-809c-f8409b673d84" />


### Command Center (Admin)
Global platform telemetry, identity access management, and subscription tier configuration.
![Admin Portal](./docs/screenshots/admin_portal.png)

## 🛠️ Technology Stack

*   **Frontend**: React 19 (Vite) + Tailwind CSS 3.4
*   **State & Animation**: Framer Motion + React Router 7
*   **Analytics**: Recharts + Lucide React Icons
*   **Architecture**: Scalable Monorepo (Frontend/Backend segregation)

## ⚙️ Development Setup

1.  **Clone & Install**:
    ```bash
    git clone https://github.com/Chandrashekar0123/HostelHub
    cd HostelHub/frontend
    npm install
    ```

2.  **Environment Configuration**:
    Copy the template and fill in your specific credentials:
    ```bash
    cp .env.example .env
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```

---
*Built for scale, designed for simplicity.*
