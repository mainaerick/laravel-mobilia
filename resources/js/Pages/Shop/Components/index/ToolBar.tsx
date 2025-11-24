
import type React from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, Grid3x3, List } from "lucide-react"
import {Colors, Dimensions} from "@/utils/Config";
import {Row} from "antd";

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
}

export const Toolbar: React.FC<ToolbarProps> = ({
                                                    onFilterClick,
                                                    onViewChange,
                                                    currentView = "grid",
                                                    totalResults = 32,
                                                    startIndex = 1,
                                                    endIndex = 16,
                                                    pageSize = 16,
                                                    onPageSizeChange,
                                                    sortValue = "default",
                                                    onSortChange,
                                                }) => {
    return (
        <div style={{ background: Colors.secondary }} className="px-4 py-3 border-b ">
            <Row
            style={{ height: "100%",  }}
               justify={"space-between"}
                 align={"middle"}
                  className={Dimensions.pagePaddingClass}
              >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between w-[calc(100%+8rem)]">
                {/* Left side - Filter and View Options */}
                <div className="flex items-center gap-3 flex-wrap">
                    <Button variant="outline" size="sm" onClick={onFilterClick} className="gap-2 bg-transparent">
                        <Filter className="w-4 h-4" />
                        Filter
                    </Button>

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
                        <Select value={pageSize.toString()} onValueChange={(value) => onPageSizeChange?.(Number(value))}>
                            <SelectTrigger className="w-16">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="8">8</SelectItem>
                                <SelectItem value="16">16</SelectItem>
                                <SelectItem value="24">24</SelectItem>
                                <SelectItem value="32">32</SelectItem>
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
