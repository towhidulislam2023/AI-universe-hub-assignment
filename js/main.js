console.log("connected");


const loadAllData = (inputNum) => {
    const URL = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(URL).then(res => res.json()).then(data => {
        displayCardData(data.data.tools.slice(0, inputNum))
    })
    
}

const displayCardData = (data) => {
    console.log(data.length);
    if (data.length === 6) {
        document.getElementById('showAllBtn').classList.remove('d-none')
        
    }
    else {
        document.getElementById('showAllBtn').classList.add('d-none')
        
    }

    const targetContainer = document.getElementById('cardContainer')
    targetContainer.innerHTML = '';
    // console.log(data);
    data.forEach(element => {
        console.log(element.id);






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
                        <li>${element.features[2]?element.features[2]:" Not Available"}</li>
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
                    <button onclick="loadModalData('${element.id}')" class="btn border border-2 rounded-circle btn-danger" data-bs-toggle="modal"
                        data-bs-target="#exampleModal"><i
                            class="fa-solid fa-arrow-right fa-2x"></i></button>
                </div>

            </div>
        </div>
    </div>
`
    });
    
}


//modal Data

const loadModalData = (id) => {
    const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    console.log(URL);
    fetch(URL).then(res => res.json()).then(data => {
        displayModalData(data.data);
    })
    
}

const displayModalData = (data) => {
    // console.log(data.pricing ? data.pricing[2].price:" ");
    console.log(data.integrations?data.integrations[0]:"No Data Found");
    console.log(data.integrations?data.integrations[1]:"No Data Found");
    console.log(data.integrations?data.integrations[2]:"No Data Found");

    



    let planNameforbasic =data.pricing?data.pricing[0].plan:"Free of Cost/Basic";
    if (planNameforbasic === 'Free'||planNameforbasic === '0') {
        planNameforbasic='Basic'
        
    }
    let priceingFeeforbasic = (data.pricing?data.pricing[0].price:" ");
    if (priceingFeeforbasic === '0'||priceingFeeforbasic === '') {
        priceingFeeforbasic="Free Of Cost/"
    }
    let planNameforpro =data.pricing? data.pricing[1].plan:"Free of Cost/pro";
    if (planNameforpro === 'Free'||planNameforpro === '0') {
        planNameforpro='pro'
        
    }
    let priceingFeeforpro = (data.pricing?data.pricing[1].price:"");
    if (priceingFeeforpro === '0'||priceingFeeforpro === 'No cost') {
        priceingFeeforpro="Free Of Cost/"
    }

    // data.forEach(elem => {
    //     console.log(elem);
        
    // });








    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = '';
    modalContainer.innerHTML += `
    <div class="modal-content ">
    <div class="modal-header">
        <button type="button" class="btn-close btn border border-2 rounded-circle btn-danger"
            data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <!-- <div class="d-flex flex-column flex-md-row justify-content-center gap-5 "> -->
        <div class="row row-cols-1 row-cols-md-2">
            <div class="col-12 col-md-8">
                <div class="card text-bg-light bg-danger-subtle mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${data.description}</h5>
                        <div class="d-flex flex-wrap justify-content-center gap-5 my-3 w-100">
                            <div class="bg-light rounded-2 d-flex justify-content-center align-items-center p-2"
                                style="height: 100px; width: 100px;">
                                <p class="text-center fw-bold text-success w-100">${priceingFeeforbasic} ${planNameforbasic}</p>
                            </div>
                            <div class=" bg-light rounded-2 d-flex justify-content-center align-items-center p-2"
                                style="height: 100px; width: 100px;">
                                <p class="text-center fw-bold text-danger-emphasis w-100">  ${priceingFeeforpro}
                                ${planNameforpro}
                               
                                </p>

                            </div>
                            <div class="bg-light rounded-2 d-flex justify-content-center align-items-center"
                                style="height: 100px; width: 150px;">
                                <p class="text-center fw-bold text-danger w-100">
                                ${data.pricing ? data.pricing[2].price : " Data Not Found"} ${data.pricing ? data.pricing[2].plan:" "}
                                </p>

                            </div>
                        </div>
                        <div class="d-flex flex-wrap justify-content-center gap-5 my-5 p-3 w-120">
                            <div>
                                <h5 class="fw-bold"> Features</h5>
                                <ul>
                                    <li>
                                       ${data.features[1].feature_name}
                                    </li>
                                    <li>
                                    ${data.features[2].feature_name}
                                    </li>
                                    <li>
                                    ${data.features[3].feature_name}
                                    </li>
                                </ul>

                            </div>
                            <div>
                                <div>
                                    <h5 class="fw-bold">Integrations</h5>
                                    <ul>
                                        <li>
                                           ${data.integrations?data.integrations[0]?data.integrations[0]:"No Data Found":"No Data Found"}
                                        </li>
                                        <li>
                                           ${data.integrations?data.integrations[1]?data.integrations[1]:"No Data Found":"No Data Found"}
                                        </li>
                                        <li>
                                        ${data.integrations?data.integrations[2]?data.integrations[2]:"No Data Found":"No Data Found"}
                                        </li>
                                    </ul>

                                </div>


                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div class=" col-12 col-md-4 ">
                <div class="card h-100 p-2">
                    <img src="./download.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-text fw-bold">Hi, how are you doing today?</h5>
                        <p class="text-center">I'm doing well, thank you for asking. How can I assist
                            you today?</p>
                    </div>
                </div>
            </div>

        </div>





    </div>
    <div class="modal-footer">
    </div>
</div>
    
    
    
    `

    
}




loadAllData(6)
