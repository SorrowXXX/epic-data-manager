const LoginForm = () => (
    <form className="login-form">
        <h2 className="form-title">Log In</h2>
        <input type="text" placeholder="Username" className="form-input" />
        <input type="password" placeholder="Password" className="form-input" />
        <div className="form-options">
            <label>
                <input type="checkbox" className="checkbox-remember" /> Remember me
            </label>
            <a href="#" className="link-forgot">Forgot Password?</a>
        </div>
        <button className="btn-login">Log In →</button>
    </form>
);

export default LoginForm;