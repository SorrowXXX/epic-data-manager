import TitleBlock from './COC/TitleBlock';
import LoginForm from './COC/LoginForm';
import RegisterForm from './COC/RegisterForm';

const AuthLayout = () => {
    return (
        <div className="flex h-screen">
            <div className="w-1/2 h-full">
                <TitleBlock />
            </div>

            <div className="w-1/2 flex flex-col justify-center items-center bg-white p-8">
                <LoginForm />
                <div className="flex items-center my-8">
                    <div className="flex-grow h-px bg-gray-400"></div>
                    <span className="mx-4 text-sm text-gray-600 font-inter">or</span>
                    <div className="flex-grow h-px bg-gray-400"></div>
                </div>
                <RegisterForm />
            </div>
        </div>
    );
};

export default AuthLayout;