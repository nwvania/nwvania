// ============================================================
// Nwvania — Complete data for all 20 sectors and 220 applications
// ============================================================

export interface NwvaniaApp {
  id: string;
  name: string;
  description: string;
}

export interface Sector {
  id: number;
  slug: string;
  name: string;
  nameAr: string;
  description: string;
  icon: string; // Lucide icon name (for reference)
  color: string; // Accent color for this sector
  apps: NwvaniaApp[];
}

export const sectors: Sector[] = [
  {
    id: 1,
    slug: "identity-security",
    name: "Identity & Digital Security",
    nameAr: "الهوية والأمن الرقمي",
    description:
      "Unified digital identity, encrypted communications, and comprehensive personal data protection infrastructure.",
    icon: "ShieldCheck",
    color: "#005CE6",
    apps: [
      { id: "nwvania-id", name: "NwvaniaID", description: "Unified digital identity and centralized KYC verification system" },
      { id: "nwvania-mail", name: "NwvaniaMail", description: "Official encrypted national email service" },
      { id: "nwvania-search", name: "NwvaniaSearch", description: "Smart, independent, and protected search engine" },
      { id: "nwvania-cloud", name: "NwvaniaCloud", description: "Secure cloud storage for personal and professional files" },
      { id: "nwvania-vault", name: "NwvaniaVault", description: "Digital vault for password and cryptographic key management" },
      { id: "nwvania-shield", name: "NwvaniaShield", description: "Cybersecurity system for device and data protection" },
      { id: "nwvania-pass", name: "NwvaniaPass", description: "Digital card wallet, memberships, and loyalty points" },
      { id: "nwvania-sync", name: "NwvaniaSync", description: "Fast data synchronization and transfer between devices" },
      { id: "nwvania-auth", name: "NwvaniaAuth", description: "Two-factor authentication (2FA) for secure access" },
      { id: "nwvania-vpn", name: "NwvaniaVPN", description: "Private encrypted network for safe and anonymous browsing" },
      { id: "nwvania-archive", name: "NwvaniaArchive", description: "Sovereign archiving for historical documents and records" },
    ],
  },
  {
    id: 2,
    slug: "finance-wealth",
    name: "Finance, Banking & Wealth",
    nameAr: "المال والبنوك والثروات",
    description:
      "Complete financial ecosystem covering payments, banking, trading, investments, insurance, and wealth management.",
    icon: "Landmark",
    color: "#059669",
    apps: [
      { id: "nwvania-pay", name: "NwvaniaPay", description: "Central digital wallet and fast payment systems" },
      { id: "nwvania-bank", name: "NwvaniaBank", description: "Digital banking services and savings accounts" },
      { id: "nwvania-trade", name: "NwvaniaTrade", description: "Stock trading platform and major investment funds" },
      { id: "nwvania-crypto", name: "NwvaniaCrypto", description: "Encrypted asset wallet and blockchain technologies" },
      { id: "nwvania-gold", name: "NwvaniaGold", description: "Platform for buying, selling, and saving gold and precious metals" },
      { id: "nwvania-capital", name: "NwvaniaCapital", description: "Financial facilities, loans, and business financing" },
      { id: "nwvania-invoice", name: "NwvaniaInvoice", description: "Invoice issuance and point-of-sale (POS) systems" },
      { id: "nwvania-tax", name: "NwvaniaTax", description: "Tax management, government fees, and financial obligations" },
      { id: "nwvania-insure", name: "NwvaniaInsure", description: "Comprehensive insurance — health, property, and vehicles" },
      { id: "nwvania-audit", name: "NwvaniaAudit", description: "Smart financial auditing and accounting for companies" },
      { id: "nwvania-fund", name: "NwvaniaFund", description: "Crowdfunding and support for startups and innovations" },
    ],
  },
  {
    id: 3,
    slug: "communication-media",
    name: "Communication, Media & Community",
    nameAr: "التواصل والإعلام والمجتمع",
    description:
      "Encrypted messaging, professional meetings, social networking, streaming, news, and content creation tools.",
    icon: "MessageSquare",
    color: "#7C3AED",
    apps: [
      { id: "nwvania-talk", name: "NwvaniaTalk", description: "Encrypted instant messaging and calls — text, voice, video" },
      { id: "nwvania-meet", name: "NwvaniaMeet", description: "Professional meeting platform for companies and teams" },
      { id: "nwvania-social", name: "NwvaniaSocial", description: "Social network for sharing daily life and content" },
      { id: "nwvania-stream", name: "NwvaniaStream", description: "Video streaming platform — films and digital cinema" },
      { id: "nwvania-cast", name: "NwvaniaCast", description: "Podcast platform, audiobooks, and audio content" },
      { id: "nwvania-news", name: "NwvaniaNews", description: "Digital news agency and breaking news verification" },
      { id: "nwvania-translate", name: "NwvaniaTranslate", description: "Real-time translation — text and voice for travelers and businesses" },
      { id: "nwvania-connect", name: "NwvaniaConnect", description: "Professional networking and digital business card exchange" },
      { id: "nwvania-publish", name: "NwvaniaPublish", description: "Self-publishing and blogging platform for writers and thinkers" },
      { id: "nwvania-spaces", name: "NwvaniaSpaces", description: "Interactive audio rooms and community discussions" },
      { id: "nwvania-studio-c", name: "NwvaniaStudio", description: "Video production and editing tools for content creators" },
    ],
  },
  {
    id: 4,
    slug: "commerce-shopping",
    name: "Commerce, Shopping & Luxury",
    nameAr: "التجارة والتسوق والرفاهية",
    description:
      "Digital mall, marketplace, wholesale B2B, auctions, fashion, beauty, gifts, and exclusive luxury brands.",
    icon: "ShoppingBag",
    color: "#DC2626",
    apps: [
      { id: "nwvania-mall", name: "NwvaniaMall", description: "Digital mall for global brands and electronics" },
      { id: "nwvania-market", name: "NwvaniaMarket", description: "Classified ads market for buying and selling used items" },
      { id: "nwvania-wholesale", name: "NwvaniaWholesale", description: "Wholesale trade platform connecting factories with traders (B2B)" },
      { id: "nwvania-auction", name: "NwvaniaAuction", description: "Live electronic auctions for premium and unique goods" },
      { id: "nwvania-style", name: "NwvaniaStyle", description: "Fashion, clothing, and ready-to-wear garments" },
      { id: "nwvania-beauty", name: "NwvaniaBeauty", description: "Cosmetics, perfumes, and personal care products" },
      { id: "nwvania-gifts", name: "NwvaniaGifts", description: "Smart gift shop with professional packaging and scheduled delivery" },
      { id: "nwvania-rewards", name: "NwvaniaRewards", description: "Points management center, major prizes, and draws" },
      { id: "nwvania-craft", name: "NwvaniaCraft", description: "Market for craftsmen, handmade goods, and heritage items" },
      { id: "nwvania-brands", name: "NwvaniaBrands", description: "Exclusive interface for luxury products and boutiques (VIP)" },
      { id: "nwvania-electro", name: "NwvaniaElectro", description: "Specialized store for electrical appliances and home devices" },
    ],
  },
  {
    id: 5,
    slug: "food-hospitality",
    name: "Food, Provisions & Hospitality",
    nameAr: "الغذاء والمؤن والضيافة",
    description:
      "Restaurant delivery, fresh groceries, bakeries, professional chefs, fine dining, and specialized dietary plans.",
    icon: "Utensils",
    color: "#EA580C",
    apps: [
      { id: "nwvania-food", name: "NwvaniaFood", description: "Order and delivery from restaurants and cafes" },
      { id: "nwvania-fresh", name: "NwvaniaFresh", description: "Supermarket, groceries, fresh vegetables and fruits" },
      { id: "nwvania-baker", name: "NwvaniaBaker", description: "Bakeries, pastries, and dessert makers platform" },
      { id: "nwvania-chef", name: "NwvaniaChef", description: "Booking professional chefs for banquets and home cooking" },
      { id: "nwvania-dine", name: "NwvaniaDine", description: "Table reservations at upscale restaurants and hospitality experiences" },
      { id: "nwvania-diet", name: "NwvaniaDiet", description: "Design and delivery of specialized dietary meal plans" },
      { id: "nwvania-meat", name: "NwvaniaMeat", description: "Order and delivery of fresh meat, poultry, and seafood" },
      { id: "nwvania-water", name: "NwvaniaWater", description: "Distribution and delivery of mineral water and beverages to homes" },
      { id: "nwvania-roastery", name: "NwvaniaRoastery", description: "Coffee roasters, specialty coffee, and premium nuts" },
      { id: "nwvania-organic", name: "NwvaniaOrganic", description: "Exclusive store for certified organic agricultural products" },
      { id: "nwvania-catering", name: "NwvaniaCatering", description: "Full catering services for parties and major events" },
    ],
  },
  {
    id: 6,
    slug: "transportation-mobility",
    name: "Transportation & Public Mobility",
    nameAr: "النقل والمواصلات العامة",
    description:
      "Ride-hailing, national navigation, public transit, flights, luxury transport, trains, and private jets.",
    icon: "Car",
    color: "#0891B2",
    apps: [
      { id: "nwvania-ride", name: "NwvaniaRide", description: "Booking taxis, limousines, and private transport" },
      { id: "nwvania-maps", name: "NwvaniaMaps", description: "Accurate national maps, navigation, and road guidance" },
      { id: "nwvania-transit", name: "NwvaniaTransit", description: "Bus tickets and urban public transportation booking" },
      { id: "nwvania-flight", name: "NwvaniaFlight", description: "Domestic and international commercial flight ticket booking" },
      { id: "nwvania-vip-t", name: "NwvaniaVIP", description: "Helicopter, yacht, and luxury transport booking" },
      { id: "nwvania-drive", name: "NwvaniaDrive", description: "Smart driver assistant with traffic alerts and road conditions" },
      { id: "nwvania-train", name: "NwvaniaTrain", description: "Railway and metro ticket booking" },
      { id: "nwvania-carpool", name: "NwvaniaCarpool", description: "Ride sharing for daily commutes to reduce costs and congestion" },
      { id: "nwvania-cycle", name: "NwvaniaCycle", description: "Bicycle and scooter rental for short distances" },
      { id: "nwvania-ferry", name: "NwvaniaFerry", description: "Marine transport and ferry ticket booking" },
      { id: "nwvania-charter", name: "NwvaniaCharter", description: "Private jet rental for business executives" },
    ],
  },
  {
    id: 7,
    slug: "vehicles-motors",
    name: "Vehicles & Motors",
    nameAr: "المركبات والمحركات",
    description:
      "Digital showroom for buying and selling vehicles, maintenance, rentals, spare parts, EV charging, and emergency rescue.",
    icon: "Zap",
    color: "#B45309",
    apps: [
      { id: "nwvania-motors", name: "NwvaniaMotors", description: "Digital showroom for buying and selling new and used vehicles" },
      { id: "nwvania-garage", name: "NwvaniaGarage", description: "Maintenance, periodic inspection, and certified workshops" },
      { id: "nwvania-rent", name: "NwvaniaRent", description: "Tourist and commercial car rental without a driver" },
      { id: "nwvania-wash", name: "NwvaniaWash", description: "Mobile car wash services and professional detailing" },
      { id: "nwvania-parts", name: "NwvaniaParts", description: "Integrated market for original spare parts and accessories" },
      { id: "nwvania-rescue", name: "NwvaniaRescue", description: "Emergency road rescue, towing, and mobile tire repair" },
      { id: "nwvania-ev", name: "NwvaniaEV", description: "Electric vehicle charging station network and payment management" },
      { id: "nwvania-heavy", name: "NwvaniaHeavy", description: "Sale and rental of heavy equipment and construction machinery" },
      { id: "nwvania-marine", name: "NwvaniaMarine", description: "Market for boats, watercraft, and marine engines" },
      { id: "nwvania-bikes", name: "NwvaniaBikes", description: "Motorcycles market and accessories" },
      { id: "nwvania-inspect", name: "NwvaniaInspect", description: "Certified technical inspection centers for vehicle certification" },
    ],
  },
  {
    id: 8,
    slug: "real-estate",
    name: "Real Estate, Construction & Property",
    nameAr: "العقارات والبناء والأملاك",
    description:
      "Property buying, selling, renting, construction management, interior design, land planning, and smart home systems.",
    icon: "Building2",
    color: "#475569",
    apps: [
      { id: "nwvania-estate", name: "NwvaniaEstate", description: "Buying, selling, and renting residential and commercial properties" },
      { id: "nwvania-build", name: "NwvaniaBuild", description: "Contracting, construction, and engineering project management" },
      { id: "nwvania-decor", name: "NwvaniaDecor", description: "Interior design, finishing, and luxury furniture" },
      { id: "nwvania-land", name: "NwvaniaLand", description: "Buying, selling, and planning land and urban plots" },
      { id: "nwvania-manage", name: "NwvaniaManage", description: "Property management, rent collection, and contract renewal" },
      { id: "nwvania-architect", name: "NwvaniaArchitect", description: "Engineering offices for building permits and architectural plans" },
      { id: "nwvania-smart", name: "NwvaniaSmart", description: "Smart home control (IoT) and surveillance camera management" },
      { id: "nwvania-materials", name: "NwvaniaMaterials", description: "Supply of basic construction materials — steel, cement, wood" },
      { id: "nwvania-move", name: "NwvaniaMove", description: "Professional furniture disassembly, transport, and installation" },
      { id: "nwvania-valuate", name: "NwvaniaValuate", description: "Certified real estate appraisal and asset valuation" },
      { id: "nwvania-facility", name: "NwvaniaFacility", description: "Utilities operation and maintenance for commercial and residential complexes" },
    ],
  },
  {
    id: 9,
    slug: "professional-services",
    name: "Professional Services & Freelancing",
    nameAr: "الخدمات المهنية والعمل الحر",
    description:
      "Home maintenance, hotel-grade cleaning, freelancers, errand assistants, laundry, printing, security, and consultancy.",
    icon: "Briefcase",
    color: "#0F766E",
    apps: [
      { id: "nwvania-fix", name: "NwvaniaFix", description: "Fast home maintenance — plumbing, electrical, air conditioning" },
      { id: "nwvania-clean", name: "NwvaniaClean", description: "Hotel-grade cleaning, home sterilization, and pest control" },
      { id: "nwvania-pro", name: "NwvaniaPro", description: "Freelancing platform for programmers, designers, and translators" },
      { id: "nwvania-tasks", name: "NwvaniaTasks", description: "Hourly task assistants for external errands" },
      { id: "nwvania-laundry", name: "NwvaniaLaundry", description: "Washing, ironing, and dry cleaning with delivery" },
      { id: "nwvania-print", name: "NwvaniaPrint", description: "Digital printing, photography, and commercial print packaging" },
      { id: "nwvania-guard", name: "NwvaniaGuard", description: "Security guard services, escort, and cash transport" },
      { id: "nwvania-consult", name: "NwvaniaConsult", description: "Administrative and financial consultancy for companies" },
      { id: "nwvania-photo", name: "NwvaniaPhoto", description: "Professional photography and videography booking" },
      { id: "nwvania-tailor", name: "NwvaniaTailor", description: "Tailoring, custom fashion design, and clothing alterations" },
      { id: "nwvania-tech", name: "NwvaniaTech", description: "Smart device maintenance, computers, and network installations" },
    ],
  },
  {
    id: 10,
    slug: "logistics-shipping",
    name: "Logistics & Shipping",
    nameAr: "الخدمات اللوجستية والشحن",
    description:
      "Local delivery, heavy freight, international shipping, fleet tracking, warehousing, and cold chain logistics.",
    icon: "Package",
    color: "#1D4ED8",
    apps: [
      { id: "nwvania-delivery", name: "NwvaniaDelivery", description: "Light parcel and daily order delivery within the city" },
      { id: "nwvania-freight", name: "NwvaniaFreight", description: "Heavy transport logistics and cargo for trucks" },
      { id: "nwvania-ship", name: "NwvaniaShip", description: "International shipping, customs clearance, and import services" },
      { id: "nwvania-track", name: "NwvaniaTrack", description: "Commercial fleet and shipment movement tracking system" },
      { id: "nwvania-warehouse", name: "NwvaniaWarehouse", description: "Storage space rental — warehouses and distribution centers" },
      { id: "nwvania-express", name: "NwvaniaExpress", description: "Urgent courier services for important documents" },
      { id: "nwvania-cargo", name: "NwvaniaCargo", description: "Fast air freight for commercial goods" },
      { id: "nwvania-port", name: "NwvaniaPort", description: "Management of seaport-related logistics services" },
      { id: "nwvania-fleet", name: "NwvaniaFleet", description: "Management and maintenance of corporate vehicle fleets" },
      { id: "nwvania-cold", name: "NwvaniaCold", description: "Refrigerated and frozen transport for food and medical items" },
      { id: "nwvania-pack", name: "NwvaniaPack", description: "Professional packaging services for goods before shipment" },
    ],
  },
  {
    id: 11,
    slug: "health-medicine",
    name: "Health, Care & Medicine",
    nameAr: "الصحة والرعاية والطب",
    description:
      "Doctor appointments, pharmacy delivery, fitness, mental health, home care, lab tests, dental, and rehabilitation.",
    icon: "Heart",
    color: "#BE123C",
    apps: [
      { id: "nwvania-health", name: "NwvaniaHealth", description: "Doctor and clinic appointments with unified medical record" },
      { id: "nwvania-pharma", name: "NwvaniaPharma", description: "Electronic pharmacy for medication and supply delivery" },
      { id: "nwvania-fit", name: "NwvaniaFit", description: "Sports club bookings, personal trainers, and tournaments" },
      { id: "nwvania-mind", name: "NwvaniaMind", description: "Mental health platform, family counseling, and meditation" },
      { id: "nwvania-care", name: "NwvaniaCare", description: "Specialized home care for the elderly and people of determination" },
      { id: "nwvania-lab", name: "NwvaniaLab", description: "Lab tests, radiology, and home sample collection" },
      { id: "nwvania-spa", name: "NwvaniaSpa", description: "Personal care services, salons, and massage" },
      { id: "nwvania-vet", name: "NwvaniaVet", description: "Veterinary clinics, pet care, and pet supplies" },
      { id: "nwvania-optic", name: "NwvaniaOptic", description: "Eye exams, prescription glasses, sunglasses, and lenses" },
      { id: "nwvania-dental", name: "NwvaniaDental", description: "Dental medicine, cosmetics, and orthodontics clinics" },
      { id: "nwvania-rehab", name: "NwvaniaRehab", description: "Physical therapy and motor rehabilitation centers" },
    ],
  },
  {
    id: 12,
    slug: "education-employment",
    name: "Education, Knowledge & Employment",
    nameAr: "التعليم والمعرفة والتوظيف",
    description:
      "Digital education, national job marketplace, skills training, kids learning, university platform, and research library.",
    icon: "GraduationCap",
    color: "#7C3AED",
    apps: [
      { id: "nwvania-edu", name: "NwvaniaEdu", description: "Digital education platform, virtual schools, and classroom management" },
      { id: "nwvania-jobs", name: "NwvaniaJobs", description: "National employment engine and resume builder" },
      { id: "nwvania-skills", name: "NwvaniaSkills", description: "Professional courses, vocational training, and skill development" },
      { id: "nwvania-kids", name: "NwvaniaKids", description: "Children's world, nurseries, and safe early skill development" },
      { id: "nwvania-campus", name: "NwvaniaCampus", description: "University student platform — notes, housing, graduation projects" },
      { id: "nwvania-scholar", name: "NwvaniaScholar", description: "Digital library, scientific research, and academic documentation" },
      { id: "nwvania-tutor", name: "NwvaniaTutor", description: "Booking private tutoring sessions in various subjects" },
      { id: "nwvania-languages", name: "NwvaniaLanguages", description: "Institutes and platforms for learning and mastering foreign languages" },
      { id: "nwvania-test", name: "NwvaniaTest", description: "Preparation for standardized tests and academic assessment" },
      { id: "nwvania-mentor", name: "NwvaniaMentor", description: "Career guidance and counseling for professional future planning" },
      { id: "nwvania-books", name: "NwvaniaBooks", description: "Comprehensive store for selling and delivering books and curricula" },
    ],
  },
  {
    id: 13,
    slug: "tourism-travel",
    name: "Tourism, Hospitality & Travel",
    nameAr: "السياحة والضيافة والسفر",
    description:
      "Hotel booking, tour packages, multilingual digital guides, resorts, visa assistance, camping, and luxury lounges.",
    icon: "Globe",
    color: "#0369A1",
    apps: [
      { id: "nwvania-booking", name: "NwvaniaBooking", description: "Luxury and budget hotel booking — local and international" },
      { id: "nwvania-tours", name: "NwvaniaTours", description: "Organization and booking of integrated tourist trips and programs" },
      { id: "nwvania-guide", name: "NwvaniaGuide", description: "Digital tourist guide speaking multiple languages" },
      { id: "nwvania-resort", name: "NwvaniaResort", description: "Booking resorts, chalets, and vacation homes" },
      { id: "nwvania-visa", name: "NwvaniaVisa", description: "Assistance in obtaining tourist and student visas" },
      { id: "nwvania-camp", name: "NwvaniaCamp", description: "Organization of camping, safari, and outdoor activities" },
      { id: "nwvania-lounge", name: "NwvaniaLounge", description: "Exclusive VIP lounge access cards at airports" },
      { id: "nwvania-souvenir", name: "NwvaniaSouvenir", description: "Tourist souvenir shops and traditional crafts" },
      { id: "nwvania-explore", name: "NwvaniaExplore", description: "Guide to archaeological sites, museums, and tourist attractions" },
      { id: "nwvania-cruise", name: "NwvaniaCruise", description: "Booking tourist sea voyages on ships" },
      { id: "nwvania-host", name: "NwvaniaHost", description: "Platform for hosting tourists in homes (sharing economy)" },
    ],
  },
  {
    id: 14,
    slug: "entertainment-lifestyle",
    name: "Entertainment, Events & Lifestyle",
    nameAr: "الترفيه والفعاليات وأسلوب الحياة",
    description:
      "Tickets, cloud gaming, hobby clubs, event management, art galleries, music, talent discovery, and VR experiences.",
    icon: "Gamepad2",
    color: "#9333EA",
    apps: [
      { id: "nwvania-ticket", name: "NwvaniaTicket", description: "Tickets for cinema, theater, and sports matches" },
      { id: "nwvania-play", name: "NwvaniaPlay", description: "Advanced cloud gaming platform and e-sports" },
      { id: "nwvania-hobby", name: "NwvaniaHobby", description: "Hobby clubs — fishing, shooting, chess, reading" },
      { id: "nwvania-event", name: "NwvaniaEvent", description: "Event hall organization, weddings, and major conferences" },
      { id: "nwvania-art", name: "NwvaniaArt", description: "Digital art exhibitions and original painting purchase" },
      { id: "nwvania-music", name: "NwvaniaMusic", description: "Audio listening platform and music production and distribution" },
      { id: "nwvania-talent", name: "NwvaniaTalent", description: "Platform for discovering young talents and supporting them" },
      { id: "nwvania-collect", name: "NwvaniaCollect", description: "Buying and trading rare collectibles, stamps, and coins" },
      { id: "nwvania-fest", name: "NwvaniaFest", description: "Guide and bookings for cultural and entertainment festivals" },
      { id: "nwvania-vr", name: "NwvaniaVR", description: "Entertainment experiences via virtual and augmented reality" },
      { id: "nwvania-park", name: "NwvaniaPark", description: "Amusement parks and water parks ticket booking" },
    ],
  },
  {
    id: 15,
    slug: "law-government",
    name: "Law, Justice & Government Services",
    nameAr: "القانون والعدالة والخدمات الحكومية",
    description:
      "Unified government portal, legal consultancy, digital smart contracts, verification, dispute resolution, and licensing.",
    icon: "Scale",
    color: "#1F2937",
    apps: [
      { id: "nwvania-gov", name: "NwvaniaGov", description: "Unified portal for completing government transactions and document extraction" },
      { id: "nwvania-law", name: "NwvaniaLaw", description: "Legal consultancy and certified lawyer representation" },
      { id: "nwvania-sign", name: "NwvaniaSign", description: "Electronic signature and smart digital contract authentication" },
      { id: "nwvania-verify", name: "NwvaniaVerify", description: "Verification of certificates, IDs, and power of attorney documents" },
      { id: "nwvania-justice", name: "NwvaniaJustice", description: "Commercial dispute resolution and fast digital arbitration" },
      { id: "nwvania-notary", name: "NwvaniaNotary", description: "Digital notary services for legal proxy issuance" },
      { id: "nwvania-ip", name: "NwvaniaIP", description: "Trademark registration and intellectual property rights protection" },
      { id: "nwvania-license", name: "NwvaniaLicense", description: "Commercial and municipal license extraction for new businesses" },
      { id: "nwvania-civil", name: "NwvaniaCivil", description: "Civil registry services — births, marriages, and divorce cases" },
      { id: "nwvania-tender", name: "NwvaniaTender", description: "Tenders and bids portal for public and private sectors" },
      { id: "nwvania-rights", name: "NwvaniaRights", description: "Consumer rights protection and commercial complaint filing" },
    ],
  },
  {
    id: 16,
    slug: "environment-agriculture",
    name: "Environment, Agriculture & Future",
    nameAr: "البيئة والزراعة والمستقبل",
    description:
      "Farm management, AI assistant, charity portal, recycling, solar energy, water resources, and space science coverage.",
    icon: "Leaf",
    color: "#15803D",
    apps: [
      { id: "nwvania-farm", name: "NwvaniaFarm", description: "Crop management, agricultural equipment, and farmer support" },
      { id: "nwvania-ai", name: "NwvaniaAI", description: "Absolute artificial intelligence assistant for task completion" },
      { id: "nwvania-charity", name: "NwvaniaCharity", description: "Humanitarian portal, orphan sponsorship, and donation management" },
      { id: "nwvania-green", name: "NwvaniaGreen", description: "Recycling services, sustainability, and safe waste disposal" },
      { id: "nwvania-solar", name: "NwvaniaSolar", description: "Solar panel solutions and installation for homes and companies" },
      { id: "nwvania-aqua", name: "NwvaniaAqua", description: "Water resource management, wells, and smart irrigation solutions" },
      { id: "nwvania-space", name: "NwvaniaSpace", description: "Space science coverage, astronomy, and technical awareness" },
      { id: "nwvania-vision", name: "NwvaniaVision", description: "Incubator for youth innovations and leading technology projects" },
      { id: "nwvania-robot", name: "NwvaniaRobot", description: "Ordering and programming service robots for logistics and industry" },
      { id: "nwvania-weather", name: "NwvaniaWeather", description: "Accurate meteorology and early climate warnings" },
      { id: "nwvania-climate", name: "NwvaniaClimate", description: "Carbon footprint calculation and tracking for environmental support" },
    ],
  },
  {
    id: 17,
    slug: "personal-family",
    name: "Personal Life & Family",
    nameAr: "الحياة الشخصية والأسرة",
    description:
      "Family tree, digital wills, babysitting, elder care, encrypted personal diary, pregnancy tracking, and habit building.",
    icon: "Users",
    color: "#DB2777",
    apps: [
      { id: "nwvania-heritage", name: "NwvaniaHeritage", description: "Family tree building and genealogy documentation" },
      { id: "nwvania-memorial", name: "NwvaniaMemorial", description: "Secure digital wills, inheritance management, and memory preservation" },
      { id: "nwvania-nanny", name: "NwvaniaNanny", description: "Certified babysitter booking and home childcare services" },
      { id: "nwvania-companion", name: "NwvaniaCompanion", description: "Companionship and moral care services for the elderly" },
      { id: "nwvania-diary", name: "NwvaniaDiary", description: "Private journals and fully encrypted personal notes" },
      { id: "nwvania-maternity", name: "NwvaniaMaternity", description: "Pregnancy, childbirth tracking, and infant health care" },
      { id: "nwvania-habit", name: "NwvaniaHabit", description: "Habit building, personal goal tracking, and productivity boost" },
      { id: "nwvania-union", name: "NwvaniaUnion", description: "Marriage planning, organized matchmaking, and marital life management" },
      { id: "nwvania-budget", name: "NwvaniaBudget", description: "Personal expense tracking and precise family budget management" },
      { id: "nwvania-safety", name: "NwvaniaSafety", description: "Emergency alerts (SOS) and safe family location tracking" },
      { id: "nwvania-pets", name: "NwvaniaPets", description: "Pet adoption, care, and professional training services" },
    ],
  },
  {
    id: 18,
    slug: "industry-production",
    name: "Industry & Production",
    nameAr: "الصناعة والإنتاج",
    description:
      "Factory digital management, mining, textiles, energy, chemicals, metals, industrial machinery, and ISO quality certification.",
    icon: "Factory",
    color: "#78350F",
    apps: [
      { id: "nwvania-factory", name: "NwvaniaFactory", description: "Digital management of factory operations and production lines" },
      { id: "nwvania-mining", name: "NwvaniaMining", description: "Management of mineral resource extraction and raw materials" },
      { id: "nwvania-textile", name: "NwvaniaTextile", description: "Textile, fabric, clothing and furnishing supply industry" },
      { id: "nwvania-energy", name: "NwvaniaEnergy", description: "Management of oil, gas, and major energy network resources" },
      { id: "nwvania-chemistry", name: "NwvaniaChemistry", description: "Supply of chemical products and industrial materials" },
      { id: "nwvania-plastics", name: "NwvaniaPlastics", description: "Polymer, plastic, and packaging material manufacturing" },
      { id: "nwvania-metals", name: "NwvaniaMetals", description: "Melting, shaping, and supplying metals — iron and aluminum" },
      { id: "nwvania-machinery", name: "NwvaniaMachinery", description: "Sale, rental, and maintenance of factory machines and equipment" },
      { id: "nwvania-gear", name: "NwvaniaGear", description: "Supply of professional safety equipment (PPE) for factories" },
      { id: "nwvania-quality", name: "NwvaniaQuality", description: "ISO quality certificate granting and industrial standards inspection" },
      { id: "nwvania-scrap", name: "NwvaniaScrap", description: "Industrial waste management and scrap metal recycling" },
    ],
  },
  {
    id: 19,
    slug: "media-marketing",
    name: "Media, Marketing & Data",
    nameAr: "الإعلام والتسويق والبيانات",
    description:
      "Digital advertising, influencer marketing, billboard booking, PR management, market research, SEO, and big data analytics.",
    icon: "BarChart3",
    color: "#0F766E",
    apps: [
      { id: "nwvania-ads", name: "NwvaniaAds", description: "Digital advertising network and funded campaign management" },
      { id: "nwvania-promo", name: "NwvaniaPromo", description: "Influencer marketing platform and sponsorship management" },
      { id: "nwvania-billboard", name: "NwvaniaBillboard", description: "Street and public square advertising board booking" },
      { id: "nwvania-pr", name: "NwvaniaPR", description: "Public relations, press releases, and corporate reputation management" },
      { id: "nwvania-survey", name: "NwvaniaSurvey", description: "Market research, opinion polls, and data collection" },
      { id: "nwvania-seo", name: "NwvaniaSEO", description: "Web analytics tools and search engine optimization" },
      { id: "nwvania-design", name: "NwvaniaDesign", description: "Open market for ready-made designs and visual identities" },
      { id: "nwvania-press", name: "NwvaniaPress", description: "Journalistic publishing for specialized digital magazines" },
      { id: "nwvania-campaign", name: "NwvaniaCampaign", description: "Management of community, political, and organizational campaigns" },
      { id: "nwvania-analytics", name: "NwvaniaAnalytics", description: "Big data analytics and consumer behavior understanding" },
      { id: "nwvania-sponsor", name: "NwvaniaSponsor", description: "Connecting major events and projects with sponsors and supporters" },
    ],
  },
  {
    id: 20,
    slug: "science-technology",
    name: "Science, Deep Technology & Research",
    nameAr: "العلوم والتكنولوجيا العميقة والبحث",
    description:
      "Scientific equipment, patents, biotech, quantum computing, nanotechnology, geology, ocean science, drones, and 5G/6G.",
    icon: "Microscope",
    color: "#4338CA",
    apps: [
      { id: "nwvania-science", name: "NwvaniaScience", description: "Supply and equipping scientific instruments for labs and research centers" },
      { id: "nwvania-patents", name: "NwvaniaPatents", description: "Patent search and new innovation registration" },
      { id: "nwvania-biotech", name: "NwvaniaBiotech", description: "Bioengineering, genetics, and biotechnology research" },
      { id: "nwvania-quantum", name: "NwvaniaQuantum", description: "Quantum computing simulations and enterprise applications" },
      { id: "nwvania-nano", name: "NwvaniaNano", description: "Nanotechnology application research and development" },
      { id: "nwvania-geology", name: "NwvaniaGeology", description: "Earth sciences, seismic surveys, and geological exploration" },
      { id: "nwvania-ocean", name: "NwvaniaOcean", description: "Marine and ocean science research and underwater exploration" },
      { id: "nwvania-drone", name: "NwvaniaDrone", description: "Operation and programming of drones for commercial and research use" },
      { id: "nwvania-telecom", name: "NwvaniaTelecom", description: "Communications infrastructure and 5G/6G network management" },
      { id: "nwvania-sat", name: "NwvaniaSat", description: "Provision and analysis of satellite images and space data" },
      { id: "nwvania-code", name: "NwvaniaCode", description: "Code hosting and repository management for developers" },
    ],
  },
];

// ============================================================
// The 10 Operational / Professional Applications
// (NOT for general public — for businesses, institutions, partners)
// ============================================================

export interface OperationalApp {
  id: string;
  name: string;
  tagline: string;
  description: string;
  targetAudience: string;
  features: string[];
  color: string;
}

export const operationalApps: OperationalApp[] = [
  {
    id: "business",
    name: "Nwvania Business",
    tagline: "Run your business. Your way.",
    description:
      "For small and medium businesses, stores, restaurants, clinics, and commercial services operating independently.",
    targetAudience: "SME Owners & Merchants",
    features: ["Sales & Orders", "Customer Management", "Invoicing & POS", "Subscriptions", "Branch Management", "Staff Operations"],
    color: "#005CE6",
  },
  {
    id: "partner",
    name: "Nwvania Partner",
    tagline: "Your skills. Your schedule. Your business.",
    description:
      "For freelancers and independent service providers operating on their own, not operationally affiliated with Nwvania.",
    targetAudience: "Freelancers & Independent Professionals",
    features: ["Professional Profile", "Service Listing", "Order Reception", "Earnings Dashboard", "Ratings & Reviews"],
    color: "#059669",
  },
  {
    id: "enterprise",
    name: "Nwvania Enterprise",
    tagline: "Built for the complexity of scale.",
    description:
      "For large multi-department private corporations and institutions requiring sophisticated multi-layer operational management.",
    targetAudience: "Large Corporations & Multi-Branch Organizations",
    features: ["Branch Management", "Role Permissions", "Internal Operations", "API Integrations", "Custom Workflows"],
    color: "#7C3AED",
  },
  {
    id: "gov",
    name: "Nwvania Gov",
    tagline: "Digital government. Human results.",
    description:
      "For government entities, ministries, departments, municipalities, and official institutions managing public transactions.",
    targetAudience: "Government Bodies & Public Institutions",
    features: ["Transaction Management", "Approval Workflows", "Institutional Connectivity", "Public Services Portal", "Audit Trails"],
    color: "#DC2626",
  },
  {
    id: "admin",
    name: "Nwvania Admin",
    tagline: "The command center of the ecosystem.",
    description:
      "Senior management of the entire Nwvania ecosystem — governance, global policies, permissions, and high-level decisions.",
    targetAudience: "Nwvania Internal Leadership",
    features: ["Platform Governance", "Policy Management", "Global Permissions", "System Architecture", "Performance Oversight"],
    color: "#1F2937",
  },
  {
    id: "oversight",
    name: "Nwvania Oversight",
    tagline: "Quality. Compliance. Accountability.",
    description:
      "Operational, field, quality, and inspection oversight for all activities and entities within the Nwvania ecosystem.",
    targetAudience: "Quality, Compliance & Field Inspection Teams",
    features: ["Business Auditing", "Violation Management", "Complaint Resolution", "Quality Reports", "Field Monitoring"],
    color: "#EA580C",
  },
  {
    id: "developer",
    name: "Nwvania Developer",
    tagline: "Build the future. With our infrastructure.",
    description:
      "For software developers, tech companies, and integration partners building on or connecting with the Nwvania ecosystem.",
    targetAudience: "Developers & Technology Companies",
    features: ["Full API Access", "Sandbox Environments", "Deployment Tools", "Technical Documentation", "Integration Testing"],
    color: "#0891B2",
  },
  {
    id: "mobility",
    name: "Nwvania Mobility",
    tagline: "Move with the ecosystem.",
    description:
      "For transport and logistics workers operating exclusively under Nwvania — drivers, couriers, and shipping companies.",
    targetAudience: "Drivers, Couriers & Logistics Operators",
    features: ["Driver Application", "Courier Management", "Fleet Operations", "Real-time Tracking", "Earnings Management"],
    color: "#B45309",
  },
  {
    id: "studio",
    name: "Nwvania Studio",
    tagline: "Create. Distribute. Impact.",
    description:
      "For content creators, media professionals, artists, and producers working exclusively within the Nwvania content ecosystem.",
    targetAudience: "Content Creators, Artists & Media Professionals",
    features: ["Content Publishing", "Video & Audio Production", "Distribution Tools", "Audience Analytics", "Monetization"],
    color: "#9333EA",
  },
  {
    id: "talent",
    name: "Nwvania Talent",
    tagline: "Your talent belongs here.",
    description:
      "For skilled professionals, degree holders, innovators, and idea creators seeking opportunities within the Nwvania ecosystem.",
    targetAudience: "Professionals, Graduates & Innovators",
    features: ["Talent Profile", "Job Matching", "Incubation Programs", "Mentorship Access", "Project Collaboration"],
    color: "#DB2777",
  },
];
