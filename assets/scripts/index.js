$(document).ready(function () {
    //main code goes here

    //selectors goes here - by ID
    const linkProvider = $('#contact-me-linker');

    //arrays and variables goes here
    const quoteTexts = ["Believe.", "I may not be perfect, but I'm learning everyday."];


    setTimeout(function() {
        linkProvider.text('Good link')
    }, 3000);
});