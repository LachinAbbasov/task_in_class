const productCompanyNameInp = document.querySelector("#product-company-name");
const productContactInp = document.querySelector("#product-contact-name");
const productContactTitInp = document.querySelector("#product-contact-title");
const productCompanyIdInp = document.querySelector("#product-company-id");
const submitBtn = document.querySelector(".submit-btn");
class Product {
    #;
    constructor(name, country, price = 0) {
      this.name = name;
      this.#price = price;
      this.country = country;
    }
    get price() {
      return this.#price;
    }
    set price(value) {
      if (value < 0 && typeof value !== "number") {
        throw new Error("product price cannot be negative");
      } else {
        this.#price = value;
      }
    }
  }