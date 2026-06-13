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
│   ├── catalog/                         # Tests end-to-end par fonctionnalité
│   │   └── browse.spec.js               # Catalogue
│   ├── product/                         # Tests end-to-end par fonctionnalité
│   │   ├── product.spec.js              # Produits
│   │   └── view-product.spec.js         # Vérifications infos Produits
interactions-web/                        # Interactions sur les éléments web
├── tests/
│   ├── assertions.spec.js               # Assertions
│   ├── autoWaiting.spec.js              # Auto waiting
│   ├── bouton_radio.spec.js             # Bouton radio 
│   ├── checkbox.spec.js                 # Cases
│   ├── date.spec.js                     # Bouton radio
│   ├── datePicker.spec.js               # Calendrier 
│   ├── datePicker.spec.ts               # Calendrier
│   ├── fill_and_type.spec.js            # Remplir un champ avec fill & type 
│   ├── listDeroulante.spec.js           # Liste déroulante 
│   ├── selecteurs.spec.js               # Sélecteurs possibles
│   ├── timeOut.spec.js                  # Sélecteurs possibles
│   ├── variablesEnv.spec.js             # Tests avec variables d'environnements 
│   └── webTable.spec.js                 # Tableaux
├── .env.example                         # Variables d'environnements 
├── playwright.config.ts                 # Configuration principale
└── README.md

```
