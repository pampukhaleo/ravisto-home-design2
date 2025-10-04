import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import beddingImage from "@/assets/product-bedding.jpg";
import pillowsImage from "@/assets/product-pillows.jpg";
import towelsImage from "@/assets/product-towels.jpg";
import curtainsImage from "@/assets/product-curtains.jpg";

const products = [
  {
    id: 1,
    name: "Постільна білизна",
    description: "М'який льон преміум якості для ідеального сну",
    image: beddingImage,
    price: "від 1 200 грн"
  },
  {
    id: 2,
    name: "Декоративні подушки",
    description: "Стильні акценти для вашого інтер'єру",
    image: pillowsImage,
    price: "від 450 грн"
  },
  {
    id: 3,
    name: "Рушники",
    description: "Натуральна бавовна з високою вбирністю",
    image: towelsImage,
    price: "від 350 грн"
  },
  {
    id: 4,
    name: "Штори",
    description: "Елегантні тканини для затишного простору",
    image: curtainsImage,
    price: "від 800 грн"
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Наші товари
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Кожен виріб виготовлений з натуральних матеріалів та створений з любов'ю до деталей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-card)] rounded-[var(--radius)]"
            >
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{product.name}</CardTitle>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-primary mb-4">{product.price}</p>
                <Button variant="default" className="w-full">
                  Детальніше
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
