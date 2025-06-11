const Service = [
    {
        "title": "Domestic Tours",
        "link": "contact.html",
        image: 'https://img3.exportersindia.com/product_images/bc-full/dir_66/1962217/domestic-tour-package-services-1500013028-3139807.jpeg'
    },
    {
        "title": "International Tour",
        "link": "contact.html",
        image: "https://5.imimg.com/data5/SELLER/Default/2022/2/WH/OJ/VM/15342286/international-tour-package.png"
    },
    {
        "title": "MICE",
        "link": "contact.html",
        image: "https://images.wanderon.in/mice-images-collection/mice-tour"
    },
    {
        "title": "Hotels",
        "link": "contact.html",
        image: "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc="
    },
    {
        "title": "Insurance",
        "link": "contact.html",
        image: "https://www.godigit.com/content/dam/godigit/directportal/en/motor-vehicles-insurance-image.jpg"
    },
    {
        "title": "Flight",
        "link": "contact.html",
        image: "https://www.usatoday.com/gcdn/presto/2019/06/23/USAT/c3a9f051-bd6c-4b39-b5b9-38244deec783-GettyImages-932651818.jpg?width=660&height=517&fit=crop&format=pjpg&auto=webp"
    },
    {
        "title": "Visa",
        "link": "contact.html",
        image: "https://www.zealandimmigration.co.nz/images/products/tourist-visa.jpg"
    },
    {
        "title": "Transportation",
        "link": "contact.html",
        image: "https://static8.depositphotos.com/1364641/896/i/450/depositphotos_8960122-stock-photo-types-of-transport.jpg"
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