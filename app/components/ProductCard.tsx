import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useAppStore } from "../store/app";
import { saveCartItems } from "../store/local-storage";

interface ProductCardProps {
  uuid: string;
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({
  uuid,
  id,
  name,
  price,
  imageUrl,
}: ProductCardProps) {
  const cartItems = useAppStore((state) => state.cartItems);
  const setCartItems = useAppStore((state) => state.setCartItems);

  const handleAddToCart = () => {
    const exist = cartItems.find((item) => item.uuid === uuid);
    const payload = {
      productId: id,
      uuid: uuid,
      name: name,
      unitPrice: price,
      quantity: 1,
    };
    if (exist) {
      const filteredItems = cartItems.filter((item) => item.uuid !== uuid);
      setCartItems(filteredItems);
      saveCartItems(filteredItems);
    } else {
      setCartItems([...cartItems, payload]);
      saveCartItems([...cartItems, payload]);
    }
  };

  console.log("CartItems", cartItems);

  return (
    <div
      key={id}
      className="group overflow-hidden rounded-lg border border-gray-300"
    >
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <Image
          src={`${imageUrl}`}
          alt={`Product ${name}`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          width={400}
          height={400}
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{name}</h3>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-gray-900">NPR {price}</span>
          <ShoppingCart
            onClick={() => handleAddToCart()}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
