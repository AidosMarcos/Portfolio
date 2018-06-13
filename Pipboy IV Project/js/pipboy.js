
$(document).ready(function(){
    var weapons = [
        {
            "name" : "44Pistol",
            "ammo" : ".44",
            "damage" : 48,
            "fire_rate" : 6,
            "range" : 119,
            "accuracy" :  66,
            "weight" : 4.2,
            "value" : 99,
            "image" : "img/44_pistol.png"
        },
        {
            "name" : "10mmPistol",
            "ammo" : "10mm",
            "damage" : 18,
            "fire_rate" : 46,
            "range" : 119,
            "accuracy" :  61,
            "weight" : 4.2,
            "value" : 53,
            "image" : "img/10mm_pistol.png"
        },
        {
            "name" : "assaultRifle",
            "ammo" : "5.56mm",
            "damage" : 30,
            "fire_rate" : 40,
            "range" : 119,
            "accuracy" :  72,
            "weight" : 13.1,
            "value" : 144,
            "image" : "img/AssaultrifleFO4.png"
        },
        {
            "name" : "laserPistol",
            "ammo" : "Energy",
            "damage" : 24,
            "fire_rate" : 50,
            "range" : 71,
            "accuracy" :  71,
            "weight" : 3.5,
            "value" : 69,
            "image" : "img/laser_pistol.png"
        },
        {
            "name" : "minigun",
            "ammo" : "5mm",
            "damage" : 8,
            "fire_rate" : 272,
            "range" : 131,
            "accuracy" :  35,
            "weight" : 27.4,
            "value" : 382,
            "image" : "img/Minigun.png"
        },
        {
            "name" : "combShotgun",
            "ammo" : "S.Shell",
            "damage" : 50,
            "fire_rate" : 20,
            "range" : 47,
            "accuracy" :  23,
            "weight" : 11.1,
            "value" : 87,
            "image" : "img/combat_shotgun.png"
        },
        {
            "name" : "reba",
            "ammo" : ".308",
            "damage" : 37,
            "fire_rate" : 3,
            "range" : 131,
            "accuracy" :  71,
            "weight" : 9.6,
            "value" : 55,
            "image" : "img/reba.png"
        }
    ];

    // object for SPECIAL attributes
    var special = [
        {
            "name" : "strength",
            "discription" : "Strength is a measure of your raw physical power. It affects how much you can carry and the damage of all melee attacks.",
            "image" : "img/FO4_Strength.png"
        },
        {
            "name" : "perception",
            "discription" : 'Perception is your environmental awareness and "sixth sense", and affects weapon accuracy in V.A.T.S.',
            "image" : "img/Fo4_Perception.png"
        },
        {
            "name" : "endurance",
            "discription" : "Endurance is a measure of your overall physical fitness. It affects yoiur total Health and the Action Point drain from sprinting.",
            "image" : "img/Fo4_Endurance.png"
        },
        {
            "name" : "charisma",
            "discription" : "Charisma is your ability to charm and convince others. It affects your success to persuade in dialogue and prices when yuyou barter.",
            "image" : "img/Fo4_Charisma.png"
        },
        {
            "name" : "intelligence",
            "discription" : "Intelligence is a measure of your overall mental acuity, and affects the number of Experience Points earned.",
            "image" : "img/Fo4_Intelligence.png"
        },
        {
            "name" : "agility",
            "discription" : "Agility is a measure of your overall finesse and reflexes. It affects the number of Action Points in V.A.T.S. and your ability to sneak.",
            "image" : "img/Fo4_Agility.png"
        },
        {
            "name" : "luck",
            "discription" : "Luck is a measure of your general good fortune. It affects the recharge rate of Critical Hits, and your chances of finding better items.",
            "image" : "img/Fo4_Luck.png"
        }
    ];


    $("#bgvid").on("ended", function() {
        window.location.href = 'file:///C:/Users/Marcos/Desktop/Code Developer/Udemy/Pipboy IV Project/index.html';
     });

    $('.item-list a').on('click', function(e) {
        $('.item-list a').removeClass('active');
        $(e.currentTarget).addClass('active');
    });

    $('.radio-list a').on('click', function(e) {
        $('.radio-list a').removeClass('active');
        $(e.currentTarget).addClass('active');
    });

    var totalW = 0;

    function totalWeight() {     
        for(item in weapons) {
            totalW = parseInt(weapons[item].weight) + totalW;
        }
        $('.weightTotal').html(totalW + "/240");
        console.log(totalW);
    }

    totalWeight();

    $('#status-tab').on('click', function(e){
        $('#status-tab').removeClass('tab-opacity');
        $('#special-tab').addClass('tab-opacity');
        $('#perks-tab').addClass('tab-opacity');
    });

    $('#special-tab').on('click', function(e){
        $('#special-tab').removeClass('tab-opacity');
        $('#status-tab').addClass('tab-opacity');
        $('#perks-tab').addClass('tab-opacity');
    });

    $('#perks-tab').on('click', function(e){
        $('#perks-tab').removeClass('tab-opacity');
        $('#status-tab').addClass('tab-opacity');
        $('#special-tab').addClass('tab-opacity');
    });


    $('.item-list a').on('mouseenter', function(e){
        var current_item = $(e.currentTarget).attr('class');
        for(item in weapons){  
            if (weapons[item].name == current_item) {
                var container = $('.item-stats');
                var cont_img = $('.item-image');
                container.find('.damage').html(weapons[item].damage);
                container.find('.ammo').html(weapons[item].ammo);
                container.find('.fire_rate').html(weapons[item].fire_rate);
                container.find('.accuracy').html(weapons[item].accuracy);
                container.find('.range').html(weapons[item].range);
                container.find('.weight').html(weapons[item].weight);
                container.find('.value').html(weapons[item].value);
                cont_img.find('.weapImage').attr('src',weapons[item].image);
            }
        }
    });


    $('.special-list a').on('mouseenter', function(e){
        var current_special = $(e.currentTarget).attr('id');
        for (item in special) {
            if (special[item].name == current_special) {
                var disc_container = $('.special-discription');
                var image_container = $('.special-image');
                disc_container.find('.special-text').html(special[item].discription);
                image_container.find('.specialImage').attr('src', special[item].image);
            } 
        }
    });

    // allows the image on the map to be moved around the container
    $( function() {
        $( "#draggable" ).draggable();
      } );


      //radio play sound and show gif

      function Play() {
          var audio = document.getElementById("radio");
          audio.play();
      }



      $('.radio-list a').on('click', function(e){
          $('#wave-image').attr('src', 'img/aerialanim2.gif');       
        Play();
      });
});