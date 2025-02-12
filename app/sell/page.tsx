"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function SellPage() {
  const [propertyDetails, setPropertyDetails] = useState({
    title: "",
    description: "",
    price: "",
  })

  const handleListProperty = () => {
    // Implement property listing logic here
    console.log("Property listed:", propertyDetails)
  }

  const handleStakeCollateral = () => {
    // Implement collateral staking logic here
    console.log("Collateral staked")
  }

  const handleApproveSale = () => {
    // Implement sale approval logic here
    console.log("Sale approved")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Sell Property</h1>
        <Tabs defaultValue="list" className="space-y-4">
          <TabsList>
            <TabsTrigger value="list">List Property</TabsTrigger>
            <TabsTrigger value="verify">Verify Ownership</TabsTrigger>
            <TabsTrigger value="finalize">Finalize Sale</TabsTrigger>
          </TabsList>
          <TabsContent value="list">
            <Card>
              <CardHeader>
                <CardTitle>Property Listing</CardTitle>
                <CardDescription>Enter your property details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Property Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter property title"
                      value={propertyDetails.title}
                      onChange={(e) => setPropertyDetails({ ...propertyDetails, title: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your property"
                      value={propertyDetails.description}
                      onChange={(e) => setPropertyDetails({ ...propertyDetails, description: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">Price (ETH)</Label>
                    <Input
                      id="price"
                      placeholder="Enter price"
                      value={propertyDetails.price}
                      onChange={(e) => setPropertyDetails({ ...propertyDetails, price: e.target.value })}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleListProperty}>List Property</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="verify">
            <Card>
              <CardHeader>
                <CardTitle>Ownership & Collateral Verification</CardTitle>
                <CardDescription>Verify ownership and stake collateral</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  To prove your commitment and verify ownership, you need to stake collateral.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Verify Ownership</Button>
                <Button onClick={handleStakeCollateral}>Stake Collateral</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="finalize">
            <Card>
              <CardHeader>
                <CardTitle>Finalize Sale</CardTitle>
                <CardDescription>Approve the sale and transfer ownership</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Once a buyer has deposited escrow, you can approve the sale and finalize the transaction.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button onClick={handleApproveSale}>Approve Sale</Button>
                <Button variant="outline">Dispute</Button>
                <Button variant="secondary">Withdraw Funds</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}

