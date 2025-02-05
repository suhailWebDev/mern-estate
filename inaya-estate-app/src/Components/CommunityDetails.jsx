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
    description: 'A vibrant hub with iconic landmarks like the Burj Khalifa and Dubai Mall.',
    image: downtown,
    amenities: ['Luxury apartments', 'Shopping malls', 'Fine dining', 'Entertainment'],
  },
  'palm-jumeirah': {
    name: 'Palm Jumeirah',
    description: 'An exclusive island community known for its beachfront villas and resorts.',
    image: palmJumeirah,
    amenities: ['Private beaches', 'Resorts', 'Fine dining', 'Luxury villas'],
  },
  'dubai-marina': {
    name: 'Dubai Marina',
    description: 'A waterfront district with modern skyscrapers and a lively nightlife scene.',
    image: marina,
    amenities: ['High-rise apartments', 'Marina Walk', 'Luxury yachts', 'Restaurants & bars'],
  },
  'jvc': {
    name: 'Jumeirah Village Circle',
    description: 'A family-friendly community offering affordable villas and townhouses.',
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
  