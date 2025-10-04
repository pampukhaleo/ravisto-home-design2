import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-textiles.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Домашній текстиль <span className="text-primary">преміум якості</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            Створіть затишок у вашому домі з нашими натуральними тканинами та елегантним дизайном
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button onClick={scrollToContact} variant="hero" size="lg">
              Замовити зараз
            </Button>
            <Button 
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })} 
              variant="outline" 
              size="lg"
            >
              Переглянути каталог
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
