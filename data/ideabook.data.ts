export const CAROUSEL_DATA = [
  { id: 1, category: "bridalLehengas", subCategory: null, label: "Bridal Lehengas" },
  { id: 2, category: "weddingDresses", subCategory: null, label: "Wedding Dresses" },
  { id: 3, category: "blouseDesigns", subCategory: null, label: "Blouse Designs" },
  { id: 4, category: "weddingSarees", subCategory: null, label: "Wedding Sarees" },
  { id: 5, category: "mehndiDesigns", subCategory: null, label: "Mehendi Designs" },
  { id: 6, category: "weddingJewellery", subCategory: null, label: "Wedding Jewellery" },
  { id: 7, category: "weddingMakeup", subCategory: null, label: "Wedding Makeup" },
  { id: 8, category: "weddingHairstyles", subCategory: null, label: "Wedding Hairstyles" },
  { id: 9, category: "weddingDecorationIdeas", subCategory: null, label: "Wedding Decoration Ideas" },
  { id: 10, category: "weddingPhotoshootPoses", subCategory: null, label: "Wedding Photoshoot Poses" },
  { id: 11, category: "preWeddingShootIdeas", subCategory: null, label: "Prewedding Shoot Ideas" },
  { id: 12, category: "groomWeddingDresses", subCategory: null, label: "Wedding Groom Dresses" },
  { id: 13, category: "weddingInvitations", subCategory: null, label: "Wedding Invitations" },
  { id: 14, category: "weddingAccessories", subCategory: null, label: "Wedding Accessories" },
  { id: 15, category: "weddingCakes", subCategory: null, label: "Wedding Cakes" },
  { id: 16, category: "uniqueWeddingIdeas", subCategory: null, label: "Wedding Ideas" },
  { id: 17, category: "weddingVenues", subCategory: null, label: "Wedding Venues" },
  { id: 18, category: "weddingGiftsPacking", subCategory: null, label: "Wedding Gifts" },
];

export const POPULAR_CATEGORIES = [
  {
    id: 1,
    category: "bridalLehengas",
    subCategory: null,
    label: "Bridal Lehengas",
    description: "Elegant and stunning bridal lehengas for your special day.",
    imageSource: `https://source.unsplash.com/random/900x700?bridal,lehengas,wedding`,
  },
  {
    id: 2,
    category: "weddingDresses",
    subCategory: null,
    label: "Wedding Dresses",
    description: "Explore a variety of wedding dresses to find your perfect style.",
    imageSource: `https://source.unsplash.com/random/900x700?wedding,dresses,bride`,
  },
  {
    id: 3,
    category: "blouseDesigns",
    subCategory: null,
    label: "Blouse Designs",
    description: "Discover creative blouse designs to complement your attire.",
    imageSource: `https://source.unsplash.com/random/900x700?blouse,designs,fashion`,
  },
  {
    id: 4,
    category: "weddingSarees",
    subCategory: null,
    label: "Wedding Sarees",
    description: "Elegant and timeless wedding sarees for a classic look.",
    imageSource: `https://source.unsplash.com/random/900x700?sarees,indian,traditional`,
  },
  {
    id: 5,
    category: "mehndiDesigns",
    subCategory: null,
    label: "Mehendi Designs",
    description: "Unique and intricate mehndi designs to adorn your hands.",
    imageSource: `https://source.unsplash.com/random/900x700?mehndi,designs,art`,
  },
  {
    id: 6,
    category: "weddingJewellery",
    subCategory: "",
    label: "Wedding Jewellery",
    description: "Explore stunning wedding jewellery to complete your ensemble.",
    imageSource: `https://source.unsplash.com/random/900x700?jewellery,bride,accessories`,
  },
];

export const POPULAR_SEARCHES = {
  topSearches: [
    {
      id: 1,
      label: "Bridal Lehengas",
      category: "bridalLehengas",
      subCategory: null,
    },

    {
      id: 2,
      label: "Rajasthani Bridal Lehengas",
      category: "bridalLehengas",
      subCategory: "rajasthani",
    },
  ],
  browseThroughCategories: POPULAR_CATEGORIES,
};

export const DUMMY_SEARCH_STORE = [
  // Lehengas
  {
    searchTerm: "Bridal Lehengas",
    category: "bridalLehengas",
    subCategory: null,
  },
  {
    searchTerm: "Rajasthani Bridal Lehengas",
    category: "bridalLehengas",
    subCategory: "rajasthani",
  },
  {
    searchTerm: "Gujarati Bridal Lehengas",
    category: "bridalLehengas",
    subCategory: "gujarati",
  },
  {
    searchTerm: "Punjabi Bridal Lehengas",
    category: "bridalLehengas",
    subCategory: "punjabi",
  },
  {
    searchTerm: "Bengali Bridal Lehengas",
    category: "bridalLehengas",
    subCategory: "bengali",
  },
  {
    searchTerm: "Bridal Lehengas",
    category: null,
    subCategory: null,
  },
  { searchTerm: "Bridal Lehengas in Red", category: null, subCategory: null },
  {
    searchTerm: "Lehengas for Indian Brides",
    category: null,
    subCategory: null,
  },
  {
    searchTerm: "Latest Bridal Fashion Trends",
    category: null,
    subCategory: null,
  },
  //  Wedding Venues
  {
    searchTerm: "Wedding Venues",
    category: "weddingVenues",
    subCategory: null,
  },
  {
    searchTerm: "Palace Venues for Weddings",
    category: "weddingVenues",
    subCategory: "palaceVenues",
  },
  {
    searchTerm: "Beach Wedding Venues",
    category: "weddingVenues",
    subCategory: "beachVenues",
  },
  {
    searchTerm: "Resort Wedding Venues",
    category: "weddingVenues",
    subCategory: "resortVenues",
  },
  {
    searchTerm: "Forest Wedding Venues",
    category: "weddingVenues",
    subCategory: "forestVenues",
  },
  {
    searchTerm: "Hill Station Wedding Venues",
    category: "weddingVenues",
    subCategory: "hillStationVenues",
  },

  { searchTerm: "Beautiful Wedding Venues", category: null, subCategory: null },
  {
    searchTerm: "Unique Venues for Weddings",
    category: null,
    subCategory: null,
  },
  { searchTerm: "Luxurious Wedding Venues", category: null, subCategory: null },
];
