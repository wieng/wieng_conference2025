function showDiv(currentButton, id) {
    var parentDiv = currentButton.parentNode;
    parentDiv.style.display = 'none';
    var selectedDiv = document.getElementById(id);
    selectedDiv.style.display = 'block';
}



