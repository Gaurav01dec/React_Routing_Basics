import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


export default function MainNavBar() {
    const navigate = useNavigate()

    function barHandler() {
        navigate('/Bar')
    }

    return (


        <>

            <div className="">

                <div className="">
                    <button><Link to='/'>Home</Link></button>
                </div>
                <div>
                    <button><Link to='/Product'>Product</Link ></button>
                </div>
                <div>
                    <button onClick={barHandler}>Go to Bar</button>
                </div>
            </div>
        </>





    )
};
