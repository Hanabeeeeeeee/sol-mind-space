import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingBubbles from '@/components/FloatingBubbles';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { 
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  User,
  Star,
  Phone,
  Mail,
  Award,
  Heart,
  Building2,
  Navigation
} from 'lucide-react';

interface Therapist {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  rating: number;
  location: string;
  type: 'on-campus' | 'off-campus';
  availability: string[];
  fees: string;
  languages: string[];
}

const BookAppointment = () => {
  const [selectedTab, setSelectedTab] = useState('on-campus');
  const [selectedTherapist, setSelectedTherapist] = useState<Therapist | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    preferredTime: '',
    sessionType: '',
    concerns: '',
    urgency: '',
    contact: ''
  });

  const onCampusTherapists: Therapist[] = [
    {
      id: '1',
      name: 'Dr. Priya Sharma',
      specialization: 'Anxiety & Depression',
      experience: '8 years',
      rating: 4.9,
      location: 'Campus Wellness Center - Room 201',
      type: 'on-campus',
      availability: ['Monday', 'Wednesday', 'Friday'],
      fees: 'Free for students',
      languages: ['English', 'Hindi']
    },
    {
      id: '2',
      name: 'Dr. Rajesh Kumar',
      specialization: 'Academic Stress & Relationships',
      experience: '12 years',
      rating: 4.8,
      location: 'Student Services Building - 3rd Floor',
      type: 'on-campus',
      availability: ['Tuesday', 'Thursday', 'Saturday'],
      fees: 'Free for students',
      languages: ['English', 'Hindi', 'Bengali']
    },
    {
      id: '3',
      name: 'Dr. Sneha Patel',
      specialization: 'Trauma & PTSD',
      experience: '10 years',
      rating: 4.7,
      location: 'Health Center - Mental Health Wing',
      type: 'on-campus',
      availability: ['Monday', 'Tuesday', 'Thursday'],
      fees: 'Free for students',
      languages: ['English', 'Hindi', 'Gujarati']
    }
  ];

  const offCampusTherapists: Therapist[] = [
    {
      id: '4',
      name: 'Dr. Arjun Mehta',
      specialization: 'CBT & Mindfulness Therapy',
      experience: '15 years',
      rating: 4.9,
      location: 'Mind Wellness Clinic, Bandra West (2.3 km)',
      type: 'off-campus',
      availability: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
      fees: '₹1500 per session',
      languages: ['English', 'Hindi', 'Marathi']
    },
    {
      id: '5',
      name: 'Dr. Kavya Nair',
      specialization: 'Eating Disorders & Body Image',
      experience: '9 years',
      rating: 4.8,
      location: 'Healing Hearts Center, Andheri East (3.1 km)',
      type: 'off-campus',
      availability: ['Tuesday', 'Thursday', 'Sunday'],
      fees: '₹1200 per session',
      languages: ['English', 'Hindi', 'Malayalam']
    },
    {
      id: '6',
      name: 'Dr. Rohit Singh',
      specialization: 'Addiction & Substance Abuse',
      experience: '11 years',
      rating: 4.6,
      location: 'Serenity Clinic, Juhu (4.5 km)',
      type: 'off-campus',
      availability: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
      fees: '₹1800 per session',
      languages: ['English', 'Hindi', 'Punjabi']
    }
  ];

  const currentTherapists = selectedTab === 'on-campus' ? onCampusTherapists : offCampusTherapists;

  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBookAppointment = () => {
    if (!selectedTherapist || !selectedDate) {
      alert('Please select a therapist and date');
      return;
    }
    alert(`Appointment booked with ${selectedTherapist.name} on ${selectedDate.toDateString()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-calm relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <CalendarIcon className="h-10 w-10 text-primary" />
              <h1 className="text-4xl font-bold text-gradient-primary">Book Your Appointment</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with qualified therapists and counselors for confidential mental health support
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Therapist Selection */}
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-8">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
                <TabsTrigger value="on-campus" className="flex items-center space-x-2">
                  <Building2 className="h-4 w-4" />
                  <span>On Campus</span>
                </TabsTrigger>
                <TabsTrigger value="off-campus" className="flex items-center space-x-2">
                  <Navigation className="h-4 w-4" />
                  <span>Off Campus</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value={selectedTab} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {currentTherapists.map((therapist) => (
                    <Card 
                      key={therapist.id} 
                      className={`glass-card hover:shadow-floating transition-all duration-300 cursor-pointer ${
                        selectedTherapist?.id === therapist.id ? 'ring-2 ring-primary shadow-glow' : ''
                      }`}
                      onClick={() => setSelectedTherapist(therapist)}
                    >
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                            <User className="h-8 w-8 text-primary-foreground" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{therapist.name}</CardTitle>
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span className="text-sm text-muted-foreground">{therapist.rating}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <Heart className="h-4 w-4 text-primary" />
                            <span>{therapist.specialization}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Award className="h-4 w-4 text-primary" />
                            <span>{therapist.experience} experience</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span className="text-xs">{therapist.location}</span>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <span className="text-sm font-medium">Availability:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {therapist.availability.map((day) => (
                                <span key={day} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                  {day}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <span className="text-sm font-medium">Languages:</span>
                            <p className="text-sm text-muted-foreground">{therapist.languages.join(', ')}</p>
                          </div>
                          
                          <div>
                            <span className="text-sm font-medium">Fees:</span>
                            <p className="text-sm text-muted-foreground font-semibold">{therapist.fees}</p>
                          </div>
                          
                          <Button 
                            className={`w-full ${selectedTherapist?.id === therapist.id ? 'btn-primary' : 'btn-secondary'}`}
                            onClick={() => setSelectedTherapist(therapist)}
                          >
                            {selectedTherapist?.id === therapist.id ? 'Selected' : 'Select Therapist'}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Booking Form and Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Booking Form */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CalendarIcon className="h-5 w-5 text-primary" />
                    <span>Schedule Your Session</span>
                  </CardTitle>
                  <CardDescription>
                    {selectedTherapist 
                      ? `Booking with ${selectedTherapist.name}` 
                      : 'Select a therapist to continue booking'
                    }
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {selectedTherapist && (
                    <>
                      {/* Calendar */}
                      <div>
                        <Label className="text-base font-medium">Select Date</Label>
                        <div className="mt-2">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={(date) => date < new Date()}
                            className="rounded-md border glass-card"
                          />
                        </div>
                      </div>

                      {/* Time Selection */}
                      <div>
                        <Label htmlFor="time">Preferred Time</Label>
                        <Select value={formData.preferredTime} onValueChange={(value) => handleFormChange('preferredTime', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (9:00 AM - 12:00 PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12:00 PM - 4:00 PM)</SelectItem>
                            <SelectItem value="evening">Evening (4:00 PM - 7:00 PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Session Type */}
                      <div>
                        <Label htmlFor="sessionType">Session Type</Label>
                        <Select value={formData.sessionType} onValueChange={(value) => handleFormChange('sessionType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select session type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="individual">Individual Counseling</SelectItem>
                            <SelectItem value="group">Group Therapy</SelectItem>
                            <SelectItem value="couples">Couples Counseling</SelectItem>
                            <SelectItem value="family">Family Therapy</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Concerns */}
                      <div>
                        <Label htmlFor="concerns">What would you like to discuss? (Optional)</Label>
                        <Textarea
                          id="concerns"
                          placeholder="Share your concerns or what you'd like to work on..."
                          value={formData.concerns}
                          onChange={(e) => handleFormChange('concerns', e.target.value)}
                          className="mt-1"
                        />
                      </div>

                      {/* Urgency */}
                      <div>
                        <Label htmlFor="urgency">Priority Level</Label>
                        <Select value={formData.urgency} onValueChange={(value) => handleFormChange('urgency', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low - General support</SelectItem>
                            <SelectItem value="medium">Medium - Need guidance soon</SelectItem>
                            <SelectItem value="high">High - Urgent support needed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Contact */}
                      <div>
                        <Label htmlFor="contact">Contact Method</Label>
                        <Select value={formData.contact} onValueChange={(value) => handleFormChange('contact', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="How should we contact you?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="phone">Phone Call</SelectItem>
                            <SelectItem value="sms">SMS</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button 
                        onClick={handleBookAppointment}
                        className="w-full btn-primary"
                        disabled={!selectedDate}
                      >
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        Confirm Appointment
                      </Button>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Map/Location Info */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Location & Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedTherapist ? (
                    <div className="space-y-6">
                      {/* Location Details */}
                      <div>
                        <h4 className="font-semibold mb-3">{selectedTherapist.name}</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-start space-x-2">
                            <MapPin className="h-4 w-4 text-primary mt-0.5" />
                            <span>{selectedTherapist.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-primary" />
                            <span>+91-22-2659-{selectedTherapist.type === 'on-campus' ? '7777' : '8888'}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-primary" />
                            <span>{selectedTherapist.name.toLowerCase().replace(/\s+/g, '.')}@campuscare.com</span>
                          </div>
                        </div>
                      </div>

                      {/* Map Placeholder */}
                      <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                          <p className="text-muted-foreground">Interactive map</p>
                          <p className="text-sm text-muted-foreground">
                            {selectedTherapist.type === 'on-campus' 
                              ? 'Campus location map' 
                              : 'Navigate to clinic location'
                            }
                          </p>
                        </div>
                      </div>

                      {/* Additional Info */}
                      <div className="p-4 bg-primary/5 rounded-lg">
                        <h5 className="font-semibold mb-2">Before Your Session</h5>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Arrive 10 minutes early</li>
                          <li>• Bring a valid student ID</li>
                          <li>• Think about what you'd like to discuss</li>
                          <li>• All sessions are completely confidential</li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">Select a therapist to view location</p>
                      </div>
                    </div>
                  )}
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

export default BookAppointment;