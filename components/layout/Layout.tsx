import React from "react";

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <img
                src="/images/bg.png"
                className="object-cover fixed inset-0 w-screen h-screen hidden md:block"
            />
            <div
                className="select-none mx-auto relative z-10 md:my-16 pt-16 sm:pt-0"
                style={{ maxWidth: "54rem" }}
            >
                <div className="bg-white min-h-screen flex flex-col md:block md:min-h-0 md:rounded md:shadow-lg">
                    <div className="p-8">{children}</div>
                    <div className="bg-gray-light-3 text-gray-light py-8 text-center text-sm rounded-b px-4 mt-auto">
                        Developed and designed by{" "}
                        <a
                            href="https://github.com/jorgesmrr"
                            className="text-primary"
                        >
                            Jorge Moreira
                        </a>{" "}
                        - See on{" "}
                        <a
                            href="https://github.com/jorgesmrr/nextjs-trivia"
                            className="text-primary"
                        >
                            GitHub
                        </a>{" "}
                        - Powered by{" "}
                        <a href="https://opentdb.com/" className="text-primary">
                            Open Trivia Database
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
