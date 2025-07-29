import { Navigation } from "@/components/Navigation";
import { Sidebar } from "@/components/Sidebar";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Star, Play } from "lucide-react";

const ContentLibrary = () => {
  const courses = [
    {
      id: 1,
      title: "Introduction to AI & Machine Learning",
      description: "Master the fundamentals of artificial intelligence and machine learning with hands-on projects.",
      instructor: "Dr. Sarah Chen",
      duration: "8 weeks",
      enrolled: 1240,
      rating: 4.8,
      thumbnail: "/placeholder.svg",
      level: "Beginner",
      category: "AI"
    },
    {
      id: 2,
      title: "Space Technology & Engineering",
      description: "Explore satellite systems, orbital mechanics, and space mission design principles.",
      instructor: "Prof. Marcus Webb",
      duration: "12 weeks",
      enrolled: 856,
      rating: 4.9,
      thumbnail: "/placeholder.svg",
      level: "Intermediate",
      category: "Space"
    },
    {
      id: 3,
      title: "Deep Learning Fundamentals",
      description: "Dive deep into neural networks, CNNs, RNNs, and modern deep learning architectures.",
      instructor: "Dr. Amelia Rodriguez",
      duration: "10 weeks",
      enrolled: 2100,
      rating: 4.7,
      thumbnail: "/placeholder.svg",
      level: "Advanced",
      category: "AI"
    },
    {
      id: 4,
      title: "Rocket Propulsion Systems",
      description: "Learn about chemical and electric propulsion, fuel systems, and engine design.",
      instructor: "Dr. James Park",
      duration: "6 weeks",
      enrolled: 634,
      rating: 4.8,
      thumbnail: "/placeholder.svg",
      level: "Advanced",
      category: "Space"
    }
  ];

  const categories = ["All", "AI", "Space", "STEM", "Data Science"];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                Content Library
              </h1>
              <p className="text-muted-foreground">
                Discover courses, tutorials, and learning paths crafted by industry experts
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-8 overflow-x-auto">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="group hover:shadow-elegant transition-all duration-300 cursor-pointer">
                  <div className="aspect-video bg-gradient-primary/10 rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-primary/20 flex items-center justify-center">
                      <Play className="h-12 w-12 text-white/80" />
                    </div>
                    <Badge className="absolute top-3 left-3 bg-neon-green text-dark">
                      {course.category}
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {course.level}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {course.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.enrolled.toLocaleString()}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{course.instructor}</span>
                      <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                        <BookOpen className="h-4 w-4 mr-1" />
                        Enroll
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
      </div>
    </ProtectedRoute>
  );
};

export default ContentLibrary;