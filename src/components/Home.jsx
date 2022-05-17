
export default function Home(props) {
    const {hero}  = props;
    const style = {
        "width" : '35rem'
    }


    console.log(hero)
  return (
    <section className="row container">
        <div className="col-md-7 col-12">
        <div className="card  border-warning" style={style}>
            <div className="row ">
                <div className="col-md-4">
                <h5 v="card-title">{hero.name}</h5>
                <img src={hero.image.url}  className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <p className="card-text"> Publicado por : <span>{hero.biography.publisher}</span></p>
                    <p className="card-text"> Primera aparicion: <span>{hero.biography["first-appearance"]}</span></p>
                    <p className="card-text"> Conexiones: <span>{hero.connections["group-affiliation"]}</span></p>
                    <p className="card-text"> Ocupación: <span>{hero.work.occupation} </span></p>
                    <p className="card-text"> Alianzas: <span> {hero.biography.aliases}</span></p>
                    
                </div>
                </div>
            </div>
            </div>
          </div>

          <div className="col-md-5 col-12">
          <div className="card  border-warning" style={style}>
          <h3>Estadisticas de Poder de {hero.name}</h3>
            <div className="card-body">
            
            </div>
          </div>
        </div>

    </section>
  )
}


// --
// <div className="card  border-warning mb-3" style={style}>
//     <h3 className="card-title">{hero.name}</h3>
//     <img src={hero.image.url} className="card-img-top " alt="..."/>
//     <div className="card-body">
//         <p> Publicado por : <span>{hero.biography.publisher}</span></p>
//         <p> Primera aparicion: <span>{hero.biography["first-appearance"]}</span></p>
//         <p> Conexiones: <span>{hero.connections["group-affiliation"]}</span></p>
//         <p> Ocupación: <span>{hero.work.occupation} </span></p>
//         <p> Alianzas: <span> {hero.biography.aliases}</span></p>
//     </div>
//   </div>
//   --