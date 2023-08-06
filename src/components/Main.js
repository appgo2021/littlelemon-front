import React from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "10px" }}>
      <div
        className="heroSection"
        style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}
      >
        <section>
          <h1 style={{ marginBottom: "0px" }}>LITTLE LEMON</h1>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet. Aut voluptates voluptatibus non
            accusamus exercitationem sit voluptatem labore et eveniet expedita
            est unde velit. Ea sunt doloremque aut dolor iste et porro
          </p>
          <button onClick={() => navigate("/booking")}>Reserve a table</button>
        </section>
        <img alt="Image of Food"></img>
      </div>

      <div
        className="highLight"
        style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}
      >
        <div className="card1" style={{ padding: "5px" }}>
          <img className="card-img-top" alt="Image of food"></img>
          <div className="card=body">
            <section>
              <b>Greek Salad</b>
              <b>$12.00</b>
            </section>
            <p className="card-text">
              Lorem ipsum dolor sit amet. Aut voluptates voluptatibus non
              accusamus exercitationem sit voluptatem labore et eveniet expedita
              est unde velit. Ea sunt doloremque aut dolor iste et porro
            </p>
            <section>
              <b>Order Items: </b>
              <b>1</b>
            </section>
          </div>
        </div>
        <div className="card2" style={{ padding: "5px" }}>
          <img className="card-img-top" alt="Image of food"></img>
          <div className="card=body">
            <section>
              <b>Greek Salad</b>
              <b>$12.00</b>
            </section>
            <p className="card-text">
              Lorem ipsum dolor sit amet. Aut voluptates voluptatibus non
              accusamus exercitationem sit voluptatem labore et eveniet expedita
              est unde velit. Ea sunt doloremque aut dolor iste et porro
            </p>
            <section>
              <b>Order Items: </b>
              <b>1</b>
            </section>
          </div>
        </div>
        <div className="card3" style={{ padding: "5px" }}>
          <img className="card-img-top" alt="Image of food"></img>
          <div className="card=body">
            <section>
              <b>Greek Salad</b>
              <b>$12.00</b>
            </section>
            <p className="card-text">
              Lorem ipsum dolor sit amet. Aut voluptates voluptatibus non
              accusamus exercitationem sit voluptatem labore et eveniet expedita
              est unde velit. Ea sunt doloremque aut dolor iste et porro
            </p>
            <section>
              <b>Order Items: </b>
              <b>1</b>
            </section>
          </div>
        </div>
      </div>
      <div
        className="testimonial"
        style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}
      >
        <div
          className="Rating1"
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <article>
            <h6>Rating</h6>
            <img alt="*****"></img>
            <p>Review</p>
          </article>
          <figure>
            <img alt="Stars"></img>
          </figure>
        </div>
        <div
          className="Rating2"
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <article>
            <h6>Rating</h6>
            <img alt="*****"></img>
            <p>Review</p>
          </article>
          <figure>
            <img alt="Stars"></img>
          </figure>
        </div>
        <div
          className="Rating3"
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <article>
            <h6>Rating</h6>
            <img alt="*****"></img>
            <p>Review</p>
          </article>
          <figure>
            <img alt="Stars"></img>
          </figure>
        </div>
        <div
          className="Rating4"
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <article>
            <h6>Rating</h6>
            <img alt="*****"></img>
            <p>Review</p>
          </article>
          <figure>
            <img alt="Stars"></img>
          </figure>
        </div>
      </div>

      <div
        className="About"
        style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}
      >
        <article>
          <h1>LITTLE LEMON</h1>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet. Aut voluptates voluptatibus non
            accusamus exercitationem sit voluptatem labore et eveniet expedita
            est unde velit. Ea sunt doloremque aut dolor iste et porro
          </p>
        </article>
        <figure>
          <img alt="Image of Food"></img>
          <img alt="Image of Food"></img>
        </figure>
      </div>
    </div>
  );
}

export default Main;
