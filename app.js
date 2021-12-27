console.log("Let's get this party started!");
let APIKEY = "Y0PiOgIXIjvlHMP5Q1eqifEtt7ESd8X0";
async function getGif(){
    const input = getElementById("#search");
    const search = await 
    axios.get(`api.giphy.com/v1/gifs/search?
    api_key=${APIKEY}&limit=1&q=${input.value}`);
    console.log(search);
}
const btn = document.getElementById("#searchBtn");
    btn.addEventListener('click', function(e){
        e.preventDefault;
        getGif();
    });