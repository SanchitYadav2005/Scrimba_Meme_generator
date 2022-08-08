import React from "react";
import memeData from "../memeData";



function Meme() {
    const [meme, setMeme] = React.useState({  // here we created an object to save the value of state
        topText: "",
        bottomText:"",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    //this state holds the array of meme images as an state
    const [allMemeImages, setAllMemeImages] = React.useState(memeData)  
    // this function runs to get random image when the button clicked.
    function getMemeImage(){
        // set the array to a variable to use it easily
        const memesArray = allMemeImages.data.memes; 
        // here made a random index generator to get a random index to get random image form the array.
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // seted up the variable as url to save it and chande the randomImage value to get random image.
        const url = memesArray[randomNumber].url;
        // this is where all the magic happens we seted the setMeme to prevImage that generated automatically by react to get the previous property. We returned all the previous propertry as well as changed the randomImage property to get new random image.
        setMeme(prevImage => {
            return{
                ...prevImage,
                randomImage: url
            }
        })
    }
    return (
        <main>
            <div className="form-feild">
                <input type="text" className="form-input" placeholder="Top text" />
                <input type="text" className="form-input" placeholder="Bottom text" />
                <button className="form-btn" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <img src={meme.randomImage} className="meme--image" alt="random meme"/>
        </main>
    )
}

export default Meme;