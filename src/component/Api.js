import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Api = () => {
    
    function GetImages() {
        const count = 1;
        const [state, setState] = useState([]);
        useEffect(() => {
            axios
                .get("https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=e74f279994089eba87d7030954569145&per_page=10&format=json&nojsoncallback=1")
                .then((data)=>{
                    setState(data.data.photos.photo)
                })    
        }, [count])
        
        return (
                state
        )
    }

    function getImageUrl(farm, server, id, secret) {
        return `https://live.staticflickr.com/${server}/${id}_${secret}_q.jpg`;
    }

    const data = GetImages();
    
    return(
        <div>
            {data.map((img)=>{
                const { farm, server, id, secret } = img;
                return(
                    <img alt="" src={getImageUrl(farm, server, id, secret)} width="300px" />
                )
                
            })}
        </div>
    )
    
}

export default Api