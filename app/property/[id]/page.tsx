"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { StarIcon, Home, Building2, Building, MapPin, Calendar, Info, Wallet, CreditCard } from "lucide-react"

// This would typically come from an API or database
const property = {
  id: 1,
  title: "Luxury Downtown Condo",
  description:
    "Experience urban living at its finest in this modern 2-bedroom condo. Featuring stunning city views, high-end amenities, and a prime downtown location, this property offers the perfect blend of comfort and sophistication.",
  price: 500000,
  type: "Condo",
  rating: 4.8,
  bedrooms: 2,
  bathrooms: 2,
  area: 1200,
  location: "123 Main St, Downtown, Metropolis",
  yearBuilt: 2020,
  amenities: ["Gym", "Pool", "Concierge", "Parking"],
  images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  escrowProgress: 0,
}

export default function PropertyDetails() {
  const params = useParams()
  const [isLoanDialogOpen, setIsLoanDialogOpen] = useState(false)
  const [isPurchaseDialogOpen, setIsPurchaseDialogOpen] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("web3")

  const handlePurchase = () => {
    // Implement purchase logic here
    console.log(`Purchasing property with ${paymentMethod}`)
    setIsPurchaseDialogOpen(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h1 className="text-3xl font-bold">{property.title}</h1>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span className="text-muted-foreground">{property.location}</span>
            </div>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img
                src={property.images[0] || "/placeholder.svg"}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>
            <Tabs defaultValue="details">
              <TabsList>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="space-y-4">
                <p className="text-muted-foreground">{property.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Home className="h-5 w-5 text-muted-foreground" />
                    <span>{property.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Building2 className="h-5 w-5 text-muted-foreground" />
                    <span>{property.bathrooms} Bathrooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Building className="h-5 w-5 text-muted-foreground" />
                    <span>{property.area} sqft</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <span>Built in {property.yearBuilt}</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="amenities">
                <ul className="grid grid-cols-2 gap-2">
                  {property.amenities.map((amenity) => (
                    <li key={amenity} className="flex items-center space-x-2">
                      <Info className="h-5 w-5 text-muted-foreground" />
                      <span>{amenity}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">${property.price.toLocaleString()}</CardTitle>
                <CardDescription>
                  <div className="flex items-center space-x-1">
                    <StarIcon className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    <span>{property.rating} Rating</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium">Escrow Progress</div>
                  <Progress value={property.escrowProgress} className="h-2" />
                  <div className="text-xs text-muted-foreground">{property.escrowProgress}% Complete</div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                <Dialog open={isPurchaseDialogOpen} onOpenChange={setIsPurchaseDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full">Buy Property</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Purchase Property</DialogTitle>
                      <DialogDescription>
                        Choose your preferred payment method to purchase this property for $
                        {property.price.toLocaleString()}.
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
                          <AlertDescription>
                            Please use the following details to complete your bank transfer:
                          </AlertDescription>
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
                <Dialog open={isLoanDialogOpen} onOpenChange={setIsLoanDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      Apply for Loan
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Loan Application</DialogTitle>
                      <DialogDescription>
                        To apply for a loan, you must have at least 50% of the property value ($
                        {(property.price * 0.5).toLocaleString()}) available as a down payment.
                      </DialogDescription>
                    </DialogHeader>
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertTitle>Important</AlertTitle>
                      <AlertDescription>
                        Please ensure you meet the minimum down payment requirement before proceeding with your loan
                        application.
                      </AlertDescription>
                    </Alert>
                    <DialogFooter>
                      <Button onClick={() => setIsLoanDialogOpen(false)}>Proceed with Application</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Property Type</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="text-lg">{property.type}</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

