export const carouselSlides = [
    {
      image: "https://images.unsplash.com/photo-1588412079929-791b1973c703",
      title: "Professional Print Solutions",
      description: "High-quality printing for all your business needs",
      alt: "Professional printing equipment"
    },
    {
      image: "https://images.unsplash.com/photo-1620675099858-3df3cfdc0ae6",
      title: "Creative Design Services",
      description: "Custom designs that captivate your audience",
      alt: "Designer working on a graphic"
    },
    {
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d",
      title: "Social Media Graphics",
      description: "Stand out on every platform with our stunning designs",
      alt: "Social media marketing graphics"
    },
    {
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7",
      title: "Political Campaign Materials",
      description: "Comprehensive design solutions for political campaigns",
      alt: "Political campaign materials"
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8659b8e77b29",
      title: "Festival Design Collections",
      description: "Celebrate every occasion with our festive designs",
      alt: "Festival themed design"
    }
  ];
  
  // Featured Categories
  export const featuredCategories = [
    {
      id: 1,
      name: "Social Media Designs",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
      link: "/categories/social-media"
    },
    {
      id: 2,
      name: "PSD Designs",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
      link: "/categories/psd-designs"
    },
    {
      id: 3,
      name: "Graphic Designer Products",
      image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9",
      link: "/categories/graphic-designer-products"
    },
    {
      id: 4,
      name: "Political Designs",
      image: "https://images.unsplash.com/photo-1577720643272-265d27339d3e",
      link: "/categories/political-designs"
    }
  ];
  
  // Marquee Images
  export const marqueeImages = [
    {
      src: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4",
      alt: "Design sample 1"
    },
    {
      src: "https://images.unsplash.com/photo-1600132806608-231446b2e7af",
      alt: "Design sample 2"
    },
    {
      src: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0",
      alt: "Design sample 3"
    },
    {
      src: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9",
      alt: "Design sample 4"
    },
    {
      src: "https://images.unsplash.com/photo-1560421683-6856ea585c78",
      alt: "Design sample 5"
    },
    {
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
      alt: "Design sample 6"
    }
  ];
  
  // Team Members
  export const teamMembers = [
    {
      name: "John Doe",
      role: "Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
    },
    {
      name: "Jane Smith",
      role: "Creative Lead",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      name: "Alex Johnson",
      role: "Print Manager",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
    },
    {
      name: "Sara Williams",
      role: "Graphic Designer",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
    }
  ];
  
  // Products by Category
  export const productCategories = {
    socialMedia: {
      name: "Social Media Designs",
      items: [
        {
          id: 1,
          name: "Festival Post Pack",
          category: "Festival SMPD",
          price: 1999,
          image: "https://images.unsplash.com/photo-1561070791-32d8b5eb943a"
        },
        {
          id: 2,
          name: "Business Promotion Pack",
          category: "Festival SMPD",
          price: 1499,
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
        },
        {
          id: 3,
          name: "Seasonal Greetings Bundle",
          category: "Festival SMPD",
          price: 2499,
          image: "https://images.unsplash.com/photo-1608306448197-e83633f1261c"
        }
      ]
    },
    psdDesigns: {
      name: "PSD Designs",
      subcategories: [
        {
          name: "Designers Pack",
          items: [
            {
              id: 4,
              name: "Premium Design Elements",
              category: "Designers Pack",
              price: 3999,
              image: "https://images.unsplash.com/photo-1626785774573-4b799315345d"
            },
            {
              id: 5,
              name: "Ultimate Mockup Bundle",
              category: "Designers Pack",
              price: 4999,
              image: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1"
            }
          ]
        },
        {
          name: "Political",
          items: [
            {
              id: 6,
              name: "Campaign Flyer Templates",
              category: "Political",
              price: 2999,
              image: "https://images.unsplash.com/photo-1577720580479-7d839d829c73"
            },
            {
              id: 7,
              name: "Election Poster Set",
              category: "Political",
              price: 3499,
              image: "https://images.unsplash.com/photo-1579154392429-5e9ab8bee376"
            }
          ]
        },
        {
          name: "Festival Designs",
          items: [
            {
              id: 8,
              name: "Diwali Special Pack",
              category: "Festival Designs",
              price: 1899,
              image: "https://images.unsplash.com/photo-1605018498442-8b0dd9c7c5d2"
            },
            {
              id: 9,
              name: "New Year Templates",
              category: "Festival Designs",
              price: 2199,
              image: "https://images.unsplash.com/photo-1546271876-af6caec5fae5"
            }
          ]
        }
      ]
    },
    graphicDesignerProducts: {
      name: "Graphic Designer Products",
      subcategories: [
        {
          name: "Image Stock",
          items: [
            {
              id: 10,
              name: "Premium Photo Collection",
              category: "Image Stock",
              price: 5999,
              image: "https://images.unsplash.com/photo-1542744094-24638eff58bb"
            },
            {
              id: 11,
              name: "Business Imagery Pack",
              category: "Image Stock",
              price: 4599,
              image: "https://images.unsplash.com/photo-1551135049-8a33b5883817"
            }
          ]
        },
        {
          name: "PSD Stock",
          items: [
            {
              id: 12,
              name: "Multi-purpose Templates",
              category: "PSD Stock",
              price: 3299,
              image: "https://images.unsplash.com/photo-1561070791-2526d30994b5"
            }
          ]
        },
        {
          name: "CDR Stock",
          items: [
            {
              id: 13,
              name: "Vector Graphics Library",
              category: "CDR Stock",
              price: 2899,
              image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb"
            }
          ]
        }
      ]
    },
    freeDownloads: {
      name: "Free Downloads",
      items: [
        {
          id: 14,
          name: "Basic Icons Pack",
          category: "Free Stock",
          price: 0,
          image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb"
        },
        {
          id: 15,
          name: "Sample Templates",
          category: "Free Stock",
          price: 0,
          image: "https://images.unsplash.com/photo-1590845947698-8924d7409b56"
        }
      ]
    },
    politicalDesigns: {
      name: "Political Designs",
      items: [
        {
          id: 16,
          name: "YSRCP Campaign Kit",
          category: "YSRCP",
          price: 4999,
          image: "https://images.unsplash.com/photo-1569209232324-74c5dab528d8"
        },
        {
          id: 17,
          name: "YSRCP Digital Pack",
          category: "YSRCP",
          price: 5499,
          image: "https://images.unsplash.com/photo-1582133905664-faba2e585beb"
        }
      ]
    }
  };