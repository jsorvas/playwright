# 🎭 Playwright Tests

Tests end-to-end pour application web frontend, basés sur [Playwright](https://playwright.dev/).

---

## 📁 Architecture des tests

```
projet-tests/
├── tests/
│   ├── auth/                  # Tests end-to-end par fonctionnalité
│   │   ├── login.spec.js      # Authentification (login, compte bloqué, messages erreur)
│   │   └── logout.spec.js     # Déconnexion 
├── playwright.config.ts       # Configuration principale
└── README.md

```
