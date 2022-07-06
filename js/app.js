// $("#showSidebarBtn").click(function (){
//     $(".sidebar").animate({
//         marginLeft: 0
//     });
// });
//
// $("#hideSidebarBtn").click(function (){
//     $(".sidebar").animate({
//         marginLeft: '-100%'
//     });
// });
//
// function goUrl(url){
//     setTimeout(function (){
//         location.href = `${url}`;
//     }, 500)};
//
//
$(".full-btn").click(function (){
    // alert("hello")
    let current = $(".full-btn").closest(".full");
    current.toggleClass("full-screen");
    if(current.hasClass('full-screen')){
        $(".full-btn").html(` <i class="feather-minimize"></i>`);
    }else {
        $(".full-btn").html(` <i class="feather-maximize"></i>`);
    }
});
//
// let screenHeight = $(window).height();
// let currentScrollHeight = $(".nav-main .active-nav").offset().top;
//
// if(screenHeight*0.8<currentScrollHeight){
//     $(".sidebar").animate({
//         scrollTop: currentScrollHeight
//     }, 1000)
// }
//


// let menu = document.getElementById('menu');
// let menuItem = document.getElementById('menuItem');
// menu.onclick = function(){
//     menu.classList.toggle('menu-ani');
//
// }

$('#showSidebar').click(function () {
    $('.sidebar').animate({
        marginLeft: "0"
        }
    );
});

$('.hideSidebar').click(function () {
    $('.sidebar').animate({
            marginLeft: "-100%"
        }
    );
});

$('.darkMode').click(function () {
    $('.light-dark').toggleClass('dark-mode');
    if($('.modeIcon').hasClass('bi-moon-fill')){
        $('.modeIcon').removeClass('bi-moon-fill');
        $('.modeIcon').addClass('bi-sun-fill');
    }else {
        $('.modeIcon').removeClass('bi-sun-fill');
        $('.modeIcon').addClass('bi-moon-fill');
    }
});
