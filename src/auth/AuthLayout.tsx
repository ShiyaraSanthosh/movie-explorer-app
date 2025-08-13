import { Outlet, Navigate } from 'react-router-dom';

const AuthLayout = () => {
    const isAuthenticated = false;
    return (
        <div >
            {isAuthenticated ? (
                <Navigate to={'/'} />
            ): (
                <>
                    <section className="mx-[100%] py-10 flex flex-1 flex-col items-center justify-center">
                        <Outlet />
                    </section>
                </>
            )}
        </div>
    );
}

export default AuthLayout;
