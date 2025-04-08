import TitleBlock from './TitleBlock';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthLayout = () => {
    return (
        <div className="auth-wrapper">
            <div className="auth-left">
                <TitleBlock />
            </div>
            <div className="auth-right">
                <LoginForm />
                <div className="form-separator">— or —</div>
                <RegisterForm />
            </div>
        </div>
    );
};

export default AuthLayout;