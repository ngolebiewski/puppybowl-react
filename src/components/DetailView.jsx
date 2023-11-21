import { useEffect, useState } from "react";

const DetailView = ({ selectedPuppy, setDetailView }) => {

  return (
    <>
      <section>
        <div className="detail-view">
          <h5>Puppy Details!</h5>
          <h1>{selectedPuppy.name}</h1>
          <h2>Breed: {selectedPuppy.breed}</h2>
          <p>Status: {selectedPuppy.status}</p>
          {selectedPuppy.imageUrl && <img src={selectedPuppy.imageUrl} alt="Dog or other creature" width="400px" />}
          <p>PuppyID: {selectedPuppy.id}</p>
          <p>TeamID: {selectedPuppy.teamID}</p>
          <form className="teamRadioBox">
            <h1>Add to a team/change team</h1>

            <label><input type="radio" id="Ruff" name="team" value="39"/>
            Team Ruff</label>

            <label><input type="radio" id="Fluff" name="team" value="40" />
            Team Fluff</label>

            <button
            onSubmit={(e) => {
              e.preventDefault();
              const teamId = e.target.value;
              selectedPuppy.teamId=teamId;
              console.log(teamId)
              
              useEffect(()=>{
              const updateTeam = async () => {
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players/${selectedPuppy.id}`, {
                  method: "PUT", 
                  headers: {"Content-Type": "application/json"},
                  body: JSON.stringify(response.data.player.teamId=teamId)})
              }
              updateTeam();
            }, [])
           
            }
          }
            >Submit</button>
          </form>


          <button onClick={(e) => { setDetailView(false) }}>Back</button>
        </div>
      </section>
    </>
  )
}

export default DetailView


//SAVE FOR LATER -- A START FOR SEARCH

// const thisPuppy = puppyList.find(({id}) => id === selectedPuppy);
//   console.log(puppyList) //puppy list is coming up as a blank array!!! Curses! Should send an object as the selectedPuppy instead
//   console.log(selectedPuppy)
//   console.log(thisPuppy)