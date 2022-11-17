import { useEffect, useState } from "react"

function Form(){
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [set, select]
    let options =[
        "Audi", "Set", "Nissan", "BMW"
    ]
    function upadateEmail(e){
        setEmail(e.target.value)
        console.log(e)

    }
    function loggearse(){
        console.log(email, password)

    }

    useEffect(()=>{
        console.log(email, password)
    }, [email])
    return (
        <>
            <input type="email" onChange={upadateEmail} value={email} />
            <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password} />
            <button onClick={loggearse}>Login</button>

            <select onChange={set} value={}>
                {
                    options.map(option=>{
                        ret
                    })
                }
            </select>
</>
    )
}
export default Form