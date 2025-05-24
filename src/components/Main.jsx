import { useEffect, useState } from "react"
import memeImage from "../assets/meme.jpeg"

function Main() {

    const [meme, setMeme] = useState({
        topText: "Hello top text",
        bottomText: "Hello bottom text",
        imageUrl: memeImage
    })

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(resp => resp.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])


    const generateMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const newMemeUrl = allMemes[randomNumber].url;
        setMeme(prev => ({
            ...prev,
            imageUrl: newMemeUrl
        }))
    }

    const handleChange = (e) => {
        const { value, name } = e.currentTarget;
        setMeme(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="box">
                <label className="lab" htmlFor="top-label">Top Text:
                    <input
                        type="text"
                        name="topText"
                        id="top-label"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label className="lab" htmlFor="bottom-label">Bottom Text:
                    <input
                        type="text"
                        name="bottomText"
                        id="bottom-label"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={generateMemeImage}>Click to Generate a Meme Image 🖼</button>
            </div>

            <div className="meme">
                <img src={meme.imageUrl} alt="" />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}

export default Main