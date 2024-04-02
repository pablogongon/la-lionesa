"use client";

import Heading from "@/app/components/Heading";
import Status from "@/app/components/Status";
import { formatPrice } from "@/utils/formatPrice";
import { Order } from "@prisma/client";
import moment from "moment";
import { MdAccessTimeFilled, MdDeliveryDining, MdDone } from "react-icons/md";
import OrderItem from "./OrderItem";

interface OrderDetailsProps {
  order: Order;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  return (
    <div className="max-w-[1150px] m-auto flex flex-col gap-2">
      <div className="mt-8">
        <Heading title="Detalles del Pedido" />
      </div>
      <div>ID del Pedido: {order.id}</div>
      <div>
        Importe Total:{""}
        <span className="font-bold">{formatPrice(order.amount  / 100)}</span>
      </div>
      <div className="flex gap-2 items-center">
        <div>Estado de Pago:</div>
        <div>
          {order.status === "pending" ? (
            <Status
              text="pendiente"
              icon={MdAccessTimeFilled}
              bg="bg-[#b36f09]"
              color="text-white"
            />
          ) : order.status === "complete" ? (
            <Status
              text="completado"
              icon={MdDone}
              bg="bg-green-200"
              color="text-green-700"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div>Estado de envio:</div>
        <div>
          {order.deliveryStatus === "pending" ? (
            <Status
              text="pendiente"
              icon={MdAccessTimeFilled}
              bg="bg-[#B36F09]"
              color="text-white"
            />
          ) : order.deliveryStatus === "dispatched" ? (
            <Status
              text="dispatched"
              icon={MdDeliveryDining}
              bg="bg-purple-200"
              color="text-purple-700"
            />
          ) : order.deliveryStatus === "delivered" ? (
            <Status
              text="delivered"
              icon={MdDone}
              bg="bg-green-200"
              color="text-green-700"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div>Fecha del pedido: {moment(order.createDate).fromNow()}</div>
      <div>
        <h2 className="font-semibold mt-4 mb-2">Productos Pedidos</h2>
        <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center">
          <div className="col-span-2 justify-self-start">PRODUCTO</div>
          <div className="justify-self-center">PRECIO</div>
          <div className="justify-self-center">CANTIDAD</div>
          <div className="justify-self-end">TOTAL</div>
        </div>
        {order.products &&
          order.products.map((item) => {
            return <OrderItem key={item.id} item={item}></OrderItem>;
          })}
      </div>
    </div>
  );
};

export default OrderDetails;
