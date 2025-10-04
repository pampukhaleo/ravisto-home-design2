import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Дякуємо за заявку!",
      description: "Ми зв'яжемось з вами найближчим часом.",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Зв'яжіться з нами
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Залишіть заявку і ми зв'яжемось з вами для консультації
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-2 rounded-[var(--radius)]">
            <CardHeader>
              <CardTitle className="text-2xl">Форма зворотнього зв'язку</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Ім'я *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ваше ім'я"
                    required
                    className="rounded-[calc(var(--radius)-0.5rem)]"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+380"
                    required
                    className="rounded-[calc(var(--radius)-0.5rem)]"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="rounded-[calc(var(--radius)-0.5rem)]"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Повідомлення</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Розкажіть про ваші побажання..."
                    rows={4}
                    className="rounded-[calc(var(--radius)-0.5rem)]"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Відправити заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-2 rounded-[var(--radius)] hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Телефон</h3>
                    <p className="text-muted-foreground">+380 (67) 123 45 67</p>
                    <p className="text-muted-foreground">+380 (95) 123 45 67</p>
                    <p className="text-sm text-muted-foreground mt-2">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 rounded-[var(--radius)] hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">info@hometextile.ua</p>
                    <p className="text-muted-foreground">orders@hometextile.ua</p>
                    <p className="text-sm text-muted-foreground mt-2">Відповідаємо протягом 24 годин</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 rounded-[var(--radius)] hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Адреса</h3>
                    <p className="text-muted-foreground">м. Київ, вул. Хрещатик, 1</p>
                    <p className="text-muted-foreground">Офіс 101</p>
                    <p className="text-sm text-muted-foreground mt-2">Відвідайте наш шоурум</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
