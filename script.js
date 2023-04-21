
theme = localStorage.getItem('theme')

if (theme == "null"){
  setTheme('light')
}else{
  setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; i < themeDots.length; i++)
{
  themeDots[i].addEventListener('click',  function(){
    let mode = this.dataset.item;
    console.log('Function Clicked', mode);
    setTheme(mode);
  })
}


function setTheme(mode){
  if(mode == "light")
  {
    document.getElementById('theme-style').href = "default.css";
  }
  if(mode == "blue")
  {
    document.getElementById('theme-style').href = "blue.css";
  }
  if(mode == "green")
  {
    document.getElementById('theme-style').href = "green.css";
  }
  if(mode == "purple")
  {
    document.getElementById('theme-style').href = "purple.css";
  }

  localStorage.setItem('theme', mode)
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
});



const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));
