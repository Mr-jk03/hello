const thu = document.getElementById('thu')
const lq = document.getElementById('lq')
    function showThu(){
    thu.style.display ='block';

        setTimeout(function(){
            thu.style.transform = 'translateY(10px)';
            thu.style.opacity = 1;
        }, 100)
        setTimeout(function(){
            lq.style.transform = 'translateX(0px)';
            lq.style.opacity = 1;
        }, 4000)
    }