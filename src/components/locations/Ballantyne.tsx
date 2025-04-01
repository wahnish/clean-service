import React from "react";
import LocationLayout from "./LocationLayout";

const Ballantyne = () => {
  return (
    <LocationLayout
      title="The Best Cleaning Service In Ballantyne, NC"
      imageUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
      description={
        <>
          <p className="text-lg text-muted-foreground mb-4">
            Ballantyne is a premier community in south Charlotte known for its
            upscale shopping, dining, and beautiful residential neighborhoods.
            This thriving area offers residents a perfect blend of luxury and
            convenience.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Our cleaning team has extensive experience serving Ballantyne homes,
            from elegant townhomes to spacious single-family residences,
            providing the exceptional service that matches this sophisticated
            community.
          </p>
          <p className="text-lg text-muted-foreground">
            We understand the busy lifestyles of Ballantyne residents and offer
            flexible scheduling and comprehensive cleaning services to help
            maintain your home's beauty while you enjoy all that this vibrant
            community has to offer.
          </p>
        </>
      }
    />
  );
};

export default Ballantyne;
