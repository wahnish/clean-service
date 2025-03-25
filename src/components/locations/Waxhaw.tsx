import React from "react";
import LocationLayout from "./LocationLayout";

const Waxhaw = () => {
  return (
    <LocationLayout
      title="The Best Cleaning Service In Waxhaw, NC"
      imageUrl="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
      description={
        <>
          <p className="text-lg text-muted-foreground mb-4">
            Waxhaw is a charming town known for its historic downtown, beautiful
            parks, and friendly community. As one of the fastest-growing areas
            in Union County, Waxhaw combines small-town charm with modern
            amenities.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Our cleaning services are tailored to meet the unique needs of
            Waxhaw residents, whether you live in one of the beautiful historic
            homes near downtown or in one of the newer developments in the area.
          </p>
          <p className="text-lg text-muted-foreground">
            We take pride in helping Waxhaw families maintain clean, healthy
            homes so they can enjoy everything this wonderful community has to
            offer, from the Waxhaw Farmers Market to the numerous local
            festivals and events.
          </p>
        </>
      }
    />
  );
};

export default Waxhaw;
