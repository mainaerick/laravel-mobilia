import type React from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {Filter, Grid3x3, List, X} from "lucide-react"
import {Colors, Dimensions} from "@/utils/Config";
import {Row} from "antd";
import {useState} from "react";
import {FilterBlock} from "@/Pages/Shop/Components/index/FilterBlock";
import {router} from "@inertiajs/react";

interface ToolbarProps {
    onFilterClick?: () => void
    onViewChange?: (view: "grid" | "list") => void
    currentView?: "grid" | "list"
    totalResults?: number
    startIndex?: number
    endIndex?: number
    pageSize?: number
    onPageSizeChange?: (size: number) => void
    onSortChange?: (value: string) => void
    queryParams: any
    sortValue: string
}

export const Toolbar: React.FC<ToolbarProps> = ({
                                                    onFilterClick,
                                                    onViewChange,
                                                    currentView = "grid",
                                                    totalResults,
                                                    startIndex,
                                                    endIndex,
                                                    pageSize,
                                                    onPageSizeChange,
                                                    sortValue = "default",
                                                    onSortChange,
                                                    queryParams
                                                }) => {
    const [showFilterPanel, setShowFilterPanel] = useState(false)
    const [filters, setFilters] = useState({
        category: queryParams.category || [],
        room: queryParams.room || [],
        brand: queryParams.brand || [],
        material: queryParams.material || [],
        color: queryParams.color || [],
        price: queryParams.price || [],
        rating: queryParams.rating || [],
    });

    const handleFilterChange = (filterType: string, value: string, checked: boolean) => {
        const updatedFilters = { ...filters }
        if (checked) {
            updatedFilters[filterType] = [...(updatedFilters[filterType] || []), value]
        } else {
            updatedFilters[filterType] = (updatedFilters[filterType] || []).filter((v) => v !== value)
        }
        setFilters(updatedFilters)

        // Apply filters immediately with updated values
        router.get(route("shop.index"), {
            sort_field: queryParams.sort_field,
            sort_direction: queryParams.sort_direction,
            per_page: queryParams.per_page,
            ...updatedFilters,
            page: 1,
        }, {
            preserveState: true,
            preserveScroll: true,
        });
    }

    const handleClearFilters = () => {
        setFilters({
            category: [],
            room: [],
            brand: [],
            material: [],
            color: [],
            price: [],
            rating: [],
        });

        router.get(route("shop.index"), {
            sort_field: queryParams.sort_field,
            sort_direction: queryParams.sort_direction,
            per_page: queryParams.per_page,
            page: 1
        });
    };

    const hasActiveFilters = Object.values(filters).some(arr => arr.length > 0);

    return (
        <div style={{ background: Colors.secondary }} className="px-4 py-3 border-b ">
            <Row
                style={{ height: "100%" }}
                justify={"space-between"}
                align={"middle"}
                className={Dimensions.pagePaddingClass}
            >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between w-[calc(100%+8rem)]">
                    {/* Left side - Filter and View Options */}
                    <div className="flex items-center gap-3 flex-wrap">
                        <div className="relative z-[60]">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setShowFilterPanel(!showFilterPanel)}
                                className="gap-2 bg-transparent"
                            >
                                <Filter className="w-4 h-4" />
                                Filter
                                {hasActiveFilters && (
                                    <span className="ml-1 px-1.5 py-0.5 text-xs bg-primary text-white rounded-full">
                                        {Object.values(filters).reduce((sum, arr) => sum + arr.length, 0)}
                                    </span>
                                )}
                            </Button>

                            {showFilterPanel && (
                                <div className="absolute left-0 top-full mt-2 w-64 bg-white border rounded-lg shadow-lg z-[200] p-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-semibold text-sm">Filters</h3>
                                        <Button variant="ghost" size="sm" onClick={() => setShowFilterPanel(false)} className="h-6 w-6 p-0">
                                            <X className="w-4 h-4" />
                                        </Button>
                                    </div>

                                    <FilterBlock
                                        title="Category"
                                        items={["chairs", "tables", "sofas", "beds"]}
                                        selected={filters.category}
                                        onChange={(value, checked) =>
                                            handleFilterChange("category", value, checked)
                                        }
                                    />

                                    <FilterBlock
                                        title="Room"
                                        items={["living", "bedroom", "dining"]}
                                        selected={filters.room}
                                        onChange={(value, checked) =>
                                            handleFilterChange("room", value, checked)
                                        }
                                    />

                                    <FilterBlock
                                        title="Brand"
                                        items={["Ikea", "Ashley", "Wayfair"]}
                                        selected={filters.brand}
                                        onChange={(value, checked) =>
                                            handleFilterChange("brand", value, checked)
                                        }
                                    />

                                    <FilterBlock
                                        title="Price"
                                        items={["0-50", "50-100", "100-200", "200+"]}
                                        selected={filters.price}
                                        onChange={(value, checked) =>
                                            handleFilterChange("price", value, checked)
                                        }
                                    />

                                    {/* Clear Filters Button */}
                                    {hasActiveFilters && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={handleClearFilters}
                                            className="w-full text-xs bg-transparent"
                                        >
                                            Clear Filters
                                        </Button>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* View Toggle Icons */}
                        <div className="flex gap-1 border-l pl-3">
                            <Button
                                variant={currentView === "grid" ? "default" : "ghost"}
                                size="sm"
                                onClick={() => onViewChange?.("grid")}
                                aria-label="Grid view"
                            >
                                <Grid3x3 className="w-4 h-4" />
                            </Button>
                            <Button
                                variant={currentView === "list" ? "default" : "ghost"}
                                size="sm"
                                onClick={() => onViewChange?.("list")}
                                aria-label="List view"
                            >
                                <List className="w-4 h-4" />
                            </Button>
                        </div>

                        {/* Results Count */}
                        <span className="text-sm text-gray-600 whitespace-nowrap">
                            Showing {startIndex}-{endIndex} of {totalResults} results
                        </span>
                    </div>

                    {/* Right side - Show and Sort Options */}
                    <div className="flex items-center gap-4 flex-wrap justify-start md:justify-end">
                        {/* Show Items Per Page */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Show</span>
                            <Select value={pageSize?.toString()} onValueChange={(value) => onPageSizeChange?.(Number(value))}>
                                <SelectTrigger className="w-16">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="10">10</SelectItem>
                                    <SelectItem value="20">20</SelectItem>
                                    <SelectItem value="30">30</SelectItem>
                                    <SelectItem value="40">40</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Sort By */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Sort by</span>
                            <Select value={sortValue} onValueChange={onSortChange}>
                                <SelectTrigger className="w-40">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="default">Default</SelectItem>
                                    <SelectItem value="price_high">Price: High to Low</SelectItem>
                                    <SelectItem value="price_low">Price: Low to High</SelectItem>
                                    <SelectItem value="rating">Rating</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </Row>
        </div>
    )
}
