import React, { useState } from 'react';
import Beer from './Beer';




function BeerList() {

    const [beerList,setBeerList] = useState(['Coreff', 'Corona', 'Mort subite']);

    const addBeer = (beer: string) => {
        if(beer != ''){
            setBeerList([...beerList, beer])
        }

    }

    const removeBeer = (beer: string) => {
        let tmp = beerList.filter(e => e != beer);
        setBeerList(tmp);

    }

    const [beer,setBeer] = useState('');

  return (
    <div >
        {beerList.map((beer, index) => (<>
            <Beer id={index} name = {beer}></Beer>
        </>
      ))}
    <input type="beer" value={beer} onChange={(e) => setBeer(e.target.value)}/>
    <button onClick={() => addBeer(beer)}>Ajouter la biere</button>
    <button onClick={() => removeBeer(beer)}>Supprimer la biere</button>
    </div>
    


  );
}

export default BeerList;