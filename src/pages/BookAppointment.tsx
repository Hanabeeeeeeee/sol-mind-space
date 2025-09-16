import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingBubbles from '@/components/FloatingBubbles';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Calendar,
  Clock,
  MapPin,
  Star,
  User,
  Phone,
  Mail,
  CheckCircle
} from 'lucide-react';

const BookAppointment = () => {
  const [selectedTherapist, setSelectedTherapist] = useState<string | null>(null);
  const [appointmentData, setAppointmentData] = useState({
    date: '',
    time: '',
    type: '',
    notes: '',
    anonymous: true
  });

  const therapists = [
    {
      id: '1',
      name: 'Dr. Priya Sharma',
      specialization: 'Anxiety & Depression',
      rating: 4.8,
      experience: '8 years',
      location: 'On Campus - Wellness Center',
      distance: '0.2 km',
      available: ['Mon', 'Wed', 'Fri'],
      image: '👩‍⚕️'
    },
    {
      id: '2',
      name: 'Dr. Rajesh Kumar',
      specialization: 'Stress Management',
      rating: 4.7,
      experience: '12 years',
      location: 'Medical District',
      distance: '1.5 km',
      available: ['Tue', 'Thu', 'Sat'],
      image: '👨‍⚕️'
    },
    {
      id: '3',
      name: 'Dr. Kavya Menon',
      specialization: 'Relationship Counseling',
      rating: 4.9,
      experience: '6 years',
      location: 'Student Health Services',
      distance: '0.5 km',
      available: ['Mon', 'Tue', 'Thu'],
      image: '👩‍⚕️'
    },
    {
      id: '4',
      name: 'Dr. Arjun Patel',
      specialization: 'Academic Stress',
      rating: 4.6,
      experience: '10 years',
      location: 'Psychology Department',
      distance: '0.8 km',
      available: ['Wed', 'Fri', 'Sat'],
      image: '👨‍⚕️'
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking appointment:', { selectedTherapist, appointmentData });
    // Show success message or redirect
  };

  return (
    <div className="min-h-screen bg-gradient-calm relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Book Your Appointment</h1>
              <p className="text-muted-foreground">
                Find and book sessions with qualified counselors and therapists
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Therapist Selection */}
              <div>
                <Card className="glass-card mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Available Therapists</span>
                    </CardTitle>
                    <CardDescription>
                      Choose from our network of qualified mental health professionals
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {therapists.map((therapist) => (
                        <div
                          key={therapist.id}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            selectedTherapist === therapist.id
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          }`}
                          onClick={() => setSelectedTherapist(therapist.id)}
                        >
                          <div className="flex items-start space-x-4">
                            <div className="text-3xl">{therapist.image}</div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold">{therapist.name}</h3>
                                <div className="flex items-center space-x-1">
                                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  <span className="text-sm">{therapist.rating}</span>
                                </div>
                              </div>
                              <p className="text-sm text-primary mb-1">{therapist.specialization}</p>
                              <div className="text-xs text-muted-foreground space-y-1">
                                <div className="flex items-center space-x-2">
                                  <User className="h-3 w-3" />
                                  <span>{therapist.experience} experience</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <MapPin className="h-3 w-3" />
                                  <span>{therapist.location} • {therapist.distance}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Calendar className="h-3 w-3" />
                                  <span>Available: {therapist.available.join(', ')}</span>
                                </div>
                              </div>
                            </div>
                            {selectedTherapist === therapist.id && (
                              <CheckCircle className="h-6 w-6 text-primary" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Map Placeholder */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Nearby Locations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">Interactive map coming soon</p>
                        <p className="text-sm text-muted-foreground">
                          View therapist locations and plan your visit
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Booking Form */}
              <div>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span>Schedule Your Session</span>
                    </CardTitle>
                    <CardDescription>
                      Select your preferred date, time, and session type
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleBooking} className="space-y-6">
                      {selectedTherapist && (
                        <div className="p-4 bg-primary/5 rounded-lg">
                          <h4 className="font-semibold text-primary mb-1">Selected Therapist</h4>
                          <p className="text-sm">
                            {therapists.find(t => t.id === selectedTherapist)?.name}
                          </p>
                        </div>
                      )}
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="date">Preferred Date</Label>
                          <Input
                            id="date"
                            type="date"
                            value={appointmentData.date}
                            onChange={(e) => setAppointmentData(prev => ({ 
                              ...prev, 
                              date: e.target.value 
                            }))}
                            min={new Date().toISOString().split('T')[0]}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="time">Preferred Time</Label>
                          <Select
                            value={appointmentData.time}
                            onValueChange={(value) => setAppointmentData(prev => ({ 
                              ...prev, 
                              time: value 
                            }))}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="type">Session Type</Label>
                        <Select
                          value={appointmentData.type}
                          onValueChange={(value) => setAppointmentData(prev => ({ 
                            ...prev, 
                            type: value 
                          }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select session type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="individual">Individual Counseling</SelectItem>
                            <SelectItem value="group">Group Therapy</SelectItem>
                            <SelectItem value="couple">Couple Counseling</SelectItem>
                            <SelectItem value="assessment">Initial Assessment</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="notes">Additional Notes (Optional)</Label>
                        <Textarea
                          id="notes"
                          placeholder="Share any specific concerns or questions..."
                          value={appointmentData.notes}
                          onChange={(e) => setAppointmentData(prev => ({ 
                            ...prev, 
                            notes: e.target.value 
                          }))}
                          rows={3}
                        />
                      </div>
                      
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">Anonymous Booking</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Your identity remains confidential. The therapist will only see 
                          your session details and anonymous contact information.
                        </p>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full btn-primary"
                        disabled={!selectedTherapist}
                      >
                        Book Appointment
                      </Button>
                      
                      <div className="text-center text-xs text-muted-foreground">
                        <p>Need help? Contact us at:</p>
                        <div className="flex justify-center space-x-4 mt-2">
                          <div className="flex items-center space-x-1">
                            <Phone className="h-3 w-3" />
                            <span>+91-9152987821</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Mail className="h-3 w-3" />
                            <span>help@campuscare.edu</span>
                          </div>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default BookAppointment;