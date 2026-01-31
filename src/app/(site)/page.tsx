import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Officeworks | Stationery & Office Supplies",
  description: "Officeworks - Sri Lanka's leading stationery and office supplies store",
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
