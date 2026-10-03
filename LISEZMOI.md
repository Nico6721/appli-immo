# Mise en ligne sur GitHub Pages et installation sur Android

## 1. Créer le compte (une fois)
https://github.com/signup : e-mail, mot de passe, nom d'utilisateur (il apparaîtra dans l'adresse de l'application).

## 2. Créer le dépôt
1. En haut à droite : + > New repository.
2. Repository name : annonces-immo
3. Cocher **Public** (obligatoire pour GitHub Pages gratuit). Ne rien cocher d'autre.
4. Create repository.

## 3. Déposer les fichiers
1. Sur la page du dépôt : lien « uploading an existing file ».
2. Glisser-déposer le CONTENU du dossier (index.html, manifest.json, sw.js, icon-192.png, icon-512.png, .nojekyll), pas le dossier lui-même.
   Le fichier .nojekyll est masqué sur Mac/Windows : il n'est pas indispensable, on peut l'ignorer.
3. Commit changes.

## 4. Activer GitHub Pages
1. Settings > Pages.
2. Source : Deploy from a branch. Branch : main, dossier / (root). Save.
3. Après 1 à 2 minutes, l'adresse s'affiche : https://NOM-UTILISATEUR.github.io/annonces-immo/

## 5. Installer sur Android
Ouvrir l'adresse dans Chrome > menu ⋮ > Installer l'application.

## Mettre à jour
Sur le dépôt : Add file > Upload files, déposer les nouveaux fichiers (ils remplacent les anciens), Commit changes.
La nouvelle version est en ligne en 1 à 2 minutes ; les téléphones la récupèrent à l'ouverture suivante.
Si une ancienne version persiste, changer annonces-v1 en annonces-v2 dans sw.js.

## Confidentialité
Le dépôt public ne contient que le code de l'outil, aucune donnée personnelle.
Les annonces, saisies et paramètres de financement restent dans le téléphone de chaque utilisateur.
