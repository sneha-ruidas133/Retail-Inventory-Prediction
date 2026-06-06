import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Status = "in-stock" | "low" | "out";

const items: { sku: string; name: string; category: string; stock: number; reorder: number; status: Status }[] = [
  { sku: "SKU-1042", name: "Organic Cold Brew 12oz", category: "Beverages", stock: 248, reorder: 80, status: "in-stock" },
  { sku: "SKU-2087", name: "Artisan Sourdough Loaf", category: "Bakery", stock: 18, reorder: 30, status: "low" },
  { sku: "SKU-3311", name: "Cashmere Crew Sweater", category: "Apparel", stock: 0, reorder: 25, status: "out" },
  { sku: "SKU-4502", name: "Wireless Earbuds Pro", category: "Electronics", stock: 92, reorder: 40, status: "in-stock" },
  { sku: "SKU-5128", name: "Matcha Powder 100g", category: "Pantry", stock: 12, reorder: 20, status: "low" },
  { sku: "SKU-6790", name: "Bamboo Cutting Board", category: "Home", stock: 64, reorder: 25, status: "in-stock" },
];

const statusMap = {
  "in-stock": { label: "In Stock", className: "bg-success/15 text-success border-success/20" },
  low: { label: "Low Stock", className: "bg-warning/20 text-warning-foreground border-warning/30" },
  out: { label: "Out of Stock", className: "bg-destructive/15 text-destructive border-destructive/20" },
};

export function InventoryTable() {
  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between border-b p-5">
        <div>
          <h3 className="font-display text-lg font-semibold">Inventory Status</h3>
          <p className="text-sm text-muted-foreground">Live stock levels across active SKUs</p>
        </div>
        <Badge variant="outline" className="hidden sm:inline-flex">{items.length} items</Badge>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/40">
              <TableHead>SKU</TableHead>
              <TableHead>Product</TableHead>
              <TableHead className="hidden md:table-cell">Category</TableHead>
              <TableHead className="text-right">Stock</TableHead>
              <TableHead className="hidden sm:table-cell text-right">Reorder Pt</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.sku}>
                <TableCell className="font-mono text-xs text-muted-foreground">{item.sku}</TableCell>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell className="hidden md:table-cell text-muted-foreground">{item.category}</TableCell>
                <TableCell className="text-right tabular-nums font-medium">{item.stock}</TableCell>
                <TableCell className="hidden sm:table-cell text-right tabular-nums text-muted-foreground">{item.reorder}</TableCell>
                <TableCell className="text-right">
                  <Badge variant="outline" className={statusMap[item.status].className}>
                    {statusMap[item.status].label}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
