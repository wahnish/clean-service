import React from "react";
import { Link } from "react-router-dom";
import LocationLayout from "./LocationLayout";

const WestleyChapel = () => {
  return (
    <LocationLayout
      title="The Best Cleaning Service In Wesley Chapel, NC"
      imageUrl="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80"
      description={
        <>
          <p className="text-lg text-muted-foreground mb-4">
            Wesley Chapel is a beautiful residential area known for its peaceful
            neighborhoods, excellent schools, and high quality of life. This
            growing community offers residents a perfect balance of suburban
            comfort and natural beauty.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Our cleaning professionals have been serving Wesley Chapel homes for
            years, understanding the specific needs of the larger homes and
            properties that characterize this lovely area of North Carolina.
          </p>
          <p className="text-lg text-muted-foreground">
            We're committed to helping Wesley Chapel residents maintain
            immaculate homes while they enjoy the community's parks, trails, and
            family-friendly atmosphere that makes this area such a desirable
            place to live.
          </p>
        </>
      }
    />
  );
};

export default WestleyChapel;
