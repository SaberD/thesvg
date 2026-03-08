"use client";

import { Heart, Home, Plus } from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface SidebarProps {
  categories: { name: string; count: number }[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
  favoriteCount: number;
  showFavorites: boolean;
  onToggleFavorites: () => void;
  mobile?: boolean;
}

export function Sidebar({
  categories,
  selectedCategory,
  onCategorySelect,
  favoriteCount,
  showFavorites,
  onToggleFavorites,
  mobile,
}: SidebarProps) {
  const isHomeActive = !selectedCategory && !showFavorites;
  const isFavoritesActive = showFavorites;

  function handleHomeClick() {
    onCategorySelect(null);
    if (showFavorites) {
      onToggleFavorites();
    }
  }

  return (
    <aside
      className={cn(
        mobile
          ? "flex h-full w-full flex-col bg-background pt-6"
          : "fixed top-14 left-0 z-30 hidden h-[calc(100vh-3.5rem)] w-56 flex-col border-r border-border bg-background md:flex"
      )}
    >
      <nav className="flex flex-col gap-1 p-3">
        <Link
          href="/"
          onClick={handleHomeClick}
          className={cn(
            "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
            isHomeActive && "bg-accent text-accent-foreground"
          )}
        >
          <Home className="h-4 w-4 shrink-0" />
          Home
        </Link>

        <button
          type="button"
          onClick={onToggleFavorites}
          className={cn(
            "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
            isFavoritesActive && "bg-accent text-accent-foreground"
          )}
        >
          <Heart className="h-4 w-4 shrink-0" />
          <span className="flex-1 text-left">Favorites</span>
          {favoriteCount > 0 && (
            <span className="font-mono text-xs text-muted-foreground">
              {favoriteCount}
            </span>
          )}
        </button>

        <Link
          href="/submit"
          className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <Plus className="h-4 w-4 shrink-0" />
          Submit
        </Link>
      </nav>

      <Separator />

      <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Categories
      </p>

      <ScrollArea className="flex-1 overflow-hidden px-3 pb-3">
        <div className="flex flex-col gap-0.5">
          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              onClick={() => onCategorySelect(category.name)}
              className={cn(
                "flex w-full items-center justify-between rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                selectedCategory === category.name &&
                  !showFavorites &&
                  "bg-accent text-accent-foreground font-medium"
              )}
            >
              <span className="truncate">{category.name}</span>
              <span className="ml-2 shrink-0 font-mono text-xs text-muted-foreground">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
}
