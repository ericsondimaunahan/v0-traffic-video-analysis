"use client"

import { BarChart, Bar, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, PieChart, Pie } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { name: "Private Vehicles", value: 245, percentage: 45 },
  { name: "Public Transport", value: 135, percentage: 25 },
  { name: "Motorcycles", value: 162, percentage: 30 },
]

const colors = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)"]

export function ModalSplitChart() {
  const total = data.reduce((sum, item) => sum + item.value, 0)

  return (
    <Card className="col-span-4 bg-card/50">
      <CardHeader>
        <CardTitle>Modal Split Analysis - 15 Minutes</CardTitle>
        <CardDescription>Vehicle type distribution for this analysis period (Total: {total} vehicles)</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Pie Chart */}
          <div className="h-[300px] w-full lg:w-1/2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name}: ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
                  itemStyle={{ color: "var(--foreground)" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="h-[300px] w-full lg:w-1/2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="#888888" fontSize={12} angle={-45} textAnchor="end" height={100} />
                <YAxis stroke="#888888" fontSize={12} />
                <Tooltip
                  contentStyle={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
                  itemStyle={{ color: "var(--foreground)" }}
                />
                <Bar dataKey="value" fill="var(--chart-1)" radius={[8, 8, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
