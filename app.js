
let btn = document.querySelector("button");
let ul = document.querySelector("#list");
let url = "http://universities.hipolabs.com/search?name=";

btn.addEventListener("click", async () => {
     let country = document.querySelector("input").value;
     let clgarray = await getCollage(country);
     show(clgarray);
})

function show(clgarray) {
     ul.innerText = "";
     for (clg of clgarray) {
          console.log(clg.name);
          let li = document.createElement("li");
          li.innerText = clg.name;
          ul.appendChild(li);
     }
}

async function getCollage(country) {
     try {
          let ans = await axios.get(url + country);
          return ans.data;
     } catch (e) {
          return [];
     }
}

