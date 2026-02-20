import Image from "next/image";

const VHeroSection = () => {
  const suggestions = [
    {
      title: "Top Notch Villa Renovation Company in Dubai ",
      age: "February 20, 2026",
      image: "/images/villa-renovation-company-in-dubai.png", // Replace with actual path
      href:"villa-renovation-company-dubai",
    },
    {
      title: "Best Kids Room Interior Design Ideas | Tips To Decorate Your Kids Room",
      age: "4 years ago",
      image: "/images/elegant-dubai-apartment-showcasing-open-living-room-interior-in-dubai.png", // Replace with actual path
    },
    
    {
      title: "7 Inspiring Home Renovation Design Ideas You Need to Know",
      age: "1 year ago",
      image: "/images/dubai-apartment-balcony-exterior-design-company-in-dubai.png", // Replace with actual path
    },
    {
      title: "7 Inspiring Home Renovation Design Ideas You Need to Know",
      age: "1 year ago",
      image: "/images/ultra-modern-dubai-apartment-interior-design.png", // Replace with actual path
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-white mt-20">
      {/* Responsive layout: blog on left, sidebar on right for desktop */}
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8">
        {/* Blog Content */}
        <div>
          <div className="text-sm mb-4 text-[#b49a55]">
            <p>Jan 24, 2026 • No Comments</p>
          </div>

          <h1 className=" text-[#b49a55] text-3xl font-conthrax leading-tight py-5 ">
           Modern Apartment Interior Design in Dubai
          </h1>
         <div className=" text-sm leading-relaxed font-play">
             <p>
             <b className="text-[#b49a55]"><a href="https://www.casakraftinteriors.ae/apartment-interior-design-dubai">Modern apartment interior design</a></b> has come up as the foundation of modern city life, especially in Dubai, 
              where lifestyle, luxury and space management meet as one. From studio apartment interior design to luxurious 
              apartment interior designs, modern interior design focuses on simplicity, functionality and elegance.
              </p> <br />
          </div>
          <div className="space-y-6">
            <Image
              src="/images/modern-apartment-interior-dubai.png" 
             
              alt="Modern apartment Room interior Design Dubai"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
            <div className=" text-sm leading-relaxed font-play">
              Whether you are  <b className="text-[#b49a55]"><a href="https://www.casakraftinteriors.ae/apartment-renovation">full apartment renovation</a></b>, looking for apartment interior  ideas or simply looking 
              at apartment interior design inspiration this guide by Casa Kraft Interiors & Renovations contains all the 
              information you need about Apartment Interior in a Modern Style.
            <p>
             
            </p>
            <h2 class="text-[#b49a55] text-2xl font-conthrax leading-tight py-5">What Is Modern Apartment Interior Design?</h2>
            <p> Casa Kraft's modern apartment interior design services focus on minimalism, functionality and harmony. <b className="text-[#b49a55]"><a href="https://www.casakraftinteriors.ae/">Casa 
              Kraft Interiors & Renovations</a></b> incorporate soft colors,smart layouts and high quality materials to create a 
              serene and elegant space. This modern apartment interior is organized for maximum comfort and usability 
              making it ideal for apartments of different sizes.</p>
          </div>
            <Image
              src="/images/what-is-modern-apartment-interior-design-dubai.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
             <h3 class="text-[#b49a55] text-xl font-conthrax leading-tight">Modern vs Contemporary Apartment Interior Design</h3>
            <p className="text-sm"> Although Modern apartment interior design ideas are based on proper design principles, which are linked to 
              minimalism, contemporary apartment interior design is style friendly and keeps changing with time. Both are 
              commonly used in <b className="text-[#b49a55]"><a href="https://www.casakraftinteriors.ae/gallery">apartment interior design Dubai projects</a></b>.</p>
              
             <Image
              src="/images/modern-vs-contemporary-apartment-interior-design.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
             </div>
        <div className=" text-sm leading-relaxed font-play">
          
            <h2 class="text-[#b49a55] text-2xl font-conthrax leading-tight py-5">
              Apartment Interior Design Trends Shaping Modern Homes</h2>
            <p>Current trends in apartment interior design focus on open plan layouts, natural textures, 
              layered lighting and  indoor and outdoor connections. Modern apartment interior design Dubai 
              includes bespoke designs, smart home automation and customized storage services. </p> <br />
             <Image
              src="/images/interior-design-trends-for-modern-apartments.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
            <h3 class="text-[#b49a55] text-xl font-conthrax leading-tight py-5">
              Modern Home Interior Design for Urban Apartments</h3>
            <p>Modern interior design for residential buildings is characterized by functionality and aesthetics. Modern 
              ideas and concepts for apartment interior design revolve around flexible designs that promote working, 
              resting and socializing in the same space.</p>  <br />

               <Image
              src="/images/urban-apartment-modern-interior-design.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            /> <br />

            <h3 class="text-[#b49a55] text-xl font-conthrax leading-tight py-5"> 
              Studio Apartment Interior Design & Studio Apartment Design
            </h3>
            <p>Designing the interior of a studio apartment with careful consideration to create an atmosphere that feels 
              spacious and practical within limited square footage. Thoughtfully crafted design approaches for studio 
              apartments interior design incorporate versatile furnishings, simple decorations and effective area 
              partitioning making them perfectly suited for contemporary urban living.
            </p> <br />

               <Image
              src="/images/modern-studio-apartment-interior-design.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            /> <br />
              <h3 class="text-[#b49a55] text-xl font-conthrax leading-tight py-5"> 
              Apartment Interior Design for Family Apartments
            </h3>
            <p>Larger apartments benefit from structured apartment interior ideas that define living, dining and private 
              areas while maintaining flow. Modern apartment design interior concepts use lighting, textures and furniture 
              placement instead of walls.</p><br />

               <Image
              src="/images/modern-family-apartment-interior-design.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            /> <br />
          </div> 
        
             <div className=" text-sm leading-relaxed font-play">
          
            <h2 class="text-[#b49a55] text-2xl font-conthrax leading-tight py-5">
              Modern Apartment Living Room Design Ideas
            </h2>
            <p>Modern interior design for residential buildings is defined by functionality and aesthetics. Modern 
              ideas for apartment interior design are centered around flexible designs that facilitate working, 
              resting and socializing in the same room.</p> <br />
            <Image
              src="/images/modern-apartment-living-room-design-ideas.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
          </div>
           
             <div className=" text-sm leading-relaxed font-play">
            
            
            <h3 class="text-[#b49a55] text-xl font-conthrax leading-tight py-5">
             Luxurious Apartment Interior Living Spaces
            </h3>
            <p>Luxurious apartment interior design requires the application of quality materials, designer furniture 
              and intricate designs. Luxury apartment interior design Dubai requires the application of customized 
              designs and décor.</p>
          </div>
           <div className=" text-sm leading-relaxed font-play">
          
            <h2 class="text-[#b49a55] text-2xl font-conthrax leading-tight py-5">
              Colors, Materials & Apartment Interior Decor
            </h2>
            <p> Thoughtfully chosen apartment interior design helps to add to the warmth and character. In modern 
              apartment interior design, the décor is subtle with an emphasis on texture, tone and quality.</p> <br />
            <Image
              src="/images/colors-materials-interior-decor-apartment..png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            /> <br />
            <h3 class="text-[#b49a55] text-2xl font-conthrax leading-tight py-5">
              Materials Used in Modern Apartment Interiors
            </h3>
            <p>The materials used in modern apartments in Dubai include wood, stone, glass and metal. These 
              materials make apartments durable, beautiful and rich in Apartment Design Ideas.
            </p>
          </div>
          
          <div className=" text-sm leading-relaxed font-play">
          
            <h2 class="text-[#b49a55] text-2xl font-conthrax leading-tight py-5">
             Apartment Renovation & Complete Fitout Services
            </h2>
            <p> A well designed apartment renovation can improve the layout, materials and functionality. 
              Many homeowners choose Modern Apartment Interior Design in Dubai renovations to improve 
              lifestyle and property value.</p> <br />
            <Image
              src="/images/apartment-renovation-complete-fitout-services.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            /> <br />
            <h3 class="text-[#b49a55] text-xl font-conthrax leading-tight py-5">
            Complete Fitout Services for Apartments
            </h3>
            <p> Expert complete fit out services take care of everything from planning to implementation. 
              The best interior design firms in Dubai are experts in complete Apartment Interior Design 
              Dubai solutions.</p>
          </div>

          <div className=" text-sm leading-relaxed font-play">
          
            <h2 class="text-[#b49a55] text-2xl font-conthrax leading-tight py-5">
             Why Apartment Interior Design Dubai Is Unique
            </h2>
            <p> Apartment interior design Dubai is characterized by luxury, modernity and regional lifestyle 
              preferences. Apartment interior design UAE focuses on intelligent design, high quality materials 
              and climate responsive materials</p> <br />
           
            <h3 class="text-[#b49a55] text-xl font-conthrax leading-tight py-3">
            Affordable vs Luxury Apartment Interior Design Dubai
            </h3>
            <p> Whereas affordable apartment interior design Dubai is all about effective budgeting and design. 
              luxury apartment interior design Dubai provides bespoke designs with premium materials and 
              customized designs.</p>
          </div>

           <div className=" text-sm leading-relaxed font-play">
          
            <h2 class="text-[#b49a55] text-2xl font-conthrax leading-tight py-5">
             Choosing the Right Interior Design Experts in Dubai
            </h2>
            <p> Experienced interior designers in Dubai possess creativity, technical knowledge and market trends. 
              Reliable interior design Dubai companies and Dubai interior design firms provide quality work execution 
              from conceptualization to completion.</p> <br />
           <Image
              src="/images/designing-the-perfect-modern-apartment-interior.png"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            /> <br />
            
            <p>By collaborating with trusted interior designers in Dubai spending on professional apartment 
              renovation and selecting reputable Apartment Interior Design Dubai services. you can design 
              a stylish, functional and timeless modern home.
           </p>
          </div>

          
          <div className=" text-md leading-relaxed font-play">
          
            <h2 class="text-[#b49a55] text-2xl font-conthrax leading-tight py-5">
             Frequently asked questions (FAQs)
            </h2>
            <h3 class="text-[#b49a55] text-md font-conthrax leading-tight py-5">
              1- How to choose smart lighting solutions for small apartments?
            </h3>
            <p>
            Smart lighting for small apartments should include layered LED lighting, dimmers, 
            and automation to enhance space, improve functionality, and create a modern ambiance
            </p>

            <h3 class="text-[#b49a55] text-md font-conthrax leading-tight py-5">
             2- What are the trending colours for apartments in Dubai?
            </h3>
            <p>
            The trending colors in 2026 in apartments include muted earthy colours, emerald green warm neutrals and desaturated 
            pastels.
            </p>
          </div>
          
          
          {/* Sidebar (Mobile View) */}
          <div className="mt-12 md:hidden">
            <Sidebar suggestions={suggestions} />
          </div>
        </div>

        {/* Sidebar (Desktop View) */}
        <div className="hidden md:block">
          <Sidebar suggestions={suggestions} />
        </div>
      </div>
    </div>
  );
};

// Sidebar component
const Sidebar = ({ suggestions }) => (
  <div>
    <h3 className="text-xl font-conthrax mb-4 mt-16 text-[#b49a55]">You might also like</h3>
    <ul className="space-y-4">
      {suggestions.map((post, index) => (
        <li key={index} className="flex space-x-4">
          <div className="w-20 h-16 bg-gray-200 rounded-md overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={80}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-play">{post.title}</p>
            <p className="text-xs text-[#b49a55]">{post.age}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default VHeroSection;
