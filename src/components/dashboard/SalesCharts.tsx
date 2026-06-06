import { Card } from "@/components/ui/card";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const dailyData = [
  { day: "Mon", sales: 4200, orders: 142 },
  { day: "Tue", sales: 3800, orders: 128 },
  { day: "Wed", sales: 5100, orders: 168 },
  { day: "Thu", sales: 4700, orders: 155 },
  { day: "Fri", sales: 6300, orders: 201 },
  { day: "Sat", sales: 7800, orders: 247 },
  { day: "Sun", sales: 6900, orders: 218 },
];

const weeklyData = [
  { week: "W1", sales: 28400 },
  { week: "W2", sales: 31200 },
  { week: "W3", sales: 29800 },
  { week: "W4", sales: 34600 },
  { week: "W5", sales: 32100 },
  { week: "W6", sales: 38900 },
  { week: "W7", sales: 41200 },
  { week: "W8", sales: 39500 },
];

function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border bg-popover px-3 py-2 text-sm shadow-md">
      <p className="font-medium">{label}</p>
      {payload.map((p: any) => (
        <p key={p.dataKey} className="text-muted-foreground">
          <span className="font-medium text-foreground">${p.value.toLocaleString()}</span>
        </p>
      ))}
    </div>
  );
}

export function DailySalesChart() {
  return (
    <Card className="p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-display text-lg font-semibold">Daily Sales</h3>
          <p className="text-sm text-muted-foreground">Revenue across the past week</p>
        </div>
        <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">Last 7 days</span>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={dailyData} margin={{ left: -10, right: 5, top: 5 }}>
          <defs>
            <linearGradient id="salesFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.4} />
              <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
          <XAxis dataKey="day" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip content={<ChartTooltip />} />
          <Area type="monotone" dataKey="sales" stroke="var(--color-primary)" strokeWidth={2.5} fill="url(#salesFill)" />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}

export function WeeklySalesChart() {
  return (
    <Card className="p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-display text-lg font-semibold">Weekly Sales</h3>
          <p className="text-sm text-muted-foreground">Performance over recent weeks</p>
        </div>
        <span className="rounded-md bg-accent/15 px-2 py-1 text-xs font-medium text-accent-foreground">Last 8 weeks</span>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={weeklyData} margin={{ left: -10, right: 5, top: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
          <XAxis dataKey="week" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip content={<ChartTooltip />} cursor={{ fill: "var(--color-muted)", opacity: 0.5 }} />
          <Bar dataKey="sales" fill="var(--color-accent)" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
