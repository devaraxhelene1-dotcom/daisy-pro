import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

type Props = {
  nomAtelier: string
}

export default function SuccessScreen({ nomAtelier }: Props) {
  const router = useRouter()

  return (
    <main className="max-w-md mx-auto px-4 py-8 text-center">
      <div className="text-5xl mb-4">🎉</div>
      <h2 className="text-xl font-bold mb-2" style={{ color: "var(--primary)" }}>
        Créneau ajouté !
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Le créneau pour <strong>{nomAtelier}</strong> a bien été créé.
      </p>
      <Button
        onClick={() => router.push("/")}
        className="w-full text-white uppercase text-lg py-6"
        style={{ backgroundColor: "var(--primary)" }}>
        Retour aux ateliers
      </Button>
    </main>
  )
}
