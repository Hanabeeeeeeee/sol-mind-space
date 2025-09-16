import React from 'react';
import { Heart, Phone, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-card mt-auto border-t">
      <div className="container mx-auto px-4 py-8">
        {/* Helplines */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-8 mb-2">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-medium">India Helpline:</span>
              <span>+91-9152987821 | KIRAN: 1800-599-0019</span>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center space-x-2 text-sm">
              <Globe className="h-4 w-4 text-primary" />
              <span className="font-medium">Global Crisis:</span>
              <span>International Association for Suicide Prevention</span>
            </div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-gradient-primary">CampusCare</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Supporting student mental health across campuses nationwide.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Counselling Sessions</li>
              <li>Peer Support Groups</li>
              <li>Mental Health Resources</li>
              <li>Crisis Support</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Contact Us</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Student Portal</li>
              <li>Therapist Network</li>
              <li>Institution Partners</li>
              <li>Community Forums</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2024 CampusCare. All rights reserved. | Committed to student wellbeing and mental health support.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;