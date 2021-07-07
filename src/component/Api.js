import React, {useState, useEffect} from 'react'
import axios from 'axios'


function Api() {

    const [state, setState] = useState([]);
    axios
        .get("https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=e74f279994089eba87d7030954569145&per_page=10&format=json&nojsoncallback=1")
        .then((data)=>{
            console.log(data.data.photos.photo)
        })
        console.log("hi")
    return (
        <div>
            hello everyone
        </div>
    )
}

export default Api
