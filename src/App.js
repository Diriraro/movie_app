import PropTypes from "prop-types";
import React from "react";
import axios from "axios";

// # ~3.1 까지
// const foodILike = [
//   {
//     id: 1,
//     name: "Kimchi",
//     image: "https://img.hankyung.com/photo/201910/01.20660060.1.jpg",
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "Samgyeopsal",
//     image:
//       "https://newsimg.hankookilbo.com/cms/articlerelease/2020/06/11/202006111362061920_7.jpg",
//     rating: 4.3,
//   },
//   {
//     id: 3,
//     name: "Bibimbap",
//     image:
//       "https://blog.kakaocdn.net/dn/ct4iN3/btquYY5YOhr/v5uxQBU8yj2XdzRDkQSfEK/img.jpg",
//     rating: 4.9,
//   },
//   {
//     id: 4,
//     name: "Donkasu",
//     image:
//       "http://th2.tmon.kr/thumbs/image/423/336/e17/1b1492318_700x700_95_FIT.jpg",
//     rating: 4.7,
//   },
//   {
//     id: 5,
//     name: "Kimbap",
//     image:
//       "https://dimg.donga.com/ugc/CDB/WOMAN/Article/5e/dd/c1/1a/5eddc11a003fd2738de6.jpg",
//     rating: 4.2,
//   },
// ];

// function Food({ name, picture, rating }) {
//   return (
//     <div>
//       <h3>I Like {name}</h3>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name} />
//     </div>
//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
// };

// function App() {
//   return (
//     <div>
//       {foodILike.map((dish) => (
//         <Food
//           key={dish.id}
//           name={dish.name}
//           picture={dish.image}
//           rating={dish.rating}
//         />
//       ))}
//     </div>
//   );
// }

// #3.2 Component Life Cycle
// class App extends React.Component {
//   state = {
//     count: 0,
//   };
//   add = () => {
//     this.setState((current) => ({ count: current.count + 1 }));
//   };
//   minus = () => {
//     this.setState((current) => ({ count: current.count - 1 }));
//   };
//   render() {
//     return (
//       <div>
//         <h1>The number is : {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     );
//   }
// }

// #3.3 Planning the Movie Component
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const movies = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
    );
  };

  componentDidMount() {
    this.getMovies();
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading.." : "We are ready"}</div>;
  }
}

export default App;
