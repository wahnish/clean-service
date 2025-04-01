import React from "react";
import LocationLayout from "./LocationLayout";

const Matthews = () => {
  return (
    <LocationLayout
      title="The Best Cleaning Service In Matthews, NC"
      imageUrl="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80"
      description={
        <>
          <p className="text-lg text-muted-foreground mb-4">
            Matthews is a charming town known for its historic downtown,
            community events, and excellent quality of life. This thriving
            suburb offers residents a perfect blend of small-town atmosphere and
            modern amenities.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Our cleaning professionals have extensive experience serving
            Matthews homes, from historic properties to newer developments,
            providing reliable and thorough cleaning services tailored to each
            home's unique needs.
          </p>
          <p className="text-lg text-muted-foreground">
            We're proud to help Matthews families maintain beautiful, healthy
            homes while they enjoy the town's farmers market, cultural center,
            and the strong sense of community that makes Matthews such a
            desirable place to live.
          </p>
        </>
      }
    />
  );
};

export default Matthews;
