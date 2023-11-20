import { useState } from "react";

const DetailView = ({ selectedPuppy, setDetailView }) => {
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