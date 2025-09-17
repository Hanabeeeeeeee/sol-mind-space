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

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const videos = [
    {
      id: 1,
      title: 'Managing Academic Stress',
      description: 'Learn effective techniques to handle study pressure',
      duration: '12 min',
      thumbnail: '🎓',
      category: 'Academic',
      rating: 4.8,
      therapistApproved: true
    },
    {
      id: 2,
      title: 'Mindfulness for Students',
      description: 'Introduction to mindfulness and meditation practices',
      duration: '15 min',
      thumbnail: '🧘',
      category: 'Mindfulness',
      rating: 4.9,
      therapistApproved: true
    },
    {
      id: 3,
      title: 'Building Healthy Relationships',
      description: 'Communication skills and boundary setting',
      duration: '18 min',
      thumbnail: '🤝',
      category: 'Relationships',
      rating: 4.7,
      therapistApproved: true
    },
    {
      id: 4,
      title: 'Dealing with Anxiety',
      description: 'Practical strategies for managing anxiety symptoms',
      duration: '20 min',
      thumbnail: '🌱',
      category: 'Anxiety',
      rating: 4.9,
      therapistApproved: true
    }
  ];

  const articles = [
    {
      id: 1,
      title: 'Understanding Depression in College Students',
      excerpt: 'Recognizing signs and seeking help when needed...',
      readTime: '5 min read',
      author: 'Dr. Priya Sharma',
      category: 'Mental Health',
      therapistApproved: true
    },
    {
      id: 2,
      title: 'The Science of Sleep and Mental Health',
      excerpt: 'How quality sleep affects your emotional wellbeing...',
      readTime: '7 min read',
      author: 'Dr. Rajesh Kumar',
      category: 'Sleep',
      therapistApproved: true
    },
    {
      id: 3,
      title: 'Nutrition and Mood: What\'s the Connection?',
      excerpt: 'Discover how your diet impacts your mental state...',
      readTime: '6 min read',
      author: 'Dr. Sneha Patel',
      category: 'Nutrition',
      therapistApproved: true
    }
  ];

  const musicPlaylists = [
    {
      id: 1,
      title: 'Rain Sounds for Relaxation',
      duration: '30 min',
      type: 'Nature Sounds',
      mood: 'Calming'
    },
    {
      id: 2,
      title: 'Meditation Music - Inner Peace',
      duration: '25 min',
      type: 'Instrumental',
      mood: 'Peaceful'
    },
    {
      id: 3,
      title: 'Binaural Beats for Focus',
      duration: '45 min',
      type: 'Binaural',
      mood: 'Focus'
    }
  ];

  const quizzes = [
    {
      id: 1,
      title: 'Stress Management Assessment',
      description: 'Evaluate your current stress coping strategies',
      questions: 15,
      duration: '10 min',
      category: 'Self-Assessment',
      icon: '📊'
    },
    {
      id: 2,
      title: 'Understanding Your Personality Type',
      description: 'Discover your personality traits and preferences',
      questions: 20,
      duration: '15 min',
      category: 'Personality',
      icon: '🎓'
    },
    {
      id: 3,
      title: 'Emotional Intelligence Quiz',
      description: 'Assess your ability to understand and manage emotions',
      questions: 12,
      duration: '8 min',
      category: 'Emotional Health',
      icon: '❤️'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-calm relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <BookOpen className="h-10 w-10 text-primary" />
              <h1 className="text-4xl font-bold text-gradient-primary">Mental Health Resources</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover therapist-approved content, interactive tools, and calming resources to support your mental wellness journey.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
            
            {/* Resource Tabs */}
            <Tabs defaultValue="videos" className="max-w-7xl mx-auto">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="videos" className="flex items-center space-x-2">
                  <Play className="h-4 w-4" />
                  <span>Videos</span>
                </TabsTrigger>
                <TabsTrigger value="articles" className="flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>Articles</span>
                </TabsTrigger>
                <TabsTrigger value="music" className="flex items-center space-x-2">
                  <Music className="h-4 w-4" />
                  <span>Music</span>
                </TabsTrigger>
                <TabsTrigger value="quizzes" className="flex items-center space-x-2">
                  <Brain className="h-4 w-4" />
                  <span>Quizzes</span>
                </TabsTrigger>
              </TabsList>
              
              {/* Videos Tab */}
              <TabsContent value="videos">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videos.map((video) => (
                    <Card key={video.id} className="glass-card hover:shadow-floating transition-all duration-300 transform hover:-translate-y-1">
                      <CardHeader>
                        <div className="relative">
                          <div className="aspect-video bg-gradient-primary rounded-lg flex items-center justify-center text-6xl mb-4">
                            {video.thumbnail}
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                            {video.duration}
                          </div>
                        </div>
                        <CardTitle className="text-lg">{video.title}</CardTitle>
                        <CardDescription>{video.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {video.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm">{video.rating}</span>
                          </div>
                        </div>
                        <Button className="w-full btn-primary">
                          <Play className="h-4 w-4 mr-2" />
                          Watch Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* Articles Tab */}
              <TabsContent value="articles">
                <div className="space-y-6">
                  {articles.map((article) => (
                    <Card key={article.id} className="glass-card hover:shadow-floating transition-all">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                            <CardDescription className="text-base mb-3">
                              {article.excerpt}
                            </CardDescription>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>By {article.author}</span>
                              <span>•</span>
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                          <div className="text-3xl">📖</div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary">{article.category}</Badge>
                            {article.therapistApproved && (
                              <Badge variant="outline" className="text-primary border-primary">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Therapist Approved
                              </Badge>
                            )}
                          </div>
                          <Button size="sm" variant="outline">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Read Article
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* Music Tab */}
              <TabsContent value="music">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {musicPlaylists.map((track) => (
                    <Card key={track.id} className="glass-card hover:shadow-floating transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <Headphones className="h-12 w-12 text-primary-foreground" />
                          </div>
                          <h3 className="font-bold text-lg mb-2">{track.title}</h3>
                          <div className="space-y-2 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center justify-between">
                              <span>Type:</span>
                              <span>{track.type}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>Duration:</span>
                              <span>{track.duration}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>Mood:</span>
                              <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                                {track.mood}
                              </span>
                            </div>
                          </div>
                          <Button className="w-full btn-primary">
                            <Play className="h-4 w-4 mr-2" />
                            Play
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* Quizzes Tab */}
              <TabsContent value="quizzes">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {quizzes.map((quiz) => (
                    <Card key={quiz.id} className="glass-card hover:shadow-floating transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="p-3 bg-gradient-primary rounded-full">
                            <Brain className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{quiz.title}</CardTitle>
                            <span className="text-sm bg-secondary/50 text-secondary-foreground px-2 py-1 rounded-full">
                              {quiz.category}
                            </span>
                          </div>
                        </div>
                        <CardDescription className="text-base">{quiz.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Lightbulb className="h-4 w-4 text-primary" />
                            <span>{quiz.questions} questions</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>{quiz.duration}</span>
                          </div>
                        </div>
                        <Button className="w-full btn-primary">
                          <Brain className="h-4 w-4 mr-2" />
                          Take Quiz
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Resources;