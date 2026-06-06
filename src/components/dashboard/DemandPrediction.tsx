import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, AlertTriangle } from "lucide-react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const forecastData = [
  { day: "Mon", actual: 142, predicted: 138 },
  { day: "Tue", actual: 128, predicted: 134 },
  { day: "Wed", actual: 168, predicted: 162 },
  { day: "Thu", actual: 155, predicted: 158 },
  { day: "Fri", actual: 201, predicted: 195 },
  { day: "Sat", actual: 247, predicted: 240 },
  { day: "Sun", actual: 218, predicted: 225 },
  { day: "Mon+", actual: null, predicted: 168 },
  { day: "Tue+", actual: null, predicted: 152 },
  { day: "Wed+", actual: null, predicted: 188 },
];

const predictions = [
  { name: "Organic Cold Brew", trend: "+24%", confidence: 92, action: "Increase order by 80 units", tone: "up" as const },
  { name: "Artisan Sourdough", trend: "+18%", confidence: 87, action: "Restock urgently — 3 days left", tone: "warn" as const },
  { name: "Wireless Earbuds Pro", trend: "-8%", confidence: 78, action: "Reduce next PO by 20%", tone: "down" as const },
];

export function DemandPrediction() {
  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between border-b p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold">Demand Prediction</h3>
            <p className="text-sm text-muted-foreground">AI-powered 3-day forecast & recommendations</p>
          </div>
        </div>
        <Badge variant="outline" className="hidden sm:inline-flex bg-primary/10 text-primary border-primary/20">
          Updated 2m ago
        </Badge>
      </div>

      <div className="grid gap-5 p-5 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={forecastData} margin={{ left: -10, right: 5, top: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
              <XAxis dataKey="day" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  background: "var(--color-popover)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 8,
                  fontSize: 12,
                }}
              />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Line type="monotone" dataKey="actual" stroke="var(--color-primary)" strokeWidth={2.5} dot={{ r: 3 }} name="Actual" />
              <Line
                type="monotone"
                dataKey="predicted"
                stroke="var(--color-accent)"
                strokeWidth={2.5}
                strokeDasharray="5 5"
                dot={{ r: 3 }}
                name="Predicted"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-3 lg:col-span-2">
          {predictions.map((p) => (
            <div key={p.name} className="rounded-lg border bg-muted/30 p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="font-medium text-sm">{p.name}</p>
                <span
                  className={`inline-flex items-center gap-0.5 text-xs font-semibold ${
                    p.tone === "down" ? "text-destructive" : p.tone === "warn" ? "text-warning-foreground" : "text-success"
                  }`}
                >
                  {p.tone === "warn" ? <AlertTriangle className="h-3 w-3" /> : <TrendingUp className="h-3 w-3" />}
                  {p.trend}
                </span>
              </div>
              <p className="mb-2 text-xs text-muted-foreground">{p.action}</p>
              <div className="flex items-center gap-2">
                <Progress value={p.confidence} className="h-1.5" />
                <span className="text-xs tabular-nums text-muted-foreground">{p.confidence}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
