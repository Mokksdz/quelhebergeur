import { hostings } from "@/lib/hostings";
import { ComparisonTable } from "./ComparisonTable";

export function AllHostingsTable() {
  return <ComparisonTable hostings={hostings} />;
}
