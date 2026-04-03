"use client"

import { use, useState } from "react"
import { useRouter } from "next/navigation"
import { ateliers } from "@/data/ateliers"
import CreneauForm from "@/components/CreneauForm"
import SuccessScreen from "@/components/SuccessScreen"

export default function NouveauCreneau({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const atelier = ateliers.find((a) => String(a.id) === id)
  const router = useRouter()
  const [success, setSuccess] = useState(false)

  if (success) {
    return <SuccessScreen nomAtelier={atelier?.nom ?? "cet atelier"} />
  }

  return (
    <main className="max-w-md mx-auto px-4 py-8">
      <button
        onClick={() => router.back()}
        className="text-sm text-gray-400 mb-6 flex items-center gap-1"
      >
        ← Retour
      </button>
      <h1 className="text-2xl font-bold mb-1" style={{ color: "var(--primary)" }}>
        Nouveau créneau
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        {atelier ? atelier.nom : "Atelier introuvable"}
      </p>
      <CreneauForm atelierId={id} onSuccess={() => setSuccess(true)} />
    </main>
  )
}
