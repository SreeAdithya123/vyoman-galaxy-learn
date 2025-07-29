import { Heart, MessageCircle, Bookmark, Share, MoreHorizontal, Award } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface PostCardProps {
  user: {
    name: string;
    avatar: string;
    badge: string;
    joinDate: string;
  };
  content: {
    text: string;
    media?: string;
    tags: string[];
  };
  reactions: {
    likes: number;
    comments: number;
    bookmarks: number;
  };
  timestamp: string;
}

export const PostCard = ({ user, content, reactions, timestamp }: PostCardProps) => {
  const reactionEmojis = ["👍", "❤️", "🧠", "🚀"];

  return (
    <Card className="w-full bg-card hover:shadow-lg transition-all duration-300 border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={user.avatar} />
              <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-foreground">{user.name}</h3>
                <Badge variant="secondary" className="bg-neon-green/20 text-neon-green border-neon-green/30 text-xs">
                  {user.badge}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Joined {user.joinDate} • {timestamp}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Post Content */}
        <div className="space-y-3">
          <p className="text-foreground leading-relaxed">{content.text}</p>
          
          {/* Certificate/Media */}
          {content.media && (
            <div className="relative group cursor-pointer">
              <div className="border-2 border-neon-green/30 rounded-lg overflow-hidden bg-gradient-to-br from-neon-green/5 to-transparent p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-4 w-4 text-neon-green" />
                  <span className="text-sm font-medium text-neon-green">Certificate Showcase</span>
                </div>
                <img
                  src={content.media}
                  alt="Certificate"
                  className="w-full h-48 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          )}

          {/* Tags */}
          {content.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {content.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 cursor-pointer"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Reaction Emojis */}
        <div className="flex items-center gap-1 py-2">
          {reactionEmojis.map((emoji, index) => (
            <button
              key={index}
              className="p-2 rounded-full hover:bg-muted/50 transition-colors text-lg hover:scale-110 transform duration-200"
            >
              {emoji}
            </button>
          ))}
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
              <Heart className="h-4 w-4" />
              <span className="text-sm">{reactions.likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">{reactions.comments}</span>
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
              <Bookmark className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
              <Share className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};