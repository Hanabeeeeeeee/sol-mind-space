import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingBubbles from '@/components/FloatingBubbles';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Users,
  TrendingUp,
  Heart,
  Calendar,
  BookOpen,
  Shield,
  Activity,
  BarChart3
} from 'lucide-react';

const InstituteDashboard = () => {
  const instituteName = localStorage.getItem('userName') || 'University Wellness Center';
  
  // Mock data - will be replaced with real Supabase data
  const studentStats = {
    totalStudents: 1247,
    activeStudents: 892,
    newThisMonth: 156,
    sessionsThisMonth: 2340
  };

  const mentalHealthMetrics = {
    averageMoodScore: 7.2,
    improvementRate: 78,
    riskStudents: 23,
    completionRate: 85
  };

  const therapistStats = [
    {
      id: 'T001',
      name: 'Dr. Anonymous Therapist 1',
      activeStudents: 45,
      sessionsThisWeek: 28,
      averageRating: 4.8
    },
    {
      id: 'T002', 
      name: 'Dr. Anonymous Therapist 2',
      activeStudents: 38,
      sessionsThisWeek: 24,
      averageRating: 4.7
    },
    {
      id: 'T003',
      name: 'Dr. Anonymous Therapist 3', 
      activeStudents: 42,
      sessionsThisWeek: 31,
      averageRating: 4.9
    }
  ];

  const weeklyMoodData = [
    { day: 'Mon', average: 7.1 },
    { day: 'Tue', average: 6.8 },
    { day: 'Wed', average: 7.3 },
    { day: 'Thu', average: 7.0 },
    { day: 'Fri', average: 7.5 },
    { day: 'Sat', average: 7.8 },
    { day: 'Sun', average: 7.4 }
  ];

  return (
    <div className="min-h-screen bg-gradient-calm relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome, {instituteName}!</h1>
            <p className="text-muted-foreground">Institute dashboard - monitoring student mental health and wellness.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Student Overview */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="glass-card">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-2xl font-bold">{studentStats.totalStudents}</div>
                        <div className="text-xs text-muted-foreground">Total Students</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-card">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Activity className="h-5 w-5 text-green-500" />
                      <div>
                        <div className="text-2xl font-bold">{studentStats.activeStudents}</div>
                        <div className="text-xs text-muted-foreground">Active Students</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-card">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-blue-500" />
                      <div>
                        <div className="text-2xl font-bold">+{studentStats.newThisMonth}</div>
                        <div className="text-xs text-muted-foreground">New This Month</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-card">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-purple-500" />
                      <div>
                        <div className="text-2xl font-bold">{studentStats.sessionsThisMonth}</div>
                        <div className="text-xs text-muted-foreground">Sessions This Month</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Mental Health Metrics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-primary" />
                    <span>Overall Mental Health Metrics</span>
                  </CardTitle>
                  <CardDescription>
                    Anonymous aggregated student wellness data
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Average Mood Score</span>
                        <span className="font-semibold">{mentalHealthMetrics.averageMoodScore}/10</span>
                      </div>
                      <Progress value={mentalHealthMetrics.averageMoodScore * 10} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Improvement Rate</span>
                        <span className="font-semibold text-green-600">{mentalHealthMetrics.improvementRate}%</span>
                      </div>
                      <Progress value={mentalHealthMetrics.improvementRate} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Session Completion Rate</span>
                        <span className="font-semibold">{mentalHealthMetrics.completionRate}%</span>
                      </div>
                      <Progress value={mentalHealthMetrics.completionRate} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Students Needing Attention</span>
                        <span className="font-semibold text-orange-600">{mentalHealthMetrics.riskStudents}</span>
                      </div>
                      <Progress value={(mentalHealthMetrics.riskStudents / studentStats.totalStudents) * 100} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Weekly Mood Trends */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span>Weekly Mood Trends</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {weeklyMoodData.map((day) => (
                      <div key={day.day} className="flex items-center space-x-4">
                        <div className="w-12 text-sm font-medium">{day.day}</div>
                        <div className="flex-1">
                          <Progress value={day.average * 10} className="h-3" />
                        </div>
                        <div className="w-12 text-sm font-semibold">{day.average}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              {/* Therapist Performance */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Therapist Performance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {therapistStats.map((therapist) => (
                    <div
                      key={therapist.id}
                      className="p-3 bg-muted/50 rounded-lg"
                    >
                      <div className="font-semibold text-sm mb-2">Therapist {therapist.id}</div>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Active Students:</span>
                          <span>{therapist.activeStudents}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sessions This Week:</span>
                          <span>{therapist.sessionsThisWeek}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rating:</span>
                          <span className="text-green-600">★ {therapist.averageRating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              {/* Quick Actions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full btn-secondary" size="sm">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Generate Report
                  </Button>
                  <Button className="w-full btn-secondary" size="sm">
                    <Shield className="h-4 w-4 mr-2" />
                    Review Risk Cases
                  </Button>
                  <Button className="w-full btn-secondary" size="sm">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Resource Management
                  </Button>
                </CardContent>
              </Card>
              
              {/* System Health */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-primary" />
                    <span>System Health</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm">Platform Uptime</span>
                    <span className="font-semibold text-green-600">99.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Response Time</span>
                    <span className="font-semibold">1.2s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Data Security</span>
                    <span className="font-semibold text-green-600">✓ Secure</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default InstituteDashboard;