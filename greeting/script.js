document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").onsubmit = function() {

        let name = document.querySelector("#name").value;
        console.log("Hi " + name);

        document.querySelector("h1").innerHTML = "Hi " + name;

        let now = new Date();

        let hour = now.getHours();
        if (hour < 12) {
            document.querySelector("#time").innerHTML = "☀️ Good Morning";
        } else if (hour < 18) {
            document.querySelector("#time").innerHTML = "🌄 Good Afternoon";
        } else {
            document.querySelector("#time").innerHTML = "🌆 Good Night";
        }

        let day = now.getDay();

        if (day == 0) {
            document.querySelector("#day").innerHTML = "Today is Sunday";
        } else if (day == 1) {
            document.querySelector("#day").innerHTML = "Today is Monday";
        } else if (day == 2) {
            document.querySelector("#day").innerHTML = "Today is Tuesday";
        } else if (day == 3) {
            document.querySelector("#day").innerHTML = "Today is Wednesday";
        } else if (day == 4) {
            document.querySelector("#day").innerHTML = "Today is Thursday";
        } else if (day == 5) {
            document.querySelector("#day").innerHTML = "Today is Friday";
        } else if (day == 6) {
            document.querySelector("#day").innerHTML = "Today is Saturday";
        }

        if (day == 6) {
            document.querySelector("#friday").innerHTML = "Just enjoy your weekend 🙌";
        } else if (day == 0) {
            document.querySelector("#friday").innerHTML = "Just enjoy your weekend 🙌";
        } else if (day < 5) {
            document.querySelector("#friday").innerHTML = "Not Friday, yet!";
        } else if  (day == 5) {
            document.querySelector("#friday").innerHTML = "Finally fridayy";
        }

        return false; //Prevents website from reloading.
    }
});
