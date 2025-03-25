import React from "react";
import LocationLayout from "./LocationLayout";

const Weddington = () => {
  return (
    <LocationLayout
      title="The Best Cleaning Service In Weddington, NC"
      imageUrl="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
      description={
        <>
          <p className="text-lg text-muted-foreground mb-4">
            Weddington is an upscale community known for its beautiful estates,
            equestrian properties, and excellent schools. This picturesque area
            offers residents a serene country atmosphere while still being
            conveniently close to Charlotte.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Our cleaning team specializes in providing meticulous service for
            Weddington's distinctive homes, with attention to detail that
            matches the high standards of this prestigious community.
          </p>
          <p className="text-lg text-muted-foreground">
            We understand that Weddington residents value their time and their
            beautiful homes, which is why we offer flexible scheduling and
            customized cleaning plans to maintain your property's elegance and
            comfort.
          </p>
        </>
      }
    />
  );
};

export default Weddington;
