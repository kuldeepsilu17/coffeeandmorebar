export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'iced' | 'pastries' | 'bar' | 'tea' | 'bites';
  description: string;
  badge?: string;
  highlight?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  text: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: 'interior' | 'drinks' | 'pastries' | 'exterior' | 'bar';
  alt: string;
}

export const BUSINESS_INFO = {
  name: "Coffee and more Bar",
  tagline: "Specialty Coffee, Artisanal Sweets & Evening Wine Lounge",
  category: "Coffee Shop & Bar",
  address: {
    street: "Bulevardi Dëshmorët E Kombit",
    city: "Prishtinë",
    postalCode: "10000",
    country: "Kosovo",
    full: "Bulevardi Dëshmorët E Kombit, Prishtinë 10000, Kosovo",
    short: "Bulevardi Dëshmorët E Kombit, Prishtinë",
  },
  phone: {
    display: "+383 43 815 010",
    raw: "+38343815010",
    telLink: "tel:+38343815010",
  },
  whatsapp: {
    display: "+383 43 815 010",
    link: "https://wa.me/38343815010?text=Hello%20Coffee%20and%20more%20Bar,%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation.",
  },
  googleMaps: {
    cid: "3887083120752877342",
    link: "https://maps.google.com/?cid=3887083120752877342",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.354675549047!2d21.1601719!3d42.661775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee1c03e9cb1%3A0x35f1b180f0e45f1e!2sCoffee%20and%20more%20Bar!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s",
    coordinates: {
      lat: 42.661775,
      lng: 21.1601719,
    },
  },
  rating: {
    score: 5.0,
    totalReviews: 7,
    source: "Google Maps",
  },
  hours: [
    { day: "Monday", open: "07:00", close: "23:00", display: "7:00 AM – 11:00 PM" },
    { day: "Tuesday", open: "07:00", close: "23:00", display: "7:00 AM – 11:00 PM" },
    { day: "Wednesday", open: "07:00", close: "23:00", display: "7:00 AM – 11:00 PM" },
    { day: "Thursday", open: "07:00", close: "23:00", display: "7:00 AM – 11:00 PM" },
    { day: "Friday", open: "07:00", close: "23:00", display: "7:00 AM – 11:00 PM" },
    { day: "Saturday", open: "07:00", close: "23:00", display: "7:00 AM – 11:00 PM" },
    { day: "Sunday", open: "08:00", close: "23:00", display: "8:00 AM – 11:00 PM" },
  ],
  features: [
    "Specialty Espresso & Brews",
    "Signature Iced Caramel Coffee",
    "Fresh Artisanal Pastries & Desserts",
    "Evening Wine, Beer & Aperitifs",
    "Picturesque Boulevard Terrace View",
    "Cozy, Laptop-Friendly Workspace",
    "Welcoming & Attentive Table Service",
    "Card Payments Accepted (Debit/Credit)",
  ],
  description: {
    short: "Coffee and more Bar is a beloved neighborhood cafe and evening lounge located on Bulevardi Dëshmorët E Kombit in Prishtinë. We serve freshly roasted specialty coffee, signature iced beverages, handmade pastries, and curated wines in a cozy, welcoming setting with scenic boulevard views.",
    story: "Nestled right along Pristina's prominent Bulevardi Dëshmorët E Kombit, Coffee and more Bar is designed as your vibrant daily sanctuary. From morning espresso pulls and decadent iced caramel coffees to quiet afternoon work sessions and twilight conversations over chilled wine or craft beers, we offer an inviting atmosphere that blends European coffeehouse culture with genuine Kosovar hospitality.",
  }
};

export const MENU_CATEGORIES = [
  { id: 'all', name: 'Full Menu' },
  { id: 'coffee', name: 'Specialty Coffee' },
  { id: 'iced', name: 'Iced & Cold Drinks' },
  { id: 'pastries', name: 'Pastries & Desserts' },
  { id: 'bar', name: 'Wine & Beer Bar' },
  { id: 'tea', name: 'Teas & Refreshers' },
  { id: 'bites', name: 'Light Fare' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // Iced & Specialty Highlights
  {
    id: 'm1',
    name: "Signature Iced Coffee with Caramel",
    category: 'iced',
    description: "Our signature layered iced creation: freshly pulled espresso over chilled creamy milk and rich golden caramel drizzle with velvet cold foam. Revered by our guests as 10/10.",
    badge: "Guest Favorite",
    highlight: true,
  },
  {
    id: 'm2',
    name: "Classic Double Espresso",
    category: 'coffee',
    description: "Precision-extracted single-origin Arabica blend with thick hazelnut crema, intense aromatics, and rich chocolate undertones.",
    badge: "Specialty Roast",
    highlight: true,
  },
  {
    id: 'm3',
    name: "Velvet Flat White",
    category: 'coffee',
    description: "Double ristretto delicately folded with silky, micro-foamed steamed milk for a balanced, sweet coffee experience.",
  },
  {
    id: 'm4',
    name: "Caffè Latte & Cappuccino",
    category: 'coffee',
    description: "Classic Italian-style cappuccino topped with dense froth and dusted with organic cocoa or artisan cinnamon.",
  },
  {
    id: 'm5',
    name: "Iced Spanish Latte",
    category: 'iced',
    description: "Chilled espresso with sweetened condensed milk and fresh whole milk over crystal ice, offering a rich caramel finish.",
  },
  {
    id: 'm6',
    name: "Slow-Drip Cold Brew",
    category: 'iced',
    description: "Steeped for 18 hours to yield a smooth, naturally sweet, low-acidity cold coffee served on the rocks.",
  },
  {
    id: 'm7',
    name: "Artisan Butter Croissants",
    category: 'pastries',
    description: "Freshly baked daily with French laminated butter, yielding crisp golden crusts and airy honeycomb layers.",
    badge: "Baked Fresh Daily",
    highlight: true,
  },
  {
    id: 'm8',
    name: "Pistachio Raspberry Cheesecake",
    category: 'pastries',
    description: "Creamy Sicilian pistachio cheesecake with a spiced biscuit crust and fresh berry coulis.",
    badge: "Chef Specialty",
    highlight: true,
  },
  {
    id: 'm9',
    name: "Swirled Chocolate Babka",
    category: 'pastries',
    description: "Rich brioche loaf layered generously with dark Belgian chocolate and cinnamon sugar crumble.",
  },
  {
    id: 'm10',
    name: "Curated Local & European Wine Selection",
    category: 'bar',
    description: "Hand-selected regional Rahovec reds, crisp sauvignon blancs, prosecco, and chilled rosés served by the glass or bottle.",
    badge: "Evening Bar",
    highlight: true,
  },
  {
    id: 'm11',
    name: "Craft Beers & Chilled Pilsners",
    category: 'bar',
    description: "Refreshing draft and bottled beers paired with light bar snacks for relaxing evening transitions.",
  },
  {
    id: 'm12',
    name: "Aperol Spritz & Boulevard Highballs",
    category: 'bar',
    description: "Crisp Aperol spritz with prosecco, soda, and fresh orange slice. Perfect for terrace sunset lounging.",
  },
  {
    id: 'm13',
    name: "Artisanal Herbal & Green Teas",
    category: 'tea',
    description: "Loose-leaf mountain chamomile, Moroccan mint, organic green sencha, and fragrant Earl Grey.",
  },
  {
    id: 'm14',
    name: "Freshly Squeezed Citrus Juices",
    category: 'tea',
    description: "Cold-pressed oranges, ginger lemonade, and seasonal fruit refreshers made to order.",
  },
  {
    id: 'm15',
    name: "Gourmet Toast & Light Sandwiches",
    category: 'bites',
    description: "Warm artisan panini with mozzarella, ripe tomatoes, basil pesto, and prosciutto cotto.",
  },
];

export const GENUINE_REVIEWS: ReviewItem[] = [
  {
    id: 'r1',
    author: "Elkena Abdullahu",
    rating: 5,
    timeAgo: "Verified Google Review",
    text: "Beautiful place and the employees were sooo nice, the view is perfect outside, especially the drinks, Ice coffee with caramel never tasted so great, loved it, just perfect 10 out of 10",
    verified: true,
  },
  {
    id: 'r2',
    author: "Rabie Hoxha",
    rating: 5,
    timeAgo: "Verified Google Review",
    text: "The best place, best food ever 😍",
    verified: true,
  },
  {
    id: 'r3',
    author: "الكابتن الصميلي (Captain Al-Samili)",
    rating: 5,
    timeAgo: "Verified Google Review",
    text: "Everything is beautiful, and the most beautiful thing is the service provider's smile.",
    verified: true,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    src: '/images/hero.jpg',
    title: 'Cozy Interior & Coffee Bar',
    category: 'interior',
    alt: 'Warm, cozy interior of Coffee and more Bar with wood paneling and large boulevard windows',
  },
  {
    id: 'g2',
    src: '/images/iced-caramel-coffee.jpg',
    title: 'Signature Iced Coffee with Caramel',
    category: 'drinks',
    alt: 'Tall glass of signature iced coffee with caramel drizzle and velvety cold foam',
  },
  {
    id: 'g3',
    src: '/images/barista-espresso.jpg',
    title: 'Master Barista Craftsmanship',
    category: 'drinks',
    alt: 'Barista pulling a rich double espresso with golden crema on modern espresso machine',
  },
  {
    id: 'g4',
    src: '/images/artisan-pastries.jpg',
    title: 'Freshly Baked Pastries & Desserts',
    category: 'pastries',
    alt: 'Artisanal croissants, chocolate babka, and pistachio cheesecake on marble counter',
  },
  {
    id: 'g5',
    src: '/images/outdoor-boulevard.jpg',
    title: 'Boulevard Patio Terrace',
    category: 'exterior',
    alt: 'Outdoor terrace seating along Bulevardi Dëshmorët E Kombit with green potted plants and boulevard views',
  },
  {
    id: 'g6',
    src: '/images/evening-bar.jpg',
    title: 'Evening Wine & Craft Beer Lounge',
    category: 'bar',
    alt: 'Atmospheric evening bar with illuminated bottle shelving, wine glasses, and cozy leather armchairs',
  },
  {
    id: 'g7',
    src: '/images/cozy-interior.jpg',
    title: 'Quiet Study & Laptop Corner',
    category: 'interior',
    alt: 'Warm wooden bookshelf, armchair, notebook, and flat white coffee in peaceful cafe work corner',
  },
];

export const WHY_CHOOSE_US = [
  {
    id: 'w1',
    title: "Prime Boulevard Location",
    description: "Situated on Bulevardi Dëshmorët E Kombit in central Prishtinë, offering scenic promenade views from our indoor tables and outdoor patio.",
    icon: "MapPin",
  },
  {
    id: 'w2',
    title: "Signature Beverage Mastery",
    description: "From precision espresso pulls to our acclaimed signature Iced Coffee with Caramel, every drink is handcrafted with care.",
    icon: "Coffee",
  },
  {
    id: 'w3',
    title: "Genuine Hospitality & Service",
    description: "Praised by guests for our warm, attentive team and welcoming smiles that make every visit feel like home.",
    icon: "HeartHandshake",
  },
  {
    id: 'w4',
    title: "Cozy Day-to-Night Atmosphere",
    description: "A bright, tranquil spot for morning coffee and laptop work that transforms seamlessly into a relaxed evening wine and beer lounge.",
    icon: "Sparkles",
  },
  {
    id: 'w5',
    title: "Handmade Daily Pastries",
    description: "Pair your beverages with freshly baked croissants, rich cakes, and artisanal desserts prepared with quality ingredients.",
    icon: "Utensils",
  },
  {
    id: 'w6',
    title: "Card & Contactless Friendly",
    description: "Full modern convenience with seamless credit/debit card acceptance, fast Wi-Fi, and easy table reservations.",
    icon: "CreditCard",
  },
];
