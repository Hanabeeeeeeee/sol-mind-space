import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  MessageCircle, 
  BookOpen, 
  Users, 
  Shield, 
  Calendar,
  LogOut
} from 'lucide-react';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="glass-card sticky top-0 z-50 w-full border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-gradient-primary">CampusCare</span>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/book-appointment">
              <Button 
                variant={isActive('/book-appointment') ? 'default' : 'ghost'}
                className="flex items-center space-x-2"
              >
                <Calendar className="h-4 w-4" />
                <span>Book Appointment</span>
              </Button>
            </Link>
            
            <Link to="/chat-sol">
              <Button 
                variant={isActive('/chat-sol') ? 'default' : 'ghost'}
                className="flex items-center space-x-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat with Sol</span>
              </Button>
            </Link>
            
            <Link to="/resources">
              <Button 
                variant={isActive('/resources') ? 'default' : 'ghost'}
                className="flex items-center space-x-2"
              >
                <BookOpen className="h-4 w-4" />
                <span>Resources</span>
              </Button>
            </Link>
            
            <Link to="/peer-group">
              <Button 
                variant={isActive('/peer-group') ? 'default' : 'ghost'}
                className="flex items-center space-x-2"
              >
                <Users className="h-4 w-4" />
                <span>Peer Group</span>
              </Button>
            </Link>
            
            <Link to="/safe-hub">
              <Button 
                variant={isActive('/safe-hub') ? 'default' : 'ghost'}
                className="flex items-center space-x-2"
              >
                <Shield className="h-4 w-4" />
                <span>Safe Hub</span>
              </Button>
            </Link>
          </nav>
          
          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Welcome, {localStorage.getItem('userName') || 'Arjun'}</span>
            <Button variant="ghost" size="sm">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;