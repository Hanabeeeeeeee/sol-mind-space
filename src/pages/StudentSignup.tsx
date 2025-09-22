import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import FloatingBubbles from '@/components/FloatingBubbles';
import { Heart, ArrowLeft, Mail, Lock, User, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '', 
    password: '',
    confirmPassword: '',
    institution: '',
    studentId: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock signup - in real app would validate and call API
    console.log('Student signup:', formData);
    navigate('/login');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
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
        
        {/* Signup Form */}
        <div className="max-w-md mx-auto">
          <Card className="glass-card shadow-floating">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-fit">
                <GraduationCap className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Join as Student</CardTitle>
              <CardDescription>
                Create your account to access mental health support and resources
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Full Name</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>Email Address</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@university.edu"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="institution">University/College</Label>
                  <Input
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    placeholder="Your institution name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="studentId">Student ID</Label>
                  <Input
                    id="studentId"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    placeholder="Your student ID"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="flex items-center space-x-2">
                    <Lock className="h-4 w-4" />
                    <span>Password</span>
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a secure password"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full btn-primary">
                  Create Student Account
                </Button>
                
                <div className="text-center text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <Link to="/login" className="text-primary hover:underline">
                    Sign in
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentSignup;