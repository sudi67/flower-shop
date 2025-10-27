import { SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

interface ProductFiltersProps {
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  priceRange: string;
  onPriceRangeChange: (range: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  onClearFilters: () => void;
}

const categories = [
  { id: 'roses', label: 'Roses', count: 1 },
  { id: 'tulips', label: 'Tulips', count: 1 },
  { id: 'mixed', label: 'Mixed Bouquets', count: 1 },
  { id: 'sunflowers', label: 'Sunflowers', count: 1 },
  { id: 'peonies', label: 'Peonies', count: 1 },
  { id: 'lavender', label: 'Lavender', count: 1 },
];

const priceRanges = [
  { id: 'all', label: 'All Prices' },
  { id: 'under-40', label: 'Under $40' },
  { id: '40-50', label: '$40 - $50' },
  { id: '50-60', label: '$50 - $60' },
  { id: 'over-60', label: 'Over $60' },
];

export function ProductFilters({
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  sortBy,
  onSortChange,
  onClearFilters,
}: ProductFiltersProps) {
  const handleCategoryToggle = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      onCategoryChange(selectedCategories.filter((c) => c !== categoryId));
    } else {
      onCategoryChange([...selectedCategories, categoryId]);
    }
  };

  const hasActiveFilters =
    selectedCategories.length > 0 || priceRange !== 'all' || sortBy !== 'featured';

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
          {hasActiveFilters && (
            <span className="ml-1 px-2 py-0.5 bg-rose text-white text-xs rounded-full">
              {selectedCategories.length + (priceRange !== 'all' ? 1 : 0)}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="heading-md text-text-dark">
            Filter & Sort
          </SheetTitle>
        </SheetHeader>

        <ScrollArea className="h-[calc(100vh-120px)] pr-4 mt-6">
          <div className="space-y-6">
            {/* Sort By */}
            <div>
              <h3 className="heading-sm text-sm text-text-dark mb-4">Sort By</h3>
              <RadioGroup value={sortBy} onValueChange={onSortChange}>
                <div className="flex items-center space-x-2 mb-3">
                  <RadioGroupItem value="featured" id="featured" />
                  <Label htmlFor="featured" className="cursor-pointer">
                    Featured
                  </Label>
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <RadioGroupItem value="price-low" id="price-low" />
                  <Label htmlFor="price-low" className="cursor-pointer">
                    Price: Low to High
                  </Label>
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <RadioGroupItem value="price-high" id="price-high" />
                  <Label htmlFor="price-high" className="cursor-pointer">
                    Price: High to Low
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="name" id="name" />
                  <Label htmlFor="name" className="cursor-pointer">
                    Name: A to Z
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Separator />

            {/* Categories */}
            <div>
              <h3 className="heading-sm text-sm text-text-dark mb-4">
                Categories
              </h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={category.id}
                      checked={selectedCategories.includes(category.id)}
                      onCheckedChange={() => handleCategoryToggle(category.id)}
                    />
                    <Label
                      htmlFor={category.id}
                      className="flex-1 cursor-pointer body-base"
                    >
                      {category.label}
                    </Label>
                    <span className="body-sm text-text-light">
                      ({category.count})
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Price Range */}
            <div>
              <h3 className="heading-sm text-sm text-text-dark mb-4">
                Price Range
              </h3>
              <RadioGroup value={priceRange} onValueChange={onPriceRangeChange}>
                {priceRanges.map((range) => (
                  <div key={range.id} className="flex items-center space-x-2 mb-3">
                    <RadioGroupItem value={range.id} id={range.id} />
                    <Label htmlFor={range.id} className="cursor-pointer">
                      {range.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </ScrollArea>

        {hasActiveFilters && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
            <Button
              variant="outline"
              className="w-full"
              onClick={onClearFilters}
            >
              <X className="h-4 w-4 mr-2" />
              Clear All Filters
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}