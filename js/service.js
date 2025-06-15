const Service = [
    {
        "title": "Domestic Tours",
        "link": "contact.html",
        image:'img/service/DomesticTours.jpg'
    },
    {
        "title": "International Tour",
        "link": "contact.html",
        image:'img/service/InternationalTour.jpg'
    },
    {
        "title": "MICE",
        "link": "contact.html",
        image:'img/service/mice.jpg'
    },
    {
        "title": "Hotels",
        "link": "contact.html",
        image:'img/service/Hotels.jpg'
    },
    {
        "title": "Insurance",
        "link": "contact.html",
        image:'img/service/Insurance.jpg'
    },
    {
        "title": "Flight",
        "link": "contact.html",
        image:'img/service/Flight.jpg'
    },
    {
        "title": "Visa",
        "link": "contact.html",
        image:'img/service/Visa.jpg'
    },
    {
        "title": "Transportation",
        "link": "contact.html",
        image:'img/service/Transportation.jpg'
    }
]


let services = document.querySelector('.services-container')
let serviceData = Service.map((data, index) => {
    console.log(data)
    return `
    <div class="service-box">
      <img src="${data.image}" alt="Domestic Tours">
      <div class="service-content">
        <h3>${data.title}</h3>
        <a href="${data.link}" class='button'>Book Now</a>
      </div>
    </div>
    `
}).join('');
services.innerHTML = serviceData;