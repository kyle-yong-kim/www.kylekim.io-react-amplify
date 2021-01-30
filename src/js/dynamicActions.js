import $ from 'jquery';

window.addEventListener("resize", switchImg)
document.addEventListener('DOMContentLoaded', initialize)

var widthToHeight = {
    "work": {},
    "project": {}
};

/*
document.getElementsByClassName('close-button').addEventListener('click',function() {
    var c = document.getElementsByClassName('close-button');
    for (var i = 0; i < c.length; i++) {
        // you are adding the css class "animate in the function"
        c[i].classList.add('slide-out-left');
    }
  })
*/

// for AOS functionality
// $(function() {
//   AOS.init();
// });
  
// $(window).on('load', function() {
//   AOS.refresh();
// });

// $(document).ready(function () {
//     $("h1").hover(
//         function () {
//             // $(this).text("정보와. 과학을. 말하다.");
//             $(this).text("I do software.");
//             $("#passion_header").css("background-color", "yellow");
//             $(this).filter(':not(:animated)').animate({
//                 marginLeft: '40px',
//                 opacity: 0.6
//             }, 700);
//         },
//         function () {
//             // $(this).text("Passion. In. Programming.");
//             $(this).text("Welcome.");
//             //$(this).css('background-color', "yellow");
//             $(this).animate({
//                 marginLeft: '0px',
//                 opacity: 1
//             }, 700);
//         });
// });

function switchImg() {
    // if (window.outerWidth < 1007) {
    //     document.getElementById("myFace").setAttribute("src", "img/grad.jpg")
    // }
    // else {
    //     document.getElementById("myFace").setAttribute("src", "img/grad.jpg")
    // }
}

function youtube_preload() {
    document.getElementById("youtube-vid").style.visibility = "visible"
}

function pdfLoader_software() {
    window.location.href = "KKim_Resume.pdf"
}

function initialize() {
    switchImg();
    // portfolioItemHeightAdjust();
    // youtube_preload();

    var classname = document.getElementsByClassName("cv_link_software");

    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('click', pdfLoader_software, false);
    }
}

// function portfolioItemHeightAdjust() {

//     var classname = document.getElementsByClassName("workexp-item");

//     if (parseInt(classname[0].clientWidth) in widthToHeight.work) {
//         // this width is already seen before, so change the height accordingly
//         $(".workexp-item").css('min-height', widthToHeight.work[parseInt(classname[0].clientWidth)]);
//         $(".project-item").css('min-height', widthToHeight.project[parseInt(classname[0].clientWidth)]);
//     }
//     else {
//         // update for workexp-item
//         var maxHeight = 0;
//         for (var i = 0; i < classname.length; i++) {
//             maxHeight = Math.max(maxHeight, parseInt(classname[i].clientHeight));
//         }

//         widthToHeight.work[parseInt(classname[0].clientWidth)] = maxHeight;
//         $(".workexp-item").css('min-height', maxHeight);
        
//         // update for project-item
//         var classname = document.getElementsByClassName("project-item");

//         var maxHeight = 0;
//         for (var i = 0; i < classname.length; i++) {
//             // console.log(maxHeight);
//             maxHeight = Math.max(maxHeight, parseInt(classname[i].clientHeight));
//         }

//         widthToHeight.project[parseInt(classname[0].clientWidth)] = maxHeight;
//         $(".project-item").css('min-height', maxHeight);
//     }
// }

// $(window).resize(function() { 
//     //call to your function and check the window width
//     portfolioItemHeightAdjust();
// });