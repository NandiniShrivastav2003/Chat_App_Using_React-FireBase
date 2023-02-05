import Add from "../image/avatar.jpg";
function Register() {
    return (
        <div className="form-container">
            <div className="formWrapper">
                <span className="Logo">Login & Chat</span>
                <span className="title">Register</span>
                <form >
                    <input type="text" placeholder="display name" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password"/>
                    <input style={{display:"none"}} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={Add} className="imgstyle"/>
                        <span className="avatar">Add an avatar</span>
                    </label>
                    <button>SignUp</button>
                </form>
                <p>You don't have an account? Login</p>
            </div>
        </div>
    );
}
export default Register;