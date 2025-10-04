import { Leaf, Award, Truck, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    icon: Leaf,
    title: "Натуральні матеріали",
    description: "100% натуральні тканини - льон, бавовна, шовк. Екологічно чисто та безпечно для здоров'я"
  },
  {
    icon: Award,
    title: "Преміум якість",
    description: "Ретельний контроль якості на кожному етапі виробництва. Сертифіковані європейські стандарти"
  },
  {
    icon: Truck,
    title: "Швидка доставка",
    description: "Доставка по Україні 1-3 дні. Безкоштовна доставка при замовленні від 2000 грн"
  },
  {
    icon: Shield,
    title: "Гарантія якості",
    description: "14 днів на обмін та повернення. Гарантія на всі товари. Ваше задоволення - наш пріоритет"
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Чому обирають нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ми дбаємо про кожну деталь, щоб ваш дім став справжнім затишним притулком
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="text-center border-2 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-card)] rounded-[var(--radius)] group"
            >
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
