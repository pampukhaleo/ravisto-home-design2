import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">HomeTextile</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("products")} className="text-foreground hover:text-primary transition-colors">
              Товари
            </button>
            <button onClick={() => scrollToSection("benefits")} className="text-foreground hover:text-primary transition-colors">
              Переваги
            </button>
            <button onClick={() => scrollToSection("reviews")} className="text-foreground hover:text-primary transition-colors">
              Відгуки
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-foreground hover:text-primary transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
              Контакти
            </button>
          </nav>

          <Button onClick={() => scrollToSection("contact")} className="hidden md:inline-flex" size="lg">
            Зробити замовлення
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <button onClick={() => scrollToSection("products")} className="text-foreground hover:text-primary transition-colors text-left">
              Товари
            </button>
            <button onClick={() => scrollToSection("benefits")} className="text-foreground hover:text-primary transition-colors text-left">
              Переваги
            </button>
            <button onClick={() => scrollToSection("reviews")} className="text-foreground hover:text-primary transition-colors text-left">
              Відгуки
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-foreground hover:text-primary transition-colors text-left">
              FAQ
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors text-left">
              Контакти
            </button>
            <Button onClick={() => scrollToSection("contact")} className="w-full" size="lg">
              Зробити замовлення
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
