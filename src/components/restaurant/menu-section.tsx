"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useCart, type MenuItem } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";


const menuItems: MenuItem[] = [
  {
    id: "dish-burger",
    name: "Gourmet Burger",
    description: "A juicy beef patty with cheddar cheese, lettuce, tomato, and our special sauce, served with crispy fries.",
    price: "15.99",
  },
  {
    id: "dish-pasta",
    name: "Spaghetti Carbonara",
    description: "Classic pasta dish with pancetta, egg yolk, pecorino cheese, and black pepper.",
    price: "18.50",
  },
  {
    id: "dish-pizza",
    name: "Margherita Pizza",
    description: "Artisanal pizza with fresh mozzarella, San Marzano tomatoes, basil, and a drizzle of olive oil.",
    price: "16.00",
  },
  {
    id: "dish-salad",
    name: "Caesar Salad",
    description: "Crisp romaine lettuce, parmesan cheese, croutons, and our homemade Caesar dressing.",
    price: "12.00",
  },
  {
    id: "dish-steak",
    name: "Grilled Ribeye Steak",
    description: "A 12oz ribeye steak cooked to perfection, served with roasted asparagus and a red wine reduction.",
    price: "29.99",
  },
  {
    id: "dish-dessert",
    name: "Chocolate Lava Cake",
    description: "Rich chocolate cake with a molten center, served with a scoop of vanilla bean ice cream.",
    price: "9.50",
  },
];

export function MenuSection() {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddItem = (item: MenuItem) => {
    addItem(item);
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <section id="menu" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Our Menu
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Delicious dishes made from the freshest ingredients.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => {
            const image = PlaceHolderImages.find((img) => img.id === item.id);
            return (
              <Card key={item.id} className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
                {image && (
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={item.name}
                      data-ai-hint={image.imageHint}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <CardDescription className="flex-1">{item.description}</CardDescription>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-lg font-bold text-primary">${item.price}</p>
                    <Button size="sm" onClick={() => handleAddItem(item)}>
                      <Plus className="mr-2 h-4 w-4" />
                      Add
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
