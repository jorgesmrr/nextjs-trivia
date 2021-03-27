import React from "react";

const Layout: React.FC = ({ children }) => {
    return (
        <div className="mx-auto my-16" style={{ maxWidth: "864px" }}>
            <div className="bg-white rounded shadow-lg">
                <div className="p-8">{children}</div>
                <div className="bg-gray-light-3 text-gray-light py-8 text-center text-sm rounded-b">
                    Developed and designed by Jorge Moreira - Deployed at Vercel
                </div>
            </div>
        </div>
    );
};

export default Layout;
