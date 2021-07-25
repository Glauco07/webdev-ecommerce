import React, {useEffect, useState} from "react";

import { http } from "../store/axios"
import { mockedOrders } from "../mockedDatabase";
import "../css/User.css"

const Order = ({order}) => {
  return (
    <tr key={order._id}>
      <td className="user-page-title"><span className="order-history-text">{order._id}</span></td>
      <td className="user-page-title"><span className="order-history-text">{order.userId}</span></td>
      <td className="user-page-title"><span className="order-history-text">R$ {order.totalPrice.toFixed(2).toString().replace(".", ",")}</span></td>
    </tr>
  )
}

const getOrderRequest = async () =>{
  try {
    const res = await http.get("/orders");
    if (res.status === 200) return res.data
  } catch (e) {
    console.error("Error getting order history")
    return []
  }
}

const OrderHistory = ({user}) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
      getOrderRequest().then((ret) => {
        setOrders(ret);
      })
    }, [orders])

    return(
        <div>
          <h2>Histórico de Compras</h2>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>User ID</th>
                <th>Total Price</th>
              </tr>
            </thead>

            <tbody>
              {orders.filter((order) => (user.admin === true || order.userId === user._id)).map((order) => <Order order={order} key={order._id}/>)}
            </tbody>
          </table>
        </div>
    )
};

export default OrderHistory;