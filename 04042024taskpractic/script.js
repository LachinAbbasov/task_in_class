// Device class
//                - Brand
//             - Model
//                  - Screen size
//             - Battery level
//               - Price (maya dəyəri)
//               - Sale Price (satış qiyməti) (satış qiyməti maya dəyərindən hər zaman daha böyük olmalıdır)
//               - Discount Percentage (endirim faizi) (əgər endirim faizi sıfırdan böyükdürsə salePrice ona əsasən hesablanmalıdır, 
//             məsələn 10 faiz endirim faizi varsa və 100 manata satılırsa satış qiyməti 90 manat olaraq dəyişməlidir)
//            - Sale count (məhsulun satış sayı)
//               - CalculateProfit() - bu method isə həmin device-ın satışından əldə edilən gəliri hesablayacaq.Əgər məhsul ziyana satılarsa 
//             o zaman nə qədər ziyan etdiyini göstrəcək.
//                     - DisplayBatteryLevel() - bu method isə device-ın hazırdakı battereyasını göstərəcək
//                       - DisplayDetails() - bu mehtod isə device haqqında detalları yazacaq (screensize,model,brand,)

// Device class definition
class Device {
    constructor(brand, model, screenSize, batteryLevel, price, discountPercentage = 0, saleCount = 0) {
        this.brand = brand;
        this.model = model;
        this.screenSize = screenSize;
        this.batteryLevel = batteryLevel;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.saleCount = saleCount;
        this.salePrice = this.calculateSalePrice();
    }

    calculateSalePrice() {
        const discountAmount = this.price * (this.discountPercentage / 100);
        return this.price - discountAmount;
    }

    calculateProfit() {
        if (this.salePrice < this.price) {
            return this.price - this.salePrice;
        } else {
            return this.salePrice - this.price;
        }
    }

    displayBatteryLevel() {
        return `Battery level: ${this.batteryLevel}%`;
    }

    displayDetails() {
        return `Brand: ${this.brand}, Model: ${this.model}, Screen Size: ${this.screenSize}`;
    }
}

// Phone class definition
class Phone extends Device {
    constructor(brand, model, screenSize, batteryLevel, price, isSmart, discountPercentage = 0, saleCount = 0) {
        super(brand, model, screenSize, batteryLevel, price, discountPercentage, saleCount);
        this.isSmart = isSmart;
    }
}

// Laptop class definition
class Laptop extends Device {
    constructor(brand, model, screenSize, batteryLevel, price, isRGBkeyboard, discountPercentage = 0, saleCount = 0) {
        super(brand, model, screenSize, batteryLevel, price, discountPercentage, saleCount);
        this.isRGBkeyboard = isRGBkeyboard;
    }
}

// Products array
const products = [
    new Phone("Samsung", "Galaxy S21", "6.2 inches", 80, 1000, true, 5),
    new Laptop("Dell", "Inspiron", "15.6 inches", 90, 1500, true, true, 10),
    new Phone("Apple", "iPhone 12", "6.1 inches", 85, 1200, true, 8),
    new Laptop("HP", "Pavilion", "14 inches", 95, 800, false, true, 15)
];

// Function to filter products by price
function filterByPrice(products, price) {
    return products.filter(product => product.price > price).map(product => product.model);
}

// Function to filter products by name
function filterByName(products, name) {
    return products.filter(product => product.model.includes(name)).length;
}

// Function to get total profit from products array
function getTotalProfit(products) {
    return products.reduce((totalProfit, product) => totalProfit + product.calculateProfit(), 0);
}

// Example usage:
console.log(filterByPrice(products, 1000)); // Output: [ 'Galaxy S21', 'Inspiron' ]
console.log(filterByName(products, "iPhone")); // Output: 1
console.log(getTotalProfit(products)); // Output: 240




