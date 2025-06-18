const User = [
  {
    img: "img/testimonial/boy.png",
    name: "Ashutosh Jha",
    role: "Project Manager, Infosys",
    about_trip: "Their expert planning turned our European vacation into an unforgettable memory. Every detail — from airport pickup to day tours — was handled with precision."
  },
  {
    img: "img/testimonial/girl.png",
    name: "Sneha Singh",
    role: "Senior Executive, Mumbai",
    about_trip: "I was blown away by their coordination during our corporate retreat. The venue, travel, and activities were flawlessly managed despite last-minute changes."
  },
  {
    img: "img/testimonial/boy.png",
    name: "Gurupada Mohapatra",
    role: "Finance Lead, Bhubaneswar",
    about_trip: "Their service was top-notch for our family vacation in Kerala. Great accommodations and smooth local travel made our trip stress-free."
  },
  {
    img: "img/testimonial/boy.png",
    name: "Rakesh Kumar",
    role: "Tech Consultant, Bangalore",
    about_trip: "The Goa trip was perfectly curated. From beach resorts to nightlife experiences, everything matched our expectations and budget."
  },
  {
    img: "img/testimonial/boy.png",
    name: "Ravi Prakash",
    role: "Entrepreneur, Jaipur",
    about_trip: "Booked a 7-day Thailand tour through them — excellent coordination, helpful guides, and great value for money. I’ll definitely use their service again."
  },
  {
    img: "img/testimonial/girl.png",
    name: "Meenakshi Bilwal",
    role: "Travel Blogger, Udaipur",
    about_trip: "My solo trip to Spiti was seamless, thanks to their expert team. I felt safe, prepared, and thoroughly enjoyed every moment of the journey."
  }
];


let owl_carousel = document.querySelector('.user-data');
let userData = User.map((data, index) => {
  return `
        <div class="testimonial__item">
          <div class="row">
            <div class="col-md-3 col-lg-2 align-self-center">
              <div class="testimonial__img" style="width: 100%; height: 20vh">
                <img class="card-img rounded-0" src="${data.img}" alt="${data.name}" style="object-fit: cover; width: 100%; height: 100%;">
              </div>
            </div>
            <div class="col-md-9 col-lg-10">
              <div class="testimonial__content mt-3 mt-sm-0">
                <h3 style="color:black;">${data.name}</h3>
                <p>${data.role}</p>
                <p class="testimonial__i">${data.about_trip}</p>
                <span class="testimonial__icon"><i class="ti-quote-right"></i></span>
              </div>
            </div>
          </div>
        </div>
    `
}).join('');
owl_carousel.innerHTML = userData;


$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }
    }
  });
});
