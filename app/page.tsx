import { Header } from "../components/header"
import { Footer } from "../components/footer"
import UnitConverter from "../components/unit-converter"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <UnitConverter />
      </main>
      <Footer />
    </div>
  )
}
