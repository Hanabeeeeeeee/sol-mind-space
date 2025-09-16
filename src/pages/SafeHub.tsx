import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingBubbles from '@/components/FloatingBubbles';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Shield, 
  Phone, 
  MessageCircle, 
  AlertTriangle, 
  Heart, 
  Users, 
  Clock, 
  MapPin,
  Mail,
  ExternalLink
} from 'lucide-react';

const SafeHub = () => {
  const emergencyContacts = [
    {
      name: 'National Suicide Prevention Lifeline',
      number: '988',
      description: '24/7 free and confidential support',
      available: '24/7',
      type: 'crisis'
    },
    {
      name: 'KIRAN Mental Health Helpline',
      number: '1800-599-0019',
      description: 'Free mental health support in India',
      available: '24/7',
      type: 'support'
    },
    {
      name: 'Campus Security',
      number: '+91-9876543210',
      description: 'On-campus emergency services',
      available: '24/7',
      type: 'security'
    },
    {
      name: 'Student Counseling Center',
      number: '+91-9876543211',
      description: 'Campus mental health services',
      available: 'Mon-Fri 9AM-5PM',
      type: 'counseling'
    }
  ];

  const crisisResources = [
    {
      title: 'Immediate Crisis Support',
      description: 'If you\'re having thoughts of self-harm or suicide, please reach out immediately.',
      actions: [
        { label: 'Call Emergency Services', number: '112', urgent: true },
        { label: 'Text Crisis Line', number: 'Text HOME to 741741', urgent: true },
        { label: 'Chat Online', link: 'https://suicidepreventionlifeline.org/chat/', urgent: true }
      ]
    },
    {
      title: 'Campus Support Services',
      description: 'Professional support available on your campus.',
      actions: [
        { label: 'Book Emergency Appointment', link: '/book-appointment?emergency=true' },
        { label: 'Visit Counseling Center', address: 'Student Services Building, Room 201' },
        { label: 'Contact Dean of Students', number: '+91-9876543212' }
      ]
    }
  ];

  const safetyTips = [
    {
      icon: '🛡️',
      title: 'Create a Safety Plan',
      description: 'Identify warning signs, coping strategies, and support contacts for difficult times.'
    },
    {
      icon: '👥',
      title: 'Build Your Support Network',
      description: 'Connect with friends, family, counselors, and peer support groups.'
    },
    {
      icon: '📱',
      title: 'Keep Emergency Contacts Handy',
      description: 'Save important numbers in your phone and share with trusted friends.'
    },
    {
      icon: '🏥',
      title: 'Know Your Resources',
      description: 'Familiarize yourself with campus and community mental health services.'
    },
    {
      icon: '💭',
      title: 'Practice Self-Care',
      description: 'Regular sleep, exercise, healthy eating, and stress management techniques.'
    },
    {
      icon: '⚠️',
      title: 'Recognize Warning Signs',
      description: 'Learn to identify when you or others might need additional support.'
    }
  ];

  const reportingOptions = [
    {
      title: 'Anonymous Campus Reporting',
      description: 'Report concerns about yourself or others without revealing your identity.',
      method: 'Online form or campus hotline',
      contact: 'Anonymous reporting system'
    },
    {
      title: 'Trusted Adult',
      description: 'Speak with a counselor, professor, or staff member you trust.',
      method: 'In-person or phone conversation',
      contact: 'Campus directory available'
    },
    {
      title: 'Mental Health First Aid',
      description: 'Trained students and staff who can provide immediate support.',
      method: 'Peer support network',
      contact: 'Available through Student Services'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-calm relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Shield className="h-10 w-10 text-primary" />
                <h1 className="text-3xl font-bold">Safe Hub</h1>
              </div>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Your safety and wellbeing are our top priority. Find immediate help, crisis resources, 
                and support when you need it most.
              </p>
            </div>
            
            {/* Crisis Alert Banner */}
            <Card className="glass-card border-red-200 bg-red-50/50 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-red-700 mb-2">
                      If you're in immediate danger or having thoughts of self-harm
                    </h3>
                    <p className="text-red-600 mb-4">
                      Please reach out for help immediately. You are not alone, and support is available 24/7.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-red-600 hover:bg-red-700 text-white">
                        <Phone className="h-4 w-4 mr-2" />
                        Call 988 (Suicide Prevention)
                      </Button>
                      <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Text HOME to 741741
                      </Button>
                      <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Emergency: 112
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Emergency Contacts */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>Emergency Contacts</span>
                  </CardTitle>
                  <CardDescription>
                    Important numbers for immediate support and assistance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {emergencyContacts.map((contact, index) => (
                      <div key={index} className="p-4 bg-muted/30 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-sm">{contact.name}</h4>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            contact.type === 'crisis' ? 'bg-red-100 text-red-700' :
                            contact.type === 'support' ? 'bg-blue-100 text-blue-700' :
                            contact.type === 'security' ? 'bg-orange-100 text-orange-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {contact.type}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{contact.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-lg font-bold text-primary">
                            {contact.number}
                          </span>
                          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{contact.available}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Crisis Resources */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-primary" />
                    <span>Crisis Resources</span>
                  </CardTitle>
                  <CardDescription>
                    Immediate help and professional support options
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {crisisResources.map((resource, index) => (
                      <div key={index}>
                        <h4 className="font-semibold mb-2">{resource.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                        <div className="space-y-2">
                          {resource.actions.map((action, actionIndex) => (
                            <div key={actionIndex} className="flex items-center justify-between p-2 bg-muted/20 rounded">
                              <span className="text-sm">{action.label}</span>
                              {action.number && (
                                <Button size="sm" variant={action.urgent ? 'default' : 'outline'}>
                                  <Phone className="h-3 w-3 mr-1" />
                                  {action.number}
                                </Button>
                              )}
                              {action.link && (
                                <Button size="sm" variant="outline">
                                  <ExternalLink className="h-3 w-3 mr-1" />
                                  Visit
                                </Button>
                              )}
                              {action.address && (
                                <div className="text-xs text-muted-foreground">
                                  <MapPin className="h-3 w-3 inline mr-1" />
                                  {action.address}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Safety Tips */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Safety & Wellness Tips</span>
                </CardTitle>
                <CardDescription>
                  Proactive steps to maintain your mental health and safety
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {safetyTips.map((tip, index) => (
                    <div key={index} className="text-center p-4 bg-muted/20 rounded-lg">
                      <div className="text-3xl mb-3">{tip.icon}</div>
                      <h4 className="font-semibold mb-2">{tip.title}</h4>
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Reporting Options */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Report Concerns</span>
                </CardTitle>
                <CardDescription>
                  Ways to report concerns about yourself or others who may need help
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {reportingOptions.map((option, index) => (
                    <div key={index} className="p-4 bg-muted/20 rounded-lg">
                      <h4 className="font-semibold mb-2">{option.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                      <div className="text-xs space-y-1">
                        <div><strong>Method:</strong> {option.method}</div>
                        <div><strong>Contact:</strong> {option.contact}</div>
                      </div>
                      <Button size="sm" className="w-full mt-3 btn-secondary">
                        <MessageCircle className="h-3 w-3 mr-2" />
                        Get Started
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default SafeHub;