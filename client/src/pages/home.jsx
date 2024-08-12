import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="mb-10 max-w-screen-md mx-auto pt-2">
        <h1 className="sm:text-4xl text-2xl font-bold my-6">
          Hello! wellcome to my blog
        </h1>
        <div className="mx-auto text-base leading-relaxed mb-4">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            possimus tempora, est maxime reprehenderit exercitationem,
            reiciendis necessitatibus ex enim, temporibus in laborum culpa?
            Officia, suscipit? Vero minus autem aliquam? Ea.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            animi, ex deserunt deleniti ullam blanditiis omnis odio totam, velit
            asperiores quae similique placeat magni possimus nesciunt cumque
            recusandae quidem. Ut et similique quos. Ut, cumque velit minima
            aliquid ducimus nam enim natus corporis id quidem in laudantium unde
            pariatur amet!
          </p>
          <p>
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            optio velit quisquam assumenda aperiam eligendi ea nam, omnis
            incidunt maiores voluptates quas facere, accusamus odit temporibus
            enim natus! Excepturi quia ducimus, molestias quod maiores
            repudiandae rerum impedit aperiam id explicabo dolorem porro minus
            qui? Et esse dolorum tempora voluptate similique iusto vero pariatur
            vitae sint obcaecati, laboriosam quod modi magni praesentium harum
            saepe nesciunt optio reprehenderit facilis atque eum assumenda eaque
            consequuntur. Quibusdam cupiditate, explicabo eius blanditiis
            expedita totam quia autem excepturi veniam quod illo veritatis
            adipisci sapiente eligendi exercitationem dolorem necessitatibus
            maxime dolorum corrupti consequuntur eaque, eum, neque nihil!
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
