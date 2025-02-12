"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <Card className="w-full md:w-1/3">
            <CardHeader>
              <CardTitle>Profile</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder-avatar.jpg" alt="User Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h2 className="mt-4 text-2xl font-bold">John Doe</h2>
              <p className="text-sm text-muted-foreground">john.doe@example.com</p>
              <div className="mt-4 flex items-center">
                <Badge variant="secondary" className="mr-2">
                  KYC Verified
                </Badge>
                <Badge>Trust Score: 95</Badge>
              </div>
            </CardContent>
          </Card>
          <div className="w-full md:w-2/3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
                <TabsTrigger value="loans">Loans</TabsTrigger>
                <TabsTrigger value="disputes">Disputes</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle>Welcome to Your Dashboard</CardTitle>
                    <CardDescription>Here's an overview of your real estate activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">3</div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Active Loans</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">1</div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Pending Transactions</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">2</div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Total Value</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">500 ETH</div>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="transactions">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>Your latest property transactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { id: 1, property: "123 Crypto St", type: "Purchase", amount: "150 ETH", status: "Completed" },
                        { id: 2, property: "456 Blockchain Ave", type: "Sale", amount: "200 ETH", status: "Pending" },
                      ].map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <p className="font-medium">{transaction.property}</p>
                            <p className="text-sm text-muted-foreground">{transaction.type}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{transaction.amount}</p>
                            <Badge variant={transaction.status === "Completed" ? "default" : "secondary"}>
                              {transaction.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="loans">
                <Card>
                  <CardHeader>
                    <CardTitle>Active Loans</CardTitle>
                    <CardDescription>Your current property loans</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">789 DeFi Lane</h3>
                          <Badge>Active</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">Total Amount: 100 ETH</p>
                        <p className="text-sm text-muted-foreground mb-4">Remaining Balance: 75 ETH</p>
                        <Progress value={25} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-2">25% Repaid</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="disputes">
                <Card>
                  <CardHeader>
                    <CardTitle>Active Disputes</CardTitle>
                    <CardDescription>Ongoing disputes related to your properties</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Dispute #1234</h3>
                          <Badge variant="destructive">Pending Resolution</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">Property: 321 Smart Contract Rd</p>
                        <p className="text-sm text-muted-foreground">Arbitration Type: AI-based</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

