import React, { useState, useRef, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingBubbles from '@/components/FloatingBubbles';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, Bot, User, Heart, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const ChatSol = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hi there! I\'m Sol, your AI mental health companion. 🌟 I\'m here to listen, provide support, and help you navigate your mental health journey. How are you feeling today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Crisis/Harm Detection
    const crisisWords = ['kill myself', 'suicide', 'end my life', 'want to die', 'kill me', 'harm myself', 'cut myself'];
    const hasCrisisWords = crisisWords.some(word => lowerMessage.includes(word));
    
    if (hasCrisisWords) {
      return '🚨 I\'m very concerned about you right now. Please reach out for immediate help:\n\n📞 National Suicide Prevention Lifeline: 988\n📞 Crisis Text Line: Text HOME to 741741\n📞 India Suicide Prevention Helpline: 91-9820466726\n📞 AASRA Helpline: 91-22-27546669\n\nYou matter, and there are people who want to help you through this. Please don\'t face this alone. 💚';
    }
    
    if (lowerMessage.includes('sad') || lowerMessage.includes('depressed')) {
      return 'I hear that you\'re feeling sad, and I want you to know that your feelings are valid. It takes courage to share how you\'re feeling. Would you like to talk about what\'s been weighing on your mind? Sometimes sharing can help lighten the load. 💙';
    }
    
    if (lowerMessage.includes('anxious') || lowerMessage.includes('anxiety') || lowerMessage.includes('worried')) {
      return 'Anxiety can feel overwhelming, but you\'re not alone in this. Take a deep breath with me - in for 4 counts, hold for 4, out for 4. What specific situation is causing you to feel anxious? Let\'s work through it together. 🌈';
    }
    
    if (lowerMessage.includes('stress') || lowerMessage.includes('overwhelmed')) {
      return 'Feeling stressed is your mind\'s way of telling you that you care deeply about something. Let\'s break down what\'s causing this stress. Can you tell me about the main things that are overwhelming you right now? We can tackle them one by one. 🎯';
    }
    
    if (lowerMessage.includes('exam') || lowerMessage.includes('study') || lowerMessage.includes('academic')) {
      return 'Academic pressures can be really challenging! Remember, your worth isn\'t defined by your grades. Let\'s create a manageable study plan together. What subject or exam is causing you the most stress? 📚✨';
    }
    
    if (lowerMessage.includes('thank') || lowerMessage.includes('better') || lowerMessage.includes('good')) {
      return 'I\'m so glad to hear that! Your progress, no matter how small, is worth celebrating. Remember, healing isn\'t linear - there will be ups and downs, and that\'s completely normal. Keep being kind to yourself. 🌟';
    }
    
    if (lowerMessage.includes('lonely') || lowerMessage.includes('alone')) {
      return 'Feeling lonely can be really painful, but please know that you matter and you\'re not truly alone. Have you considered reaching out to our peer support groups? Sometimes connecting with others who understand can make a big difference. Would you like me to help you find some community resources? 🤝';
    }
    
    return 'Thank you for sharing that with me. I\'m here to listen and support you. Your feelings and experiences are important. Is there anything specific you\'d like to explore or work through together today? Remember, taking care of your mental health is a sign of strength, not weakness. 💚';
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: generateBotResponse(inputMessage),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-calm relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-gradient-primary rounded-full">
                  <Sparkles className="h-6 w-6 text-primary-foreground" />
                </div>
                <h1 className="text-3xl font-bold">Chat with Sol</h1>
              </div>
              <p className="text-muted-foreground">
                Your AI mental health companion - available 24/7 for support and guidance
              </p>
            </div>
            
            <Card className="glass-card h-[600px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Bot className="h-5 w-5 text-primary" />
                  <span>Sol - AI Mental Health Support</span>
                  <div className="ml-auto flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Online</span>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-4 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted/50'
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.type === 'bot' && (
                            <Bot className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                          )}
                          {message.type === 'user' && (
                            <User className="h-5 w-5 mt-0.5 text-primary-foreground flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <p className="text-sm leading-relaxed">{message.content}</p>
                            <span className="text-xs opacity-70 mt-2 block">
                              {message.timestamp.toLocaleTimeString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Bot className="h-5 w-5 text-primary" />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
                
                {/* Input Area */}
                <form onSubmit={handleSendMessage} className="flex space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Share your thoughts or feelings..."
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button type="submit" disabled={!inputMessage.trim() || isTyping} className="btn-primary">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
                
                <div className="mt-3 text-center">
                  <p className="text-xs text-muted-foreground">
                    Sol is an AI assistant and cannot replace professional therapy. 
                    If you're in crisis, please contact your campus counseling center or emergency services.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Quick Actions */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setInputMessage("I'm feeling anxious about my exams")}
              >
                Exam Anxiety
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setInputMessage("I'm feeling overwhelmed with everything")}
              >
                Feeling Overwhelmed
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setInputMessage("I'm having trouble sleeping")}
              >
                Sleep Issues
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setInputMessage("I'm feeling lonely lately")}
              >
                Loneliness
              </Button>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default ChatSol;