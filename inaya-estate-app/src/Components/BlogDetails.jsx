import React from "react";
import { useParams } from "react-router-dom";

import realestate from  "../Images/abu-dhabi-seascape-with-skyscrapers.jpg"
import renting from  "../Images/businessman-summer-city-with-three-women.jpg"
import neighbour from  "../Images/cityscape-view-building-twilight-bangkok-thailand.jpg"
import waterfront from  "../Images/woman-walking-near-chicago-river.jpg"
import buying from  "../Images/zq-lee-DcyL0IoCY0A-unsplash.jpg"
import expo from "../Images/ahmed-babiker-zcxyuVCQWoI-unsplash.jpg"

// Blog details data
const blogData = {
    'dubai-real-estate-2024': {
      title: 'Dubai Real Estate Market 2024',
      content: `The year 2024 marks another milestone in Dubai's dynamic real estate sector. 
                With increasing demand from global investors, Dubai continues to showcase resilience, adaptability, and innovation. 
                Property prices are on an upward trend, particularly in high-demand areas like Downtown Dubai, Palm Jumeirah, and Dubai Marina. 
                The government’s initiatives, including the golden visa program and flexible property laws, have further fueled foreign investment. 
                With Expo 2020’s lasting impact and the rise of smart, sustainable developments, Dubai remains one of the world's most attractive real estate markets.`,
      image: realestate,
    },
    'renting-guide-dubai': {
      title: 'Guide to Renting in Dubai: Everything Expats Need to Know',
      content: `Renting a home in Dubai can be an exciting yet complex experience for expats. 
                The city offers a wide range of rental properties, from luxurious apartments in Marina to spacious villas in Jumeirah. 
                Tenants must be aware of essential factors such as Ejari registration, security deposits, and annual rent payments (typically paid in post-dated cheques). 
                It’s important to work with RERA-certified real estate agents and negotiate rental terms before signing the contract. 
                With strong tenant rights and an expanding rental market, Dubai remains an attractive destination for expatriates.`,
      image: renting,
    },
    'top-10-neighbourhoods': {
      title: 'Top 10 Neighbourhoods in Dubai for Property Investment',
      content: `Dubai is a global hotspot for property investment, offering diverse options for investors. Here are the top 10 neighborhoods to consider in 2024:
                1️⃣ Downtown Dubai – High ROI and iconic landmarks.
                2️⃣ Dubai Marina – Perfect for waterfront living and rental yields.
                3️⃣ Palm Jumeirah – Exclusive beachfront villas.
                4️⃣ Jumeirah Village Circle (JVC) – Affordable with high demand.
                5️⃣ Business Bay – A rising financial hub.
                6️⃣ Arabian Ranches – Ideal for families.
                7️⃣ Dubai Hills Estate – Green and serene environment.
                8️⃣ Jumeirah Beach Residence (JBR) – Luxury seaside apartments.
                9️⃣ Al Barsha – Growing rental demand.
                🔟 Meydan City – A futuristic smart city.
                These areas continue to attract investors due to high rental yields, strategic locations, and upcoming infrastructure developments.`,
      image: neighbour,
    },
    'waterfront-communities': {
      title: 'Best Waterfront Communities in Dubai: Where Luxury Meets Sea',
      content: `Dubai’s waterfront communities offer unparalleled luxury and stunning views. Some of the most sought-after areas include:
                ✅ Dubai Marina – Skyscrapers, yachts, and vibrant nightlife.
                ✅ Palm Jumeirah – Man-made island living with world-class resorts.
                ✅ Bluewaters Island – Home to Ain Dubai, luxury apartments, and high-end retail.
                ✅ Jumeirah Beach Residence (JBR) – Beachfront living with a mix of residential and commercial spaces.
                ✅ Port De La Mer – Mediterranean-inspired coastal charm.
                These areas are highly desirable for residents and investors, offering both a lavish lifestyle and strong rental demand.`,
      image: waterfront,
    },
    'buying-off-plan-uae': {
      title: 'Guide: Buying Off-Plan Property in the UAE',
      content: `Off-plan properties have gained immense popularity in Dubai due to their affordability and potential for high returns. Buying off-plan means purchasing a property before it is fully constructed, often at a lower price. Benefits include:
                ✔️ Lower prices and flexible payment plans.
                ✔️ High ROI potential upon project completion.
                ✔️ Modern amenities and smart home features.
                However, buyers should research the developer’s reputation, review contract terms, and check RERA registration before making an investment. 
                Off-plan properties in areas like Dubai Hills Estate, Business Bay, and Emaar Beachfront continue to attract savvy investors.`,
      image: buying,
    },
    'expo-2020-impact': {
      title: 'The Impact of Expo 2020 on Dubai Real Estate',
      content: `Expo 2020 Dubai was a game-changer for the city’s real estate market. The event attracted millions of visitors and boosted demand for residential and commercial properties. Key effects include:
                📈 Increased property prices – High demand in areas like Dubai South and Expo City.
                🏗 New developments – Infrastructure expansion, smart cities, and sustainable living.
                🛫 Increased foreign investment – Many investors and businesses set up operations in Dubai.
                With Expo 2020’s legacy projects, such as District 2020, Dubai’s real estate continues to thrive, attracting global buyers and renters alike.`,
      image: expo,
    },
  };
  
const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData[id];

  if (!blog) {
    return <h2 className="text-center text-danger">Blog Not Found</h2>;
  }

  return (
    <div className="blog-detail-section" style={{
      background: "linear-gradient(135deg, #E0F7FA, #B2EBF2)",
      minHeight: "100vh",
    }}>
      <div className="container">
        <h1 className="text-center fw-bold">{blog.title}</h1>
        <img src={blog.image} alt={blog.title} className="img-fluid detail-img" />
        <p className="blog-content">{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
