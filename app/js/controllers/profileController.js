angular.module('app')
    .controller('ProfileController', function($scope, CurrentUser) {
      $scope.user = CurrentUser.user();

      var timer;
$(".perso ul li").mouseenter(function() {
    var that = this;
    timer = setTimeout(function(){
        $('.perso ul li').removeClass('hovered').addClass('adapt');
        $(that).addClass('hovered');
    }, 300);
}).mouseleave(function() {
    clearTimeout(timer);
});


$('.perso ul li:nth-of-type(1)').click(function(){
   $('.perso').fadeOut(800);
    $('article:nth-of-type(1)').delay( 200 ).fadeIn(1000);
});
$('.perso ul li:nth-of-type(2)').click(function(){
   $('.perso').fadeOut(800);
    $('article:nth-of-type(2)').delay(500).fadeIn(800);
});
$('.perso ul li:nth-of-type(3)').click(function(){
   $('.perso').fadeOut(800);
    $('article:nth-of-type(3)').delay(200).fadeIn(1000);
});
$('.perso ul li:nth-of-type(4)').click(function(){
   $('.perso').fadeOut(800);
    $('article:nth-of-type(4)').delay(300).fadeIn(1000);
});
$('.perso ul li:nth-of-type(5)').click(function(){
   $('.perso').fadeOut(800);
    $('article:nth-of-type(5)').delay(300).fadeIn(1000);
});

$('.close').click(function(){
    $('article').fadeOut(800);
  $('.perso').delay(300).fadeIn(800);
});



// MODAL CHAT //

var name = prompt('What is your name?');
function chatting() {
  var carlos = 'Carlos'; //a variable that the computer can use as it's name
  var chat = document.getElementById('chat').value; // used to get the text of user's input
  var chatuse = chat.toUpperCase(); //helps me easily identify what the user wrote even if they write with in lower or upper case.


  //this area will show all the possible responses to questions the user asks
  if (chatuse.includes('HELLO') || chatuse.includes('HI') ) {
    document.getElementById('chat').value = '';
      document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
    setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: Hello ' + name + ', How are you? <br />';
    }, 5000);
      } else if ((chatuse.includes('WHAT YEAR') || chatuse.includes('WHEN')) && chatuse.includes('BORN')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I was born in 1991.  <br />';
    }, 10000);
      } else if (chatuse.includes('WADDUP') || chatuse.includes('WHAT\'s UP') || chatuse.includes('SUP')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: Not much. What\'s up with you? <br />';
    }, 5000);
      } else if (chatuse.includes('GAY') || chatuse.includes('HOMOSEXUAL')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: No. I am heterosexual. <br />';
    }, 5000);
      } else if (chatuse.includes('FROM')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I am from Atlanta Georgia. <br />';
    }, 7000);
      } else if (chatuse.includes('FIRST') && chatuse.includes('CRUSH')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: Probably Madison, or Taylor, or Caroline...I don\'t really remember! <br />';
    }, 8000);
      } else if (chatuse.includes('HAVE') && chatuse.includes('GIRLFRIEND')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: Yes I do! <br />';
    }, 8000);
      } else if (chatuse.includes('WHO') && chatuse.includes('BEST FRIEND')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: Probably DJ, or Jordan, or Ryan, or Julio, maybe even Sonny. I don\'t know! Stop pressuring me! <br />';
    }, 8000);
      } else if (chatuse.includes('GIRLFRIEND') && chatuse.includes('NAME')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: Her name is Carmen. <br />';
    }, 8000);
      } else if (chatuse.includes('GIRLFRIEND') && chatuse.includes('WHO')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: Her name is Carmen. <br />';
    }, 8000);
      } else if (chatuse.includes('WHAT') && chatuse.includes('HER NAME')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: Her name is Carmen. <br />';
    }, 8000);
      } else if (chatuse.includes('VOTE') && chatuse.includes('TRUMP')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I don\'t really like to get into politics. But let\'s be honest, you probably already know the answer to that. <br />';
    }, 8000);
      } else if (chatuse.includes('OLD')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I am 25 years old. <br />';
    }, 5000);
      } else if (chatuse.includes('BIRTHDAY')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: My birthday is on the 4th of November. <br />';
    }, 10000);
      } else if (chatuse.includes('COUNTRY')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I am an American Citizen. <br />';
    }, 7000);
      } else if (chatuse.includes('AND YOU') || chatuse.includes ('HOW ARE')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I am doing well thanks. <br />';
    }, 8000);
      } else if (chatuse.includes('SCHATZ') || chatuse.includes('CHONEY') || chatuse.includes('CHOTS')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
    setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: Hi Choney! <br />';
    }, 4000);
      } else if (chatuse.includes('HUNGRY')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I just ate but thank you... <br />';
    }, 10000);
      } else if (chatuse.includes('LIKE') && chatuse.includes('JOB')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: Yes, I do not mind it at all! <br />';
    }, 12000);
      } else if (chatuse.includes('LIKE') && chatuse.includes('WORK')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: Yes, I do not mind it at all! <br />';
    }, 12000);
      } else if (chatuse.includes('FAVORITE CITY')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: Atlanta of course! Outside of Atlanta I would say Chicago. <br />';
    }, 10000);
      } else if (chatuse.includes('FAVORITE CITY') && ('EUROPE')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: That\'s a tough question. I really like Frankfurt, but I also liked Prague. Let\'s say Prague. <br />';
    }, 10000);
      } else if (chatuse.includes('WORK') || chatuse.includes('JOB')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I currently work as a receptionist at the European Central Bank. <br />';
    }, 12000);
      } else if (chatuse.includes('FAVORITE SPORT')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: Soccer has always been my favorite sport!  <br />';
    }, 9000);
      } else if (chatuse.includes('PLAY') && chatuse.includes('TEAM') && chatuse.includes("FOR")) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I am injured but I am currently signed with Sportfreunde Seligenstadt. <br />';
    }, 6000);
      } else if (chatuse.includes('PLAY') || chatuse.includes('LONG')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I have been playing soccer since the age of 7. <br />';
    }, 11000);
      } else if (chatuse.includes('THANKS')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: You\'re Welcome!  <br />';
    }, 4000);
      } else if (chatuse.includes('FAVORITE LANGUAGE')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I really like Spanish!  <br />';
    }, 4000);
      } else if (chatuse.includes('HOW MANY') && chatuse.includes('LANGUAGES')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I can speak English, Spanish, and German fluently and I can have a conversation in French. I can also understand some italian.  <br />';
    }, 13000);
      } else if (chatuse.includes('FAVORITE FOOD')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: That is very hard to say. I like Indian and Thai food  <br />';
    }, 9000);
      } else if (chatuse.includes('LAST NAME')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: My last name is McCrary.  <br />';
    }, 3000);
      } else if (chatuse.includes('MIDDLE NAME')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: My middle name is Darion.  <br />';
    }, 3000);
      } else if (chatuse.includes('NAME')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: My name is Carlos!  <br />';
    }, 3000);
      } else if (chatuse.includes('NUMBER')) {    document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: You really think I would tell you that?  <br />';
    }, 10000);
      } else if (chatuse.includes('FAVORITE') && chatuse.includes('TEAM')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I have always been a fan of Chelsea! I also have respect for Arsenal.  <br />';
    }, 11000);
      }
  else if (chatuse.includes('WHY') && chatuse.includes('CHELSEA')) {
    document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I have just always been a fan of the way they play!  <br />';
    }, 12000);
      } else if (chatuse.includes('WHY')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: Why what?  <br />';
    }, 3000);
      } else if (chatuse.includes('SURE')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: Yes I am very sure!  <br />';
    }, 4000);
      } else if (chatuse.includes('TIME IS IT')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: Time for you to get a watch!  <br />';
    }, 10000);
      } else if (chatuse.includes('TRAVEL')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: Travel... I would love to visit more countries in Europe like Italy, The Netherlands, Belgium, Norway, Sweden, and Finland...but I would also like to visit other continents. <br />';
    }, 10000);
      } else if (chatuse.includes('WEATHER')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: Honestly...It changes from day to day. <br />';
    }, 10000);
      } else if (chatuse.includes('THINK') && chat.includes('FUNNY')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I thought it was funny.  <br />';
    }, 7000);
      } else if (chatuse.includes('FAVORITE COLOR')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: My favorite color is blue.  <br />';
    }, 6000);
      } else if (chatuse.includes('ADDRESS'))  {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: Sorry. I am not going to give out that information.  <br />';
    }, 10000);
      }  else if (chatuse.includes('YOU LIVE')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: Frankfurt, Germany.  <br />';
    }, 4000);
      } else if (chatuse.includes('WHERE') && chatuse.includes('BORN')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I was born in Louisville, Kentucky but I moved to Georgia when I was 5 months old.  <br />';
    }, 11000);
      } else if (chatuse.includes('YOU') && chatuse.includes('BORN')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I was born in Louisville, Kentucky but I moved to Georgia when I was 5 months old.  <br />';
    }, 11000);
      } else if (chatuse.includes('MARRIED') || chatuse.includes('MARITAL STATUS')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I am not married but I live with my girlfriend. <br />';
    }, 9000);
      } else if (chatuse.includes('HAVE A CAR') || chatuse.includes('OWN A CAR')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: No, at the moment I do not have a car.  <br />';
    }, 8000);
      } else if (chatuse.includes('WHO ARE YOU')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I am Carlos. Your worst nightmare.  <br />';
    }, 8000);
      } else if (chatuse.includes('FINE') || chatuse.includes('GOOD')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: That\'s great! So... what do you want to ask me? <br />';
    }, 5000);
      } else if (chatuse.includes('FAVORITE PET') || chatuse.includes('FAVORITE ANIMAL')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I really like dogs <br />';
    }, 5000);
      } else if (chatuse.includes('PET') && chatuse.includes('HAVE')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I have a dog in Wisconsin but I do not personally own any pets <br />';
    }, 5000);
      } else if (chatuse.includes('DO MATH') || chatuse.includes('MATH') || chatuse.includes('+') || chatuse.includes('*') || chatuse.includes('-')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: Do I look like Siri to you? Take your Math somewhere else! <br />';
    }, 5000);
      } else if (chatuse.includes('A COMPUTER')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: Yup! I am programmed to answer questions about Carlos. <br />';
    }, 6000);
      } else if (chatuse.includes('LANGUAGE') && chat.includes('USE')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: JavaScript. Some HTML as well but mostly JavaScript. <br />';
    }, 10000);
      } else if (chatuse.includes('LANGUAGES') && chat.includes('SPEAK')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I speak English, Spanish, German and a little bit of French as well as Italian <br />';
    }, 10000);
      } else if ((chatuse.includes('SHOULD') || chatuse.includes('CAN')) && chatuse.includes('ASK')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: You can ask me anything about Carlos! I will respond as if I were him. <br />';
    }, 5000);
      } else if (chatuse.includes('TELL ME') && (chatuse.includes('ABOUT YOURSELF') || chatuse.includes('ABOUT CARLOS'))) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: You have to ask questions! I am just a robot ' + name + '. I cannot elaborate. <br />';
    }, 5000);
      } else if (chatuse.includes('FAVORITE MUSIC')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I like Hip hop. My favorite rapper is J. Cole. <br />';
    }, 5000);
      } else if (chatuse.includes('MUSIC') && chatuse.includes('LIKE')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I like Hip hop. My favorite rapper is J. Cole. <br />';
    }, 5000);
      } else if (chatuse.includes('MUSIC') && chatuse.includes('LISTEN')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += carlos + ': I like Hip hop. My favorite rapper is J. Cole. <br />';
    }, 5000);
      } else if (chatuse.includes('FAVORITE RAPPER') || chatuse.includes('FAVORITE ARTIST')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: My favorite rapper is J. Cole. <br />';
    }, 5000);
      } else if (chatuse.includes('RAPPER') && chatuse.includes('LIKE')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: My favorite rapper is J. Cole. <br />';
    }, 5000);
      } else if (chatuse.includes('NOTHING MUCH') || chatuse.includes('NOT MUCH')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: Okay. Do you have any questions for me?  <br />';
    }, 10000);
      } else if (chatuse.includes('LIKE IT') || chatuse.includes('LIKE FRANKFURT') || chatuse.includes('ENJOY FRANKFURT')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I like it! It is a lot of fun!  <br />';
    }, 3000);
      } else if (chatuse.includes('HAIR COLOR')) {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: Either brown or black. Depends on who you ask.  <br />';
    }, 5000);
      } else {
        document.getElementById('chat').value = '';
        document.getElementById('chatarea').innerHTML += '<span class="blue">' + name + '</span>: ' + chat + '<br />';
        setTimeout(function(){
      document.getElementById('chatarea').innerHTML += '<span class="red">' + carlos + '</span>: I am sorry ' + name + '. I don\'t know what you mean by "' + chat + '".  <br />';
    }, 11000);
      }
}


    });
