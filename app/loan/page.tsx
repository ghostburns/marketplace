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

export default function LoanPage() {
  const [loanDetails, setLoanDetails] = useState({
    property: "",
    amount: "",
    duration: "",
  })

  const handleLoanRequest = () => {
    // Implement loan request logic here
    console.log("Loan requested:", loanDetails)
  }

  const handleStakeCollateral = () => {
    // Implement collateral staking logic here
    console.log("Collateral staked for loan")
  }

  const handleRepayment = () => {
    // Implement loan repayment logic here
    console.log("Loan repayment made")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Property Loan</h1>
        <Tabs defaultValue="apply" className="space-y-4">
          <TabsList>
            <TabsTrigger value="apply">Loan Application</TabsTrigger>
            <TabsTrigger value="approval">Approval & Collateral</TabsTrigger>
            <TabsTrigger value="repayment">Loan Repayment</TabsTrigger>
          </TabsList>
          <TabsContent value="apply">
            <Card>
              <CardHeader>
                <CardTitle>Loan Application</CardTitle>
                <CardDescription>Apply for a property loan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="property">Property Address</Label>
                    <Input
                      id="property"
                      placeholder="Enter property address"
                      value={loanDetails.property}
                      onChange={(e) => setLoanDetails({ ...loanDetails, property: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="amount">Loan Amount (ETH)</Label>
                    <Input
                      id="amount"
                      placeholder="Enter loan amount"
                      value={loanDetails.amount}
                      onChange={(e) => setLoanDetails({ ...loanDetails, amount: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Loan Duration (months)</Label>
                    <Input
                      id="duration"
                      placeholder="Enter loan duration"
                      value={loanDetails.duration}
                      onChange={(e) => setLoanDetails({ ...loanDetails, duration: e.target.value })}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleLoanRequest}>Submit Loan Application</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="approval">
            <Card>
              <CardHeader>
                <CardTitle>Loan Approval & Collateral</CardTitle>
                <CardDescription>Stake collateral and accept loan terms</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Once your loan is approved, you'll need to stake collateral to secure the loan.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button onClick={handleStakeCollateral}>Stake Collateral</Button>
                <Button variant="outline">Accept Loan Terms</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="repayment">
            <Card>
              <CardHeader>
                <CardTitle>Loan Repayment</CardTitle>
                <CardDescription>Make repayments on your active loan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label>Loan Status</Label>
                    <Progress value={30} className="mt-2" />
                    <p className="text-sm text-muted-foreground mt-1">30% repaid</p>
                  </div>
                  <div>
                    <Label>Next Payment Due</Label>
                    <p className="text-sm text-muted-foreground">5 ETH on 15th June 2025</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button onClick={handleRepayment}>Make Repayment</Button>
                <Button variant="outline">Early Payoff</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}

