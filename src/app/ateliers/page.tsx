import { ateliers } from "@/data/ateliers"
import AtelierCard from "@/components/AtelierCard"

export default function AteliersPage() {
  return (
    <main className="max-w-md mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-1" style={{ color: "var(--primary)" }}>
        Mes ateliers
      </h1>



      <div className="flex flex-col gap-4 pt-6">
        {ateliers.map((atelier) => (
          <AtelierCard key={atelier.id} atelier={atelier} />
        ))}
      </div>
    </main>
  )
}
