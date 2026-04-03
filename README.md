# Daisy App — Ajout d'un créneau

## Etude de cas et feature choisie

J'ai choisi l'étude de cas A "Conception d'une feature Daisy Pro" et la Feature B "Ajout d'un créneau",
car elle la plus complète : une feature directement intégré sur la plateforme de daisy, un point d'entrée, un formulaire avec validation, un routing dynamique, et une confirmation.

Le flux implémenté :
1. L'artiste voit la liste de ses ateliers
2. Il clique sur **+ CRÉNEAU** depuis la carte de l'atelier souhaité
3. Il remplit le formulaire (date, heure, durée, capacité, prix) et clique sur **+ AJOUTER LE CRÉNEAU**
4. Il reçoit une confirmation visuelle

## Lancer le projet
```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) —> redirige automatiquement vers `/ateliers`.

## Stack

- Next.js 15 + TypeScript
- TailwindCSS + shadcn/ui
- Données mockées (JSON local)
- Mobile-first

## Flux implémenté
```
/ateliers → liste des ateliers
  -> clic sur + CRÉNEAU sur la carte souhaitée
/ateliers/[id]/nouveau -> formulaire avec date/heure/durée/places/prix
  -> clic sur + AJOUTER LE CRÉNEAU -> soumission
écran de confirmation + RETOUR AUX ATELIERS -> retour sur la page /ateliers
```

## Découpage des composants

Chaque composant a une responsabilité unique :

**`AtelierCard`** — affiche une carte atelier. Aucune logique, uniquement de l'affichage.

**`CreneauForm`** — gère le formulaire et la validation. Quand la soumission réussit, il appelle `onSuccess`.

**`SuccessScreen`** — affiche l'écran de confirmation.

**`ateliers/[id]/nouveau/page.tsx`** — assemble les composants et gère les états.


## Routing dynamique

Le bouton **+ CRÉNEAU** intègre l'id de l'atelier dans l'URL (`/ateliers/[id]/nouveau`). Le formulaire récupère cet id directement — pas besoin d'un select pour choisir l'atelier, ce qui évite une étape inutile et un risque d'erreur.


## Les 4 états gérés

| État | Déclencheur | Ce qui s'affiche |
|---|---|---|
| `empty` | Aucun atelier | Message et illustration |
| `error` | Champ vide à la soumission | Message rouge, formulaire conservé |
| `loading` | Soumission en cours | Bouton grisé, "Enregistrement..." |
| `success` | Après 1,5s | Confirmation avec nom de l'atelier |


## Arbitrages UI

**Charte Daisy respectée** — Violet `#800080` pour les titres et éléments primaires, Corail `#F24E3E` pour les boutons d'action, Crème `#FCF8E8` pour le fond. Les couleurs sont centralisées dans `globals.css` pour faciliter la maintenance.

**Champs groupés par paires** — Date + Heure ensemble, Durée + Places ensemble. Plus compact sur mobile et plus logique à lire.

**Pas de sidebar** — sur mobile (360px), une sidebar n'a pas de sens. Un header simple avec les initiales de l'artiste suffit à simuler la connexion.
