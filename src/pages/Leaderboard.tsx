import { Navigation } from "@/components/Navigation";
import { Sidebar } from "@/components/Sidebar";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Medal, Award, TrendingUp, Star, Zap } from "lucide-react";

const Leaderboard = () => {
  const topLearners = [
    {
      rank: 1,
      name: "Alex Chen",
      avatar: "/placeholder.svg",
      points: 2840,
      badges: ["AI Master", "Space Explorer"],
      streak: 45,
      completedCourses: 12
    },
    {
      rank: 2,
      name: "Maya Patel",
      avatar: "/placeholder.svg",
      points: 2650,
      badges: ["Data Scientist", "Mentor"],
      streak: 38,
      completedCourses: 10
    },
    {
      rank: 3,
      name: "Jordan Kim",
      avatar: "/placeholder.svg",
      points: 2420,
      badges: ["Code Ninja", "Team Player"],
      streak: 29,
      completedCourses: 9
    },
    {
      rank: 4,
      name: "Sam Rodriguez",
      avatar: "/placeholder.svg",
      points: 2180,
      badges: ["Quick Learner"],
      streak: 22,
      completedCourses: 8
    },
    {
      rank: 5,
      name: "Taylor Wong",
      avatar: "/placeholder.svg",
      points: 1950,
      badges: ["Consistent", "Collaborative"],
      streak: 15,
      completedCourses: 7
    }
  ];

  const topMentors = [
    {
      rank: 1,
      name: "Dr. Sarah Chen",
      avatar: "/placeholder.svg",
      points: 4200,
      studentsHelped: 856,
      coursesCreated: 5,
      rating: 4.9
    },
    {
      rank: 2,
      name: "Prof. Marcus Webb",
      avatar: "/placeholder.svg",
      points: 3800,
      studentsHelped: 634,
      coursesCreated: 3,
      rating: 4.8
    },
    {
      rank: 3,
      name: "Dr. Amelia Rodriguez",
      avatar: "/placeholder.svg",
      points: 3650,
      studentsHelped: 1200,
      coursesCreated: 4,
      rating: 4.7
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  Leaderboard
                </h1>
                <p className="text-muted-foreground">
                  See who's leading the pack in learning and mentoring excellence
                </p>
              </div>

              <Tabs defaultValue="learners" className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
                  <TabsTrigger value="learners" className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Top Learners
                  </TabsTrigger>
                  <TabsTrigger value="mentors" className="flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    Top Mentors
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="learners" className="space-y-6">
                  {/* Top 3 Spotlight */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {topLearners.slice(0, 3).map((learner, index) => (
                      <Card key={learner.rank} className={`relative overflow-hidden ${
                        index === 0 ? 'ring-2 ring-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-orange-500/5' :
                        index === 1 ? 'ring-2 ring-gray-400/20 bg-gradient-to-br from-gray-400/5 to-gray-600/5' :
                        'ring-2 ring-amber-600/20 bg-gradient-to-br from-amber-600/5 to-amber-800/5'
                      }`}>
                        <div className="absolute top-4 right-4">
                          {getRankIcon(learner.rank)}
                        </div>
                        <CardContent className="pt-6">
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="h-16 w-16 mb-4">
                              <AvatarImage src={learner.avatar} />
                              <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                                {learner.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <h3 className="font-semibold text-lg mb-2">{learner.name}</h3>
                            <div className="flex items-center gap-1 mb-3">
                              <Zap className="h-4 w-4 text-neon-green" />
                              <span className="font-bold text-xl">{learner.points.toLocaleString()}</span>
                              <span className="text-sm text-muted-foreground">XP</span>
                            </div>
                            <div className="flex flex-wrap gap-1 justify-center mb-3">
                              {learner.badges.map((badge) => (
                                <Badge key={badge} variant="secondary" className="text-xs">
                                  {badge}
                                </Badge>
                              ))}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {learner.streak} day streak • {learner.completedCourses} courses completed
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Rest of the leaderboard */}
                  <Card>
                    <CardHeader>
                      <CardTitle>All Learners</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {topLearners.map((learner) => (
                          <div key={learner.rank} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                            <div className="flex items-center gap-4">
                              <div className="w-8 flex justify-center">
                                {getRankIcon(learner.rank)}
                              </div>
                              <Avatar className="h-10 w-10">
                                <AvatarImage src={learner.avatar} />
                                <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                                  {learner.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-medium">{learner.name}</h4>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <span>{learner.streak} day streak</span>
                                  <span>•</span>
                                  <span>{learner.completedCourses} courses</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="flex flex-wrap gap-1">
                                {learner.badges.slice(0, 2).map((badge) => (
                                  <Badge key={badge} variant="outline" className="text-xs">
                                    {badge}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex items-center gap-1 font-bold">
                                <Zap className="h-4 w-4 text-neon-green" />
                                {learner.points.toLocaleString()}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="mentors" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Top Mentors</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {topMentors.map((mentor) => (
                          <div key={mentor.rank} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                            <div className="flex items-center gap-4">
                              <div className="w-8 flex justify-center">
                                {getRankIcon(mentor.rank)}
                              </div>
                              <Avatar className="h-12 w-12">
                                <AvatarImage src={mentor.avatar} />
                                <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                                  {mentor.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-medium">{mentor.name}</h4>
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                  <span>{mentor.studentsHelped} students helped</span>
                                  <span>•</span>
                                  <span>{mentor.coursesCreated} courses created</span>
                                  <span>•</span>
                                  <div className="flex items-center gap-1">
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    <span>{mentor.rating}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 font-bold">
                              <Zap className="h-4 w-4 text-neon-green" />
                              {mentor.points.toLocaleString()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Leaderboard;
