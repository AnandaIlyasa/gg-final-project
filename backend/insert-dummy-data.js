const productIds = db.products.insertMany([
  {
    productLink:
      "https://www.tokopedia.com/unilever/clear-men-anti-dandruff-shampo-anti-ketombe-ice-cool-menthol-660ml",
    title: "Shampo Clear",
    price: 90500,
  },
  {
    productLink:
      "https://www.tokopedia.com/dettolstore/dettol-cairan-antiseptik-1l",
    title: "Dettol Antiseptik",
    price: 165000,
  },
  {
    productLink: "https://www.tokopedia.com/garudafood/garuda-kacang-kulit",
    title: "Kacang Garuda",
    price: 36000,
  },
  {
    productLink:
      "https://www.tokopedia.com/garudafood/gery-saluut-malkist-coklat",
    title: "Gery Snack",
    price: 35200,
  },
  {
    productLink:
      "https://www.tokopedia.com/mondelez/biskuat-biskuit-coklat-134-4-g-3-pcs?extParam=ivf%3Dfalse%26whid%3D13355454&src=topads",
    title: "Biskuat Snack",
    price: 20000,
  },
]).insertedIds;

db.videos.insertMany([
  {
    embedUrl: `<iframe width="560" height="315" src="https://www.youtube.com/embed/SYTWWUoYUMg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    thumbnailUrl:
      "https://i.ytimg.com/vi/SYTWWUoYUMg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAepl-XL0j-phx8lo4opns1gpPi5g",
    productIds: [productIds[0], productIds[1]],
    comments: [
      {
        username: "User 1",
        comment: "Comment 1",
        timestamp: new Date(),
      },
      {
        username: "User 2",
        comment: "Comment 2",
        timestamp: new Date(),
      },
    ],
  },
  {
    embedUrl: `<iframe width="560" height="315" src="https://www.youtube.com/embed/SYTWWUoYUMg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    thumbnailUrl:
      "https://i.ytimg.com/vi/upWr18yghsE/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARgPIGUoSjAP&rs=AOn4CLBWfJp5nLBmgBcfo204IWkB1hIkSQ",
    productIds: [productIds[1], productIds[2]],
    comments: [
      {
        username: "User 1",
        comment: "Comment 1",
        timestamp: new Date(),
      },
      {
        username: "User 2",
        comment: "Comment 2",
        timestamp: new Date(),
      },
    ],
  },
  {
    embedUrl: `<iframe width="560" height="315" src="https://www.youtube.com/embed/SYTWWUoYUMg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    thumbnailUrl:
      "https://i.ytimg.com/vi/-7GQIAm_IHE/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhgIGUoSTAP&rs=AOn4CLAbTeTbLSBDkSKctEW47eU8aBCYbA",
    productIds: [productIds[1], productIds[2]],
    comments: [],
  },
  {
    embedUrl: `<iframe width="560" height="315" src="https://www.youtube.com/embed/SYTWWUoYUMg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    thumbnailUrl:
      "https://i.ytimg.com/vi/yjeRjf-UICM/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhlIF0oTzAP&rs=AOn4CLCW0gtnIDmyyMRqdnOJ212KzArXZw",
    productIds: [productIds[2], productIds[3]],
    comments: [],
  },
  {
    embedUrl: `<iframe width="560" height="315" src="https://www.youtube.com/embed/SYTWWUoYUMg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    thumbnailUrl:
      "https://i.ytimg.com/vi/D63yDoKM1FE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFeCzj5HSvbSuUX0kjj_QBuOMvPg",
    productIds: [productIds[3], productIds[4]],
    comments: [],
  },
]);
