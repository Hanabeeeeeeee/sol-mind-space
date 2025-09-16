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
  Search, 
  Play, 
  BookOpen, 
  Headphones, 
  Brain, 
  Clock, 
  Star,
  Download,
  CheckCircle
} from 'lucide-react';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const videos = [
    {
      id: 1,
      title: 'Managing Exam Stress: A Student\'s Guide',
      description: 'Learn practical techniques to handle academic pressure and perform better under stress.',
      duration: '12 min',
      category: 'Academic Stress',
      thumbnail: '🎯',
      therapistApproved: true,
      rating: 4.8
    },
    {
      id: 2,
      title: 'Mindfulness for Beginners',
      description: 'Introduction to mindfulness practices that can help reduce anxiety and improve focus.',
      duration: '15 min',
      category: 'Mindfulness',
      thumbnail: '🧘',
      therapistApproved: true,
      rating: 4.9
    },
    {
      id: 3,
      title: 'Building Healthy Relationships in College',
      description: 'Navigate friendships, romantic relationships, and family dynamics during your college years.',
      duration: '18 min',
      category: 'Relationships',
      thumbnail: '💝',
      therapistApproved: true,
      rating: 4.7
    },
    {
      id: 4,
      title: 'Sleep Hygiene for Better Mental Health',
      description: 'Understand the connection between sleep and mental wellbeing, plus practical sleep tips.',
      duration: '10 min',
      category: 'Sleep & Wellness',
      thumbnail: '😴',
      therapistApproved: true,
      rating: 4.6
    }
  ];

  const articles = [
    {
      id: 1,
      title: 'Understanding Depression in College Students',
      excerpt: 'A comprehensive guide to recognizing signs of depression and available support resources.',
      readTime: '8 min read',
      category: 'Mental Health',
      author: 'Dr. Kavya Menon',
      therapistApproved: true
    },
    {
      id: 2,
      title: 'Coping with Homesickness',
      excerpt: 'Practical strategies for dealing with homesickness and building a new support network.',
      readTime: '6 min read',
      category: 'Adjustment',
      author: 'Dr. Priya Sharma',
      therapistApproved: true
    },
    {
      id: 3,
      title: 'Time Management for Student Wellbeing',
      excerpt: 'Balance academics, social life, and self-care with effective time management techniques.',
      readTime: '10 min read',
      category: 'Productivity',
      author: 'Dr. Arjun Patel',
      therapistApproved: true
    }
  ];

  const musicPlaylists = [
    {
      id: 1,
      title: 'Focus & Study',
      description: 'Instrumental music to enhance concentration and reduce study anxiety.',
      tracks: 24,
      duration: '2h 15m',
      mood: 'Focused',
      thumbnail: '🎵'
    },
    {
      id: 2,
      title: 'Relaxation & Sleep',
      description: 'Soothing sounds and gentle melodies for winding down and better sleep.',
      tracks: 18,
      duration: '1h 45m',
      mood: 'Calm',
      thumbnail: '🌙'
    },
    {
      id: 3,
      title: 'Motivation & Energy',
      description: 'Uplifting tracks to boost your mood and energy levels.',
      tracks: 32,
      duration: '2h 30m',
      mood: 'Energetic',
      thumbnail: '⚡'
    },
    {
      id: 4,
      title: 'Anxiety Relief',
      description: 'Specifically curated for managing anxiety and promoting inner peace.',
      tracks: 15,
      duration: '1h 20m',
      mood: 'Peaceful',
      thumbnail: '🕊️'
    }
  ];

  const quizzes = [
    {
      id: 1,
      title: 'Stress Level Assessment',
      description: 'Evaluate your current stress levels and get personalized recommendations.',
      questions: 15,
      duration: '5 min',
      category: 'Self-Assessment',
      icon: '📊'
    },
    {
      id: 2,
      title: 'Learning Style Quiz',
      description: 'Discover your optimal learning style to improve academic performance.',
      questions: 12,
      duration: '4 min',
      category: 'Academic',
      icon: '🎓'
    },
    {
      id: 3,
      title: 'Emotional Intelligence Check',
      description: 'Assess your emotional intelligence and learn ways to improve it.',
      questions: 20,
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
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Mental Health Resources</h1>
              <p className="text-muted-foreground">
                Therapist-approved content, tools, and activities to support your wellbeing
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Tabs defaultValue="videos" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="videos" className="flex items-center space-x-2">
                  <Play className="h-4 w-4" />
                  <span>Videos</span>
                </TabsTrigger>
                <TabsTrigger value="articles" className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Articles</span>
                </TabsTrigger>
                <TabsTrigger value="music" className="flex items-center space-x-2">
                  <Headphones className="h-4 w-4" />
                  <span>Music</span>
                </TabsTrigger>
                <TabsTrigger value="quizzes" className="flex items-center space-x-2">
                  <Brain className="h-4 w-4" />
                  <span>Quizzes</span>
                </TabsTrigger>
              </TabsList>
              
              {/* Videos Tab */}
              <TabsContent value="videos">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {videos.map((video) => (
                    <Card key={video.id} className="glass-card hover:shadow-floating transition-all">
                      <CardHeader>
                        <div className="flex items-start space-x-4">
                          <div className="text-4xl">{video.thumbnail}</div>
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2">{video.title}</CardTitle>
                            <CardDescription className="text-sm mb-3">
                              {video.description}
                            </CardDescription>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Clock className="h-3 w-3" />
                                <span>{video.duration}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <span>{video.rating}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary">{video.category}</Badge>
                            {video.therapistApproved && (
                              <Badge variant="outline" className="text-primary border-primary">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Therapist Approved
                              </Badge>
                            )}
                          </div>
                          <Button size="sm" className="btn-primary">
                            <Play className="h-4 w-4 mr-2" />
                            Watch
                          </Button>
                        </div>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {musicPlaylists.map((playlist) => (
                    <Card key={playlist.id} className="glass-card hover:shadow-floating transition-all">
                      <CardHeader>
                        <div className="flex items-start space-x-4">
                          <div className="text-4xl">{playlist.thumbnail}</div>
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2">{playlist.title}</CardTitle>
                            <CardDescription className="text-sm mb-3">
                              {playlist.description}
                            </CardDescription>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>{playlist.tracks} tracks</span>
                              <span>•</span>
                              <span>{playlist.duration}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">{playlist.mood}</Badge>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                            <Button size="sm" className="btn-primary">
                              <Play className="h-4 w-4 mr-2" />
                              Play
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* Quizzes Tab */}
              <TabsContent value="quizzes">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {quizzes.map((quiz) => (
                    <Card key={quiz.id} className="glass-card hover:shadow-floating transition-all">
                      <CardHeader className="text-center">
                        <div className="text-4xl mb-4">{quiz.icon}</div>
                        <CardTitle className="text-lg">{quiz.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {quiz.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="space-y-3">
                          <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
                            <span>{quiz.questions} questions</span>
                            <span>•</span>
                            <span>{quiz.duration}</span>
                          </div>
                          <Badge variant="secondary">{quiz.category}</Badge>
                          <Button className="w-full btn-primary">
                            <Brain className="h-4 w-4 mr-2" />
                            Start Quiz
                          </Button>
                        </div>
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