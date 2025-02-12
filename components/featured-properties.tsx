import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StarIcon, Home, Building2, Building } from "lucide-react"
import Link from "next/link"

const featuredProperties = [
  {
    id: 1,
    title: "Luxury Downtown Condo",
    description: "Modern 2-bedroom condo with stunning city views and high-end amenities.",
    price: "500,000",
    type: "Condo",
    rating: 4.8,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
  },
  {
    id: 2,
    title: "Charming Suburban Home",
    description: "Spacious 4-bedroom family home with a large backyard and updated kitchen.",
    price: "450,000",
    type: "House",
    rating: 4.9,
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
  },
  {
    id: 3,
    title: "Beachfront Villa",
    description: "Luxurious 5-bedroom villa with private beach access and panoramic ocean views.",
    price: "1,200,000",
    type: "Villa",
    rating: 4.7,
    bedrooms: 5,
    bathrooms: 4,
    area: 3500,
  },
]

export function FeaturedProperties() {
  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Featured Properties</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((property) => (
            <Card key={property.id} className="group relative overflow-hidden transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{property.title}</CardTitle>
                    <CardDescription className="mt-2">{property.description}</CardDescription>
                  </div>
                  <Badge variant="secondary">{property.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Home className="w-4 h-4" /> {property.bedrooms} beds
                  </span>
                  <span className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" /> {property.bathrooms} baths
                  </span>
                  <span className="flex items-center gap-1">
                    <Building className="w-4 h-4" /> {property.area} sqft
                  </span>
                </div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <StarIcon className="h-4 w-4 fill-current" />
                  <span className="text-sm font-medium">{property.rating}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-lg font-bold">${property.price}</span>
                <Button asChild>
                  <Link href={`/property/${property.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

