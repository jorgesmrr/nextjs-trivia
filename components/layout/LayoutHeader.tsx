import Link from "next/link";
import React from "react";

export type LayoutHeaderProps = {
    title: string;
    upperSubtitle?: string;
    description?: string;
};
const LayoutHeader: React.FC<LayoutHeaderProps> = ({
    title,
    upperSubtitle,
    description,
}) => {
    return (
        <div className="relative mb-4">
            <div className="absolute top-1/2 transform -translate-y-1/2">
                <Link href="/">Home</Link>
            </div>
            <div className="text-center">
                {upperSubtitle && <p className="subtitle">{upperSubtitle}</p>}
                <h1>{title}</h1>
                {description && <div>{description}</div>}
                <hr className="my-4" />
            </div>
        </div>
    );
};

export default LayoutHeader;
