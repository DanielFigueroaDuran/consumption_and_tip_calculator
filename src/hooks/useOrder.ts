import { useState } from "react"
import { MenuItems, OrderItem } from "../types";

export default function useOrder() {
      const [order, setOrder] = useState<OrderItem[]>([]);
      const [tip, setTip] = useState(0);

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

      const removeItem = (id: MenuItems['id']) => {

            setOrder(order.filter(item => item.id !== id));


            //console.log('eliminando', id);
      }


      return {
            order,
            tip,
            setTip,
            addItem,
            removeItem
      }
}