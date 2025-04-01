import React from "react";
import LocationLayout from "./LocationLayout";

const Stallings = () => {
  return (
    <LocationLayout
      title="The Best Cleaning Service In Stallings, NC"
      imageUrl="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80"
      description={
        <>
          <p className="text-lg text-muted-foreground mb-4">
            Stallings is a welcoming town that offers residents a perfect
            balance of small-town charm and modern conveniences. Located on the
            border of Union and Mecklenburg counties, it provides easy access to
            Charlotte while maintaining its own distinct character.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Our cleaning team has been serving Stallings homes for years,
            understanding the specific needs of the diverse housing options in
            this growing community, from townhomes to single-family residences.
          </p>
          <p className="text-lg text-muted-foreground">
            We take pride in helping Stallings families maintain clean,
            comfortable homes while they enjoy the town's parks, community
            events, and the friendly neighborhood atmosphere that makes this
            area such a wonderful place to live.
          </p>
        </>
      }
    />
  );
};

export default Stallings;
