import { ateliers } from "@/data/ateliers"
import AtelierCard from "@/components/AtelierCard"

export default function AteliersPage() {
  return (
    <main className="max-w-md mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-1" style={{ color: "var(--primary)" }}>
        Mes ateliers
      </h1>

      {ateliers.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🎨</div>
          <p className="text-gray-500 text-sm">
            {"Tu n'as pas encore d'ateliers."}
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4 mt-6">
          {ateliers.map((atelier) => (
            <AtelierCard key={atelier.id} atelier={atelier} />
          ))}
        </div>
      )}
    </main>
  )
}
