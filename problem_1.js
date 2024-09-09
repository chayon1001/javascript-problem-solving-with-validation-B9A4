function calculateMoney(ticketSale) {
    if(ticketSale < 0){
        return 'Invalid Number'
    }
    const eachTicketPrice = 120;
    const gateman = 500;
    const staff = 8*50
    
    const res = (ticketSale * eachTicketPrice) - (gateman + staff);
    return res;
}

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));
console.log(calculateMoney(-1));

