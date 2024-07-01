import { Link, useParams } from "react-router-dom"

export default function ProductDetails() {

    const params = useParams()


    return(
        <>
        <h1>Product Details ...</h1>
        <h2>You selected this route/ID : {params.productID}</h2>
        <button><Link to='..'>Go Back</Link></button>
        </>
    )
};
