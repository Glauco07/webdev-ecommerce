import React, {useState} from "react";

const Admin = () => {

    const [showAddProduct, setShowAddProduct] = useState(false);
    // add admind
    // manage products

    return (
        <div>
            <button onClick={() => {setShowAddProduct(showAddProduct ? false : true)}}>Adicionar Produtos</button>
            {showAddProduct ? 
                <div>
                    <p>Produtos</p>
                </div>
            :   <></>}
        </div>
    )
}

export default Admin;