const User = [
    {
        img: "img/testimonial/t-slider1.png",
        name: "Rakesh Kumar",
        role: "Marketing Head, Infosys",
        about_trip: "Our family trip to Europe was absolutely seamless, thanks to their detailed planning and responsive team. Everything was perfectly arranged — from flights to hotel stays and local experiences"
    },
    {
        img: "img/testimonial/t-slider1.png",
        name: "Ravi Prakash",
        role: "Entrepreneur, Jaipur",
        about_trip: ">Booked a 7-day Thailand tour through them — excellent coordination, helpful guides, and great value for money. I’ll definitely use their service again for my next trip!"
    }, {
        img: "img/testimonial/t-slider1.png",
        name: "meenakshi Bilwal",
        role: "HR Consultant, Mumbai",
        about_trip: "Impressed by their professionalism and support during our office retreat in  Himachal. They handled everything with care — from logistics to last-minute changes"
    }
]

let owl_carousel = document.querySelector('.user-data');
let userData = User.map((data, index) => {
    return `
        <div class="testimonial__item">
          <div class="row">
            <div class="col-md-3 col-lg-2 align-self-center">
              <div class="testimonial__img">
                <img class="card-img rounded-0" src="${data.img}" alt="${data.name}">
              </div>
            </div>
            <div class="col-md-9 col-lg-10">
              <div class="testimonial__content mt-3 mt-sm-0">
                <h3>${data.name}</h3>
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


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:true,
        responsive:{
            0:{ items:1 },
            600:{ items:1 },
            1000:{ items:1 }
        }
    });
});
