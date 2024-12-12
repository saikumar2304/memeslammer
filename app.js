let btn = document.querySelector('.formbtn');

btn.addEventListener('click', () => {
    let name = document.querySelector('.disid').value;
    let email = document.querySelector('.Explain').value;
    if( name === '' || email === '') {
        alert('Please fill all fields');
        return;
    }
    else{

        alert('your Request has been submitted successfully. We will contact you shortly.');
        clear();

    }
    });

let clear = function (){
    document.querySelector('.disid').value = '';
    document.querySelector('.Explain').value = '';
}

