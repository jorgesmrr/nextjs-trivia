import classNames from "classnames";
import Image, { ImageProps } from "next/image";
import { useState } from "react";
import styles from "./FadedImage.module.css";

const FadedImage: React.FC<ImageProps> = (props) => {
  const [isLoaded, setLoaded] = useState(false);

  const className = classNames(styles.image, {
    [styles.imageLoaded]: isLoaded,
  });

  return (
    <div className={className}>
      <Image onLoad={() => setLoaded(true)} {...props} />
    </div>
  );
};

export default FadedImage;
