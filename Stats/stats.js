async function fetchDemo(){
    const response = await fetch("info.csv");
    const data = await response.text();
    const cuisines = [];
    const popularities = [];
    console.log(data);

    const table = data.trim().split('\n').slice(1);

    table.forEach(row => {
        const columns = row.split(',');
        const cuisine = columns[1];
        cuisines.push(cuisine);
        const popularity = columns[3];
        popularities.push(popularity);
    });
    
    return { cuisines, popularities };
}

async function chartIt(){
    const data = await fetchDemo();
    const ctx = document.getElementById('P').getContext('2d');
    ctx.height = 50;
    const P = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.cuisines,
            datasets: [{
                label: 'Popularity',
                data: data.popularities,
                backgroundColor: 'rgba(255, 245, 232, 0.425)',
                borderColor: 'rgb(141, 0, 24)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

chartIt();