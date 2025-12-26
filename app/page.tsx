import { DashboardHeader } from "@/components/dashboard-header"
import { ModalSplitChart } from "@/components/modal-split-chart"
import { CommuterInsights } from "@/components/commuter-insights"
import { RealTimeStats } from "@/components/real-time-stats"
import { TransportationMetrics } from "@/components/transportation-metrics"
import { Sidebar } from "@/components/sidebar"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full bg-background text-foreground">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <DashboardHeader />
        <main className="flex-1 space-y-6 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Traffic Analysis & Transportation Metrics</h1>
              <p className="text-muted-foreground">
                Analyze 15-minute video segments to identify commuter patterns, capacity utilization, and service
                levels.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <RealTimeStats />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <ModalSplitChart />
            <TransportationMetrics />
          </div>

          <div className="col-span-full">
            <CommuterInsights />
          </div>
        </main>
      </div>
    </div>
  )
}
