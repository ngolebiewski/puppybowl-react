import { useState } from "react";

const DetailView = ({ puppyList, selectedPuppy, setDetailView }) => {
  const thisPuppy = puppyList.find(({id}) => id === selectedPuppy);
  console.log(puppyList) //puppy list is coming up as a blank array!!! Curses! Should send an object as the selectedPuppy instead
  console.log(selectedPuppy)
  console.log(thisPuppy)
  return (
    <>
      <section>
      <div className="detail-view">
      <h1>Hot Cheese and Puppy Details!</h1>
      <button onClick={(e) => { setDetailView(false) }}>Back</button>
      </div>
      </section>
    </>
  )
}

export default DetailView