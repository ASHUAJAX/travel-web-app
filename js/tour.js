const places=[
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
      "image": "https://images.unsplash.com/photo-1564507592333-c60657eea523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGFqIG1haGFsfHx8fHx8MTY4OTQwODI0NQ&ixlib=rb-4.0.3&q=80&w=1080"
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
      "image": "https://images.unsplash.com/photo-1596120236172-231999844ade?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dmFyYW5hc2l8fHx8fHx8MTY4OTQwODI0NQ&ixlib=rb-4.0.3&q=80&w=1080"
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
      "image": "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YW1iZXIgZm9ydHx8fHx8fDE2ODk0MDgyNDU&ixlib=rb-4.0.3&q=80&w=1080"
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
      "image": "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a2VyYWxhIGJhY2t3YXRlcnN8fHx8fHwxNjg5NDA4MjQ1&ixlib=rb-4.0.3&q=80&w=1080"
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
      "image": "https://s7ap1.scene7.com/is/image/incredibleindia/gateway-of-india-mumbai-maharashtra-2-attr-hero?qlt=82&ts=1727355556744"
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
      "image": "https://dwq3yv87q1b43.cloudfront.net/public/blogs/fit-in/1350x300/Blog_20241130-237756404-1732944745.jpg"
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
      "image": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/56/fd/28.jpg"
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
      "image": "https://images.unsplash.com/photo-1532664189809-02133fee698d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aGF3YSBtYWhhbHx8fHx8fDE2ODk0MDgyNDU&ixlib=rb-4.0.3&q=80&w=1080"
    },
  ]



let container_data_world = document.querySelector('.container_data_world');
let userData = places.map((data, index) => {
    return `
          <div class="card-container">
  <div class="card">
    <div class="card-img">
      <img src="${data.image}" alt="Card image">
    </div>
    <div class="card-content">
      <h3>${data.name}</h3>
      <p style='height: 20px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'>${data.description}</p>
      <div class="card-footer">
        <span class="rating">★★★★☆</span>
        <button class="btn">Learn More</button>
      </div>
    </div>
  </div>
</div>
    `


}).join('');
container_data_world.innerHTML = userData;
