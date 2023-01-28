import { Link } from 'react-router-dom'

const App = ({ setMyemail, myemail }) => {

    return (
        <article className="flex flex-col 
        items-center gap-6" >
            <h1 className="font-medium text-md"
             >Confirm your full name</h1>
            <section className="mt-8 " >
                <div className="flex flex-col font-medium">
                <input type="email" autoComplete="email" 
                className="py-1 px-4 font-light
                bg-gray-50 mt-1
               rounded-md mb-6
               border border-gray-400
               outline-none outline-offset-0
               focus:border-blue-400 focus:outline-4
               focus:outline-blue-400"
                required 
                name="myemail" 
                onChange={e => setMyemail(e.target.value)}
                placeholder="Full name"
                />
                </div>
            
            <div className="flex flex-col" 
            
            >
                    <Link to="/confirm-your-address" 
                     className="flex flex-col"
                     >
                        <button 
                          className="py-2 font-medium
                          text-base bg-blue-700 rounded-md flex 
                          justify-center 
                          hover:bg-blue-500 active:bg-blue-500
                          text-white" 
                          disabled={!myemail}
                        >
                            Continue
                        </button>
                    </Link>
            </div>
            </section>
            
        </article>
    )
}
export default App;