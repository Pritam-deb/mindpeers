import React,{useState, useEffect} from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component';
import ImageGrid from './ImageGrid';
import Modal from './Modal';

const perPage = 24
const Search = (props) => {
    const [state, setState] = useState([]);
    const [index, setIndex] = useState(1);
    const [selectedImg,setSelectedImg] = useState(null);
    useEffect(() => {
        SearchImages(props.keyword);
    },[index])
    
    function SearchImages(query) {
        axios
            .get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e74f279994089eba87d7030954569145&per_page=${index*perPage}&page=4&format=json&nojsoncallback=1&text=`+query)
            .then((data)=>{
                setState(data.data.photos.photo)
            })
        
    }

    function getImageUrl(server, id, secret) {
        return `https://live.staticflickr.com/${server}/${id}_${secret}_q.jpg`;
    }

    

    return (
        <div>
            <InfiniteScroll
                dataLength = {state?.length}
                next = {setIndex.bind(this,index+1)}
                hasMore = {true}
                loader = {<h4>Loading.....</h4>}
            >
            <div>
                {state?.map((img)=>{
                    const { server, id, secret } = img;
                    return(
                        <img key={img.id} alt="" src={getImageUrl(server, id, secret)} width="300px" />
                    )
                
                })}
            </div>
            <ImageGrid setSelectedImg={setSelectedImg} data={state} />
            { selectedImg && (
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
            </InfiniteScroll>
        </div>
        
    )
}

export default Search
