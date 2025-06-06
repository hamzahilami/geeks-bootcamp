const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

function sortCarInventoryByYear(carInventory) {
  return carInventory.sort((a, b) => a.car_year - b.car_year);
}

const sortedInventory = sortCarInventoryByYear(inventory);
const carList = document.getElementById('car-list');

sortedInventory.forEach(car => {
  const li = document.createElement('li');
  li.textContent = `${car.car_make} ${car.car_model} - `;
  const yearSpan = document.createElement('span');
  yearSpan.textContent = car.car_year;
  yearSpan.className = 'car-year';
  li.appendChild(yearSpan);
  carList.appendChild(li);
});
