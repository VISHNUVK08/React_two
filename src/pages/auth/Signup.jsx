import "../../styles/auth.css"

function Signup(){
    return(
        <div className="auth-container">
            <form className="auth-form">
                <h2>Signup</h2>

                <input type="text" placeholder="Enter name" />

                <input type="email" placeholder="Enter email" />

                <input type="password" placeholder="Enter password" />

                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default Signup