import React from "react";

const Layout: React.FC = ({ children }) => {
    return (
        <div className="max-w-2xl mx-auto mt-7">
            <div className="rounded border-2 border-solid border-default-2 p-2">
                {children}
            </div>
        </div>
    );
};

export default Layout;
