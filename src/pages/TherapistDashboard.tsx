import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingBubbles from '@/components/FloatingBubbles';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Calendar,
  MessageCircle,
  Users,
  Clock,
  CheckCircle2,
  TrendingUp,
  User,
  BookOpen
} from 'lucide-react';

const TherapistDashboard = () => {
  const userName = localStorage.getItem('userName') || 'Dr. Smith';
  
  // Mock data - will be replaced with real Supabase data
  const upcomingSessions = [
    {
      id: 1,
      studentCode: 'ST001',
      date: '2024-09-20',
      time: '10:00 AM',
      type: 'Individual Counselling',
      status: 'scheduled'
    },
    {
      id: 2,
      studentCode: 'ST002', 
      date: '2024-09-20',
      time: '2:00 PM',
      type: 'Group Therapy',
      status: 'scheduled'
    },
    {
      id: 3,
      studentCode: 'ST003',
      date: '2024-09-19',
      time: '11:00 AM', 
      type: 'Individual Counselling',
      status: 'completed'
    }
  ];

  const studentsUnderCare = [
    {
      code: 'ST001',
      lastSession: '2024-09-15',
      sessionsCompleted: 8,
      averageMood: 7.2,
      status: 'active'
    },
    {
      code: 'ST002',
      lastSession: '2024-09-18',
      sessionsCompleted: 12,
      averageMood: 6.8,
      status: 'active'
    },
    {
      code: 'ST003',
      lastSession: '2024-09-10',
      sessionsCompleted: 5,
      averageMood: 8.1,
      status: 'active'
    }
  ];

  const recentMessages = [
    {
      id: 1,
      studentCode: 'ST001',
      message: 'Thank you for the session today. I feel much better.',
      time: '2 hours ago',
      unread: true
    },
    {
      id: 2,
      studentCode: 'ST002',
      message: 'Can we reschedule tomorrow\'s appointment?',
      time: '5 hours ago',
      unread: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-calm relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back, {userName}!</h1>
            <p className="text-muted-foreground">Your therapist dashboard - helping students achieve better mental health.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Today's Sessions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Today's Sessions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingSessions.filter(session => session.date === '2024-09-20').map((session) => (
                      <div
                        key={session.id}
                        className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                      >
                        <div>
                          <h4 className="font-semibold">Student {session.studentCode}</h4>
                          <p className="text-sm text-muted-foreground">{session.time}</p>
                          <p className="text-sm text-primary">{session.type}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-5 w-5 text-orange-500" />
                          <span className="text-sm capitalize">{session.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Students Under Care */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Students Under Care</span>
                  </CardTitle>
                  <CardDescription>
                    Anonymous student progress tracking
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {studentsUnderCare.map((student) => (
                      <div
                        key={student.code}
                        className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                      >
                        <div>
                          <h4 className="font-semibold">Student {student.code}</h4>
                          <p className="text-sm text-muted-foreground">
                            Last session: {student.lastSession}
                          </p>
                          <p className="text-sm text-primary">
                            {student.sessionsCompleted} sessions completed
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-primary">
                            {student.averageMood}/10
                          </div>
                          <div className="text-xs text-muted-foreground">Avg Mood</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              {/* Session Stats */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span>Session Statistics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm">This Week</span>
                    <span className="font-semibold">12 sessions</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">This Month</span>
                    <span className="font-semibold">48 sessions</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Active Students</span>
                    <span className="font-semibold">{studentsUnderCare.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Completion Rate</span>
                    <span className="font-semibold text-green-600">94%</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* Recent Messages */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <span>Recent Messages</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-3 rounded-lg ${message.unread ? 'bg-primary/10 border border-primary/20' : 'bg-muted/50'}`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold text-sm">Student {message.studentCode}</span>
                        <span className="text-xs text-muted-foreground">{message.time}</span>
                      </div>
                      <p className="text-sm">{message.message}</p>
                    </div>
                  ))}
                  <Button className="w-full btn-secondary" size="sm">
                    View All Messages
                  </Button>
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

export default TherapistDashboard;