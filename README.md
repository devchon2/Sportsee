# SportSee - Votre Dashboard de Coaching Sportif

## Introduction

Bienvenue sur le projet SportSee, une plateforme dédiée au coaching sportif. Ce README vous fournira toutes les informations nécessaires pour comprendre, installer et contribuer au projet.

## Table des Matières

- [Introduction](#introduction)
- [Fonctionnalités](#fonctionnalités)
- [Technologies Utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation](#installation)
  - [Sans Docker](#sans-docker)
  - [Avec Docker](#avec-docker)
- [Endpoints](#endpoints)
- [Scripts Disponibles](#scripts-disponibles)
- [Conseils et Astuces](#conseils-et-astuces)
- 

## Fonctionnalités

- Suivi du nombre de sessions sportives
- Suivi du nombre de calories brûlées
- Graphiques d'activité sportive

## Technologies Utilisées

- React
- NodeJS
- D3/Recharts
- Docker (optionnel)

## Prérequis

- NodeJS (version 12.18)
- Yarn
- Docker Desktop (optionnel)
- VSCode avec Remote Development extension (optionnel)

## Installation

### Sans Docker

1. Forker le dépôt
2. Cloner sur votre ordinateur
3. Installer les dépendances avec `yarn`
4. Lancer le micro API avec `yarn dev`

### Avec Docker

1. Construire votre image avec `docker image build --no-cache -t micro-api .`
2. Créer et exécuter votre conteneur Docker avec `docker container run --name micro-api -p 3000:3000 -dt micro-api yarn`
3. Arrêter le micro API avec `docker container stop micro-api`
4. Supprimer le conteneur avec `docker container rm micro-api`

## Endpoints

- `http://localhost:3000/user/${userId}`: Récupère les informations d'un utilisateur.
- `http://localhost:3000/user/${userId}/activity`: Récupère l'activité quotidienne d'un utilisateur.
- `http://localhost:3000/user/${userId}/average-sessions`: Récupère les sessions moyennes d'un utilisateur par jour.
- `http://localhost:3000/user/${userId}/performance`: Récupère les performances d'un utilisateur.

## Scripts Disponibles

- `yarn start`: Pour lancer l'application en mode développement.
- `yarn test`: Pour lancer les tests.
- `yarn build`: Pour construire l'application pour la production.
- `yarn eject`: Pour éjecter l'application (opération irréversible).

## Conseils et Astuces

- Utilisation de D3 vs Recharts
- Gestion des appels HTTP avec Fetch ou Axios
- Standardisation des données de l'API

