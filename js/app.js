function toggleSection(){
    let hide = document.getElementById('view-more');
    let displaySetting = hide.style.display;
    let sectionButton = document.getElementById('sectionButton');
   
    if (displaySetting == 'block') {
        hide.style.display = 'none';
        sectionButton.innerHTML = 'View More'
    }
    else{
        hide.style.display = 'block';
        sectionButton.innerHTML = "Scroll up"
    }
}


