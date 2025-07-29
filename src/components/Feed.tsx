import { useState } from "react";
import { PostCard } from "./PostCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Clock, Heart, MessageCircle } from "lucide-react";

export const Feed = () => {
  const [sortBy, setSortBy] = useState("latest");

  // Sample data - in real app this would come from API
  const posts = [
    {
      id: 1,
      user: {
        name: "Alex Chen",
        avatar: "/placeholder.svg",
        badge: "Mastermind",
        joinDate: "Dec 2023"
      },
      content: {
        text: "Just completed my Deep Learning Specialization! 🎉 The journey was challenging but incredibly rewarding. The neural network projects really pushed my understanding to the next level. Excited to apply these concepts to my space technology research project.",
        media: "/placeholder.svg",
        tags: ["#AI", "#DeepLearning", "#SpaceTech", "#Achievement"]
      },
      reactions: {
        likes: 24,
        comments: 8,
        bookmarks: 12
      },
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      user: {
        name: "Maya Rodriguez",
        avatar: "/placeholder.svg",
        badge: "Explorer",
        joinDate: "Jan 2024"
      },
      content: {
        text: "Today's reflection: Working on the Mars rover simulation has taught me so much about autonomous navigation systems. The intersection of AI and space exploration is absolutely fascinating. Can't wait to share my progress with the community!",
        tags: ["#MarsRover", "#AI", "#SpaceExploration", "#LearningJourney"]
      },
      reactions: {
        likes: 18,
        comments: 5,
        bookmarks: 7
      },
      timestamp: "4 hours ago"
    },
    {
      id: 3,
      user: {
        name: "David Park",
        avatar: "/placeholder.svg",
        badge: "Mentor",
        joinDate: "Sep 2023"
      },
      content: {
        text: "Sharing my latest achievement! Completed the Advanced Machine Learning course with honors. The computer vision module was particularly challenging but gave me insights I'll use in my satellite imagery analysis project. 🛰️",
        media: "/placeholder.svg",
        tags: ["#MachineLearning", "#ComputerVision", "#SatelliteImagery", "#Milestone"]
      },
      reactions: {
        likes: 31,
        comments: 12,
        bookmarks: 18
      },
      timestamp: "6 hours ago"
    }
  ];

  const sortOptions = [
    { value: "latest", label: "Latest", icon: Clock },
    { value: "trending", label: "Trending", icon: TrendingUp },
    { value: "most-liked", label: "Most Liked", icon: Heart },
    { value: "most-commented", label: "Most Commented", icon: MessageCircle }
  ];

  return (
    <main className="flex-1 p-6 bg-background">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Feed Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Community Feed</h1>
          
          {/* Sort Options */}
          <Tabs value={sortBy} onValueChange={setSortBy} className="w-auto">
            <TabsList className="grid grid-cols-4 w-auto">
              {sortOptions.map((option) => (
                <TabsTrigger 
                  key={option.value} 
                  value={option.value}
                  className="flex items-center gap-2 px-3"
                >
                  <option.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{option.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              user={post.user}
              content={post.content}
              reactions={post.reactions}
              timestamp={post.timestamp}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center pt-6">
          <Button variant="vyoman" size="lg" className="px-8">
            Load More Posts
          </Button>
        </div>
      </div>
    </main>
  );
};