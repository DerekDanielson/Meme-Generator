const form = document.querySelector('#memeform')
const imgSrc = document.querySelector('input[name="image"]')
const topText = document.querySelector('input[name="toptext"]')
const bottomText = document.querySelector('input[name="bottomtext"]')
const results = document.querySelector('#results')
const meme = document.querySelector('.container')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newMeme = makeMeme(imgSrc.value, topText.value, bottomText.value);
    results.appendChild(newMeme);
});

function makeMeme(image, toptxt, btmtxt){
    const memeDiv = document.createElement('div');
    memeDiv.classList.add('container');
    const img = new Image();
    img.src = image;
    memeDiv.appendChild(img);
    imgSrc.value = '';

    const toptext = document.createElement('div');
    if(topText.value.length < 1){
        toptext.classList.add('hidden');
    } else {
        toptext.classList.add('top-centered');
        toptext.innerText = toptxt;
        memeDiv.appendChild(toptext);
        topText.value = '';
    }

    const btmtext = document.createElement('div');
    if(bottomText.value.length < 1){
        btmtext.classList.add('hidden');
    } else {
        btmtext.classList.add('btm-centered');
        btmtext.innerText = btmtxt;
        memeDiv.appendChild(btmtext);
        bottomText.value = '';
    }

    const overlayDiv = document.createElement('div');
    overlayDiv.classList.add('overlay');
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerText = "Delete";
    memeDiv.appendChild(overlayDiv);
    memeDiv.appendChild(deleteBtn);

    return memeDiv;
}

results.addEventListener('click',function(e){
        if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
        }
    });

