import { ShoppingBag, Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">HomeTextile</span>
            </div>
            <p className="text-muted-foreground">
              Український виробник домашнього текстилю преміум класу з 2012 року
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Навігація</h3>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
                  Товари
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">
                  Переваги
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">
                  Відгуки
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Контакти</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>+380 (67) 123 45 67</li>
              <li>info@hometextile.ua</li>
              <li>м. Київ, вул. Хрещатик, 1</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Соціальні мережі</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© {currentYear} HomeTextile. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
