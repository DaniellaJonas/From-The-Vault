chartIt();
chartIt1();
chartIt2();
chartIt3();


async function fetchDemo(x,y){
    const response = await fetch("info.csv");
    const data = await response.text();
    const cuisines = [];
    const Costs = [];
    console.log(data);

    const table = data.trim().split('\n').slice(1);

    table.forEach(row => {
        const columns = row.split(',');
        const cuisine = columns[x];
        cuisines.push(cuisine);
        const Cost = columns[y];
        Costs.push(Cost);
    });
    
    return {Costs,cuisines};
}

async function chartIt(){
    const data = await fetchDemo(0,1);
    const ctx = document.getElementById('myChart')
    // .getContext('2d');
    ctx.height = 50;
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.cuisines,
            datasets: [{
                label: 'Cost',
                data: data.Costs,
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

async function chartIt1(){
    const data = await fetchDemo(0,3);
    const ctx = document.getElementById('myChart1')
    // .getContext('2d');
    ctx.height = 50;
    const myChart1 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.cuisines,
            datasets: [{
                label: 'Popularity',
                data: data.Costs,
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

async function chartIt2(){
    const data = await fetchDemo(0,4);
    const ctx = document.getElementById('myChart2')
    // .getContext('2d');
    ctx.height = 50;
    const myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.cuisines,
            datasets: [{
                label: 'Healthiness',
                data: data.Costs,
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

async function chartIt3(){
    const data = await fetchDemo(0,4);
    const ctx = document.getElementById('myChart3')
    // .getContext('2d');
    ctx.height = 50;
    const myChart3 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.cuisines,
            datasets: [{
                label: 'Complexity',
                data: data.Costs,
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