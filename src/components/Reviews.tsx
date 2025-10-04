import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Олена Коваленко",
    rating: 5,
    text: "Чудова якість постільної білизни! М'який льон, приємний до тіла. Після декількох прань стала ще комфортнішою. Обов'язково замовлю ще!",
    date: "2 тижні тому"
  },
  {
    id: 2,
    name: "Андрій Петренко",
    rating: 5,
    text: "Замовляв рушники та штори. Все відповідає опису, якість на висоті. Доставка швидка. Дякую за прекрасний сервіс!",
    date: "1 місяць тому"
  },
  {
    id: 3,
    name: "Марина Сидоренко",
    rating: 5,
    text: "Декоративні подушки просто чудові! Відмінно доповнили інтер'єр вітальні. Тканини натуральні, кольори насичені. Рекомендую!",
    date: "3 тижні тому"
  },
  {
    id: 4,
    name: "Ігор Мельник",
    rating: 5,
    text: "Купували постільну білизну як подарунок. Отримали море компліментів! Якість преміум, упаковка гарна. Дуже задоволені!",
    date: "1 тиждень тому"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Відгуки клієнтів
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ваше задоволення - найкраща нагорода для нас
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <Card 
              key={review.id}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-card)] rounded-[var(--radius)]"
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="border-t border-border pt-4 mt-4">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
