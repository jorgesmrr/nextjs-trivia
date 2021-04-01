import Link from "next/link";
import React, { ReactNode } from "react";
import IconChevronLeft from "../icons/IconChevronLeft";

export interface LayoutHeaderProps {
    title: string | ReactNode;
    upperSubtitle?: string | ReactNode;
    description?: string | ReactNode;
    subtitle?: string | ReactNode;
    backLink?: string;
    backLinkLabel?: string;
    hideOnMobile?: boolean;
}
const LayoutHeader: React.FC<LayoutHeaderProps> = ({
    title,
    upperSubtitle,
    description,
    subtitle,
    backLink,
    backLinkLabel,
    hideOnMobile,
}) => {
    return (
        <div className="relative">
            <div className="font-montserrat uppercase h-16 bg-white fixed inset-x-0 top-0 shadow-md z-50 sm:hidden">
                {backLink && (
                    <div className="absolute top-1/2 left-0 ml-4 text-xs transform -translate-y-1/2">
                        <Link href={backLink}>
                            <a className="flex items-center">
                                <IconChevronLeft />
                                {backLinkLabel}
                            </a>
                        </Link>
                    </div>
                )}
                <div className="absolute top-1/2 left-1/2 text-sm transform -translate-x-1/2 -translate-y-1/2">
                    <Link href="/">
                        <a className="text-gray-dark-3">Trivia</a>
                    </Link>
                </div>
            </div>
            {backLink && (
                <div className="absolute top-1/2 transform -translate-y-1/2 hidden sm:block">
                    <Link href={backLink}>
                        <a className="flex items-center">
                            <IconChevronLeft />
                            {backLinkLabel}
                        </a>
                    </Link>
                </div>
            )}
            <div
                className={`text-center mb-8 ${
                    hideOnMobile ? "hidden sm:block" : ""
                }`}
            >
                {upperSubtitle && <p className="subtitle">{upperSubtitle}</p>}
                <h1 className={`sm:mx-28 ${subtitle ? null : "mb-4"}`}>
                    {title}
                </h1>
                {subtitle && <p className="subtitle">{subtitle}</p>}
                {description && <div>{description}</div>}
            </div>
        </div>
    );
};

export default LayoutHeader;
