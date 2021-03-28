import Link from "next/link";
import React, { ReactNode } from "react";
import IconChevronLeft from "../icons/IconChevronLeft";

export type LayoutHeaderProps = {
    title: string | ReactNode;
    upperSubtitle?: string | ReactNode;
    description?: string | ReactNode;
    subtitle?: string | ReactNode;
    backLink?: string;
    backLinkLabel?: string;
};
const LayoutHeader: React.FC<LayoutHeaderProps> = ({
    title,
    upperSubtitle,
    description,
    subtitle,
    backLink,
    backLinkLabel,
}) => {
    return (
        <div className="relative mb-8">
            {backLink && (
                <div className="absolute top-1/2 transform -translate-y-1/2">
                    <Link href={backLink}>
                        <a className="flex items-center">
                            <IconChevronLeft />
                            {backLinkLabel}
                        </a>
                    </Link>
                </div>
            )}
            <div className="text-center">
                {upperSubtitle && <p className="subtitle">{upperSubtitle}</p>}
                <h1 className={subtitle ? null : "mb-4"}>{title}</h1>
                {subtitle && <p className="subtitle">{subtitle}</p>}
                {description && <div>{description}</div>}
            </div>
        </div>
    );
};

export default LayoutHeader;
