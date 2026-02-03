const products = {
  1: {
    title: "AI Marketing Automation",
    image: "images/product1.jpg",
    description: "This AI-powered tool automates your marketing campaigns, improves conversions, and saves time using smart analytics."
  },
  2: {
    title: "Sales Funnel Builder",
    image: "images/product2.jpg",
    description: "Create high-converting sales funnels with drag-and-drop simplicity, optimized for digital entrepreneurs."
  },
  3: {
    title: "Email Marketing System",
    image: "images/product3.jpg",
    description: "An advanced email marketing platform with automation, segmentation, and real-time tracking."
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (products[id]) {
  document.getElementById("productImage").src = products[id].image;
  document.getElementById("productTitle").innerText = products[id].title;
  document.getElementById("productDescription").innerText = products[id].description;
  
} else {
  document.getElementById("productTitle").innerText = "Product Not Found";
}
const products = {
  "1": {
    title: "Systeme.io",
    shortDesc: "All-in-one platform",
    img: "product1.1.png",
    desc: "Join thousands of small business owners...",
    affiliateLink: "https://systeme.io/tr/2/161/12467561730/39837047/39953962471dfd13cc34852c7741217295c92b975"
  },
  "2": { /* ... */ },
  "3": { /* ... */ }
};

// later in JS
document.getElementById("cta-btn").href = products[id].affiliateLink;
document.getElementById("cta-btn").target = "_blank"; // open in new tab
