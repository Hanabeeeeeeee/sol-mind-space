import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingBubbles from '@/components/FloatingBubbles';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Calendar,
  MessageCircle,
  BookOpen,
  TrendingUp,
  Heart,
  Clock,
  CheckCircle2,
  Star,
  Users,
  Play
} from 'lucide-react';

const Dashboard = () => {
  const [mood, setMood] = useState<number | null>(null);
  const [userName, setUserName] = useState('Student');
  const [moodHistory, setMoodHistory] = useState<number[]>([]);
  const [progress, setProgress] = useState({
    weeklyMood: 72,
    attendance: 85,
    resourcesCompleted: 60
  });
  
  const moodOptions = [
    { value: 1, emoji: '😞', label: 'Very Sad' },
    { value: 2, emoji: '😔', label: 'Sad' },
    { value: 3, emoji: '😐', label: 'Neutral' },
    { value: 4, emoji: '😊', label: 'Happy' },
    { value: 5, emoji: '😄', label: 'Very Happy' }
  ];

  const appointments = [
    {
      id: 1,
      therapist: 'Dr. Priya Sharma',
      date: '2024-09-18',
      time: '2:00 PM',
      type: 'Individual Counselling',
      status: 'upcoming'
    },
    {
      id: 2,
      therapist: 'Dr. Rajesh Kumar',
      date: '2024-09-15',
      time: '10:00 AM',
      type: 'Group Therapy',
      status: 'completed'
    }
  ];

  const recommendedContent = [
    {
      title: 'Managing Exam Stress',
      type: 'Video',
      duration: '8 min',
      thumbnail: '🎥'
    },
    {
      title: 'Mindfulness Meditation',
      type: 'Audio',
      duration: '15 min',
      thumbnail: '🧘'
    },
    {
      title: 'Building Healthy Relationships',
      type: 'Article',
      duration: '5 min read',
      thumbnail: '📖'
    }
  ];

  useEffect(() => {
    // Load user data from localStorage
    const userData = localStorage.getItem('campusCareUser');
    if (userData) {
      const user = JSON.parse(userData);
      setUserName(user.name.split(' ')[0]); // First name only
    }
    
    // Load mood history
    const savedMoods = localStorage.getItem('moodHistory');
    if (savedMoods) {
      setMoodHistory(JSON.parse(savedMoods));
    }
  }, []);

  const handleMoodSelect = (selectedMood: number) => {
    setMood(selectedMood);
    const newMoodHistory = [...moodHistory, selectedMood];
    setMoodHistory(newMoodHistory);
    localStorage.setItem('moodHistory', JSON.stringify(newMoodHistory));
    
    // Update progress based on mood entries
    const avgMood = newMoodHistory.reduce((a, b) => a + b, 0) / newMoodHistory.length;
    setProgress(prev => ({
      ...prev,
      weeklyMood: Math.round((avgMood / 5) * 100),
      resourcesCompleted: prev.resourcesCompleted + 2 // Simulate progress
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-calm relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back, {userName}!</h1>
            <p className="text-muted-foreground">Let's take care of your mental wellbeing today.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Appointments Dashboard */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Your Appointments</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {appointments.length > 0 ? (
                    <div className="space-y-4">
                      {appointments.map((appointment) => (
                        <div
                          key={appointment.id}
                          className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                        >
                          <div>
                            <h4 className="font-semibold">{appointment.therapist}</h4>
                            <p className="text-sm text-muted-foreground">
                              {appointment.date} at {appointment.time}
                            </p>
                            <p className="text-sm text-primary">{appointment.type}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            {appointment.status === 'completed' ? (
                              <CheckCircle2 className="h-5 w-5 text-green-500" />
                            ) : (
                              <Clock className="h-5 w-5 text-orange-500" />
                            )}
                            <span className="text-sm capitalize">{appointment.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">No appointments scheduled</p>
                      <Button className="mt-4 btn-primary">Book Your First Session</Button>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              {/* Recommended Content */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-primary" />
                    <span>Recommended for You</span>
                  </CardTitle>
                  <CardDescription>
                    Curated content based on your interests and goals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {recommendedContent.map((content, index) => (
                      <div
                        key={index}
                        className="p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors cursor-pointer"
                      >
                        <div className="text-2xl mb-2">{content.thumbnail}</div>
                        <h4 className="font-semibold text-sm mb-1">{content.title}</h4>
                        <p className="text-xs text-muted-foreground mb-2">{content.type}</p>
                        <div className="flex items-center space-x-1 text-xs text-primary">
                          <Play className="h-3 w-3" />
                          <span>{content.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              {/* Daily Mood Tracker */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-primary" />
                    <span>How are you feeling today?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-5 gap-2 mb-4">
                    {moodOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleMoodSelect(option.value)}
                        className={`p-3 rounded-lg text-center transition-all ${
                          mood === option.value
                            ? 'bg-primary text-primary-foreground shadow-glow'
                            : 'bg-muted/50 hover:bg-muted/70'
                        }`}
                      >
                        <div className="text-2xl mb-1">{option.emoji}</div>
                        <div className="text-xs">{option.label}</div>
                      </button>
                    ))}
                  </div>
                  {mood && (
                    <p className="text-sm text-center text-muted-foreground">
                      Thank you for sharing! Your mood has been recorded.
                    </p>
                  )}
                </CardContent>
              </Card>
              
              {/* Progress Dashboard */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span>Your Progress</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Weekly Mood Average</span>
                      <span>{(progress.weeklyMood / 10).toFixed(1)}/10</span>
                    </div>
                    <Progress value={progress.weeklyMood} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Session Attendance</span>
                      <span>{progress.attendance}%</span>
                    </div>
                    <Progress value={progress.attendance} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Resources Completed</span>
                      <span>{Math.min(progress.resourcesCompleted, 100)}%</span>
                    </div>
                    <Progress value={Math.min(progress.resourcesCompleted, 100)} className="h-2" />
                  </div>
                  
                  <div className="pt-2 text-center">
                    <p className="text-sm text-muted-foreground">
                      You're making great progress! Keep it up! 🌟
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Actions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full btn-secondary" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat with Sol
                  </Button>
                  <Button className="w-full btn-secondary" size="sm">
                    <Users className="h-4 w-4 mr-2" />
                    Join Peer Group
                  </Button>
                  <Button className="w-full btn-secondary" size="sm">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Browse Resources
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        
        {/* Floating Action Button */}
        <Button className="fab">
          <Calendar className="h-5 w-5" />
        </Button>
        
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;