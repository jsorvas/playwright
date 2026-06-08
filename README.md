# 🎭 Playwright Tests

Tests end-to-end pour application web frontend, basés sur [Playwright](https://playwright.dev/).

---

## 📁 Architecture des tests

```
projet-tests/
├── tests/
│   ├── auth/                            # Tests end-to-end par fonctionnalité
│   │   ├── login.spec.js                # Authentification (login, compte bloqué, messages erreur)
│   │   └── logout.spec.js               # Déconnexion
interactions-web/                # Interactions sur les éléments web
│   ├── bouton_radio.spec.js         # Bouton radio 
│   ├── checkbox.spec.js             # Cases
│   ├── date.spec.js                 # Bouton radio
│   ├── datePicker.spec.js           # Calendrier 
│   ├── datePicker.spec.ts           # Calendrier
│   ├── fill_and_type.spec.js        # Remplir un champ avec fill & type 
│   ├── listDeroulante.spec.js       # Liste déroulante 
│   ├── selecteurs.spec.js           # Sélecteurs possibles 
│   └── webTable.spec.js             # Tableaux
├── playwright.config.ts                 # Configuration principale
└── README.md

```
