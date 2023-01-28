import { BrowserRouter, Link } from "react-router-dom";



const App = () => {

    return (
        <section className="flex flex-col items-center" >
        <div className="flex items-center
         justify-center text-green-700 
         h-24 w-24 rounded-full border-2
         border-green-600" >
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h4 className="text-lg mt-4
        font-medium text-green-700">
            successful
        </h4>
        <h4 className="text-base mt-4 
        font-medium">
            You are done
        </h4>

        <div className="flex flex-col mt-8">
                    <a href="https://happn.app/"
                     className="py-2 font-medium
                     text-base bg-blue-700 rounded-md flex 
                     justify-center px-4
                     hover:bg-blue-500 active:bg-blue-500
                     text-white" 
                     >
                        Go to your dashboard
                    </a>
                </div>
        </section>
    )
}

export default App;