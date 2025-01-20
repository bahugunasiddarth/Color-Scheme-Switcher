const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);

        if (e.target.id === 'color1') {
            body.style.backgroundColor = '#7F58AF';
        }
        if (e.target.id === 'color2') {
            body.style.backgroundColor = '#64C5EB';
        }
        if (e.target.id === 'color3') {
            body.style.backgroundColor = '#E84D8A';
        }
        if (e.target.id === 'color4') {
            body.style.backgroundColor = '#FEB326';
        }    
        
    });
});