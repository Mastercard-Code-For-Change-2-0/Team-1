import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Heart, Users, TrendingUp, LogOut } from "lucide-react";
import Navbar from './Navbar';

interface DonorDashboardProps {
  onLogout: () => void;
}

const DonorDashboard: React.FC<DonorDashboardProps> = ({ onLogout }) => {
  const stats = [
    {
      title: "Total Donations",
      value: "24",
      icon: Package,
      description: "Items donated",
      color: "text-blue-600",
    },
    {
      title: "People Helped",
      value: "156",
      icon: Users,
      description: "Lives impacted",
      color: "text-green-600",
    },
    {
      title: "Active Requests",
      value: "8",
      icon: Heart,
      description: "Pending matches",
      color: "text-orange-600",
    },
    {
      title: "Impact Score",
      value: "92%",
      icon: TrendingUp,
      description: "Success rate",
      color: "text-purple-600",
    },
  ];

  const recentDonations = [
    {
      id: 1,
      item: "School Supplies",
      quantity: "5 sets",
      recipient: "ABC School",
      date: "2024-01-15",
      status: "Delivered",
    },
    {
      id: 2,
      item: "Winter Clothes",
      quantity: "12 pieces",
      recipient: "Community Center",
      date: "2024-01-12",
      status: "In Transit",
    },
    {
      id: 3,
      item: "Medical Supplies",
      quantity: "3 kits",
      recipient: "Local Hospital",
      date: "2024-01-10",
      status: "Delivered",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onLoginClick={() => {}} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Donor Dashboard</h1>
            <p className="text-gray-600">Track your donations and impact</p>
          </div>
          <Button onClick={onLogout} variant="outline" className="flex items-center gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.description}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Donations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Recent Donations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentDonations.map((donation) => (
                <div
                  key={donation.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Package className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{donation.item}</h3>
                      <p className="text-sm text-gray-600">
                        {donation.quantity} • {donation.recipient}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge
                      variant={donation.status === "Delivered" ? "default" : "secondary"}
                      className={
                        donation.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }
                    >
                      {donation.status}
                    </Badge>
                    <span className="text-sm text-gray-500">{donation.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Donate Items</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Browse available requests and donate items to help those in need.
              </p>
              <Button className="w-full">Browse Requests</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Track Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                View detailed reports on how your donations are making a difference.
              </p>
              <Button variant="outline" className="w-full">View Reports</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;
