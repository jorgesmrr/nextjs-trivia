import Image from "next/image";
import React from "react";

type CenteredImageProps = {
    file: string;
};

const CenteredImage: React.FC<CenteredImageProps> = ({ file }) => {
    return (
        <div className="mx-auto" style={{ maxWidth: 238 }}>
            <Image src={`/images/${file}`} width={238} height={238} />
        </div>
    );
};

export default CenteredImage;
