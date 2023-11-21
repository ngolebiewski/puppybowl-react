import { useState, useEffect } from "react";

const CardsView = ({setSelectedPuppy, setDetailView, puppyList, setPuppyList}) => {

  useEffect(() => {

    try {
      const fetchPuppies = async () => {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players')
        const responseJson = await response.json()
        setPuppyList(responseJson.data.players)
      };
      fetchPuppies()
    } catch (error) {
      console.error(error);
    }
  }, []);


  return (
    <>
      <section className="card-view">

        {puppyList.map((eachPuppy) => {
          return <div key={eachPuppy.id}
          onClick={(e) =>{
            setSelectedPuppy(eachPuppy);
            setDetailView(true);
          }}
          
        

          >
            <h4>{eachPuppy.name}</h4>
            <img src={eachPuppy.imageUrl}/>
          </div>
          x--;
        })
        }

      </section>
    </>
  )
}

export default CardsView