import React from 'react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import {Product} from "@/Core/_Models";

interface Props{
    auth:any,
    products:Product[]
}


const Index:React.FC<Props> = ({auth,products}) => {
    console.log(products)
    return (
        <Authenticated user={auth.user}>
            <ul>
                {products&&products.map((product:any,key:number)=> {
                    return (<li key={key}>
                        {product.name}
                    </li>)

                })}

            </ul>
        </Authenticated>
    );
};

export default Index;
