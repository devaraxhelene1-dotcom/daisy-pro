"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
    <div className="flex flex-col gap-6">

      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label className="mb-2 block text-sm font-medium">📅 Date</Label>
          <Input
            type="date"
            className="bg-white rounded-xl text-sm"
            onChange={(e) => handleChange("date", e.target.value)}/>
        </div>

        <div>
          <Label className="mb-2 block text-sm font-medium">🕐 Heure</Label>
          <Input
            type="time"
            className="bg-white rounded-xl text-sm"
            onChange={(e) => handleChange("heure", e.target.value)}/>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label className="mb-2 block text-sm font-medium">⏱ Durée (min)</Label>
          <Input
            type="number"
            placeholder="ex: 90"
            className="bg-white rounded-xl text-sm"
            onChange={(e) => handleChange("duree", e.target.value)}/>
        </div>

        <div>
          <Label className="mb-2 block text-sm font-medium">👥 Places</Label>
          <Input
            type="number"
            placeholder="ex: 8"
            className="bg-white rounded-xl text-sm"
            onChange={(e) => handleChange("capacite", e.target.value)}/>
        </div>
      </div>

      <div>
        <Label className="mb-2 block text-sm font-medium">💶 Prix (€)</Label>
        <Input
          type="number"
          placeholder="ex: 35"
          className="bg-white rounded-xl text-sm"
          onChange={(e) => handleChange("prix", e.target.value)}/>
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
        className="w-full text-white uppercase text-lg py-6 rounded-xl"
        style={{ backgroundColor: loading ? "#ccc" : "var(--accent)" }}>
        {loading ? "Enregistrement..." : "+ Ajouter le créneau"}
      </Button>

    </div>
  )
}
