import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FloatingBubbles from '@/components/FloatingBubbles';
import { Heart, ArrowLeft, Mail, Lock, GraduationCap, Stethoscope, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState({
    studentId: '',
    password: ''
  });
  const [professionalData, setProfessionalData] = useState({
    email: '',
    password: ''
  });

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app would validate credentials
    localStorage.setItem('userName', 'Student User');
    localStorage.setItem('userRole', 'student');
    console.log('Student login:', studentData);
    navigate('/dashboard');
  };

  const handleTherapistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app would validate credentials
    localStorage.setItem('userName', 'Dr. Therapist');
    localStorage.setItem('userRole', 'therapist');
    console.log('Therapist login:', professionalData);
    navigate('/dashboard');
  };

  const handleInstituteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app would validate credentials
    localStorage.setItem('userName', 'Institute Admin');
    localStorage.setItem('userRole', 'institute');
    console.log('Institute login:', professionalData);
    navigate('/dashboard');
  };

  const handleStudentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudentData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleProfessionalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfessionalData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-calm relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-gradient-primary">CampusCare</span>
          </div>
        </div>
        
        {/* Sign In Form */}
        <div className="max-w-md mx-auto">
          <Card className="glass-card shadow-floating">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Sign In</CardTitle>
              <CardDescription>
                Welcome back! Sign in to access your account
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Tabs defaultValue="student" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="student" className="text-xs">Student</TabsTrigger>
                  <TabsTrigger value="therapist" className="text-xs">Therapist</TabsTrigger>
                  <TabsTrigger value="institute" className="text-xs">Institute</TabsTrigger>
                </TabsList>
                
                <TabsContent value="student" className="mt-6">
                  <div className="text-center mb-4">
                    <div className="mx-auto mb-2 p-3 bg-gradient-primary rounded-full w-fit">
                      <GraduationCap className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold">Student Sign In</h3>
                  </div>
                  
                  <form onSubmit={handleStudentSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="studentId">Student ID</Label>
                      <Input
                        id="studentId"
                        name="studentId"
                        value={studentData.studentId}
                        onChange={handleStudentChange}
                        placeholder="Enter your student ID"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="student-password" className="flex items-center space-x-2">
                        <Lock className="h-4 w-4" />
                        <span>Password</span>
                      </Label>
                      <Input
                        id="student-password"
                        name="password"
                        type="password"
                        value={studentData.password}
                        onChange={handleStudentChange}
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full btn-primary">
                      Sign In as Student
                    </Button>
                    
                    <div className="text-center text-sm text-muted-foreground">
                      Don't have an account?{' '}
                      <Link to="/signup/student" className="text-primary hover:underline">
                        Join as Student
                      </Link>
                    </div>
                  </form>
                </TabsContent>
                
                <TabsContent value="therapist" className="mt-6">
                  <div className="text-center mb-4">
                    <div className="mx-auto mb-2 p-3 bg-gradient-primary rounded-full w-fit">
                      <Stethoscope className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold">Therapist Sign In</h3>
                  </div>
                  
                  <form onSubmit={handleTherapistSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="therapist-email" className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>Email Address</span>
                      </Label>
                      <Input
                        id="therapist-email"
                        name="email"
                        type="email"
                        value={professionalData.email}
                        onChange={handleProfessionalChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="therapist-password" className="flex items-center space-x-2">
                        <Lock className="h-4 w-4" />
                        <span>Password</span>
                      </Label>
                      <Input
                        id="therapist-password"
                        name="password"
                        type="password"
                        value={professionalData.password}
                        onChange={handleProfessionalChange}
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full btn-primary">
                      Sign In as Therapist
                    </Button>
                    
                    <div className="text-center text-sm text-muted-foreground">
                      Don't have an account?{' '}
                      <Link to="/signup/therapist" className="text-primary hover:underline">
                        Join as Therapist
                      </Link>
                    </div>
                  </form>
                </TabsContent>
                
                <TabsContent value="institute" className="mt-6">
                  <div className="text-center mb-4">
                    <div className="mx-auto mb-2 p-3 bg-gradient-primary rounded-full w-fit">
                      <Building className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold">Institute Sign In</h3>
                  </div>
                  
                  <form onSubmit={handleInstituteSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="institute-email" className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>Email Address</span>
                      </Label>
                      <Input
                        id="institute-email"
                        name="email"
                        type="email"
                        value={professionalData.email}
                        onChange={handleProfessionalChange}
                        placeholder="admin@institution.edu"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="institute-password" className="flex items-center space-x-2">
                        <Lock className="h-4 w-4" />
                        <span>Password</span>
                      </Label>
                      <Input
                        id="institute-password"
                        name="password"
                        type="password"
                        value={professionalData.password}
                        onChange={handleProfessionalChange}
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full btn-primary">
                      Sign In as Institute
                    </Button>
                    
                    <div className="text-center text-sm text-muted-foreground">
                      Don't have an account?{' '}
                      <Link to="/signup/institution" className="text-primary hover:underline">
                        Join as Institute
                      </Link>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignIn;