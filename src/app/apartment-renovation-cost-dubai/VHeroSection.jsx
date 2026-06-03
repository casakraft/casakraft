import Image from "next/image";

const VillaRenovationSection = () => {
  const suggestions = [
    {
      title: "Revitalize Your Space – Expert Villa Painting Services",
      age: "April 10, 2026",
      image: "/images/Villa Painting Services in Dubai.png",
      link: "/revitalize-your-space-expert-home-and-villa-painting-services-in-dubai",
    },
    {
      title: "Kitchen Interior Design Ideas in Dubai",
      age: "April 1, 2026",
      image: "/images/luxury-kitchen-interior-design-in-dubai.png",
      link: "/kitchen-interior-design-in-dubai",
    },
    {
      title: "Bedroom Interior Design Trends In Dubai",
      age: "March 17, 2026",
      image: "/images/The Future of Bedroom Interior Design in Dubai.png",
      link: "/bedroom-interior-design-trends",
    },
    {
      title: "Top Notch Villa Renovation Company in Dubai",
      age: "January 1, 2026",
      image: "/images/villa-renovation-company-in-dubai.png",
      link: "/villa-renovation-company-dubai",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-white mt-20">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8">
        <div>
          {/* Date & Meta */}
          <div className="text-sm mb-4 text-[#b49a55]">
            <p>June 01, 2026 • No Comments</p>
          </div>

          {/* Main Title */}
          <h1 className="text-[#b49a55] text-3xl font-conthrax leading-tight py-10 uppercase">
            Apartment Renovation Cost in Dubai 2026: Complete Guide by Casa Kraft Interiors
          </h1>

          {/* Introduction */}
          <div className="text-md leading-relaxed font-play space-y-4">
            <p>
              If you are planning for apartment renovation costs in Dubai and would like to learn more about the total cost involved, you are in the right place. With Casa Kraft Interiors & Renovation being <a href="https://casakraftinteriors.ae/" className="font-bold hover:underline text-[#b49a55]">
    "Dubai’s No.1 Apartment Renovation Dubai Company"
    </a>, we provide expert services for all of your apartment renovations in Dubai and convert your regular apartments into functional and beautiful living spaces From a modern interior design to a contemporary interior design, all the way through to a fully bespoke interior, you’ll learn everything about apartment renovation in Dubai 2026.
              </p>
          </div>

          {/* Hero Image */}
          <Image
            src="/images/luxury Dubai apartment under renovation.png"
            alt="luxury Dubai apartment under renovation"
            width={800}
            height={600}
            className="rounded-md w-full object-cover my-6"
          />

          {/* Step 2 */}
          <div className="text-md leading-relaxed font-play space-y-4">
            <h2 className="text-[#b49a55] text-2xl py-5 font-conthrax uppercase">Why Apartment Renovation in Dubai Is a Smart Investment?</h2>
            <p>
              The real estate industry in Dubai keeps changing at all times. An apartment that has been renovated well will not only improve your lifestyle but will also increase the worth of your property tremendously. The key objective of <a href="/apartment-renovation" className="font-bold hover:underline text-[#b49a55]">
    apartment renovation services in Dubai
    </a> is to ensure that maximum space is used in the best way possible to maximize your comfort level.
If you reside in any of the following neighborhoods Business Bay, JBR, Dubai Marina or Downtown Dubai then renovating your apartment with the help of a skilled apartment renovation company in Dubai ,Casa Kraft would give you exceptional results.
            </p>
            <Image
              src="/images/Luxury renovated apartment in Dubai Marina.png"
              alt="Luxury renovated apartment in Dubai Marina"
              width={800}
              height={600}
              className="rounded-md w-full object-cover my-6"
            />

            <h3 className="text-[#b49a55] text-xl font-bold mb-2">Apartment Renovation Cost in Dubai: Price Breakdown</h3>
            <p>
              Below is a general cost guide for apartment renovation in Dubai. Prices vary based on apartment size, materials chosen and scope of work:
              </p>
            <Image
              src="/images/Interior designer discussing apartment renovation budget.png"
              alt="Interior designer discussing apartment renovation budget"
              width={800}
              height={600}
              className="rounded-md w-full object-cover my-6"
            />
{/* Renovation Cost Table */}
<div className="overflow-x-auto my-6">
  <table className="w-full text-sm font-play border-collapse">
    {/* Header */}
    <thead>
      <tr className="bg-[#b49a55]">
        <th className="text-white text-left px-4 py-3 font-conthrax text-xs tracking-wider border border-[#c8b06a]">
          Apartment Type
        </th>
        <th className="text-white text-left px-4 py-3 font-conthrax text-xs tracking-wider border border-[#c8b06a]">
          Basic Renovation
        </th>
        <th className="text-white text-left px-4 py-3 font-conthrax text-xs tracking-wider border border-[#c8b06a]">
          Mid-Range
        </th>
        <th className="text-white text-left px-4 py-3 font-conthrax text-xs tracking-wider border border-[#c8b06a]">
          Luxury / Bespoke
        </th>
      </tr>
    </thead>

    {/* Body */}
    <tbody>
      {[
        {
          type: "Studio Apartment",
          basic: "AED 15,000–25,000",
          mid: "AED 25,000–45,000",
          luxury: "AED 45,000–80,000+",
        },
        {
          type: "1 BHK Apartment",
          basic: "AED 25,000–40,000",
          mid: "AED 40,000–70,000",
          luxury: "AED 70,000–120,000+",
        },
        {
          type: "2 BHK Apartment",
          basic: "AED 40,000–65,000",
          mid: "AED 65,000–110,000",
          luxury: "AED 110,000–180,000+",
        },
        {
          type: "3 BHK Apartment",
          basic: "AED 65,000–90,000",
          mid: "AED 90,000–150,000",
          luxury: "AED 150,000–250,000+",
        },
        {
          type: "Penthouse / Luxury",
          basic: "AED 100,000+",
          mid: "AED 180,000+",
          luxury: "AED 300,000+",
        },
      ].map((row, index) => (
        <tr
          key={index}
          className={index % 2 === 0 ? "bg-[#1a1a1a]" : "bg-[#111111]"}
        >
          <td className="text-[#b49a55] font-semibold px-4 py-3 border border-gray-800">
            {row.type}
          </td>
          <td className="text-gray-300 px-4 py-3 border border-gray-800">
            {row.basic}
          </td>
          <td className="text-gray-300 px-4 py-3 border border-gray-800">
            {row.mid}
          </td>
          <td className="text-gray-300 px-4 py-3 border border-gray-800">
            {row.luxury}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
                        <p>
             All prices are approximate and subject to site visit assessment. Contact Casa Kraft for an accurate free quotation.
            </p>
            
          </div>

          {/* Step 3 */}
          <div className="text-md leading-relaxed font-play space-y-4">
            <h2 className="text-[#b49a55] text-2xl py-5 font-conthrax uppercase">Key Factors That Affect Apartment Renovation Cost in Dubai</h2>
            
            <h3 className="text-[#b49a55] text-xl font-bold mb-2">1. Apartment size and layout</h3>
            <p>
              The bigger the apartment, the higher the cost of renovations. The layout of the apartment may sometimes need changes and hence affect the cost of the entire project. Our apartment <a href="/renovation-dubai" className="font-bold hover:underline text-[#b49a55]">
    renovation  specialists
    </a> evaluate every inch of your property before coming up with the best design that fits your budget and lifestyle.
            </p>
            <Image
              src="/images/Top view architectural apartment floor plans.png"
              alt="Top view architectural apartment floor plans"
              width={800}
              height={600}
              className="rounded-md w-full object-cover my-6"
            />

            <h3 className="text-[#b49a55] text-xl font-bold mb-2">2. Material selection</h3>
            <p>
              The choice of materials is the main factor that affects the cost of renovations. For example choosing standard tiles against Italian marble or ordinary paint compared to custom made wallpaper will have a great impact on the total budget. Casa Kraft provides choices at all budget levels including luxury interior designs.
            </p>
            <Image
              src="/images/Flat lay of premium renovation materials.png"
              alt="Flat lay of premium renovation materials"
              width={800}
              height={600}
              className="rounded-md w-full object-cover my-6"
            />

            <h3 className="text-[#b49a55] text-xl font-bold mb-2">3. Scope of Renovation</h3>
            <p>
              The scope of work is one of the key factors influencing the total cost. The complete apartment remodeling process involves all aspects such as flooring, ceilings, kitchen and bathroom renovations. On the other hand, partial renovations are limited to specific zones only. Repainting and wallpapering belong to the less costly category, whereas fit-out works which include wardrobes and joinery are mid to high cost renovations.
            </p>
            <Image
              src="/images/Apartment renovation work in progress.png"
              alt="Apartment renovation work in progress"
              width={800}
              height={600}
              className="rounded-md w-full object-cover my-6"
            />

            <h3 className="text-[#b49a55] text-xl font-bold mb-2">4. The Interior Design Style</h3>
            <p>
              Your choice of style of your <a href="/modern-apartment-interior-design" className="font-bold hover:underline text-[#b49a55]">
    apartment interior design
    </a>, such as a modern apartment renovation, contemporary interior design, fully bespoke interior or classic luxury interiors will affect the price accordingly. Custom designs and top quality finishes will be priced accordingly.
            </p>
            <Image
              src="/images/Three luxury apartment interior styles.png"
              alt="Three luxury apartment interior styles"
              width={800}
              height={600}
              className="rounded-md w-full object-cover my-6"
            />

            <h3 className="text-[#b49a55] text-xl font-bold mb-2">5. Approvals, NOC’s, & Permits</h3>
            <p>
              Some types of renovations need NOC clearance in Dubai, either from building management or Dubai municipality. As one of the <a href="https://www.instagram.com/casakraftinteriors.ae/" className="font-bold hover:underline text-[#b49a55]">
     best  companies for renovation Dubai
    </a>, we take care of everything for you  including approvals and permits.
            </p>
            <Image
              src="/images/Professional interior renovation company.png"
              alt="Professional interior renovation company"
              width={800}
              height={600}
              className="rounded-md w-full object-cover my-6"
            />
            
          </div>

          {/* Step 4 */}
          <div className="text-md leading-relaxed font-play space-y-4">
            <h2 className="text-[#b49a55] text-2xl py-5 font-conthrax uppercase">Best Apartments Renovation Services in Dubai by Casa Kraft</h2>
            <p>
              As the  best provider of apartment renovation in Dubai , Casa Kraft provides complete fit-out and interior designing services under one roof. These include <a href="/kitchen-renovation" className="font-bold hover:underline text-[#b49a55]">
     kitchen renovation
    </a> using state of the art cabinetry and countertops, bathroom renovations involving luxurious fixtures and overall redesign and flooring solutions that include parquet, marble, porcelain and vinyl.
              </p>
              <Image
              src="/images/Complete luxury apartment renovation services.png"
              alt="Complete luxury apartment renovation services"
              width={800}
              height={600}
              className="rounded-md w-full object-cover my-6"
            />
                        <p>
              Our skilled team is capable of providing you with customized wardrobe and cabinet solutions, high end painting and wallpapering solutions and curtains and blinds solutions for all rooms. In addition, our team can help you with smart home integration and balcony and landscape design solutions.all managed by our expert team from concept to completion.
                </p>
            
          </div>

          {/* Why Casa Kraft */}
          <div className="text-md leading-relaxed font-play space-y-4">
            <h2 className="text-[#b49a55] text-2xl py-5 font-conthrax uppercase">Why Choose Casa Kraft — No.1 Apartment Renovation Dubai Company?</h2>
            <p>
              Having served the customers for more than 8 years now, completed more than 200 residential projects, and employing more than 100 professional workers, Casa Kraft is among the best interior renovation companies in Dubai. Being one of the <a href="https://www.google.com/search?sa=X&sca_esv=100be553d7950a9c&cs=0&biw=1536&bih=695&sxsrf=ANbL-n6Vs1ka0dnpJXmkFIcoD2BHG2w8EA:1780224015215&kgmid=/g/11yql27kgy&q=Interior+Design+Company+Dubai+-+Casa+Kraft+Interiors&shem=rimspwouoe&shndl=30&source=sh/x/loc/uni/m1/1&kgs=bc3d19e2c59736b6&utm_source=rimspwouoe,sh/x/loc/uni/m1/1" className="font-bold hover:underline text-[#b49a55]">
    Top notch interior renovation companies in Dubai
    </a>, Casa Kraft gives free site visits and design consultation without any obligation and additional charges. We have complete transparency in pricing with quotation and no surprises whatsoever. Before the start of the project, our experts give you 2D CAD designs and 3D renders of your renovated apartment. 
              </p>
            <Image
              src="/images/No.1 Apartment Renovation Dubai Company.png"
              alt="No.1 Apartment Renovation Dubai Company"
              width={800}
              height={600}
              className="rounded-md w-full object-cover my-6"
            />
                        <p>
              We buy materials from manufacturers themselves to provide you with the  top quality apartment renovation & remodeling services, and we complete the project right on time along with regular updates about its progress. All our work comes with a guarantee of up to 10 years on selected renovation works, and we handle all NOC and permit requirements for Dubai authorities.Thus, Casa Kraft is truly the one-stop destination for your professional apartment renovations in Dubai.
              </p>
          </div>

 <div className="text-md leading-relaxed font-play space-y-4">
            <h2 className="text-[#b49a55] text-2xl py-5 font-conthrax uppercase">Our Apartment Renovation Process: Simple & Stress-Free</h2>
            
            
            <Image
              src="/images/isual timeline of apartment renovation process in Dubai,.png"
              alt="isual timeline of apartment renovation process in Dubai,"
              width={800}
              height={600}
              className="rounded-md w-full object-cover my-6"
            />

            <h3 className="text-[#b49a55] text-xl font-bold mb-2">Step 1: Get in Touch</h3>
            <p>
              Talk to us about your requirements, budget and time frame for the apartment renovation.
              </p>

            <h3 className="text-[#b49a55] text-xl font-bold mb-2">Step 2: Free Site Visit</h3>
            <p>
              We come to you and visit your apartment anywhere in Dubai  absolutely FREE  to analyze the place.
            </p>
            
            <h3 className="text-[#b49a55] text-xl font-bold mb-2">Step 3: Design and Quotation</h3>
            <p>
              Enjoy free design ideas, 3D images and a complete cost quotation without any hidden costs.
              </p>
            
            <h3 className="text-[#b49a55] text-xl font-bold mb-2">Step 4: Approvals and NOC</h3>
            <p>
              We will arrange for all the relevant approvals from the building management and Dubai authorities.
              </p>

              <h3 className="text-[#b49a55] text-xl font-bold mb-2">Step 5: Work Commences</h3>
            <p>
              Our experienced team starts working on your apartment renovation in Dubai with strict quality checks.
                </p>

              <h3 className="text-[#b49a55] text-xl font-bold mb-2">Step 6: Hand Over</h3>
            <p>
              Your brand new renovated apartment is ready for use.
              </p>
            
            
          </div>

          {/* FAQs */}
          <div className="text-md leading-relaxed font-play space-y-4">
            <h2 className="text-[#b49a55] text-2xl py-5 font-conthrax uppercase font-bold">Frequently Asked Questions</h2>
            <h3 className="text-[#b49a55] font-bold mb-2"> How much would it cost to renovate a 1BHK apartment in Dubai?</h3>
            <p>Cost of renovation of a 1BHK apartment in Dubai ranges from AED 25,000 to AED 120,000+, depending on the quality of materials used,scope of the project and design choice.</p>

            <h3 className="text-[#b49a55] font-bold mb-2"> What is the duration of an apartment renovation project in Dubai?</h3>
            <p>The time required for apartment renovation in Dubai depends on the size and difficulty of the project. It usually takes about 3 to 8 weeks. Casa Kraft gives you a clear estimate of the duration before starting the renovation process.</p>

            <h3 className="text-[#b49a55] font-bold mb-2">  Is there a need for permits while renovating my apartment in Dubai?</h3>
            <p>Yes, some major renovations require approval in the form of NOC. Casa Kraft takes care of all your permit needs for renovation.</p>

            <h3 className="text-[#b49a55] font-bold mb-2">Can I renovate my rented apartment in Dubai?</h3>
            <p> Minor changes can be made after the permission of the landlord. Casa Kraft informs you about everything that you are allowed to do under Dubai tenancy laws.</p>

<h3 className="text-[#b49a55] font-bold mb-2">Does Casa Kraft provide free consultation for apartment renovation?</h3>
            <p> Yes! At Casa Kraft, you get free consultation for all apartment renovations in Dubai.</p>

          </div>

          <div className="text-md leading-relaxed font-play space-y-4">
            <h2 className="text-[#b49a55] text-2xl py-5 font-conthrax uppercase">Ready to Renovate? Get Your Free Estimate from Casa Kraft Today!</h2>

            <p>
              If you are looking for an affordable renovation of your apartment or luxurious interiors, then Casa Kraft Interiors & Renovation is your ultimate choice in Dubai. We are one of the top interior renovation companies in Dubai, making your dream come true at the same time keeping everything within budget.
              </p>
              </div>
        </div>

        {/* Sidebar */}
        <div className="hidden md:block">
          <Sidebar suggestions={suggestions} />
        </div>
      </div>
    </div>
  );
};

const Sidebar = ({ suggestions }) => (
  <div className="sticky top-24">
    <h3 className="text-xl font-conthrax mb-4 mt-16 text-[#b49a55]">You might also like</h3>
    <ul className="space-y-4">
      {suggestions.map((post, index) => (
        <li key={index} className="flex space-x-4">
          <a href={post.link} className="flex space-x-4 cursor-pointer group">
            <div className="w-20 h-16 rounded-md overflow-hidden flex-shrink-0">
              <Image
                src={post.image}
                alt={post.title}
                width={80}
                height={64}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <p className="text-sm font-play leading-tight group-hover:text-[#b49a55] transition-colors">{post.title}</p>
              <p className="text-xs text-[#b49a55] mt-1">{post.age}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default VillaRenovationSection;