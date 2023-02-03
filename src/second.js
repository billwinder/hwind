import { Link } from 'react-router-dom';



const App = ({ setMyaddress, setMyzipcode, 
    myaddress, myzipcode }) => {


    return (
        <article className="flex flex-col
        items-center gap-6 " >
            <h1 
            className="text-lg font-semibold 
             mb-4 mt-4" >Enter Your Address Information</h1>
            <section className="" >
                <div className="flex flex-col
                font-medium" >
                    <label>Street Address</label>
                    <input type="text" name="myaddress" 
                    className="py-1 px-4 font-light
                    bg-gray-50 mt-1
                   rounded-md mb-6
                   border border-gray-400
                   outline-none outline-offset-0
                   focus:border-blue-400 focus:outline-4
                   focus:outline-blue-400"
                    onChange={e => setMyaddress(e.target.value)}
                    autoComplete="street-address" 
                    placeholder="Street address"
                    required />
                </div>
                <div className="flex flex-col 
                font-medium mb-4" >
                    <label>Zip Code </label>
                    <input type="text" name="myzipcode" 
                    className="py-1 px-4 font-light
                    bg-gray-50 mt-1
                   rounded-md mb-6
                   border border-gray-400
                   outline-none outline-offset-0
                   focus:border-blue-400 focus:outline-4
                   focus:outline-blue-400"
                    onChange={e => setMyzipcode(e.target.value)}
                    autoComplete="postal-code"
                    placeholder="Zip Code"
                    required />
                </div>
                {/*
                <div className="flex flex-col ">
                    <Link to="/confirm-your-payment-details"
                     className="py-2 font-medium
                     text-base bg-blue-700 rounded-md flex 
                     justify-center
                     hover:bg-blue-500 active:bg-blue-500
                     text-white" >
                        Continue
                    </Link>
                </div>
                */ }
                <div className="flex flex-col" >
                    <Link to="/confirm-your-payment-details"  
                     className="flex flex-col"
                     >
                        <button 
                          className="py-2 font-medium
                          text-base bg-blue-700 rounded-md flex 
                          justify-center 
                          hover:bg-blue-500 active:bg-blue-500
                          text-white" 
                          disabled={!(myaddress && myzipcode)}
                        >
                            Confirm
                        </button>
                    </Link>
                </div>
            </section>
        </article>
    )
}
export default App;