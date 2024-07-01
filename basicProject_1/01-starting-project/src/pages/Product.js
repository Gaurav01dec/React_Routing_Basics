// import { Link } from "react-router-dom"

import { Link } from "react-router-dom"

export default function Product() {

    const PRODUCTS = [
        { id: 'p1', title: 'Red Label' },
        { id: 'p2', title: 'Old Monk' },
        { id: 'p3', title: 'Signature' },
    ]

    return (<>
        <h1>My Product Page</h1>
        <ul>
        {PRODUCTS.map(prod => <li key={prod.id}><Link to={`/Product/${prod.id}`}>{prod.title}</Link></li>)}
        </ul>
    </>
    )
};
