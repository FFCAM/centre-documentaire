[![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=centre-documentaire)](https://centre-documentaire.vercel.app/)
![License](https://img.shields.io/badge/license-MIT-blue)


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/FFCAM/centre-documentaire">
    <img src="public/images/logo-cnd-petit.png" alt="Logo" width="200" height="200">
  </a>

  <h3 align="center">Catalogue du Centre National de Documentation FFCAM</h3>

  <p align="center">
    Ce dépôt contient le code source de l'application web de consultation et de recherche du catalogue du <b>Centre National de Documentation</b> de la Fédération Française des Clubs Alpins et de Montagne (FFCAM).  <br />
L'application est développée en utilisant Next.js et le backend est alimenté par Supabase.
    <br />
    <a href="https://centre-documentaire.vercel.app/"><strong>Visiter l'application »</strong></a>
    <br />
    <br />
    <a href="https://github.com/FFCAM/centre-documentaire/issues">Soumettre un bug</a>
    ·
    <a href="https://github.com/FFCAM/centre-documentaire/issues">Demander une fonctionnalité</a>
    ·
    <a href="#Contribution">Contribuer</a>
  </p>
</div>

## Fonctionnalités

- Recherche dans le catalogue du Centre National de Documentation de la FFCAM parmi plus de 15 000 ouvrages
  - livres
  - cartes
  - films
  - magazines
- Consultation des résultats de recherche
- Affichage des détails d'un document spécifique
- Interface utilisateur intuitive et conviviale

## Prérequis

Avant de pouvoir exécuter l'application localement, assurez-vous d'avoir installé les éléments suivants :

- Node.js (version 18 ou supérieure)
- NPM (ou Yarn) pour gérer les dépendances

## Installation

1. Clonez ce dépôt sur votre machine locale :

```git clone git@github.com:FFCAM/centre-documentaire.git```

2. Accédez au répertoire du projet :

```cd centre-documentaire```

3. Installez les dépendances nécessaires :

```npm install```

## Configuration

Avant de pouvoir exécuter l'application, vous devez configurer les informations d'authentification de votre instance Supabase. Suivez les étapes ci-dessous :

1. Créez un fichier `.env.local` à la racine du projet.

2. Ajoutez les variables d'environnement suivantes dans le fichier `.env.local` :

```
NEXT_PUBLIC_SUPABASE_URL=<URL_SUPABASE>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<CLE_API_SUPABASE>
```
Remplacez `<URL_SUPABASE>` par l'URL de votre instance Supabase et `<CLE_API_SUPABASE>` par votre clé d'API Supabase.

## Exécution

Une fois les dépendances installées et la configuration effectuée, vous pouvez exécuter l'application en utilisant la commande suivante :

```npm run dev```

Cela démarrera l'application en mode développement. Ouvrez votre navigateur et accédez à `http://localhost:3000` pour voir l'application en action.

## Contribution

Nous sommes ravis de recevoir des contributions pour améliorer cette application. Si vous souhaitez contribuer, veuillez suivre ces étapes :

1. Fork ce dépôt.
2. Créez une branche pour vos modifications :

```git checkout -b feature/nouvelle-fonctionnalite```

3. Effectuez les modifications nécessaires et committez-les :

```git commit -m "Ajouter une nouvelle fonctionnalité"```

4. Poussez les modifications vers votre dépôt forké :

```git push origin feature/nouvelle-fonctionnalite```

5. Ouvrez une pull request sur ce dépôt d'origine et décrivez vos modifications.

## Déploiement

Cette application est déployée sur [Vercel](https://vercel.com/ffcam/centre-documentaire).  
Un push sur la branche `main` déploie le code automatiquement sur [https://centre-documentaire.vercel.app/](https://centre-documentaire.vercel.app/).

## Licence

Ce projet est sous licence [MIT](LICENSE).

---

Nous espérons que cette application vous sera utile pour consulter et rechercher dans le catalogue du Centre National de Documentation de la FFCAM. Si vous avez des questions ou des problèmes, n'hésitez pas à nous contacter.