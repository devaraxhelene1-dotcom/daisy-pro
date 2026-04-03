import Link from "next/link"
import { Atelier } from "@/data/ateliers"

type Props = {
  atelier: Atelier
}

export default function AtelierCard({ atelier }: Props) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
      <div className="flex justify-between items-start mb-1">
        <h2 className="font-semibold text-base">{atelier.nom}</h2>
        <span className="text-sm font-medium" style={{ color: "var(--primary)" }}>
          {atelier.prix} €
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-3">{atelier.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-400">
          {atelier.categorie} · {atelier.creneaux === 0 ? "Aucun créneau" : `${atelier.creneaux} créneau${atelier.creneaux > 1 ? "x" : ""}`}
        </span>
        <Link
          href={`/ateliers/${atelier.id}/nouveau`}
          className="text-sm px-6 py-3 rounded-full text-white uppercase"
          style={{ backgroundColor: "var(--accent)", color: "var(--background)" }}
        >
          + Créneau
        </Link>
      </div>
    </div>
  )
}
