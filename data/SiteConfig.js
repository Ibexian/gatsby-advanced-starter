module.exports = {
  siteTitle: "East Meets Kitchen", // Site title.
  siteTitleShort: "EMK", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "East Meets Kitchen - Vegan Asian Recipes", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://eastmeetskitchen.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A GatsbyJS stater with Advanced design in mind.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/feed.xml", // Path to the RSS file.
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  postDefaultCategoryID: "Recipe", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Christina Ng", // Username to display in the author segment.
  userTwitter: "EastMeetsKitchn", // Optionally renders "Follow Me" in the UserInfo segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
        label: "Instagram",
        url: "https://instagram.com/eastmeetskitchn/",
        iconClassName: "icon-instagram"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/EastMeetsKitchn",
      iconClassName: "icon-twitter"
    },
    {
      label: "Pinterest",
      url: "https://www.pinterest.com/eastmeetskitche/",
      iconClassName: "icon-pinterest"
    },
    {
      label: "Youtube",
      url: "https://www.youtube.com/user/Gurshee",
      iconClassName: "icon-youtube"
    },
    {
      label: "RSS",
      url: "/feed.xml",
      iconClassName: "icon-rss"
    }
  ],
  copyright: "Copyright © 2018. Christina Ng", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  recipeTags: [
        {
            name: "Meats",
            tag: "meats"
        }, {
            name: "Meatless",
            tag: "nomeats"
        }, {
            name: "Rice and Noodles",
            tag: "riceandnoodles"
        }, {
            name: "Soups",
            tag: "soups"
        }, {
            name: "Sweets",
            tag: "sweets"
        }, {
            name: "Sauces",
            tag: "sauces"
        }, {
            name: "Healthy",
            tag: "healthy"
        },
    ],
    displayCategories: [
        {
            name: "Recipes",
            category: "recipes",
            subLinks: true
        }, {
            name: "Adventures + Blog",
            category: "blog"
        }, {
            name: "Video",
            category: "",
            url: "https://www.youtube.com/user/Gurshee"
        }, {
            name: "Tips",
            category: "tips"
        }, {
            name: "About",
            category: "",
            url: "/about"
        }, {
            name: "",
            category: "",
            url: "/search",
            className: "icon-search"
        },
    ]
};
