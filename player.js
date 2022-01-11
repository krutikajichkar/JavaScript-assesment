const playlist = [
    {
        video:"https://player.vimeo.com/video/190062231",
        description:"There is no other way but to commit wholeheartedly to a relationship with a croissant. We have all found ourselves at the mercy of its allure. Here, in another epic film by the uber talented Nathan Rodger, our Erin divulges her personal romance with The Croissant.",
        title:"croissants | Flour and Stones",
        views:"98.2k"
    },
    {
        video:"https://player.vimeo.com/video/192650599", //potatoes
        description:"There is no other way but to commit wholeheartedly to a relationship with a croissant. We have all found ourselves at the mercy of its allure. Here, in another epic film by the uber talented Nathan Rodger, our Erin divulges her personal romance with The Croissant.",
        title:"Garlic mashed potatoes",
        views:"72.4k"
    },
    {
        video:"https://player.vimeo.com/video/191626548", //cake
        description:"There is no other way but to commit wholeheartedly to a relationship with a croissant. We have all found ourselves at the mercy of its allure. Here, in another epic film by the uber talented Nathan Rodger, our Erin divulges her personal romance with The Croissant.",
        title:"PineApple Cheesecake",
        views:"56.7k"
    },
    {
        video:"https://player.vimeo.com/video/47643786", //icecream
        description:"There is no other way but to commit wholeheartedly to a relationship with a croissant. We have all found ourselves at the mercy of its allure. Here, in another epic film by the uber talented Nathan Rodger, our Erin divulges her personal romance with The Croissant.",
        title:"Ice Cream Receipe",
        views:"50.4k"
    },
   
    {
        video:"https://player.vimeo.com/video/617094553", //dhokla
        description:"There is no other way but to commit wholeheartedly to a relationship with a croissant. We have all found ourselves at the mercy of its allure. Here, in another epic film by the uber talented Nathan Rodger, our Erin divulges her personal romance with The Croissant.",
        title:"Dhokla Receipe",
        views:"88k"
    },

    {
        video:"https://player.vimeo.com/video/166409731", // bread
        description:"There is no other way but to commit wholeheartedly to a relationship with a croissant. We have all found ourselves at the mercy of its allure. Here, in another epic film by the uber talented Nathan Rodger, our Erin divulges her personal romance with The Croissant.",
        title:"Garlic Bread 9 ways",
        views:"48.2k"
    },
];

let videoplayer = document.getElementById('video-player');
let viewscount = document.getElementById('views-count');
let videotitle = document.getElementById('video-title');
let videodescription = document.getElementById('video-description');
let playlistcard = document.querySelectorAll('.playlist-card');

let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let card4 = document.getElementById('card4');
let card5 = document.getElementById('card5');
let card6 = document.getElementById('card6');

card1.addEventListener('click',() => {
videoplayer.src = playlist[0].video;
videotitle.innerHTML = playlist[0].title;
videodescription.innerHTML = playlist[0].description;
viewscount.innerHTML = playlist[0].views;
 
});

card2.addEventListener('click',() => {
    videoplayer.src = playlist[1].video;
    videotitle.innerHTML = playlist[1].title;
    videodescription.innerHTML = playlist[1].description;
    viewscount.innerHTML = playlist[1].views;
    playlistcard.forEach(function(card){
        if(card.classList.contains('active-card')){
            card.classList.remove('active-card');
        }
    })
    card2.classList.add('active-card');
    });

card3.addEventListener('click',() => {
        videoplayer.src = playlist[2].video;
        videotitle.innerHTML = playlist[2].title;
        videodescription.innerHTML = playlist[2].description;
        viewscount.innerHTML = playlist[2].views;
        playlistcard.forEach(function(card){
            if(card.classList.contains('active-card')){
                card.classList.remove('active-card');
            }
        })
        card3.classList.add('active-card');
        });

        card4.addEventListener('click',() => {
            videoplayer.src = playlist[3].video;
            videotitle.innerHTML = playlist[3].title;
            videodescription.innerHTML = playlist[3].description;
            viewscount.innerHTML = playlist[3].views;
            playlistcard.forEach(function(card){
                if(card.classList.contains('active-card')){
                    card.classList.remove('active-card');
                }
            })
            card4.classList.add('active-card');
            });

            card5.addEventListener('click',() => {
                videoplayer.src = playlist[4].video;
                videotitle.innerHTML = playlist[4].title;
                videodescription.innerHTML = playlist[4].description;
                viewscount.innerHTML = playlist[4].views;
                playlistcard.forEach(function(card){
                    if(card.classList.contains('active-card')){
                        card.classList.remove('active-card');
                    }
                })
                card5.classList.add('active-card');
                });

                card6.addEventListener('click',() => {
                    videoplayer.src = playlist[5].video;
                    videotitle.innerHTML = playlist[5].title;
                    videodescription.innerHTML = playlist[5].description;
                    viewscount.innerHTML = playlist[5].views;
                    playlistcard.forEach(function(card){
                        if(card.classList.contains('active-card')){
                            card.classList.remove('active-card');
                        }
                    })
                    card6.classList.add('active-card');
                    });


