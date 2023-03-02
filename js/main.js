console.log("connected");


const loadAllData = (inputNum) => {
    const URL = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(URL).then(res => res.json()).then(data => {
        displayCardData(data.data.tools.slice(0, inputNum))
    })
    
}

const displayCardData = (data) => {
    console.log(data.length);
    if (data.length === 12) {
      document.getElementById('showAllBtn').classList.add('d-none')
    }
    const targetContainer = document.getElementById('cardContainer')
    targetContainer.innerHTML = '';
    // console.log(data);
    data.forEach(element => {
        console.log(element.image);






        targetContainer.innerHTML += `
        <div class="col">
        <div class="card h-100 p-1">
            <img src="${element.image}" class="card-img-top w-100 mx-auto  rounded" alt="...">
            <div class="card-body">
                <h3 class="card-title fw-bold">Features</h3>
                <div class="card-text">
                    <ol>
                        <li>${element.features[0]?element.features[0]:""}</li>
                        <li>${element.features[1]?element.features[1]:""}</li>
                        <li>${element.features[2]?element.features[2]:""}</li>
                        <li style="list-style:none;">${element.features[3]?element.features[3]:""}</li>
                    </ol>


                </div>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
                <div>
                    <h3 class="fw-bold">${element.name}</h3>
                    <p><i class="fa-regular fa-calendar-days"></i> ${element.published_in}</p>
                </div>
                <div>
                    <button class="btn border border-2 rounded-circle btn-danger" data-bs-toggle="modal"
                        data-bs-target="#exampleModal"><i
                            class="fa-solid fa-arrow-right fa-2x"></i></button>
                </div>

            </div>
        </div>
    </div>





        
        `

        
    });
    
}



loadAllData(6)