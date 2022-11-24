import React,{useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifExpertApp() {
    const [categorias, setCategorias] = useState(['f1'])
    
    return ( 
        <div className="App">
           <h2>GifExpertApp</h2>
           <AddCategory setCategorias={setCategorias}/>
           <hr/>   
           <ol>
                {
                    categorias.map((item) => {
                        return (
                            <GifGrid key={item} categorias={categorias} />
                        )
                        }
                    )        
                }
                
            </ol>  
        </div>

     );
}

export default GifExpertApp
;