import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "З яких матеріалів виготовлені ваші товари?",
    answer: "Ми використовуємо виключно натуральні матеріали преміум якості: льон, органічна бавовна, шовк. Всі тканини сертифіковані та відповідають європейським стандартам якості. Ми ретельно відбираємо постачальників та контролюємо кожен етап виробництва."
  },
  {
    question: "Скільки часу займає доставка?",
    answer: "Доставка по Україні займає 1-3 робочі дні залежно від вашого регіону. Відправка здійснюється щодня через Нову Пошту та Укрпошту. При замовленні від 2000 грн доставка безкоштовна. Ви отримаєте номер для відстеження одразу після відправлення."
  },
  {
    question: "Чи можна повернути товар?",
    answer: "Так, ви маєте 14 днів на повернення або обмін товару. Головна умова - збереження товарного вигляду та упаковки. Повернення коштів здійснюється протягом 5 робочих днів після отримання товару. Зв'яжіться з нашою службою підтримки для оформлення повернення."
  },
  {
    question: "Як доглядати за вашими виробами?",
    answer: "Більшість наших виробів можна прати в машині при температурі 30-40°C. Використовуйте м'які засоби для прання без відбілювачів. Сушіть природним шляхом або в сушарці на низькій температурі. Детальні інструкції з догляду є на етикетці кожного виробу."
  },
  {
    question: "Чи надаєте ви гарантію на товари?",
    answer: "Так, ми надаємо гарантію якості на всі наші товари. Якщо ви виявите будь-які дефекти виробництва протягом гарантійного терміну, ми безкоштовно замінимо товар або повернемо гроші. Ваше задоволення - наш пріоритет."
  },
  {
    question: "Чи є у вас програма лояльності?",
    answer: "Так! При повторних покупках ви отримуєте знижку 5%. Також ми регулярно проводимо акції та розпродажі. Підпишіться на нашу розсилку, щоб першими дізнаватись про спеціальні пропозиції."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Часті питання
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Знайдіть відповіді на найпопулярніші питання
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 border-border rounded-[var(--radius)] px-6 hover:border-primary transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
