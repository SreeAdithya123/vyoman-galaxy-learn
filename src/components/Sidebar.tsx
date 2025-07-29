import { Hash, Flame, Folder, Plus, Users, MessageCircle, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export const Sidebar = () => {
  const groupChannels = [
    { name: "July Mastermind", unread: 5, active: true },
    { name: "AI Research Hub", unread: 12, active: false },
    { name: "Space Tech Forum", unread: 3, active: false },
  ];

  const activeThreads = [
    { name: "Certificate Showcase Thread", unread: 8 },
    { name: "Daily Learning Goals", unread: 2 },
    { name: "Project Collaboration", unread: 15 },
  ];

  const sections = [
    { name: "AI & Space Mastermind", icon: BookOpen, color: "text-neon-green" },
    { name: "My Reflections", icon: MessageCircle, color: "text-primary" },
    { name: "Certificates Vault", icon: Award, color: "text-accent" },
  ];

  return (
    <aside className="w-80 bg-sidebar-dark text-sidebar-foreground border-r border-sidebar-dark/20 flex flex-col">
      {/* Community Header */}
      <div className="p-6 border-b border-sidebar-foreground/10">
        <h2 className="text-xl font-semibold text-neon-green">Vyoman Community</h2>
        <p className="text-sm text-sidebar-foreground/70 mt-1">Future of Learning</p>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          {/* Group Channels */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Hash className="h-4 w-4 text-sidebar-foreground/60" />
              <span className="text-sm font-medium text-sidebar-foreground/80">Group Channels</span>
            </div>
            <div className="space-y-1">
              {groupChannels.map((channel) => (
                <button
                  key={channel.name}
                  className={`w-full flex items-center justify-between p-2 rounded-lg text-left transition-all hover:bg-sidebar-foreground/10 ${
                    channel.active ? 'bg-primary/20 text-primary-glow' : 'text-sidebar-foreground/80'
                  }`}
                >
                  <span className="text-sm font-medium">{channel.name}</span>
                  {channel.unread > 0 && (
                    <Badge variant="secondary" className="bg-neon-green text-sidebar-dark text-xs h-5">
                      {channel.unread}
                    </Badge>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Active Threads */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Flame className="h-4 w-4 text-sidebar-foreground/60" />
              <span className="text-sm font-medium text-sidebar-foreground/80">Active Threads</span>
            </div>
            <div className="space-y-1">
              {activeThreads.map((thread) => (
                <button
                  key={thread.name}
                  className="w-full flex items-center justify-between p-2 rounded-lg text-left transition-all hover:bg-sidebar-foreground/10 text-sidebar-foreground/80"
                >
                  <span className="text-sm">{thread.name}</span>
                  {thread.unread > 0 && (
                    <div className="h-2 w-2 bg-neon-green rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Folder className="h-4 w-4 text-sidebar-foreground/60" />
              <span className="text-sm font-medium text-sidebar-foreground/80">Sections</span>
            </div>
            <div className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.name}
                  className="w-full flex items-center gap-3 p-2 rounded-lg text-left transition-all hover:bg-sidebar-foreground/10 text-sidebar-foreground/80"
                >
                  <section.icon className={`h-4 w-4 ${section.color}`} />
                  <span className="text-sm">{section.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>

      {/* Floating New Post Button */}
      <Button
        variant="floating"
        size="floating"
        className="bottom-6 right-6"
        title="Create New Post"
      >
        <Plus className="h-6 w-6" />
      </Button>
    </aside>
  );
};