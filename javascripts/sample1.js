let input = document.getElementById("filter-input");
let ul = document.getElementById("country-list");

const apiUrl = "https://restcountries.com/v3.1/all";

const fetchedData = fetch(apiUrl).then((response) => response.json());
fetchedData.then((x)=>{
    let apiData = [];

    for (const item of x) {
        apiData.push({name: item.name.common, flag: item.flags.svg});
    };

    apiData.sort((a,b) => (a.name > b.name) ? 1 : -1);

    for (const item of apiData) {
        let li = document.createElement("li");
        let box = document.createElement("div");
        box.classList.add("box");
        let img = document.createElement("img");
        let h4 = document.createElement("h4");
        box.appendChild(img);
        box.appendChild(h4);
        li.appendChild(box);
        ul.appendChild(li);

        img.src = item.flag;
        img.setAttribute = item.name;
        h4.textContent = item.name.toLowerCase();
    };
});