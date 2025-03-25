import React from "react";
import LocationLayout from "./LocationLayout";

const WhiteOaks = () => {
  return (
    <LocationLayout
      title="The Best Cleaning Service In White Oaks, NC"
      imageUrl="https://images.unsplash.com/photo-1600585154526-990dced4db3d?w=800&q=80"
      description={
        <>
          <p className="text-lg text-muted-foreground mb-4">
            White Oaks is a beautiful residential community known for its
            tree-lined streets, spacious homes, and family-friendly atmosphere.
            This peaceful neighborhood offers residents a high quality of life
            with convenient access to amenities.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Our cleaning team understands the specific needs of White Oaks homes
            and provides customized cleaning solutions that help maintain the
            beauty and comfort of your living spaces.
          </p>
          <p className="text-lg text-muted-foreground">
            We take pride in helping White Oaks families keep their homes
            immaculate, giving them more time to enjoy the community's parks,
            recreational facilities, and the strong sense of neighborhood that
            makes this area so special.
          </p>
        </>
      }
    />
  );
};

export default WhiteOaks;
