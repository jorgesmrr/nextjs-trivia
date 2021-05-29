import React from "react";
import FadedImage from "../faded-image/FadedImage";

type CenteredImageProps = {
    file: string;
};

const CenteredImage: React.FC<CenteredImageProps> = ({ file }) => {
    return (
        <div className="mx-auto" style={{ maxWidth: 238 }}>
            <FadedImage src={`/images/${file}`} width={238} height={238} />
        </div>
    );
};

export default CenteredImage;
