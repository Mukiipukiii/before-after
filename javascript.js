function Card(title, price, features) {
  const card = document.createElement("div");
  card.className = "pricing";

  const titleEl = document.createElement("h2");
  titleEl.className = "title";
  titleEl.textContent = title;

  const priceEl = document.createElement("p");
  priceEl.className = "price";
  priceEl.textContent = price;

  const featureList = document.createElement("ul");
  featureList.className = "features";
  features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    featureList.appendChild(li);
  });

  const button = document.createElement("button");
  button.className = "btn";
  button.textContent = "Start Trial";

  card.appendChild(titleEl);
  card.appendChild(priceEl);
  card.appendChild(featureList);
  card.appendChild(button);

  return card;
}

// Render cards on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("card-container");

  const plans = [
    {
      title: "Basic Plan",
      price: "$9.99 /month",
      features: ["1 GB Storage", "Basic Support", "All Core Features"],
    },
    {
      title: "Pro Plan",
      price: "$19.99 /month",
      features: ["10 GB Storage", "Priority Support", "Advanced Features"],
    },
    {
      title: "Elite Plan",
      price: "$29.99 /month",
      features: ["Unlimited Storage", "24/7 Support", "All Features + Extras"],
    },
  ];

  plans.forEach((plan) => {
    const card = Card(plan.title, plan.price, plan.features);
    container.appendChild(card);
  });
});
