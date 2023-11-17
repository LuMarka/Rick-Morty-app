import React from 'react'

export default function Characters(props) {
  const { characters, setCharacters } = props;
  const resetCharacters = () => {
    setCharacters(null); // esto hace ue me lleve nuevamente al home (App.js) volviendo a null
  }
  return (
    <div className='characters'>
      <h1>Personajes</h1>
      <span className='back-home' onClick={resetCharacters}>Volver al home</span>
      <div className='container-characters'>
        {characters.map((character, index) => (
          //retorna lo que hay acá. Esto es un return implícito
          <div className='character-container' key={index}>
            <p>{character.name}</p>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                <>
                <span className='alive'/> 
                Alive
                </>  
                ) : (
                  <>
                  <span className='dead'/>
                  Dead
                </>
                )}
              </h6>
              <p >
                <span className='text-gray'>Episodios: </span>
                <span>{ character.episode.length}</span>
              </p>
              <p >
                <span className='text-gray'>Especie: </span>
                <span>{ character.species.length}</span>
              </p>


            </div>
          </div>
        ))}
      </div>
      <span className='back-home' onClick={resetCharacters}>Volver al home</span>
    </div>
  )
}
