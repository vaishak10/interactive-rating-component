function selectRating(rating)
{
    document.getElementById(`${rating}`).style.backgroundColor = '#7c8798';
    document.getElementById(`${rating}`).style.color = 'white';
}

function submitDetails(){
    document.getElementById('thank-you-state').style.display = 'grid';
    document.getElementById('initial-state').style.display = 'none';
}