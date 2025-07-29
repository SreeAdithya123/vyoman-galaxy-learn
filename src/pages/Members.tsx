import { Navigation } from "@/components/Navigation";
import { Sidebar } from "@/components/Sidebar";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Users, GraduationCap, Award, MessageCircle, UserPlus } from "lucide-react";

const Members = () => {
  const members = [
    {
      id: 1,
      name: "Alex Chen",
      avatar: "/placeholder.svg",
      role: "Student",
      badge: "AI Master",
      joinDate: "Jan 2024",
      courses: 12,
      posts: 89,
      followers: 245,
      isOnline: true,
      bio: "Passionate about AI and machine learning. Currently working on computer vision projects."
    },
    {
      id: 2,
      name: "Dr. Sarah Chen",
      avatar: "/placeholder.svg",
      role: "Mentor",
      badge: "Expert Instructor",
      joinDate: "Sep 2023",
      courses: 5,
      posts: 156,
      followers: 1240,
      isOnline: true,
      bio: "AI researcher and educator with 10+ years experience in machine learning and neural networks."
    },
    {
      id: 3,
      name: "Maya Patel",
      avatar: "/placeholder.svg",
      role: "Student",
      badge: "Data Scientist",
      joinDate: "Feb 2024",
      courses: 10,
      posts: 67,
      followers: 189,
      isOnline: false,
      bio: "Data science enthusiast exploring the intersection of AI and space technology."
    },
    {
      id: 4,
      name: "Prof. Marcus Webb",
      avatar: "/placeholder.svg",
      role: "Mentor",
      badge: "Space Expert",
      joinDate: "Nov 2023",
      courses: 3,
      posts: 112,
      followers: 856,
      isOnline: true,
      bio: "Aerospace engineer and space technology researcher. Passionate about making space accessible."
    },
    {
      id: 5,
      name: "Jordan Kim",
      avatar: "/placeholder.svg",
      role: "Student",
      badge: "Code Ninja",
      joinDate: "Mar 2024",
      courses: 9,
      posts: 43,
      followers: 98,
      isOnline: false,
      bio: "Full-stack developer diving deep into AI applications and space-tech innovations."
    },
    {
      id: 6,
      name: "Dr. Amelia Rodriguez",
      avatar: "/placeholder.svg",
      role: "Mentor",
      badge: "Deep Learning Pioneer",
      joinDate: "Oct 2023",
      courses: 4,
      posts: 134,
      followers: 2100,
      isOnline: true,
      bio: "Deep learning researcher specializing in neural architecture search and optimization."
    }
  ];

  const students = members.filter(member => member.role === "Student");
  const mentors = members.filter(member => member.role === "Mentor");

  const MemberCard = ({ member }: { member: typeof members[0] }) => (
    <Card className="group hover:shadow-elegant transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar className="h-12 w-12">
                <AvatarImage src={member.avatar} />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              {member.isOnline && (
                <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-neon-green rounded-full border-2 border-background"></div>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <div className="flex items-center gap-2">
                <Badge variant={member.role === "Mentor" ? "default" : "secondary"} className="text-xs">
                  {member.role}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {member.badge}
                </Badge>
              </div>
            </div>
          </div>
          <Button variant="outline" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <UserPlus className="h-4 w-4 mr-1" />
            Connect
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {member.bio}
        </p>

        <div className="grid grid-cols-3 gap-4 mb-4 text-center">
          <div>
            <div className="font-semibold text-lg">{member.courses}</div>
            <div className="text-xs text-muted-foreground">
              {member.role === "Mentor" ? "Courses Created" : "Courses Taken"}
            </div>
          </div>
          <div>
            <div className="font-semibold text-lg">{member.posts}</div>
            <div className="text-xs text-muted-foreground">Posts</div>
          </div>
          <div>
            <div className="font-semibold text-lg">{member.followers}</div>
            <div className="text-xs text-muted-foreground">Followers</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Joined {member.joinDate}</span>
          <Button variant="ghost" size="sm" className="h-8 px-2">
            <MessageCircle className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

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
                Members
              </h1>
              <p className="text-muted-foreground">
                Connect with fellow learners and expert mentors in the Vyoman community
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative mb-8 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search members..."
                className="pl-10 bg-muted/50 border-0 focus-visible:ring-1"
              />
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-lg grid-cols-3 mb-8">
                <TabsTrigger value="all" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  All ({members.length})
                </TabsTrigger>
                <TabsTrigger value="students" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Students ({students.length})
                </TabsTrigger>
                <TabsTrigger value="mentors" className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  Mentors ({mentors.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {members.map((member) => (
                    <MemberCard key={member.id} member={member} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="students">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {students.map((member) => (
                    <MemberCard key={member.id} member={member} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="mentors">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mentors.map((member) => (
                    <MemberCard key={member.id} member={member} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      </div>
    </ProtectedRoute>
  );
};

export default Members;