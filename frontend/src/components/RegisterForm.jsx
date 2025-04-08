const RegisterForm = () => (
    <form className="register-form">
        <h2 className="form-title">Register</h2>
        <input type="text" placeholder="Username" className="form-input" />
        <input type="email" placeholder="Email" className="form-input" />
        <input type="password" placeholder="Password" className="form-input" />
        <input type="password" placeholder="Confirm Password" className="form-input" />
        <button className="btn-register">Register →</button>
    </form>
);

export default RegisterForm;