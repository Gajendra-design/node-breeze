# create-node-breeze

> A Laravel Breeze-inspired starter kit for Node.js. Generates a production-ready Express MVC architecture pre-configured with secure dual-token (Access + Refresh Token) authentication.

---

## Why create-node-breeze?

Laravel provides **Laravel Breeze** out of the box so developers don't have to rewrite authentication boilerplate for every project. Node.js traditionally forces you to build authentication, token handling, and folder structure from scratch.

`create-node-breeze` brings that turnkey developer experience to the Node.js ecosystem:
* **True MVC Architecture:** Clear separation between Controllers, Models, Routes, Middlewares, and Configs.
* **Dual-Token Authentication Layer:** Short-lived Access Tokens paired with secure Refresh Tokens (the industry standard for real-world APIs).
* **Zero Boilerplate Delay:** Run one command and start building your business logic immediately.

---

## Quick Start

Generate a new application anywhere on your machine:

```bash
npx create-node-breeze my-app