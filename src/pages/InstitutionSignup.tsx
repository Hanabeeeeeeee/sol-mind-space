import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import FloatingBubbles from '@/components/FloatingBubbles';
import { Heart, ArrowLeft, Mail, Lock, User, Building, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstitutionSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    institutionName: '',
    contactPerson: '',
    email: '', 
    password: '',
    confirmPassword: '',
    address: '',
    phone: '',
    type: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store institution's name and role in localStorage for dashboard
    localStorage.setItem('userName', formData.institutionName);
    localStorage.setItem('userRole', 'institution');
    // Mock signup - in real app would validate and call API
    console.log('Institution signup:', formData);
    navigate('/dashboard');
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
                <Building className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Register Institution</CardTitle>
              <CardDescription>
                Register your educational institution to manage student wellbeing
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="institutionName" className="flex items-center space-x-2">
                    <Building className="h-4 w-4" />
                    <span>Institution Name</span>
                  </Label>
                  <Input
                    id="institutionName"
                    name="institutionName"
                    value={formData.institutionName}
                    onChange={handleChange}
                    placeholder="University/College name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contactPerson" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Contact Person</span>
                  </Label>
                  <Input
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    placeholder="Primary contact person name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>Official Email</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="admin@university.edu"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="type">Institution Type</Label>
                  <Input
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    placeholder="e.g., University, College, Community College"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address" className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Address</span>
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Institution address"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Official phone number"
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
                
                <Button type="submit" className="w-full btn-secondary">
                  Register Institution
                </Button>
                
                <div className="text-center text-sm text-muted-foreground">
                  Already registered?{' '}
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

export default InstitutionSignup;