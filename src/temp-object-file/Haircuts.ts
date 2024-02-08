const menhaircutlist = [
  {
    id: 1,
    image: "https://live.staticflickr.com/1664/26245486112_f0811fb036.jpg",
    haircut: "Undercut",
    booking: 728,
    price: 6.5,
  },
  {
    id: 2,
    image:
      "https://c1.wallpaperflare.com/preview/62/1002/511/model-businessman-corporate-handsome.jpg",
    haircut: "Quiff",
    booking: 629,
    price: 6.0,
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/16780712/pexels-photo-16780712/free-photo-of-a-man-with-a-fashionable-haircut.jpeg",
    haircut: "Crew Cut",
    booking: 922,
    price: 5.5,
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/7447127/pexels-photo-7447127.jpeg",
    haircut: "Regular Cut",
    booking: 1029,
    price: 5.0,
  },
  {
    id: 6,
    image: "https://freerangestock.com/sample/124326/man-with-mohawk-(hairstyle)-.jpg",
    haircut: "Temple Fade",
    booking: 633,
    price: 5.45,
  },
  {
    id: 7,
    image: "https://live.staticflickr.com/1664/26245486112_f0811fb036.jpg",
    haircut: "Box Cut",
    booking: 450,
    price: 4.5,
  },
  {
    id: 8,
    image:
      "https://c1.wallpaperflare.com/preview/62/1002/511/model-businessman-corporate-handsome.jpg",
    haircut: "Medium Length",
    booking: 790,
    price: 5.6,
  },
  {
    id: 9,
    image: "https://images.pexels.com/photos/7447127/pexels-photo-7447127.jpeg",
    haircut: "Gentleman",
    booking: 954,
    price: 5.5,
  },
  {
    id: 10,
    image: "https://freerangestock.com/sample/124326/man-with-mohawk-(hairstyle)-.jpg",
    haircut: "Layered",
    booking: 876,
    price: 5.3,
  },
];
const womenhaircutlist = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1560264641-1b5191cc63e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    haircut: "Long",
    booking: 728,
    price: 6.5,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1573651235591-221193be5229?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    haircut: "Short",
    booking: 629,
    price: 6.0,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1560264641-1b5191cc63e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    haircut: "Medium",
    booking: 922,
    price: 5.5,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1573651235591-221193be5229?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    haircut: "Thin",
    booking: 1029,
    price: 5.0,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1560264641-1b5191cc63e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    haircut: "Thin",
    booking: 1029,
    price: 5.0,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1573651235591-221193be5229?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    haircut: "Round",
    booking: 633,
    price: 5.45,
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1560264641-1b5191cc63e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    haircut: "Shoulder Length",
    booking: 450,
    price: 4.5,
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1573651235591-221193be5229?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    haircut: "Fine Hair",
    booking: 790,
    price: 5.6,
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1560264641-1b5191cc63e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    haircut: "Half Up",
    booking: 954,
    price: 5.5,
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1573651235591-221193be5229?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    haircut: "Wavy Hair",
    booking: 876,
    price: 5.3,
  },
];
export { menhaircutlist, womenhaircutlist };
