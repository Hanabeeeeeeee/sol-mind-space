import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import FloatingBubbles from '@/components/FloatingBubbles';
import { Heart, GraduationCap, Building, UserCheck, Users, BookOpen } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-calm relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Heart className="h-12 w-12 text-primary" />
            <h1 className="text-5xl font-bold text-gradient-primary">CampusCare</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your comprehensive mental health support platform designed specifically for campus communities.
            Connect, heal, and thrive together.
          </p>
        </div>
        
        {/* Role Selection Cards */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Join as</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Student Card */}
            <Card className="glass-card hover:shadow-floating transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-fit">
                  <GraduationCap className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Student</CardTitle>
                <CardDescription className="text-base">
                  Access counselling, peer support, resources, and mental health tools
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Book counselling sessions</li>
                  <li>• Chat with AI assistant Sol</li>
                  <li>• Access mental health resources</li>
                  <li>• Connect with peer groups</li>
                  <li>• Daily mood tracking</li>
                </ul>
                <Link to="/signup/student" className="block">
                  <Button className="w-full btn-primary">
                    Get Started as Student
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Educational Institute Card */}
            <Card className="glass-card hover:shadow-floating transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-fit">
                  <Building className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Institution</CardTitle>
                <CardDescription className="text-base">
                  Manage campus mental health programs and student wellbeing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Student wellbeing dashboard</li>
                  <li>• Counsellor management</li>
                  <li>• Mental health analytics</li>
                  <li>• Crisis intervention tools</li>
                  <li>• Resource distribution</li>
                </ul>
                <Button 
                  className="w-full btn-primary"
                  onClick={() => {
                    localStorage.setItem('userName', 'University Wellness Center');
                    localStorage.setItem('userRole', 'institute');
                    navigate('/dashboard/institute');
                  }}
                >
                  Register Institution
                </Button>
              </CardContent>
            </Card>
            
            {/* Therapist/Counsellor Card */}
            <Card className="glass-card hover:shadow-floating transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-fit">
                  <UserCheck className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Therapist</CardTitle>
                <CardDescription className="text-base">
                  Provide professional mental health support to students
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Manage appointments</li>
                  <li>• Student progress tracking</li>
                  <li>• Secure communication</li>
                  <li>• Resource sharing</li>
                  <li>• Professional network</li>
                </ul>
                <Button 
                  className="w-full btn-primary"
                  onClick={() => {
                    localStorage.setItem('userName', 'Dr. Therapist');
                    localStorage.setItem('userRole', 'therapist');
                    navigate('/dashboard/therapist');
                  }}
                >
                  Join as Therapist
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-8">Why Choose CampusCare?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">Confidential & Safe</h4>
              <p className="text-sm text-muted-foreground">
                Anonymous booking and secure conversations with end-to-end encryption
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">Community Support</h4>
              <p className="text-sm text-muted-foreground">
                Connect with peers who understand your journey and experiences
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">Expert Resources</h4>
              <p className="text-sm text-muted-foreground">
                Access therapist-approved content, tools, and guided activities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;