import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  shoes_nike = [
    { image: "img1.webp", title: "Nike dunk",price: "850$"  , available: true  },
    { image: "img2.webp", title: "Nike Dunk", price: "750$" , available: true  },
    { image: "img3.webp", title: "Nike air jordan 1", price: "150$" , available: true  },
    { image: "img4.webp", title: "Nike air max 270", price: "210$", available: true  },
    { image: "img5.webp", title: "Nike air jordan 1 mid se", price: "888$" , available: true  },
    { image: "img6.webp", title: "Jordan 1 low triple golf", price: "1100$", available: true  },
    { image: "img7.webp", title: "Nike react infinity flyknit 3 ", price: "1252$", available: true  },
    { image: "img8.webp", title: "Nike revolution 6", price: "110$", available: true  },
    { image: "img9.webp", title: "Nike Structure 24", price: "230$", available: true  },
    { image: "img10.webp",title: "Nike Air Zoom Alphafly", price: "670$", available: true  },
    ];
    product = [
      { image: "vans1.webp", title: "Vans Old Skool",price: "850$"  , available: true  },
      { image: "vans2.webp", title: " Vans Old Skool white", price: "750$" , available: true  },
      { image: "vans3.webp", title: "Vans Old Skool Classic", price: "150$" , available: true   },
      { image: "img2.webp", title: "Nike Dunk", price: "750$" , available: true  },
      {image: "img5.webp", title: "Nike air jordan 1 mid se", price: "888$" , available: true},
      {image: "img6.webp", title: "Jordan 1 low triple golf", price: "1100$", available: true}
      
      ];

    shoes_vans = [
      { image: "vans1.webp", title: "Vans Old Skool",price: "850$"  , available: true  },
      { image: "vans2.webp", title: " Vans Old Skool white", price: "750$" , available: true  },
      { image: "vans3.webp", title: "Vans Old Skool Classic", price: "150$" , available: true  },
      { image: "vans4.webp", title: "vans old skool pig suede yellow", price: "210$", available: true  },
      { image: "vans5.webp", title: " vans old skool", price: "888$" , available: true  },
      { image: "vans6.webp", title: "vans sk8 ", price: "1100$", available: true  },
      { image: "vans7.webp", title: "vans sk8-hi mte-2 ", price: "1252$", available: true  },
      { image: "vans8.webp", title: "vans sk8-hi", price: "110$", available: true  },
      { image: "vans9.webp", title: "vans sk8-hi", price: "230$", available: true  },
      { image: "vans10.webp",title: "vans sk8-hi mte-2", price: "670$", available: true  },
      ];
      
  constructor() { }
}
