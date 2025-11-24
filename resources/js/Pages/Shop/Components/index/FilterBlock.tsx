import { Checkbox } from "@/components/ui/checkbox"

interface FilterBlockProps {
    title: string
    items: string[]
    selected: string[]
    onChange: (value: string, checked: boolean) => void
}

export function FilterBlock({ title, items, selected, onChange }: FilterBlockProps) {
    return (
        <div className="mb-4 pb-4 border-b">
            <h4 className="font-medium text-xs mb-2">{title}</h4>
            <div className="space-y-2">
                {items.map((item) => (
                    <div key={item} className="flex items-center space-x-2">
                        <Checkbox
                            id={`${title}-${item}`}
                            checked={selected.includes(item)}
                            onCheckedChange={(checked) =>
                                onChange(item, checked as boolean)
                            }
                        />
                        <label htmlFor={`${title}-${item}`} className="text-sm cursor-pointer">
                            {item}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}
