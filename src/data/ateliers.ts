export type Atelier = {
  id: number
  nom: string
  categorie: string
  description: string
  capacite: number
  dureeMinutes: number
  prix: number
  creneaux: number
}

export const ateliers: Atelier[] = [
  {
    id: 1,
    nom: "Atelier Poterie — Initiation",
    categorie: "Poterie",
    description: "Apprenez les bases du tour de potier.",
    capacite: 8,
    dureeMinutes: 120,
    prix: 40,
    creneaux: 1,
  },
  {
    id: 2,
    nom: "Atelier Aquarelle — Premiers pas",
    categorie: "Peinture",
    description: "Découvrez les techniques fondamentales de l'aquarelle.",
    capacite: 10,
    dureeMinutes: 120,
    prix: 30,
    creneaux: 2,
  },
  {
    id: 3,
    nom: "Atelier Sculpture — Intermédiaire",
    categorie: "Sculpture",
    description: "Approfondissez votre pratique avec des techniques de modelage avancées.",
    capacite: 6,
    dureeMinutes: 180,
    prix: 50,
    creneaux: 3,
  },
]
