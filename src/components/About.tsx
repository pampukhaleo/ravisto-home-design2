import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Heart, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "12+",
    label: "років на ринку"
  },
  {
    icon: Users,
    value: "50 000+",
    label: "задоволених клієнтів"
  },
  {
    icon: Heart,
    value: "98%",
    label: "повторних покупок"
  },
  {
    icon: TrendingUp,
    value: "200+",
    label: "товарів в асортименті"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Про нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ми створюємо затишок у українських домівках вже понад 12 років
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              HomeTextile - це український виробник домашнього текстилю преміум класу. 
              Ми почали свій шлях у 2012 році з невеликої майстерні та мрії створювати 
              якісні текстильні вироби для українських родин.
            </p>
            <p>
              Сьогодні ми - команда професіоналів, які об'єднані любов'ю до своєї справи. 
              Кожен виріб проходить ретельний контроль якості, тому що ми розуміємо - 
              наші товари створюють атмосферу затишку у вашому домі.
            </p>
            <p>
              Ми використовуємо лише натуральні матеріали від перевірених європейських 
              постачальників та співпрацюємо з талановитими українськими дизайнерами. 
              Наша місія - робити якісний домашній текстиль доступним для кожної родини.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="text-center border-2 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-card)] rounded-[var(--radius)]"
            >
              <CardContent className="pt-8 pb-8">
                <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
