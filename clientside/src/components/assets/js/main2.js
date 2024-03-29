import $ from 'jquery';
export default function Mainjs2() {
    
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if(loader){

        setTimeout(function () {
            document.querySelector('.loader').style.border = '5px solid #0c1c2c'
    
        }, 3000);
        setTimeout(function () {
            loader.style.display = 'none'
            loader.style.zIndex = '-300000000000'
    
        }, 4000);
    }
});





function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ["Stocks", "Crypto", "Pair","Fiat"];
const el = document.getElementById("typewriter");

let sleepTime = 100;

let curPhraseIndex = 0;
nth=''

const writeLoop = async () => {
    while (true) {
        let curWord = phrases[curPhraseIndex];

        for (let i = 0; i < curWord.length; i++) {
            el.innerText = nth + curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 10);

        for (let i = curWord.length; i > 0; i--) {
            el.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 5);

        if (curPhraseIndex === phrases.length - 1) {
            curPhraseIndex = 0;
        } else {
            curPhraseIndex++;
        }
    }
};

writeLoop();

var spanToggler= document.querySelector('.span-toggler');
function toggleNv(){
    document.querySelector('.nav-r').classList.toggle('trans')
    document.querySelector('.resp-sec').classList.toggle('disp');
}
spanToggler.addEventListener('click',toggleNv);





$('.roadmap').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    dots:true ,
    autoplay:false,
    responsive:{
        0:{
            items:1
            
        },

        
        800:{
            items:2
        },
        1000:{
            items:2
        },
        1200:{
            items:1
        },
        1300:{
            items:4
        }
    }

})
$('.alerts').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true ,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            
        },

        400:{
            items:1
        },
        50:{
            items:1
        },
        600:{
            items:2
        },
        700:{
            items:2.4
        },

        800:{
            items:2.7
        },
        
        1000:{
            items:3
        },
        1200:{
            items:3
        },
        1300:{
            items:4
        }
    }
    
})

const accordionItems = document.querySelectorAll('.cp-main');

// faq section arcordion 
accordionItems.forEach(item => {
    const heading = item.querySelector('.cp-hed');
    const content = item.querySelector('.cp-body');
    const headingIcon= item.querySelector('.ont');

   
    heading.addEventListener('click', () => {
        accordionItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.cp-body').classList.remove('active-bd');
            }
        });

     
        item.classList.toggle('active');

      
        if (item.classList.contains('active')) {
            content.classList.add('active-bd')
            headingIcon.classList.replace('ti-plus','ti-minus')
        } else {
            content.classList.remove('active-bd');
            headingIcon.classList.replace('ti-minus','ti-plus')
        }
    });
});





var buttons = document.querySelectorAll('.arc');
var contentItems = document.querySelectorAll('.faq');


buttons.forEach(function(button) {
  button.addEventListener('click', function() {
   
    buttons.forEach(function(btn) {
      btn.classList.remove('active-r');
    });
    contentItems.forEach(function(content) {
      content.classList.remove('active-as');
    });

   
    var index = button.getAttribute('data-index');
    contentItems[index - 1].classList.add('active-as');
    button.classList.add('active-r');
  });
});


buttons[0].classList.add('active-r');
contentItems[0].classList.add('active-as');
document.getElementById("main-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    var password = document.getElementById("password").value;
    
    // Check if the password is correct
    if (password === "login123") {
      // Redirect to the specific page
      window.location.href = "dashboard.html"; // Replace "specific_page.html" with the URL of your specific page
    } else {
      alert("Incorrect password. Please try again.");
    }
  });

}
