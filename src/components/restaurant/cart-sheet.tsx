"use client";

import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCart } from "@/hooks/use-cart";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ShoppingCart, Trash2 } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export function CartSheet() {
  const { cartItems, totalItems, totalPrice, updateItemQuantity, removeItem, clearCart } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
             <Badge
              variant="destructive"
              className="absolute -right-2 -top-2 h-5 w-5 justify-center rounded-full p-0 text-xs"
            >
              {totalItems}
            </Badge>
          )}
          <span className="sr-only">Shopping Cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader className="pr-6">
          <SheetTitle>Shopping Cart ({totalItems})</SheetTitle>
        </SheetHeader>
        <Separator />

        {cartItems.length > 0 ? (
          <>
            <ScrollArea className="flex-1">
              <div className="flex flex-col gap-6 pr-6 py-6">
                {cartItems.map((item) => {
                  const image = PlaceHolderImages.find(
                    (img) => img.id === item.id
                  );
                  return (
                    <div key={item.id} className="flex items-center gap-4">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="rounded-md object-cover"
                        />
                      )}
                      <div className="flex-1">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          ${item.price}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            updateItemQuantity(item.id, parseInt(e.target.value))
                          }
                          className="h-8 w-16"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove item</span>
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollArea>
            <SheetFooter className="mt-auto flex-col gap-4">
              <Separator />
              <div className="flex items-center justify-between font-semibold">
                <p>Total</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
               <Button onClick={clearCart} variant="outline">Clear Cart</Button>
              <Button size="lg">Proceed to Checkout</Button>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <ShoppingCart className="h-16 w-16 text-muted-foreground" />
            <SheetDescription>
              Your cart is empty. Add some delicious food to get started!
            </SheetDescription>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
