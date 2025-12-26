import { AlertTriangle, Bus, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function CommuterInsights() {
  return (
    <Card className="h-full bg-card/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          AI Insights & Recommendations
        </CardTitle>
        <CardDescription>Analysis based on 15-minute video segment.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Alert variant="destructive" className="border-destructive/50 bg-destructive/10 text-destructive-foreground">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>High Motorcycle Volume Detected</AlertTitle>
          <AlertDescription>
            Motorcycles represent <strong>30%</strong> of detected traffic. This indicates potential public transport
            capacity gap.
          </AlertDescription>
        </Alert>

        {/* Recommendation */}
        <div className="space-y-3 rounded-lg border bg-card p-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium flex items-center gap-2">
              <Bus className="h-4 w-4 text-orange-500" />
              Recommendation
            </h4>
            <span className="text-xs font-medium text-orange-500 bg-orange-500/10 px-2 py-1 rounded">
              Transport Gap
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            The current modal split suggests a need for <strong>increased public transport capacity</strong>. Consider
            deploying additional buses or transit options to reduce motorcycle dependency.
          </p>
          <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700 text-white">
            View Recommendations
          </Button>
        </div>

        {/* Modal Split Profile */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">Modal Split Breakdown</h4>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Private Vehicles</span>
              <span className="font-bold">45%</span>
            </div>
            <Progress value={45} className="h-2 bg-muted [&>div]:bg-blue-500" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Public Transport</span>
              <span className="font-bold">25%</span>
            </div>
            <Progress value={25} className="h-2 bg-muted [&>div]:bg-orange-500" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Motorcycles</span>
              <span className="font-bold">30%</span>
            </div>
            <Progress value={30} className="h-2 bg-muted [&>div]:bg-red-500" />
          </div>
        </div>

        <div className="rounded-lg bg-muted/30 p-4">
          <div className="flex items-start gap-3">
            <Users className="mt-0.5 h-5 w-5 text-muted-foreground" />
            <div className="space-y-1">
              <p className="text-sm font-medium">Analysis Summary</p>
              <p className="text-xs text-muted-foreground">
                This 15-minute segment captured 542 total vehicles with a diverse modal split indicating commuter
                preference variations.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
