const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("input-text");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("../img/sad-pikachu.gif")
            setName("");
            setAltura("");
            setPeso("");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let name = data.species.name;
            let ti,fra;
            ti=data.types;
            fra=data.abilities;
            // setStats(data.stat);
            setTipoFraqueza(ti,fra);
            setName("#"+data.id+" "+name);
            setAltura(data.height);
            setPeso(data.weight);
            pokeImage(pokeImg);
            console.log(pokeImg);
        }
    });
}
const setStats= (stat) =>{
    stat.forEach(el => {
        ti+=" "+el.type.name;
    });
}
const setName = (name) => {
    console.log("NAME: "+name);
    const pname=document.getElementById("pname");
    pname.innerHTML=name;
}
const setAltura = (alt) => {
    console.log("Altura: "+alt);
    const pname=document.getElementById("idaltura");
    pname.innerHTML=alt;
}
const setTipoFraqueza = (t,f) => {
    console.log("Tipo Fraqueza: "+t);
    let ti="";
    t.forEach(el => {
        ti+=" "+el.type.name;
    });
    const pname=document.getElementById("tipo");
    pname.innerHTML=ti;
    let val="";
    f.forEach(el => {
        val+=" "+el.ability.name;
    });
    const p2name=document.getElementById("fraqueza");
    p2name.innerHTML=val;
}
const setPeso = (alt) => {
    console.log("Peso: "+alt);
    const pname=document.getElementById("idpeso");
    pname.innerHTML=alt;
}
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokemon");
    pokePhoto.src = url;
}
var input = document.getElementById("input-text");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    fetchPokemon();
  }
});