import ProductsContainer from "@/components/products/ProductsContainer";
import React from "react";

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ layout?: string; search?: string }>;
}) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const layout = resolvedSearchParams.layout ?? "grid";
  const search = resolvedSearchParams.search ?? "";
  return <ProductsContainer layout={layout} search={search} />;
}
