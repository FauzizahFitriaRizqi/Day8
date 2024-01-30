const TAX_RATE = 0.1;

function purchaseBook(title, author, price, discountPercentage, taxPercentage, stock, amountToPurchase) {
    console.log("Book Details");
    console.log("Title                      : ", title);
    console.log("Author                     : ", author);
    console.log("Price                      : ", price);
    console.log("Available Stock            : ", stock);

    price = parseFloat(price);

    let totalDiscountAmount = 0;
    let totalPriceBeforeTax = 0;

    const dueDates = [];

    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear()

    for (let i = 1; i <= stock; i++){
        if (i > amountToPurchase){
            break;
        }
        
        const discountAmount = price * (discountPercentage/100);
        totalDiscountAmount += discountAmount;

        const discountedPrice = price - discountAmount;
        totalPriceBeforeTax += discountedPrice;
    }

    currentMonth += 1;
    if(currentMonth == 12){
        currentMonth == 0;
        currentYear == 1;
    }

    dueDates.push(`${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}`);

    const taxAmount = totalPriceBeforeTax * (taxPercentage/100);
    const finalPrice = totalPriceBeforeTax + taxAmount;

    console.log("\nDiscount Details");
    console.log("Discount Percentage        : ", discountPercentage, "%");
    console.log("Total Discount Amount      : ", totalDiscountAmount);
    console.log("\nTax Details");
    console.log("Tax Percentage             : ", taxPercentage, "%");
    console.log("Tax Amount                 : ", taxAmount);
    console.log("\nPurchase Summary");
    console.log("Amount of Books            : ", amountToPurchase);
    console.log("Total Price Before Tax     : ", totalPriceBeforeTax);
    console.log("Final Price After Tax      : ", finalPrice);
    console.log("\nDue Dates");
    console.log(dueDates);

    if(amountToPurchase < stock){
        console.log("Buku dapat ditambahkan");
    }
    else{
        console.log("Buku tidak dapat ditambahkan karena stock habis");
    }
}

purchaseBook("Carzy Rich Asian", "Kevin Kwan", "30.000", "10", "5", "20", "3", "6");