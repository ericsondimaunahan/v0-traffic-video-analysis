import { Bus, Car, Bike, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RealTimeStats() {
  return (
    <>
      <Card className="bg-card/50 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Private Vehicles</CardTitle>
          <Car className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">245</div>
          <p className="text-xs text-muted-foreground">45% of total vehicles detected</p>
        </CardContent>
      </Card>
      <Card className="bg-card/50 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Public Transport</CardTitle>
          <Bus className="h-4 w-4 text-orange-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">135</div>
          <p className="text-xs text-muted-foreground">25% of total vehicles detected</p>
        </CardContent>
      </Card>
      <Card className="bg-card/50 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Motorcycles</CardTitle>
          <Bike className="h-4 w-4 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">162</div>
          <p className="text-xs text-muted-foreground">30% of total vehicles detected</p>
        </CardContent>
      </Card>
      <Card className="bg-card/50 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total PCU</CardTitle>
          <Users className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">687</div>
          <p className="text-xs text-muted-foreground">Passenger car equivalents</p>
        </CardContent>
      </Card>
    </>
  )
}
