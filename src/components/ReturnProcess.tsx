import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, MessageSquare, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Зв'яжіться з нами",
    description: "Напишіть або зателефонуйте нам протягом 14 днів з моменту отримання товару"
  },
  {
    icon: Package,
    title: "Упакуйте товар",
    description: "Збережіть товарний вигляд та оригінальну упаковку виробу"
  },
  {
    icon: Truck,
    title: "Відправте назад",
    description: "Відправте товар зручною для вас службою доставки"
  },
  {
    icon: CheckCircle,
    title: "Отримайте кошти",
    description: "Повернення коштів протягом 5 робочих днів після перевірки товару"
  }
];

const ReturnProcess = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Процес повернення
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Прозорий та простий процес повернення товару
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="text-center border-2 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-card)] rounded-[var(--radius)] relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ми прагнемо зробити процес повернення максимально простим і прозорим. 
            Якщо у вас виникли питання, наша служба підтримки завжди готова допомогти!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReturnProcess;
