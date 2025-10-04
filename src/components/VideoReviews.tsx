import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

const VideoReviews = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Відео-відгуки
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Дивіться, що говорять наші клієнти
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((item) => (
            <Card 
              key={item}
              className="relative aspect-video overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-card)] rounded-[var(--radius)] group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                <p className="text-background font-semibold">Відгук клієнта #{item}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoReviews;
