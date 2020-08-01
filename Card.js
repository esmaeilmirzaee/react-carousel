import React from "react";

function Card(props) {
  return (
    <>
      <div clasName="card" style={styles.card}>
        <img style={styles.image} src={props.card_number} alt="" />
      </div>
    </>
  );
}

const styles = {
  card: {
    width: "350px",
    height: "200px",
    backgroundColor: "blue",
    border: "2px solid black",
    boxSizing: "border-box",
    fontSize: "2.5em",
    color: "white"
  },
  image: {
    width: "100%",
    height: "100%"
  }
};

export default React.memo(Card);
