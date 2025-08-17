const users = [
  {
    name: "riya kapoor",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "lost in lyrics 🎧 | soul full of stardust ✨",
  },
  {
    name: "naina arora",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "smiling through storms ⛈️ | caffeine & confidence ☕🔥",
  },
  {
    name: "kritika sehgal",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "dreamer with deadlines 📝💫 | moonlit thoughts",
  },
  {
    name: "tara malik",
    pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
    bio: "flawsome & fearless 💋 | sparkle with no filter ✨",
  },
  {
    name: "zoya mirza",
    pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
    bio: "painting life in neon 🎨🌈 | chaos curator",
  },
  {
    name: "arjun khurana",
    pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
    bio: "good vibes & great tunes 🎶🪐 | mind over mess",
  },
  {
    name: "rishi verma",
    pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
    bio: "minimalist heart 🖤 | lowercase life, capital dreams",
  },
];

const container = document.querySelector(".cards");
const input = document.querySelector(".inp");

// Create a single card
function createCard(user) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = user.pic;
  img.classList.add("bg-img");

  const blurredLayer = document.createElement("div");
  blurredLayer.style.backgroundImage = `url(${user.pic})`;
  blurredLayer.classList.add("blurred-layer");

  const content = document.createElement("div");
  content.classList.add("content");

  const heading = document.createElement("h3");
  heading.textContent = user.name;

  const para = document.createElement("p");
  para.textContent = user.bio;

  content.appendChild(heading);
  content.appendChild(para);

  card.appendChild(img);
  card.appendChild(blurredLayer);
  card.appendChild(content);

  return card;
}

// Render all users to DOM
function showUsers(arr) {
  container.innerHTML = ""; // Clear previous
  const fragment = document.createDocumentFragment();

  arr.forEach((user) => {
    const card = createCard(user);
    fragment.appendChild(card);
  });

  container.appendChild(fragment);
}

// Handle input (filter & show)
input.addEventListener("input", function () {
  const value = input.value.toLowerCase();
  const filtered = users.filter((user) =>
    user.name.toLowerCase().startsWith(value)
  );

  if(filtered.length > 0){
    showUsers(filtered);
  }else{
    container.innerHTML = "<p class='no-results'>No results found</p>";
  }
});

// Initial render
showUsers(users);
