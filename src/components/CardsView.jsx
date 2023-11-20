import { useState, useEffect } from "react";

const CardsView = () => {
  const [puppyList, setPuppyList] = useState([]);
  const [selectedPuppy, setSelectedPuppy] = useState('');

  // if (puppyList.length < 1) {
  useEffect(() => {

    try {
      const fetchPuppies = async () => {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players')
        const responseJson = await response.json()
        setPuppyList(responseJson.data.players)
      };
      fetchPuppies()
      console.log(puppyList)
    } catch (error) {
      console.error(error);
    }
  }, []);


  return (
    <>
      <container className="card-view">

        {puppyList.map((eachPuppy) => {
          return <div key={eachPuppy.id}>
            <h4>{eachPuppy.name}</h4>
            <img src={eachPuppy.imageUrl}/>
          </div>
        })
        }

      </container>
    </>
  )
}

export default CardsView