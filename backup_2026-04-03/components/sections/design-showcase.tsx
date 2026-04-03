"use client"

import { useState, useMemo, useCallback } from "react"
import { LivePreviewCard } from "@/components/live-preview-card"
import { Sparkles, Search, Filter, ChevronDown, X, Grid3X3, LayoutGrid } from "lucide-react"
import { Button } from "@/components/ui/button"
import { designs, categories, type DesignCategory } from "@/data/designs"
import { cn } from "@/lib/utils"

const ITEMS_PER_PAGE = 12

export function DesignShowcase() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<DesignCategory | "الكل">("الكل")
  const [currentPage, setCurrentPage] = useState(1)
  const [showالتصنيفات, setShowالتصنيفات] = useState(false)
  const [gridCols, setGridCols] = useState<2 | 3>(2)

  // Filter and search designs
  const filteredDesigns = useMemo(() => {
    let result = designs

    // Filter by category
    if (selectedCategory !== "الكل") {
      result = result.filter((d) => d.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (d) =>
          d.title.toLowerCase().includes(query) ||
          d.description.toLowerCase().includes(query) ||
          d.category.toLowerCase().includes(query) ||
          d.tags?.some((tag) => tag.toLowerCase().includes(query))
      )
    }

    return result
  }, [searchQuery, selectedCategory])

  // Pagination
  const totalPages = Math.ceil(filteredDesigns.length / ITEMS_PER_PAGE)
  const paginatedDesigns = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredDesigns.slice(start, start + ITEMS_PER_PAGE)
  }, [filteredDesigns, currentPage])

  // Reset to page 1 when filters change
  const handleCategoryChange = useCallback((category: DesignCategory | "الكل") => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }, [])

  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value)
    setCurrentPage(1)
  }, [])

  const clearالتصنيفات = useCallback(() => {
    setSearchQuery("")
    setSelectedCategory("الكل")
    setCurrentPage(1)
  }, [])

  // Smooth scroll to top of section
  const scrollToTop = useCallback(() => {
    document.getElementById("design-showcase")?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page)
    scrollToTop()
  }, [scrollToTop])

  return (
    <section id="design-showcase" className="scroll-mt-20 py-12">
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center justify-end gap-3 text-right">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">معرض التصاميم المباشرة</h2>
            <p className="text-sm text-muted-foreground">
              {filteredDesigns.length} تصاميم مباشرة، واجهات، وودجات مع معاينة حية
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-6 space-y-4 text-right">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="ابحث عن تصميم أو تصنيف أو وسم..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full rounded-xl border border-border/50 bg-card/80 py-3.5 pl-12 pr-12 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          {searchQuery && (
            <button
              onClick={() => handleSearchChange("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-end gap-4">
          <div className="flex flex-wrap items-center justify-end gap-2">
            {/* Mobile Filter Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowالتصنيفات(!showالتصنيفات)}
              className="border-primary/50 lg:hidden"
            >
              <Filter className="mr-2 h-4 w-4" />
              التصنيفات
              <ChevronDown className={cn("ml-2 h-4 w-4 transition-transform", showالتصنيفات && "rotate-180")} />
            </Button>

            {/* Desktop Category Pills */}
            <div className="hidden flex-wrap gap-2 lg:flex">
              <button
                onClick={() => handleCategoryChange("الكل")}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
                  selectedCategory === "الكل"
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-card/80 text-muted-foreground hover:bg-card hover:text-foreground"
                )}
              >
                الكل ({designs.length})
              </button>
              {categories.map((category) => {
                const count = designs.filter((d) => d.category === category).length
                return (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={cn(
                      "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                        : "bg-card/80 text-muted-foreground hover:bg-card hover:text-foreground"
                    )}
                  >
                    {category} ({count})
                  </button>
                )
              })}
            </div>

            {/* Clear التصنيفات */}
            {(searchQuery || selectedCategory !== "الكل") && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearالتصنيفات}
                className="text-muted-foreground hover:text-primary"
              >
                <X className="mr-1 h-4 w-4" />
                مسح الفلاتر
              </Button>
            )}
          </div>

          {/* Grid Toggle */}
          <div className="hidden items-center gap-1 rounded-lg bg-card/80 p-1 lg:flex">
            <button
              onClick={() => setGridCols(2)}
              className={cn(
                "rounded-md p-2 transition-colors",
                gridCols === 2 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              )}
              title="عمودان"
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setGridCols(3)}
              className={cn(
                "rounded-md p-2 transition-colors",
                gridCols === 3 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              )}
              title="ثلاثة أعمدة"
            >
              <Grid3X3 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Mobile Filter Dropdown */}
        {showالتصنيفات && (
          <div className="flex flex-wrap gap-2 rounded-xl border border-border/50 bg-card/80 p-4 lg:hidden">
            <button
              onClick={() => handleCategoryChange("الكل")}
              className={cn(
                "rounded-full px-3 py-1 text-sm font-medium transition-all",
                selectedCategory === "الكل"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground"
              )}
            >
              الكل
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={cn(
                  "rounded-full px-3 py-1 text-sm font-medium transition-all",
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results Count */}
      {filteredDesigns.length > 0 && (
        <p className="mb-6 text-right text-sm text-muted-foreground">
          عرض {paginatedDesigns.length} of {filteredDesigns.length} تصميم
          {selectedCategory !== "الكل" && ` in ${selectedCategory}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </p>
      )}

      {/* Products Grid */}
      {paginatedDesigns.length > 0 ? (
        <div
          className={cn(
            "grid gap-6 text-right",
            gridCols === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3",
            "md:grid-cols-2"
          )}
        >
          {paginatedDesigns.map((design, index) => (
            <LivePreviewCard
              key={design.id}
              title={design.title}
              description={design.description}
              previewCode={design.previewCode}
              rating={design.rating}
              category={design.category}
              priority={index < 4}
              onViewDetails={() => console.log("View details:", design.id)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-border/50 bg-card/50 py-20">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Search className="h-8 w-8 text-primary/50" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">No تصميم found</h3>
          <p className="mb-4 text-center text-muted-foreground">
            No تصميم match your current search or filter criteria.
          </p>
          <Button onClick={clearالتصنيفات} variant="outline" className="border-primary/50">
            Clear all filters
          </Button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="border-primary/50"
            >
              Previous
            </Button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                // Show first, last, current, and adjacent pages
                const showPage =
                  page === 1 ||
                  page === totalPages ||
                  Math.abs(page - currentPage) <= 1

                if (!showPage) {
                  // Show ellipsis for gaps
                  if (page === 2 || page === totalPages - 1) {
                    return (
                      <span key={page} className="px-2 text-muted-foreground">
                        ...
                      </span>
                    )
                  }
                  return null
                }

                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition-all",
                      currentPage === page
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                        : "text-muted-foreground hover:bg-card hover:text-foreground"
                    )}
                  >
                    {page}
                  </button>
                )
              })}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="border-primary/50"
            >
              Next
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </p>
        </div>
      )}
    </section>
  )
}
