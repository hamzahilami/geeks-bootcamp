(function(nChildren, PartnerName , location , jobtitle ) {
    text= "you will be a " + jobtitle + " in " + location + " and married to " + PartnerName + " with " + nChildren + " kids"
    document.getElementsByTagName("p")[0].innerHTML = text;
}
)