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
      <p>TeamID: {selectedPuppy.teamID}</p>
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