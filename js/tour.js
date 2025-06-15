const places = [
  {
    "id": 1,
    "name": "Taj Mahal",
    "location": "Agra, Uttar Pradesh",
    "description": "Iconic white marble mausoleum and UNESCO World Heritage Site built by Mughal Emperor Shah Jahan",
    "best_time_to_visit": "October to March",
    "attractions": ["Main Mausoleum", "Charbagh Gardens", "Mosque", "Museum"],
    "type": "Historical Monument",
    "entry_fee": {
      "indians": 50,
      "foreigners": 1300
    },
    "famous_for": "Symbol of Love, Mughal Architecture",
    image: "img/testimonial/tajmahal.jpg"
  },
  {
    "id": 2,
    "name": "Varanasi Ghats",
    "location": "Varanasi, Uttar Pradesh",
    "description": "Spiritual capital of India with sacred riverfront steps along the Ganges",
    "best_time_to_visit": "October to March",
    "attractions": ["Ganga Aarti", "Dashashwamedh Ghat", "Boat Ride", "Kashi Vishwanath Temple"],
    "type": "Religious/Spiritual",
    "entry_fee": "Free (Boat rides: ₹200-800)",
    "famous_for": "Evening Aarti, Holy Ganges",
    image: "img/testimonial/vanrashghat.jpg"

  },
  {
    "id": 3,
    "name": "Amber Fort",
    "location": "Jaipur, Rajasthan",
    "description": "Majestic hilltop fort-palace with Hindu and Mughal architectural elements",
    "best_time_to_visit": "October to March",
    "attractions": ["Sheesh Mahal", "Diwan-e-Aam", "Elephant Ride", "Light Show"],
    "type": "Historical Fort",
    "entry_fee": {
      "indians": 100,
      "foreigners": 500
    },
    "famous_for": "Rajput Architecture, Mirror Palace",
    image: "img/testimonial/AmberFort.jpg"

  },
  {
    "id": 4,
    "name": "Kerala Backwaters",
    "location": "Alleppey, Kerala",
    "description": "Network of interconnected canals, rivers and lagoons parallel to Arabian Sea",
    "best_time_to_visit": "November to February",
    "attractions": ["Houseboat Stay", "Vembanad Lake", "Coconut Lagoon", "Village Tours"],
    "type": "Natural Landscape",
    "entry_fee": "Houseboat: ₹8,000-25,000/night",
    "famous_for": "Houseboat Experience, Lush Greenery",
    image: "img/testimonial/KeralaBackwaters.jpg"
  },
  {
    "id": 5,
    "name": "Gateway of India",
    "location": "Mumbai, Maharashtra",
    "description": "Historical arch-monument built during British Raj overlooking Arabian Sea",
    "best_time_to_visit": "November to February",
    "attractions": ["Monument View", "Boat to Elephanta Caves", "Taj Hotel View", "Street Food"],
    "type": "Historical Monument",
    "entry_fee": "Free",
    "famous_for": "Colonial Architecture, Mumbai Symbol",
    image: "img/testimonial/GatewayofIndia.jpg"
  },
  {
    "id": 6,
    "name": "Mysore Palace",
    "location": "Mysuru, Karnataka",
    "description": "Official residence of Wadiyar dynasty with Indo-Saracenic architecture",
    "best_time_to_visit": "July to March",
    "attractions": ["Light Show", "Dussehra Celebrations", "Royal Exhibits", "Gardens"],
    "type": "Palace",
    "entry_fee": {
      "indians": 70,
      "foreigners": 200
    },
    "famous_for": "Dussehra Festival, Illuminated Nights",
    image: "img/testimonial/MysorePalace.jpg"

  },
  {
    "id": 7,
    "name": "Golden Temple",
    "location": "Amritsar, Punjab",
    "description": "Most sacred shrine of Sikhism covered in gold plates",
    "best_time_to_visit": "October to March",
    "attractions": ["Sarovar (Holy Tank)", "Guru Ka Langar", "Night Illumination", "Sikh Museum"],
    "type": "Religious Shrine",
    "entry_fee": "Free",
    "famous_for": "Community Kitchen, Golden Architecture",
    image: "img/testimonial/GoldenTemple.jpg"
  },
  {
    "id": 8,
    "name": "Hawa Mahal",
    "location": "Jaipur, Rajasthan",
    "description": "Iconic red sandstone palace with honeycomb structure",
    "best_time_to_visit": "October to March",
    "attractions": ["953 Jharokhas", "Palace Museum", "City View", "Light Show"],
    "type": "Historical Palace",
    "entry_fee": {
      "indians": 50,
      "foreigners": 200
    },
    "famous_for": "Wind Palace, Unique Facade",
    image: "img/testimonial/HawaMahal.jpg"
  },
]



let container_data_world = document.querySelector('.container_data_world');
let userData = places.map((data, index) => {
  return `
          <div class="destination-card">
    <div class="card-img">
      <img src="${data.image}" alt="Card image">
    </div>
    <div class="card-content">
      <h3>${data.name}</h3>
      <p style='height: 20px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'>${data.description}</p>
      <div class="card-footer">
        <span class="rating">★★★★☆</span>
        <a  href="contact.html"><button class="btn">Learn More</button></a>
      </div>
    </div>

</div>
    `


}).join('');
container_data_world.innerHTML = userData;
