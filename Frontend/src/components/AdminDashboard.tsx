import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Package, 
  Shield, 
  TrendingUp, 
  LogOut, 
  CheckCircle, 
  Clock, 
  XCircle,
  UserCheck,
  UserX
} from "lucide-react";
import Navbar from './Navbar';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const stats = [
    {
      title: "Total Users",
      value: "1,247",
      icon: Users,
      description: "Registered users",
      color: "text-blue-600",
    },
    {
      title: "Pending Approvals",
      value: "23",
      icon: Clock,
      description: "Awaiting review",
      color: "text-orange-600",
    },
    {
      title: "Active Requests",
      value: "156",
      icon: Package,
      description: "Open requests",
      color: "text-green-600",
    },
    {
      title: "Success Rate",
      value: "94%",
      icon: TrendingUp,
      description: "Matched requests",
      color: "text-purple-600",
    },
  ];

  const pendingApprovals = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Receiver",
      date: "2024-01-15",
      status: "Pending",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Donor",
      date: "2024-01-14",
      status: "Pending",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "Receiver",
      date: "2024-01-13",
      status: "Pending",
    },
  ];

  const recentRequests = [
    {
      id: 1,
      title: "School Supplies Request",
      requester: "ABC School",
      category: "Education",
      status: "Approved",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Medical Supplies Needed",
      requester: "Community Hospital",
      category: "Healthcare",
      status: "Pending",
      date: "2024-01-14",
    },
    {
      id: 3,
      title: "Winter Clothing Drive",
      requester: "Local Shelter",
      category: "Clothing",
      status: "Rejected",
      date: "2024-01-13",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onLoginClick={() => {}} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Manage users, requests, and platform operations</p>
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

        {/* Pending Approvals */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Pending User Approvals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingApprovals.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <Users className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{user.name}</h3>
                      <p className="text-sm text-gray-600">
                        {user.email} • {user.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                      {user.status}
                    </Badge>
                    <span className="text-sm text-gray-500">{user.date}</span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                        <UserCheck className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                        <UserX className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Requests */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Recent Requests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Package className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{request.title}</h3>
                      <p className="text-sm text-gray-600">
                        {request.requester} • {request.category}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge
                      variant={
                        request.status === "Approved" 
                          ? "default" 
                          : request.status === "Pending" 
                          ? "secondary" 
                          : "destructive"
                      }
                      className={
                        request.status === "Approved"
                          ? "bg-green-100 text-green-800"
                          : request.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }
                    >
                      {request.status}
                    </Badge>
                    <span className="text-sm text-gray-500">{request.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>User Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Approve new users, manage permissions, and view user analytics.
              </p>
              <Button className="w-full">Manage Users</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Request Oversight</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Review and approve requests, monitor matching, and track fulfillment.
              </p>
              <Button variant="outline" className="w-full">Review Requests</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Platform Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                View detailed reports, metrics, and insights about platform usage.
              </p>
              <Button variant="outline" className="w-full">View Analytics</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
