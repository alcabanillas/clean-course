(() => {

  function getMovieById( movieId: string ) {
      console.log({ movieId });
  }

  function getMovieCastById( movieId: string ) {
      console.log({ movieId });
  }

  function getActorBioById( id: string ) {
      console.log({ id });
  }
  
  interface Movie {
    cast:        string[];
    description: string;
    rating:      number;
    title:       string; 
  }

  function createMovie( { title, description, rating, cast } : Movie) {
      console.log({ title, description, rating, cast });
  }

  function checkFullName(fullName: string){
    console.log({fullName})
    return true
  }

  // Crea un nuevo actor
  function createActor( fullName: string, birthDate: Date ): boolean {
      
      // tarea asincrona para verificar nombre
      // ..
      // ..
      if ( checkFullName(fullName) ) return false;

      console.log('Crear actor', birthDate);
      return true;        

  }

  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) : number => {
    let result : number = isDead ? 1500 : (isSeparated ? 2500 : (isRetired ? 3000 : 4000));
    
    if ( isDead ) return 1500

    if ( isSeparated ) return 2500

    return ( isRetired ) ? 3000 : 4000;

  /*   if ( isDead ) {
        result = 1500;
    } else {
        if ( isSeparated ) {
            result = 2500;
        } else {
            if ( isRetired ) {
                result = 3000;
            } else {
                result = 4000; 
            }
        }
    }
   */  
    return result;
  }

})();