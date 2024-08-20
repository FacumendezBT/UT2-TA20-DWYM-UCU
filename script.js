
window.onload = () => {
    const card = document.querySelector('.card');
    const cardImage = document.getElementById('cardImage');
    const cardTitle = document.getElementById('cardTitle');
    const cardDescription = document.getElementById('cardDescription');
    
    let initialImage = "newark_1.png";
    let flippedImage = "idt.png";
    
    card.addEventListener('mouseover', () => {
        setTimeout(() => {
            cardImage.src = flippedImage;
            cardDescription.style.display = 'block';
            cardTitle.style.display = 'block';
        }, 300);
    });
    
    card.addEventListener('mouseout', () => {
        setTimeout(() => {
            cardImage.src = initialImage;
            cardTitle.style.display = 'none';
            cardDescription.style.display = 'none';
        }, 300);
    });    
}