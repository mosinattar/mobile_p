// Android Mobile List

let mobiles = [
    "Samsung Galaxy S25 Ultra",
    "Samsung Galaxy S25",
    "Samsung Galaxy A56 5G",
    "Samsung Galaxy A36 5G",
    "Samsung Galaxy M56 5G",
    "OnePlus 13",
    "OnePlus 13R",
    "OnePlus Nord 5",
    "OnePlus Nord CE 5",
    "Google Pixel 9 Pro XL",
    "Google Pixel 9 Pro",
    "Google Pixel 9",
    "Google Pixel 8a",
    "Xiaomi 15 Ultra",
    "Xiaomi 15",
    "Redmi Note 14 Pro+",
    "Redmi Note 14 Pro",
    "Redmi Note 14",
    "Realme GT 7 Pro",
    "Realme GT 7",
    "Realme P3 Pro",
    "Vivo X200 Pro",
    "Vivo X200",
    "Vivo V50",
    "Vivo T4 5G",
    "Oppo Find X8 Pro",
    "Oppo Find X8",
    "Oppo Reno 13 Pro",
    "Oppo Reno 13",
    "Nothing Phone (3a) Pro",
    "Nothing Phone (3a)",
    "Motorola Edge 60 Pro",
    "Motorola Edge 60 Fusion",
    "Motorola Razr 60 Ultra",
    "Poco F7",
    "Poco X7 Pro",
    "Poco M7 Pro 5G",
    "Infinix GT 30 Pro",
    "Infinix Note 50 Pro+",
    "Tecno Camon 40 Pro"
];

// Display the list
console.log("Android Mobile List:");

mobiles.forEach((mobile, index) => {
    console.log(`${index + 1}. ${mobile}`);
});