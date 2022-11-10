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
            const pname=document.getElementById("tipo");
            pname.innerHTML="";
            const p2name=document.getElementById("fraqueza");
            p2name.innerHTML="";
            const i1=document.getElementById("img1");
            const i2=document.getElementById("img2");
            const i3=document.getElementById("img3");
            const i4=document.getElementById("img4");
            const i5=document.getElementById("img5");
            const i6=document.getElementById("img6");
            const i7=document.getElementById("img7");
            i1.src="";
            i2.src="";
            i3.src="";
            i4.src="";
            i5.src="";
            i6.src="";
            i7.src="";
            
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
            setSprites(pokeImg,data.sprites);
            setTipoFraqueza(ti,fra);
            setName("#"+data.id+" "+name);
            setAltura(data.height);
            setPeso(data.weight);
            pokeImage(pokeImg);
            console.log(pokeImg);
        }
    });
}
const setSprites= (m,spri) => {
    let backdef=spri.back_default;
    let backshi=spri.back_shiny;
    let frontdef=spri.front_default;
    let frontshi=spri.front_shiny;
    let homefrontdef=spri.other.home.front_default;
    let dreamfrontdef=spri.other.dream_world.front_default;
    const i1=document.getElementById("img1");
    const i2=document.getElementById("img2");
    const i3=document.getElementById("img3");
    const i4=document.getElementById("img4");
    const i5=document.getElementById("img5");
    const i6=document.getElementById("img6");
    const i7=document.getElementById("img7");
    i1.src=backdef;
    i2.src=backshi;
    i3.src=frontdef;
    i4.src=frontshi;
    i5.src=homefrontdef;
    i6.src=dreamfrontdef;
    i7.src=m;

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
    console.log("Altura: "+alt+"M");
    const pname=document.getElementById("idaltura");
    pname.innerHTML=alt+"m";
}
const setTipoFraqueza = (t,f) => {
    console.log("Tipo Fraqueza: "+t);
    let ti="";
    t.forEach(el => {
        ti+='<span class="sp spblue"  style="margin-right: 2px">'+el.type.name+"</span>";
    });
    const pname=document.getElementById("tipo");
    pname.innerHTML=ti;
    let val="";
    let bol=true;
    f.forEach(el => {
        if(bol)
        {
            val+='<span class="sp spgreen" style="margin-right: 2px">'+el.ability.name+"</span>";
            bol=false;
        }
        else {
            val+='<span class="sp spyellow" style="margin-right: 2px">'+el.ability.name+"</span>";
            bol=true;
        }
    });
    const p2name=document.getElementById("fraqueza");
    p2name.innerHTML=val;
}
const setPeso = (alt) => {
    console.log("Peso: "+alt+"KG");
    const pname=document.getElementById("idpeso");
    pname.innerHTML=alt+"kg";
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

function changeImg(dato){
    pokeImage(dato);
}