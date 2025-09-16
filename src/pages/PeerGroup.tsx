import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingBubbles from '@/components/FloatingBubbles';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Send, 
  Users, 
  MessageCircle, 
  Flag, 
  Smile, 
  Image, 
  Hash,
  UserPlus,
  Shield,
  Heart,
  Clock
} from 'lucide-react';

const PeerGroup = () => {
  const [message, setMessage] = useState('');
  const [selectedChannel, setSelectedChannel] = useState('general');

  const channels = [
    { id: 'general', name: 'General Chat', members: 245, description: 'Open discussion for all members' },
    { id: 'study-stress', name: 'Study & Stress', members: 189, description: 'Academic pressure support group' },
    { id: 'anxiety-support', name: 'Anxiety Support', members: 156, description: 'Safe space for anxiety discussions' },
    { id: 'freshman-life', name: 'Freshman Life', members: 98, description: 'New student experiences and advice' },
    { id: 'relationships', name: 'Relationships', members: 134, description: 'Friendship and dating discussions' },
    { id: 'wellness-check', name: 'Daily Wellness', members: 167, description: 'Daily check-ins and motivation' }
  ];

  const messages = [
    {
      id: 1,
      user: 'Sneha M.',
      avatar: '👩',
      message: 'Hey everyone! Just wanted to share that I finally got through my presentation anxiety. The breathing techniques we discussed really helped! 💪',
      timestamp: '2 min ago',
      reactions: ['❤️', '👏', '🌟'],
      reactionCounts: { '❤️': 12, '👏': 8, '🌟': 5 }
    },
    {
      id: 2,
      user: 'Rahul K.',
      avatar: '👨',
      message: 'That\'s amazing Sneha! I\'m still working on my public speaking fears. Could you share which breathing technique worked best for you?',
      timestamp: '1 min ago',
      reactions: ['❤️'],
      reactionCounts: { '❤️': 3 }
    },
    {
      id: 3,
      user: 'Priya S.',
      avatar: '👩',
      message: 'The 4-7-8 breathing technique is my go-to! Inhale for 4, hold for 7, exhale for 8. Works like magic before any stressful situation ✨',
      timestamp: '30 sec ago',
      reactions: [],
      reactionCounts: {}
    }
  ];

  const activeUsers = [
    { name: 'Arjun P.', avatar: '👨', status: 'online', mood: 'Feeling good' },
    { name: 'Kavya R.', avatar: '👩', status: 'online', mood: 'Studying hard' },
    { name: 'Dev M.', avatar: '👨', status: 'away', mood: 'Taking a break' },
    { name: 'Riya J.', avatar: '👩', status: 'online', mood: 'Happy vibes' },
    { name: 'Vikram L.', avatar: '👨', status: 'online', mood: 'Motivated' }
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-calm relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">Peer Support Groups</h1>
              <p className="text-muted-foreground">
                Connect with fellow students who understand your journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[700px]">
              {/* Channels Sidebar */}
              <Card className="glass-card lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <Hash className="h-5 w-5 text-primary" />
                    <span>Channels</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {channels.map((channel) => (
                      <Button
                        key={channel.id}
                        variant={selectedChannel === channel.id ? 'default' : 'ghost'}
                        className="w-full justify-start text-left h-auto p-3"
                        onClick={() => setSelectedChannel(channel.id)}
                      >
                        <div className="flex-1">
                          <div className="font-medium text-sm"># {channel.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {channel.members} members
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-border">
                    <Button className="w-full btn-secondary" size="sm">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Join New Group
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Main Chat Area */}
              <Card className="glass-card lg:col-span-2 flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center space-x-2">
                        <MessageCircle className="h-5 w-5 text-primary" />
                        <span># {channels.find(c => c.id === selectedChannel)?.name}</span>
                      </CardTitle>
                      <CardDescription>
                        {channels.find(c => c.id === selectedChannel)?.description}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">
                      {channels.find(c => c.id === selectedChannel)?.members} members
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  {/* Messages Area */}
                  <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                    {messages.map((msg) => (
                      <div key={msg.id} className="group hover:bg-muted/20 p-3 rounded-lg transition-colors">
                        <div className="flex items-start space-x-3">
                          <div className="text-2xl">{msg.avatar}</div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-semibold text-sm">{msg.user}</span>
                              <span className="text-xs text-muted-foreground">
                                <Clock className="h-3 w-3 inline mr-1" />
                                {msg.timestamp}
                              </span>
                            </div>
                            <p className="text-sm leading-relaxed mb-2">{msg.message}</p>
                            
                            {/* Reactions */}
                            <div className="flex items-center space-x-2">
                              {Object.entries(msg.reactionCounts).map(([emoji, count]) => (
                                <Button
                                  key={emoji}
                                  variant="ghost"
                                  size="sm"
                                  className="h-6 px-2 text-xs"
                                >
                                  {emoji} {count}
                                </Button>
                              ))}
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 px-2 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Smile className="h-3 w-3" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 px-2 opacity-0 group-hover:opacity-100 transition-opacity text-red-500"
                              >
                                <Flag className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Message Input */}
                  <div className="border-t border-border pt-4">
                    <form onSubmit={handleSendMessage} className="flex space-x-2">
                      <div className="flex-1 relative">
                        <Input
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder={`Message # ${channels.find(c => c.id === selectedChannel)?.name}...`}
                          className="pr-20"
                        />
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                          <Button type="button" variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <Smile className="h-4 w-4" />
                          </Button>
                          <Button type="button" variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <Image className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <Button type="submit" disabled={!message.trim()} className="btn-primary">
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                    
                    <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                      <span>Be kind and supportive to your peers</span>
                      <Button variant="ghost" size="sm" className="h-auto p-1 text-red-500">
                        <Flag className="h-3 w-3 mr-1" />
                        Report misconduct
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Active Users Sidebar */}
              <Card className="glass-card lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Active Now</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {activeUsers.map((user, index) => (
                      <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/20 transition-colors">
                        <div className="relative">
                          <div className="text-xl">{user.avatar}</div>
                          <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${
                            user.status === 'online' ? 'bg-green-500' : 'bg-orange-500'
                          }`}></div>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{user.name}</div>
                          <div className="text-xs text-muted-foreground">{user.mood}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="text-center">
                      <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold text-sm mb-1">Safe Space Guidelines</h4>
                      <p className="text-xs text-muted-foreground">
                        This is a judgment-free zone. Be respectful, supportive, and kind to all members.
                      </p>
                    </div>
                  </div>
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

export default PeerGroup;