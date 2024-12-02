import { useState } from "react"

const FormWithValidation = ()=>{
    const [email,setEmail] = useState("")
    const [error,setError] = useState("")

     function handleChange (event){
        setEmail(event.target.value)
     }

     function handleSubmit (event){
        event.preventDefault();
        
        if(!email.includes("@")){
            setError("email is not valid")
        }
        else
        {
            setError("")
            alert(`email : ${email}`)
        }
     }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
            <label>
                Email : 
                <input type = "text" value={email} onChange = {handleChange}/>
            </label>
            {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
            {error ? <p style={{ color: "red" }}>{error}</p> : null}

            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormWithValidation