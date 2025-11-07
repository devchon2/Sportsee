# SportSee — Dashboard d’analytics (React)

[![CI](https://img.shields.io/badge/CI-none-lightgrey)]() [![Licence](https://img.shields.io/badge/Licence-MIT-blue)]()

> Projet : **Développez un tableau de bord d’analytics avec React**.  
> **Objectif général :** recréer la page profil utilisateur d’un dashboard de coaching sportif : intégrer graphiques (Recharts / D3), récupérer des données via API, modéliser & assurer la qualité des données.

## 📚 Table des matières
- [Description](#-description)
- [Objectifs pédagogiques](#-objectifs-p%C3%A9dagogiques)
- [Compétences & Preuves](#-comp%C3%A9tences--preuves)
- [Stack & Versions](#-stack--versions)
- [Structure du projet](#-structure-du-projet)
- [Fonctionnalités clés](#-fonctionnalit%C3%A9s-cl%C3%A9s)
- [API & Données](#-api--donn%C3%A9es)
- [Installation & Lancement](#-installation--lancement)
- [Available Scripts](#available-scripts)
- [Tests](#-tests)
- [Démo & Captures](#-d%C3%A9mo--captures)
- [Roadmap](#-roadmap)
- [Licence](#-licence)
- [Contact](#-contact)
- [English version](#english-version)

---

## 🚀 Description
Développement de la page **profil utilisateur** d’un dashboard SportSee : intégration de graphiques (activité, calories, sessions), gestion des appels HTTP depuis un service séparé, modélisation/normalisation des données reçues, et documentation (README, JSDoc). Projet validé en formation. 

> **Résultats clés** : pages graphiques intégrées • composants réutilisables • service API séparé pour appels HTTP.

## 🎯 Objectifs pédagogiques
- Assurer la qualité et la normalisation des données.  
- Intégrer des éléments graphiques (Recharts ou D3).  
- Séparer la logique des appels HTTP dans un service externe.  
- Documenter (JSDoc, proptypes, README).

## 🧠 Compétences & Preuves
| Exigence pédagogique | Compétence recrutée | Mise en œuvre | Preuves |
|---|---|---:|---|
| Data quality | **Modélisation** | Classe de formatage des données | `src/services/dataModel.js`, tests |
| Charts | **Recharts / D3** | Graphs (activity, sessions, calories) | `src/components/charts/*` |
| API | **Fetch / Axios** | Service API hors composants | `src/services/api.js` |
| Docs | **JSDoc & README** | Documentation des composants & services | JSDoc commentaires + README |

## 🧰 Stack & Versions
| Tech | Rôle |
|---|---|
| React | Frontend UI |
| Recharts / D3 | Visualisations graphiques |
| Fetch / Axios | Appels API |
| Node.js (backend sample) | Serveur de mock / demo |

(Consulter `package.json` pour versions exactes.) 

## 🗂️ Structure du projet
```txt
SportSee/
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  │  └─ charts/
│  │  ├─ services/
│  │  │  └─ api.js
│  │  └─ App.js
│  └─ package.json
├─ backend/   # mock API (Node)
└─ README.md
```

## ✅ Fonctionnalités clés
* [x] Page profil utilisateur avec plusieurs graphiques.  
* [x] Service d’API externe pour appels HTTP (hors composants).  
* [x] Normalisation des données (classe/adapter).  
* [x] Documentation (JSDoc + README).

## 🔌 API & Données
* **Base URL (dev)** : `http://localhost:3001` (exemple fourni dans le brief).  
* **Endpoints exemples** (fourni avec le backend mock) :
  * `GET /user/:id` — profil utilisateur  
  * `GET /user/:id/activity` — sessions activité  
  * `GET /user/:id/performance` — performances métriques

**Bonnes pratiques** : effectuer les appels dans `src/services/api.js`, formatter les réponses via un adapter (`src/services/dataModel.js`) avant utilisation dans les composants. 

## ⚡ Installation & Lancement
```bash
# 1) Cloner
git clone https://github.com/devchon2/SportSee.git
cd SportSee/frontend

# 2) Installer
npm install   # ou yarn install

# 3) Lancer (dev)
npm start     # ou yarn start
# ouvrir http://localhost:3000

# 4) Backend mock (optionnel)
cd ../backend
npm install
npm run dev
# backend sur http://localhost:3001
```

## 📜 Available Scripts
```bash
# Frontend (Create React App)
npm start
npm test
npm run build

# Backend (si présent)
npm run dev
npm run seed
```

## 🧪 Tests
* Tests unitaires pour services & adapters (Jest).  
* Tests des composants graphiques (snapshot / behaviour).  
* Vérification de l’intégrité des données après formatage.

## 🎥 Démo & Captures
* Livrable : démo fonctionnelle de la page profil + README + JSDoc.  
* Captures des graphiques et rapport de validation des données. 

## 🗺️ Roadmap
* Ajouter monitoring des performances graphiques.  
* Ajouter tests E2E (Cypress) pour parcours profil.

## 📝 Licence
MIT (ajouter `LICENSE` si absent).

## 📫 Contact
Rachid Chon — `rchon@rchon-dev.fr`

---

## English version

<details>
<summary>🇬🇧 Click to expand</summary>

# SportSee — Analytics dashboard (React)

[![CI](https://img.shields.io/badge/CI-none-lightgrey)]() [![License](https://img.shields.io/badge/License-MIT-blue)]()

> Goal: implement the user profile analytics page with charts (Recharts or D3), a separate API service, and data normalization.

(Full English translation of French content: Description, Objectives, Skills & Evidence, Stack, Structure, Features, API & Data, Install & Run, Scripts, Tests, Demo, Roadmap, Licence, Contact.) 

</details>
