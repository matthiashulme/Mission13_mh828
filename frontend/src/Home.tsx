import React from 'react';

// Home Page Function
function Home(props: any) {
  return (
    <>
      <div className="align-center">
        <div>
          <h1>{props.saying}</h1>
        </div>

        <div>
          <img src="./JoelHiltonHeadshot.jpg" />
        </div>
      </div>
    </>
  );
}

export default Home;
