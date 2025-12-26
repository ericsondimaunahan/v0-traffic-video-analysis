"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Gauge, Zap } from "lucide-react"

export function TransportationMetrics() {
  // Level of Service: A=Excellent(0-0.5), B=Good(0.5-0.7), C=Fair(0.7-0.85), D=Poor(0.85-1.0), E=Very Poor(>1.0)
  // V/C Ratio: Volume to Capacity
  const vcRatio = 0.78
  const capacity = 900
  const volume = 687

  const getLoSLevel = (ratio: number) => {
    if (ratio <= 0.5) return { level: "A", label: "Excellent", color: "bg-green-500" }
    if (ratio <= 0.7) return { level: "B", label: "Good", color: "bg-emerald-500" }
    if (ratio <= 0.85) return { level: "C", label: "Fair", color: "bg-yellow-500" }
    if (ratio <= 1.0) return { level: "D", label: "Poor", color: "bg-orange-500" }
    return { level: "E", label: "Very Poor", color: "bg-red-500" }
  }

  const los = getLoSLevel(vcRatio)
  const vcPercentage = vcRatio * 100

  return (
    <Card className="bg-card/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Gauge className="h-5 w-5 text-primary" />
          Capacity & Service Level
        </CardTitle>
        <CardDescription>15-minute segment analysis</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* V/C Ratio */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Volume-to-Capacity (V/C) Ratio</p>
              <p className="text-xs text-muted-foreground">Current capacity utilization</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{vcRatio.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">{vcPercentage.toFixed(0)}% capacity</p>
            </div>
          </div>
          <Progress value={vcPercentage} className="h-3" />
          <p className="text-xs text-muted-foreground">
            {volume} PCU / {capacity} PCU capacity
          </p>
        </div>

        {/* Level of Service */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Level of Service (LoS)</p>
              <p className="text-xs text-muted-foreground">Traffic flow quality rating</p>
            </div>
            <div className="text-right">
              <div className={`text-3xl font-bold ${los.color.replace("bg-", "text-")}`}>{los.level}</div>
              <p className="text-xs text-muted-foreground">{los.label}</p>
            </div>
          </div>
          <div className={`rounded-lg ${los.color} ${los.color.replace("bg-", "bg-")} p-3`}>
            <p className="text-sm font-medium text-white">
              {los.level === "A" && "Excellent flow with minimal congestion"}
              {los.level === "B" && "Good flow with minimal delays"}
              {los.level === "C" && "Fair flow with some congestion"}
              {los.level === "D" && "Poor flow with heavy congestion"}
              {los.level === "E" && "Very poor flow with severe congestion"}
            </p>
          </div>
        </div>

        {/* PCU Breakdown */}
        <div className="space-y-3">
          <p className="text-sm font-medium flex items-center gap-2">
            <Zap className="h-4 w-4" />
            PCU Distribution
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Private Vehicles (PCU 1.0)</span>
              <span className="font-medium">245 PCU</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Public Transport (PCU 2.5)</span>
              <span className="font-medium">338 PCU</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Motorcycles (PCU 0.5)</span>
              <span className="font-medium">81 PCU</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-bold">
              <span>Total PCU</span>
              <span>664 PCU</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
