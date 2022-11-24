import React,{useEffect,useState} from 'react'
import { GifGridItem } from './GifGridItem';
import { getGift} from '../helpers/getGifs';

export default function GifGrid({categorias}) {
  
  const [img, setImg] = useState([]);

  useEffect(() => {
    getGift(categorias).then(imgs=>setImg(imgs));
  }, [categorias])
  
  
  
  return (
    <div className='card-grid' >
        {img.map((item)=>{ return(
          <GifGridItem key={item.id} item={item}/>
)        }) }
    </div>
  )
}
