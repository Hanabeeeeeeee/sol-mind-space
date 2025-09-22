import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import FloatingBubbles from '@/components/FloatingBubbles';
import { Heart, ArrowLeft, Mail, Lock, User, UserCheck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const TherapistSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '', 
    password: '',
    confirmPassword: '',
    licenseNumber: '',
    specialization: '',
    experience: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock signup - in real app would validate and call API
    console.log('Therapist signup:', formData);
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
                <UserCheck className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Join as Therapist</CardTitle>
              <CardDescription>
                Create your professional account to provide mental health support
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
                    placeholder="your.email@clinic.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="licenseNumber" className="flex items-center space-x-2">
                    <Award className="h-4 w-4" />
                    <span>License Number</span>
                  </Label>
                  <Input
                    id="licenseNumber"
                    name="licenseNumber"
                    value={formData.licenseNumber}
                    onChange={handleChange}
                    placeholder="Your professional license number"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="specialization">Specialization</Label>
                  <Input
                    id="specialization"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    placeholder="e.g., Clinical Psychology, Counseling"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input
                    id="experience"
                    name="experience"
                    type="number"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="Years of professional experience"
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
                  Create Therapist Account
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

export default TherapistSignup;