"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Filter, Home, Building2, Building, MapPin, Wallet, CreditCard, Info } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const propertyTypes = [
  { value: "all", label: "All Types" },
  { value: "house", label: "House" },
  { value: "apartment", label: "Apartment" },
  { value: "condo", label: "Condo" },
  { value: "villa", label: "Villa" },
  { value: "townhouse", label: "Townhouse" },
]

const properties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    type: "apartment",
    price: 250000,
    location: "123 Main St, Metropolis",
    bedrooms: 2,
    bathrooms: 2,
    area: 1000,
    escrowProgress: 75,
  },
  {
    id: 2,
    title: "Spacious Family Home",
    type: "house",
    price: 450000,
    location: "456 Oak Ave, Suburbia",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    escrowProgress: 30,
  },
  {
    id: 3,
    title: "Luxury Beachfront Villa",
    type: "villa",
    price: 1200000,
    location: "789 Ocean Blvd, Seaside",
    bedrooms: 5,
    bathrooms: 4,
    area: 3500,
    escrowProgress: 0,
  },
  // Add more properties as needed
]

export default function BrowsePage() {
  const [priceRange, setPriceRange] = useState([0, 1500000])
  const [selectedType, setSelectedType] = useState("all")

  const filteredProperties = properties.filter(
    (property) =>
      (selectedType === "all" || property.type === selectedType) &&
      property.price >= priceRange[0] &&
      property.price <= priceRange[1],
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Browse Properties</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64 space-y-6">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filters
              </h2>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Property Type</Label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    {propertyTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Price Range ($)</Label>
                <Slider value={priceRange} onValueChange={setPriceRange} max={1500000} step={10000} className="mt-2" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>${priceRange[0].toLocaleString()}</span>
                  <span>${priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Properties Grid */}
          <div className="flex-1 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function PropertyCard({ property }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("web3")

  const handlePurchase = () => {
    // Implement purchase logic here
    console.log(`Purchasing property with ${paymentMethod}`)
    setIsDialogOpen(false)
  }

  const PropertyIcon =
    {
      house: Home,
      apartment: Building2,
      condo: Building2,
      villa: Building,
      townhouse: Building,
    }[property.type] || Home

  return (
    <Card className="flex flex-col overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 bg-muted">
          <div className="absolute top-2 left-2">
            <Badge className="capitalize">{property.type}</Badge>
          </div>
          <PropertyIcon className="w-full h-full p-12 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <CardTitle className="text-lg mb-2">{property.title}</CardTitle>
        <div className="text-sm text-muted-foreground mb-2 flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          {property.location}
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span>{property.bedrooms} beds</span>
          <span>{property.bathrooms} baths</span>
          <span>{property.area} sqft</span>
        </div>
        <div className="font-bold text-lg mb-2">${property.price.toLocaleString()}</div>
        <div className="space-y-1">
          <div className="text-sm font-medium">Escrow Progress</div>
          <Progress value={property.escrowProgress} className="h-2" />
          <div className="text-xs text-muted-foreground">{property.escrowProgress}% Complete</div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="w-full">Purchase Property</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Purchase {property.title}</DialogTitle>
              <DialogDescription>
                Choose your preferred payment method to purchase this property for ${property.price.toLocaleString()}.
              </DialogDescription>
            </DialogHeader>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="web3" id="web3" />
                <Label htmlFor="web3" className="flex items-center space-x-2">
                  <Wallet className="h-5 w-5" />
                  <span>Web3 Wallet</span>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bank" id="bank" />
                <Label htmlFor="bank" className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Bank Transfer</span>
                </Label>
              </div>
            </RadioGroup>
            {paymentMethod === "web3" && (
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Connect Your Web3 Wallet</AlertTitle>
                <AlertDescription>
                  Please ensure your Web3 wallet (e.g., MetaMask) is connected to proceed with the purchase.
                </AlertDescription>
              </Alert>
            )}
            {paymentMethod === "bank" && (
              <div className="space-y-4">
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Bank Transfer Details</AlertTitle>
                  <AlertDescription>Please use the following details to complete your bank transfer:</AlertDescription>
                </Alert>
                <div className="space-y-2">
                  <p>
                    <strong>Bank Name:</strong> Dealalaw Bank
                  </p>
                  <p>
                    <strong>Account Name:</strong> Dealalaw Escrow
                  </p>
                  <p>
                    <strong>Account Number:</strong> 1234567890
                  </p>
                  <p>
                    <strong>Routing Number:</strong> 987654321
                  </p>
                  <p>
                    <strong>Reference:</strong> Property ID {property.id}
                  </p>
                </div>
              </div>
            )}
            <DialogFooter>
              <Button onClick={handlePurchase}>Confirm Purchase</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}

