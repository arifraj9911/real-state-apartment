import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div className="py-20 bg-[#f8fafe]">
      <Helmet>
        <title>City Palace | Blog</title>
      </Helmet>
      <div className="lg:w-3/4 mx-auto bg-white p-6 lg:p-10">
        <div className="">
          <h2 className="text-[22px] md:text-2xl font-light">
            How could we choose a better apartment for us! Here discuss some
            tips & tricks and some limitation for choosing!!!{" "}
          </h2>
          <div className="mt-8">
            <h3 className="text-lg mb-3 font-semibold">
              The Ultimate Guide to Finding Your Dream Apartment: Tips and
              Tricks
            </h3>
            <ul className=" list-disc pl-8 flex flex-col gap-1 text-[16px] font-light">
              <li>Introduction to the apartment hunting process</li>
              <li>Understanding your needs and preferences</li>
              <li>Researching neighborhoods and amenities</li>
              <li>Setting a budget and sticking to it</li>
              <li>
                Tips for scheduling viewings and asking the right questions
              </li>
              <li>Negotiating lease terms and rental agreements</li>
              <li>Finalizing the decision and moving in checklist</li>
              <li>Resources for finding apartments online and offline</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-lg mb-3 font-semibold">
              Top 10 Most Desirable Features to Look for in an Apartment
            </h3>
            <ul className=" list-disc pl-8 flex flex-col gap-1 text-[16px] font-light">
              <li>Spacious floor plan and layout</li>
              <li>Modern kitchen appliances and amenities</li>
              <li>Ample storage space (closets, cabinets, etc.)</li>
              <li>In-unit washer and dryer or laundry facilities on-site</li>
              <li>Pet-friendly policies and amenities</li>
              <li>Secure parking options (garage, off-street parking)</li>
              <li>Access to outdoor spaces (balcony, patio, garden)</li>
              <li>Fitness center, pool, or other recreational facilities</li>
              <li>Proximity to public transportation and major highways</li>
              <li>
                Safety and security features (gated community, security cameras)
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-lg mb-3 font-semibold">
              Navigating the Apartment Hunt: Dos and Do not for Renters
            </h3>
            <ul className=" list-disc pl-8 flex flex-col gap-1 text-[16px] font-light">
              <li className="font-normal">Dos</li>
              <ul className="list-decimal pl-4">
                <li>Start your search early</li>
                <li>Define your budget and priorities</li>
                <li>Research neighborhoods and visit potential areas</li>
                <li>Schedule multiple viewings to compare options</li>
                <li>Review lease agreements thoroughly before signing</li>
              </ul>
              <li className="font-normal mt-2">Do not</li>

              <ul className="list-decimal pl-4">
                <li>Rush into a decision without considering all options</li>
                <li>Overspend on rent beyond your budget</li>
                <li>Ignore red flags during apartment viewings</li>
                <li>
                  Sign a lease without understanding the terms and conditions
                </li>
                <li>
                  Neglect to inspect the apartment for any damages or issues
                </li>
              </ul>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-lg mb-3 font-semibold">
              The Benefits of Choosing a Pet-Friendly Apartment Complex
            </h3>
            <ul className=" list-disc pl-8 flex flex-col gap-1 text-[16px] font-light">
              <li>Welcoming environment for pet owners</li>
              <li>Pet amenities such as dog parks or grooming stations</li>
              <li>Community events and activities for pet owners</li>
              <li>
                Built-in pet policies and regulations for residents peace of
                mind
              </li>
              <li>
                Enhanced socialization opportunities for both pets and owners
              </li>
              <li>Increased sense of security with pet-friendly neighbors</li>
              <li>
                Convenience of having pet-related services nearby
                (veterinarians, pet stores)
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-lg mb-3 font-semibold">
              Apartment Living: Pros and Cons to Consider Before Signing a Lease
            </h3>
            <ul className=" list-disc pl-8 flex flex-col gap-1 text-[16px] font-light">
              <li className="font-normal">Pros</li>
              <ul className="list-decimal pl-4">
                <li>
                  Amenities and facilities provided by the apartment complex
                </li>
                <li>
                  Flexibility in lease terms (short-term leases, month-to-month)
                </li>
                <li>Maintenance and repairs handled by property management</li>
                <li>Sense of community and shared spaces</li>
                <li>Potential cost savings compared to homeownership</li>
              </ul>
              <li className="font-normal mt-2">Cons</li>

              <ul className="list-decimal pl-4">
                <li>
                  Limited control over property modifications and renovations
                </li>
                <li>Potential for rent increases at lease renewal</li>
                <li>Restrictions on pets, guests, and noise levels</li>
                <li>Dependence on property management for resolving issues</li>
                <li>
                  Lack of long-term investment benefits compared to owning a
                  home
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
