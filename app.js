const passwordArea= document.getElementById('password-area');
const passwordLenght = document.getElementById('lenght-options');
const enterButton = document.getElementById('Enter-Button');

function passwordCreate(){
    passwordArea.innerText='';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?.!';
    for(let i=0;i<passwordLenght.value;i++){        
        const randomIndex = Math.floor(Math.random() * characters.length);
        const randomCharacter = characters[randomIndex];
        passwordArea.innerText+=randomCharacter;

    }
}

enterButton.addEventListener('click',passwordCreate);