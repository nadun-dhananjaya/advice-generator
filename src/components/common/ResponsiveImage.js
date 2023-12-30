import { useState, useEffect } from "react";

const ResponsiveImage = ({ urls, alt = "", className }) => {
  const [imageUrl, setImageUrl] = useState(urls);

  const handleResize = () => {
    const screenWidth = window.innerWidth;

    // Set image URL based on screen width
    if (screenWidth >= 640) {
      setImageUrl(urls?.desktop);
    } else {
      setImageUrl(urls?.mobile);
    }
  };

  useEffect(() => {
    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <img src={imageUrl} alt={alt} className={className} />;
};

export default ResponsiveImage;
