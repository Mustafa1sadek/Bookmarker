let nameInput =  document.getElementById('site-name');
let urlInput =  document.getElementById('site-url');
let divContainer = [];


if (localStorage.getItem('book-mark') == null)
{
    divContainer = [];
}

else
{
    divContainer = JSON.parse(localStorage.getItem("book-mark"));
    displayDiv();
}

function addDiv() {
    let bookMark = {
        namee:nameInput.value,
        url:urlInput.value,
    }
    if (nameInput.value == '') {
        document.getElementById('errorName').style.display  = 'block';
    }
    else if(/^(https|http)/.test(urlInput.value) == false)
    {
        document.getElementById('errorUrl').style.display  = 'block';
    }
    
    else{
        divContainer.push(bookMark);
        localStorage.setItem('book-mark' , JSON.stringify(divContainer));
        displayDiv();
        clear();
        document.getElementById('errorName').style.display  = 'none';
        document.getElementById('errorUrl').style.display  = 'none';

    }
}


function displayDiv() {
    let cartona = []; 
    for (let i = 0; i < divContainer.length; i++) {
        cartona +=
        `
        <div>
            <h2>${divContainer[i].namee}</h2>
            <div>
                <a href="${divContainer[i].url}" target="_blank"> <button class="btn btn-primary">visite</button> </a>
                <button onclick="deleteDiv(${i})" class="btn btn-danger">Delete</button>
            </div>
        </div>
        `
    }
    document.getElementById('content').innerHTML = cartona;
}

function deleteDiv(i) {
    divContainer.splice(i,1);
    localStorage.setItem('book-mark' , JSON.stringify(divContainer));
    displayDiv();
}

function clear() {
    nameInput.value = '';
    urlInput.value = '';
}