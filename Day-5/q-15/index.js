"use strict";
let guests = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
//Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
let unableToAttend = guests[2];
console.log(`\n${unableToAttend} can't make it to dinner\n`);
// replace guest
let newGuest = "Leonardo da Vinci";
guests[guests.indexOf(unableToAttend)] = newGuest;
console.log(guests);
guests.forEach((guest) => {
    console.log(`Dear ${guest}, would you like to join me for dinner ?`);
});
