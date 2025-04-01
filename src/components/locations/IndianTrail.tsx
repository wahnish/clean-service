import React from "react";
import LocationLayout from "./LocationLayout";

const IndianTrail = () => {
  return (
    <LocationLayout
      title="The Best Cleaning Service In Indian Trail, NC"
      imageUrl="https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200&q=80"
      description={
        <>
          <p className="text-lg text-muted-foreground mb-4">
            Indian Trail is a vibrant town that has grown from a small rural
            community into one of the largest towns in Union County. It offers
            residents a perfect blend of suburban comfort, excellent schools,
            and convenient shopping.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Our cleaning professionals have extensive experience serving Indian
            Trail homes, from cozy starter homes to spacious family residences,
            providing reliable and thorough cleaning services.
          </p>
          <p className="text-lg text-muted-foreground">
            We're committed to helping Indian Trail families maintain clean,
            healthy living environments while they enjoy the town's parks,
            community events, and the friendly atmosphere that makes this area
            such a popular place to call home.
          </p>
        </>
      }
    />
  );
};

export default IndianTrail;
