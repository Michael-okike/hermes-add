function toggleSection(){
    let hide = document.getElementById('view-more');
    let displaySetting = hide.style.display;
    let sectionButton = document.getElementById('sectionButton');
   
    if (displaySetting == 'block') {
        hide.style.display = 'none';
        sectionButton.innerHTML = 'Scroll up'
    }
    else{
        hide.style.display = 'block';
        sectionButton.innerHTML = "View More"
    }
}


