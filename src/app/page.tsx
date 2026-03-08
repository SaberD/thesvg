import { Suspense } from "react";
import { getAllIcons, getCategoryCounts, getIconCount } from "@/lib/icons";
import { HomeContent } from "@/components/home-content";

export default function Home() {
  const icons = getAllIcons();
  const categoryCounts = getCategoryCounts();
  const count = getIconCount();

  return (
    <Suspense>
      <HomeContent icons={icons} categoryCounts={categoryCounts} count={count} />
    </Suspense>
  );
}
