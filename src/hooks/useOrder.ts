import { useState } from "react"
import { MenuItems, OrderItem } from "../types";

export default function useOrder() {
      const [order, setOrder] = useState<OrderItem[]>([]);

      const addItem = (item: MenuItems) => {

            const itemExixt = order.find(orderItem => orderItem.id === item.id);

            if (itemExixt) {
                  const updateOrder = order.map(orderItem => orderItem.id === item.id
                        ? { ...orderItem, quantity: orderItem.quantity + 1 }
                        : orderItem
                  )
                  setOrder(updateOrder);
            } else {
                  const newItem = { ...item, quantity: 1 };
                  setOrder([...order, newItem]);
            }

      }
      //console.log(order);

      return {
            order,
            addItem
      }
}