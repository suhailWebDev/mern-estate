import React from 'react';
import { useParams } from 'react-router-dom';
// Import images
import downtown from '../Images/scenic-aerial-view-downtown-dubai-united-arab-emirates-with-skyscrapers-highways-colourful-travel-background.jpg';
import palmJumeirah from '../Images/vertical-view-skyscrapers-palm-trees-dubai-uae.jpg';
import marina from '../Images/dubai-marina.jpg';
import jvc from '../Images/shanghai-lujiazui.jpg';

// Sample community details
const communityDetails = {
  'downtown-dubai': {
    name: 'Downtown Dubai',
    description: 'Downtown Dubai, often called the heart of the city, is a bustling district known for its iconic landmarks like the Burj Khalifa, Dubai Mall, and the Dubai Fountain. It offers luxury apartments, world-class shopping, and a vibrant nightlife, making it a prime location for residents and tourists alike.',
    image: downtown,
    amenities: ['Luxury apartments', 'Shopping malls', 'Fine dining', 'Entertainment'],
  },
  'palm-jumeirah': {
    name: 'Palm Jumeirah',
    description: ' Palm Jumeirah, an engineering marvel, is a man-made island shaped like a palm tree, featuring ultra-luxurious villas, beachfront resorts, and high-end dining experiences, offering a lavish waterfront lifestyle',
    image: palmJumeirah,
    amenities: ['Private beaches', 'Resorts', 'Fine dining', 'Luxury villas'],
  },
  'dubai-marina': {
    name: 'Dubai Marina',
    description: 'Dubai Marina is a lively waterfront community known for its stunning skyline, high-rise apartments, and an array of dining and entertainment options along the scenic Marina Walk, attracting both investors and residents seeking an upscale urban lifestyle',
    image: marina,
    amenities: ['High-rise apartments', 'Marina Walk', 'Luxury yachts', 'Restaurants & bars'],
  },
  'jvc': {
    name: 'Jumeirah Village Circle',
    description: 'Jumeirah Village Circle (JVC) is a family-friendly community with a mix of villas, townhouses, and apartments, offering a peaceful suburban environment with parks, schools, and convenient access to the rest of Dubai, making it a great choice for families and investors looking for affordability and modern living.',
    image: jvc,
    amenities: ['Parks & gardens', 'Affordable housing', 'Community centers', 'Retail stores'],
  }
};

const CommunityDetails = () => {
    const { id } = useParams();
    const community = communityDetails[id];
  
    if (!community) {
      return <h2 className="not-found">Community Not Found</h2>;
    }
  
    return (
      <div className="community-details"  style={{
        background: "linear-gradient(135deg, #E0F7FA, #B2EBF2)",
        minHeight: "100vh",
      }}>
        <h1 className="community-title">{community.name}</h1>
        <img src={community.image} alt={community.name} className="detail-image" loading="lazy" />
        <p className="community-description">{community.description}</p>
  
        <h3 className="amenities-title">Amenities</h3>
        <ul className="amenities-list">
          {community.amenities.map((amenity, index) => (
            <li key={index}>✔ {amenity}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CommunityDetails;
  