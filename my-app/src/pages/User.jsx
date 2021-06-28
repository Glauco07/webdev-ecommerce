import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { signoutUser } from "../store/reducers/userReducer";

const User = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch()

  const [showAddProduct, setShowAddProduct] = useState(false);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Cidade: {user.city}</p>
      <p>Tipo: {user.type}</p>
      <Link to="/">
        <button id="login" onClick={()=>{dispatch(signoutUser())}}>Sign Out</button>
      </Link>
      { user.user === 'admin' ?
      <div>
        <button onClick={() => {setShowAddProduct(showAddProduct ? false : true)}}>Adicionar Produtos</button>
        {showAddProduct ? 
          <div>
            <p>Produtos</p>
          </div>
      :   <></>}
      </div> : <></>
      }
    </div>
  )
};

export default User;