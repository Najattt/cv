# Mémoire sur l'éco-conception des sites Internet avec Next.js

## Partie 1 : Utilisation de Next.js pour des sites éco-conçus

La conception de sites web écologiques est un défi majeur de notre époque, visant à réduire l'empreinte carbone et à optimiser les performances. L'utilisation de Next.js offre plusieurs avantages en termes d'éco-conception :

- **Le Server Side Rendering(SSR)** de Next.js génère du HTML pour chaque page à l'avance, permettant un affichage rapide du contenu lorsque l'utilisateur en fait la demande, offrant ainsi une meilleure indexation et des performances optimales pour les applications web.
- **L’optimisation des images** :Next.js propose un composant Image (du composant 'next/image') qui remplace la balise <img> en HTML.Il charge l'image uniquement quand elle rentre dans la fenêtre de navigation,il propose une optimisation de taille pour chaque appareil.
- **Gestion avancée du routage :** Next.js crée une route pour chaque fichier présent dans le dossier du projet. Par exemple, pour un fichier nommé 'cv.js', la route pour correspondante serait https//localhost:3000/cv.
- **Rapidité de développement** : Fondé sur React, Next.js convient aux développeurs familiers avec React. Il simplifie la gestion des styles via les CSS Modules et bénéficie d'une communauté active.
- **Mobile Friendly** : Next.js prend en charge les conceptions réactives pour les applications web mobiles, garantissant une expérience utilisateur adaptative et offre la possibilité de créer des Progressive Web Apps (PWA).
- **Évolutivité et maintenance** : Next.js, avec sa maturité et sa communauté active, facilite la maintenance et l'ajout de nouvelles fonctionnalités pour répondre aux besoins changeants du marché.

## Partie 2 : Éco-conception de mon site Internet

Lors du développement de mon site, j'ai appliqué des principes d'éco-conception pour minimiser son impact environnemental tout en garantissant une expérience utilisateur optimale.
- **Utilisation de Next.js :** Choix délibéré pour profiter du rendu côté serveur, réduisant le temps de chargement des pages et optimisant les images  .
- **Utilisation de la composante `Image` de Next.js**
J'ai intégré la composante `Image` de Next.js pour optimiser le chargement des images. Cette fonctionnalité permet d’optimiser les images.
- **Intégration d'éléments SVG**
L'utilisation d'éléments SVG (Scalable Vector Graphics) a contribué à réduire la taille des fichiers tout en maintenant une qualité visuelle élevée. Cette approche favorise une expérience utilisateur fluide tout en limitant la consommation de ressources.
- **Utilisation de Tailwind CSS** : J'ai intégré les styles prédéfinis de Tailwind CSS pour simplifier la gestion des styles. Cette approche basée sur l'utilisation de classes prédéfinies a facilité la conception légère et efficace du site.
- **Utilisation de la composante Link** :Le composant Link précharge les pages en arrière-plan, pour des transitions de page plus rapides et plus fluides.

Ce choix de techniques a permis de concevoir un site éco-conçu, optimisé pour les performances et réduisant la consommation de ressources, tout en offrant une expérience utilisateur de qualité.



