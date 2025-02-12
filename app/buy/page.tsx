"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function BuyPage() {
  const [escrowAmount, setEscrowAmount] = useState("")
  const [dealStatus, setDealStatus] = useState({
    sellerCollateral: false,
    loanApproval: false,
    inspectionPassed: false,
  })

  const handleEscrowDeposit = () => {
    // Implement escrow deposit logic here
    console.log("Escrow deposited:", escrowAmount)
  }

  const handleFinalizePurchase = () => {
    // Implement purchase finalization logic here
    console.log("Purchase finalized")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Buy Property</h1>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Property Overview</TabsTrigger>
            <TabsTrigger value="escrow">Escrow Deposit</TabsTrigger>
            <TabsTrigger value="status">Deal Status</TabsTrigger>
            <TabsTrigger value="finalize">Finalize Purchase</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Property Details</CardTitle>
                <CardDescription>Verified via EigenLayer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Address</Label>
                    <p className="text-sm text-muted-foreground">123 Blockchain St, Crypto City</p>
                  </div>
                  <div>
                    <Label>Owner</Label>
                    <p className="text-sm text-muted-foreground">0x1234...5678</p>
                  </div>
                  <div>
                    <Label>Price</Label>
                    <p className="text-sm text-muted-foreground">100 ETH</p>
                  </div>
                  <div>
                    <Label>Market Value</Label>
                    <p className="text-sm text-muted-foreground">105 ETH</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="escrow">
            <Card>
              <CardHeader>
                <CardTitle>Escrow Deposit</CardTitle>
                <CardDescription>Send funds to lock your commitment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="escrowAmount">Deposit Amount (ETH)</Label>
                    <Input
                      id="escrowAmount"
                      placeholder="Enter amount"
                      value={escrowAmount}
                      onChange={(e) => setEscrowAmount(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleEscrowDeposit}>Deposit to Escrow</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="status">
            <Card>
              <CardHeader>
                <CardTitle>Deal Status Tracker</CardTitle>
                <CardDescription>Monitor the progress of your purchase</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Seller's Collateral Deposit</Label>
                    <span className={dealStatus.sellerCollateral ? "text-green-500" : "text-red-500"}>
                      {dealStatus.sellerCollateral ? "Completed" : "Pending"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Loan Approval Status</Label>
                    <span className={dealStatus.loanApproval ? "text-green-500" : "text-red-500"}>
                      {dealStatus.loanApproval ? "Approved" : "Pending"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Inspection Verification</Label>
                    <span className={dealStatus.inspectionPassed ? "text-green-500" : "text-red-500"}>
                      {dealStatus.inspectionPassed ? "Passed" : "Pending"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="finalize">
            <Card>
              <CardHeader>
                <CardTitle>Finalize Purchase</CardTitle>
                <CardDescription>Complete the transaction and transfer ownership</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Ensure all conditions are met before finalizing the purchase.
                </p>
                <Progress value={66} className="mb-2" />
                <p className="text-sm text-muted-foreground">Transaction progress: 66%</p>
              </CardContent>
              <CardFooter>
                <Button onClick={handleFinalizePurchase}>Finalize Purchase</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}

