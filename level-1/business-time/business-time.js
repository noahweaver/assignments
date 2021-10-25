var homeButton = document.getElementById("home-button");
console.log("homeButton");
homeButton.addEventListener("click", function(){
 document.location.href = "http://127.0.0.1:5500/assignments/business-time/business-time-home.html"       
    });
var aboutButton = document.getElementById("about-button");
console.log("aboutButton");
aboutButton.addEventListener("click", function(){
    document.location.href = "http://127.0.0.1:5500/assignments/business-time/business-time-about.html"
});
var contactButton = document.getElementById("contact-button");
console.log("contactButton");
contactButton.addEventListener("click", function(){
    document.location.href = "http://127.0.0.1:5500/assignments/business-time/business-time-contact.html"
});

// Contact Page
function sendEmail(){
    var mailto = "noahweaver@aol.com";
    var body = "Dear DaWeavs Development,";
    var subject = "Business Inquiry";
        // window.location.href = "mailto"+mailto+"body="+body+"&subject="+subject;
        window.location.href = "mailto:" +mailto+ "?body=" +body+ "&subject="+subject;
}