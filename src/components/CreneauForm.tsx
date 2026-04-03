"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ateliers } from "@/data/ateliers"

type Props = {
  atelierId: string
  onSuccess: () => void
}

export default function CreneauForm({ atelierId, onSuccess }: Props) {
  const [form, setForm] = useState({
    atelierId,
    date: "",
    heure: "",
    duree: "",
    capacite: "",
    prix: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  function handleChange(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit() {
    if (!form.date || !form.heure || !form.duree || !form.capacite || !form.prix) {
      setError(true)
      return
    }
    setError(false)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      onSuccess()
    }, 1500)
  }

  return (
    <div className="flex flex-col gap-5">

      <div>
        <Label className="mb-1 block text-sm font-medium">Atelier</Label>
        <select
          className="w-full bg-white border border-gray-200 rounded-lg p-2 text-sm"
          onChange={(e) => handleChange("atelierId", e.target.value)}
          defaultValue={atelierId}
        >
          {ateliers.map((a) => (
            <option key={a.id} value={String(a.id)}>
              {a.nom}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Label className="mb-1 block text-sm font-medium">Date</Label>
        <Input
          type="date"
          className="bg-white"
          onChange={(e) => handleChange("date", e.target.value)}
        />
      </div>

      <div>
        <Label className="mb-1 block text-sm font-medium">Heure</Label>
        <Input
          type="time"
          className="bg-white"
          onChange={(e) => handleChange("heure", e.target.value)}
        />
      </div>

      <div>
        <Label className="mb-1 block text-sm font-medium">Durée (minutes)</Label>
        <Input
          type="number"
          placeholder="ex: 90"
          className="bg-white"
          onChange={(e) => handleChange("duree", e.target.value)}
        />
      </div>

      <div>
        <Label className="mb-1 block text-sm font-medium">Capacité (places)</Label>
        <Input
          type="number"
          placeholder="ex: 8"
          className="bg-white"
          onChange={(e) => handleChange("capacite", e.target.value)}
        />
      </div>

      <div>
        <Label className="mb-1 block text-sm font-medium">Prix (€)</Label>
        <Input
          type="number"
          placeholder="ex: 35"
          className="bg-white"
          onChange={(e) => handleChange("prix", e.target.value)}
        />
      </div>

      {error && (
        <p className="text-sm" style={{ color: "var(--accent)" }}>
          Tous les champs sont obligatoires.
        </p>
      )}

      <Button
        size="lg"
        onClick={handleSubmit}
        disabled={loading}
        className="w-full text-white uppercase text-lg py-6"
        style={{ backgroundColor: loading ? "#ccc" : "var(--accent)" }}
      >
        {loading ? "Enregistrement..." : "+ Ajouter le créneau"}
      </Button>

    </div>
  )
}
