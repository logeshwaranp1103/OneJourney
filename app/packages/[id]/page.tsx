import { mockPackages } from "@/data/packages";
import PackageDetailsClient from "./PackageDetailsClient";

export async function generateStaticParams() {
  return mockPackages.map((pkg) => ({
    id: pkg.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const pkg = mockPackages.find((p) => p.id === resolvedParams.id);

  return <PackageDetailsClient pkg={pkg} />;
}
