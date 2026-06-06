import { createFileRoute } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { StatCard } from "@/components/dashboard/StatCard";
import { DailySalesChart, WeeklySalesChart } from "@/components/dashboard/SalesCharts";
import { InventoryTable } from "@/components/dashboard/InventoryTable";
import { DemandPrediction } from "@/components/dashboard/DemandPrediction";
import { DollarSign, ShoppingCart, Package, AlertTriangle, Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StockSense — Smart Inventory Forecasting" },
      { name: "description", content: "AI-powered inventory forecasting dashboard for retail managers: sales overview, stock status, and demand predictions." },
      { property: "og:title", content: "StockSense — Smart Inventory Forecasting" },
      { property: "og:description", content: "AI-powered inventory forecasting dashboard for retail managers." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b bg-background/80 px-4 backdrop-blur-md md:px-6">
            <SidebarTrigger />
            <div className="hidden flex-1 md:block">
              <div className="relative max-w-md">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search SKUs, products, categories…" className="pl-9 bg-muted/40 border-transparent" />
              </div>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-4 w-4" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-destructive" />
              </Button>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-semibold text-primary-foreground">
                JM
              </div>
            </div>
          </header>

          <main className="flex-1 space-y-6 p-4 md:p-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h1 className="font-display text-2xl font-bold tracking-tight md:text-3xl">Good morning, Jamie</h1>
                <p className="text-sm text-muted-foreground">Here's how your store is performing today.</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="inline-block h-2 w-2 rounded-full bg-success animate-pulse" />
                Live data · Updated just now
              </div>
            </div>

            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard title="Total Revenue" value="$38,420" change={12.4} icon={DollarSign} tint="primary" />
              <StatCard title="Orders Today" value="1,259" change={8.2} icon={ShoppingCart} tint="accent" />
              <StatCard title="Active SKUs" value="2,847" change={3.1} icon={Package} tint="success" />
              <StatCard title="Low Stock Alerts" value="14" change={-5.6} icon={AlertTriangle} tint="warning" />
            </section>

            <section className="grid gap-5 lg:grid-cols-2">
              <DailySalesChart />
              <WeeklySalesChart />
            </section>

            <section>
              <DemandPrediction />
            </section>

            <section>
              <InventoryTable />
            </section>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
