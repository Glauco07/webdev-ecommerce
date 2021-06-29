import React from "react";

import { mockedOrders } from "../mockedDatabase";
import "../css/User.css"

const Order = ({order}) => {
  return (
    <tr key={order.id}>
      <td className="user-page-title"><span className="order-history-text">{order.id}</span></td>
      <td className="user-page-title"><span className="order-history-text">{order.userId}</span></td>
      <td className="user-page-title"><span className="order-history-text">{order.totalPrice}</span></td>
    </tr>
  )
}

const OrderHistory = ({userId=''}) => {
    return(
        <div>
          <h2>Histórico de Compras</h2>
          <table>
            <tr>
              <th>Order ID</th>
              <th>User ID</th>
              <th>Total Price</th>
            </tr>
            {mockedOrders.filter((order) => (userId === '' || order.userId === userId)).map((order) => <Order order={order}/>)}
          </table>
        </div>
    )
};

export default OrderHistory;