import GraphCard from "@/components/component/graph-card"
import NavBar from "@/components/component/nav-bar"
import StatsCard from "@/components/component/stats-card"

export default async function Page() {
  return (
    <div className="flex flex-col w-full">
      <NavBar />
      <main className="flex-1 overflow-y-auto">
        <div className="container px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid gap-6">
            <div className="flex flex-col gap-4">
              <GraphCard />
              <StatsCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
