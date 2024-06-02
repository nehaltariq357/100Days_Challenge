"use strict";
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Making ${size}, size of t-shirt with message of ${message}, printed on it`);
}
make_shirt();
make_shirt("medium"); // Default message, medium size
make_shirt("small", "Dive into Coding"); // Custom message, small size
