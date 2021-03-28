import React from "react";

const Layout: React.FC = ({ children }) => {
    return (
        <div
            className="select-none mx-auto my-16"
            style={{ maxWidth: "864px" }}
        >
            <div className="bg-white rounded shadow-lg">
                <div className="p-8">{children}</div>
                <div className="bg-gray-light-3 text-gray-light py-8 text-center text-sm rounded-b">
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
    );
};

export default Layout;
