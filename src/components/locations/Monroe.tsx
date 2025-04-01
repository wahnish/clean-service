import React from "react";
import LocationLayout from "./LocationLayout";

const Monroe = () => {
  return (
    <LocationLayout
      title="The Best Cleaning Service In Monroe, NC"
      imageUrl="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
      description={
        <>
          <p className="text-lg text-muted-foreground mb-4">
            Monroe is the county seat of Union County, offering a charming mix
            of historic architecture, modern amenities, and a strong sense of
            community. This growing city combines small-town warmth with
            convenient access to Charlotte.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Our cleaning professionals have been serving Monroe homes for years,
            from historic properties downtown to newer developments throughout
            the area, providing reliable and thorough cleaning services.
          </p>
          <p className="text-lg text-muted-foreground">
            We're proud to help Monroe families maintain clean, healthy homes
            while they enjoy the city's parks, community events, and the
            friendly atmosphere that makes Monroe such a wonderful place to live
            and work.
          </p>
        </>
      }
    />
  );
};

export default Monroe;
