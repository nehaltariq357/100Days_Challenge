let guests = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
guests.forEach(guest => {
    // console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
//Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
let unableToAttend = guests[2];
// console.log(`\n${unableToAttend} can't make it to dinner\n`)
// replace guest
let newGuest = "Leonardo da Vinci";
guests[guests.indexOf(unableToAttend)] = newGuest;
console.log(guests);
guests.forEach((guest) => {
    // console.log(`Dear ${guest}, would you like to join me for dinner ?`)
});
// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests
// adding more guest
// beginnig
guests.unshift("Isaac Newton");
// middle
guests.splice(2, 0, "Charles Darwin"); // 2-> index number , 0 ->  number of elements to be removed , "string" -> to be added 
guests.push("Ada Lovelace");
guests.forEach((guest) => {
    console.log(`Dear ${guest}, would you like to join me for dinner ? `);
});
export {};
