import React from "react";
import LocationLayout from "./LocationLayout";

const Marvin = () => {
  return (
    <LocationLayout
      title="The Best Cleaning Service In Marvin, NC"
      imageUrl="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80"
      description={
        <>
          <p className="text-lg text-muted-foreground mb-4">
            Marvin is a prestigious village known for its luxury homes,
            equestrian properties, and commitment to preserving green spaces.
            This exclusive community offers residents a tranquil lifestyle with
            easy access to urban amenities.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Our cleaning professionals understand the unique requirements of
            Marvin's upscale homes and are trained to provide the highest level
            of service that residents of this distinguished community expect.
          </p>
          <p className="text-lg text-muted-foreground">
            We take pride in helping Marvin families maintain their beautiful
            homes, allowing them more time to enjoy the community's parks,
            trails, and the peaceful countryside atmosphere that makes Marvin
            such a special place to live.
          </p>
        </>
      }
    />
  );
};

export default Marvin;
