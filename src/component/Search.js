import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Search = (props) => {
    function SearchImages(query) {
        const [state, setState] = useState([]);
        useEffect(() => {
            axios
                .get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e74f279994089eba87d7030954569145&per_page=9&format=json&nojsoncallback=1&text="+query)
                .then((data)=>{
                    setState(data.data.photos.photo)
                })    
        }, [query])
        
        return (
                state
        )
    }

    function getImageUrl(farm, server, id, secret) {
        return `https://live.staticflickr.com/${server}/${id}_${secret}_q.jpg`;
    }

    const data = SearchImages(props.keyword);
    console.log(data)

    return (
        <div>
            {data.map((img, key)=>{
                const { farm, server, id, secret } = img;
                return(
                    <img key={key} alt="" src={getImageUrl(farm, server, id, secret)} width="300px" />
                )
                
            })}
        </div>
    )
}

export default Search
