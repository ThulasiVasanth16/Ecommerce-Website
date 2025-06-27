// Cost Constants

export const firstCost = "35";
export const secondCost = "20";

// Grocery Brands
export const modern = "Modern";
export const fresho = "Fresho";

// Product Names
export const PRODUCT  ={
    BREAD:"Bread 100%  Whole Wheat",
    APPLE:"Apple-Shimla",
    CARROT:"Carrot-Local",
    ONION:"Onion-Medium/Vengayam",
    DIARY:"Vanilla IceCream",
    SPICES:"Red Chilli Flakes"
}

// Image Names 
export const PRODUCTIMAGE = {
    BREADIMG:"src/Assets/bread.jpg",
    APPLEIMG:"src/Assets/apple.jpg",
    CARROTIMG:"src/Assets/carrot.jpeg",
    ONIONIMG:"src/Assets/onion.jpg",
    DIARYIMG:"src/Assets/dessert.jpg",
    SPICESIMG:"src/Assets/flakes.jpg",
}

//Categories 
export const CATEGORIES = {
    ALL_CATEGORIES:"all",
    BREAD_CATEGORY:"bread",
    DIARY_CATEGORY:"dairy",
    FRUITS_CATEGORY:"fruits",
    SPICES_CATEGORY:"seasoning_and_spices",
    VEGETABLES_CATEGORY:"vegetables"
}

  export const AllPRODUCTS = [
    {
      id: 1,
      name: PRODUCT.BREAD,
      image:  PRODUCTIMAGE.BREADIMG,
      cost: firstCost,
      grocery: modern,
      categories: CATEGORIES.BREAD_CATEGORY,
    },
    {
      id: 2,
      name: PRODUCT.APPLE,
      image:  PRODUCTIMAGE.APPLEIMG,
      cost: secondCost,
      grocery: fresho,
      categories: CATEGORIES.FRUITS_CATEGORY,
    },
    {
      id: 3,
      name: PRODUCT.CARROT,
      image:  PRODUCTIMAGE.CARROTIMG,
      cost: secondCost,
      grocery: fresho,
      categories: CATEGORIES.VEGETABLES_CATEGORY,
    },
    {
      id: 4,
      name: PRODUCT.ONION,
      image:  PRODUCTIMAGE.ONIONIMG,
      cost: secondCost,
      grocery: fresho,
      categories: CATEGORIES.VEGETABLES_CATEGORY,
    },
    {
      id: 5,
      name: PRODUCT.DIARY,
      image:  PRODUCTIMAGE.DIARYIMG,
      cost: firstCost,
      grocery: fresho,
      categories:CATEGORIES. DIARY_CATEGORY,
    },
    {
      id: 6,
      name: PRODUCT.SPICES,
      image: PRODUCTIMAGE.SPICESIMG,
      cost: firstCost,
      grocery: modern,
      categories: CATEGORIES.SPICES_CATEGORY,
    },
  ];
