import Proptypes from "prop-types";

const Food = ({ name, url, rating }) => {
  return (
    <div>
      <h2> 나는 {name}을 좋아해</h2>
      <h3>{rating}/5</h3>
      <img src={url} alt={name}></img>
      {/* <img src={props.url} /> */}
    </div>
  );
};

Food.propTypes = {
  name: Proptypes.string.isRequired,
  url: Proptypes.string.isRequired,
  rating: Proptypes.number.isRequired,
};

const food_info = [
  {
    key: 1,
    name: "삼겹살",
    url: "https://cdn.mindgil.com/news/photo/202105/71358_8221_3033.jpg",
    rating: 5,
  },
  {
    key: 2,
    name: "오일 파스타",
    url: "https://recipe1.ezmember.co.kr/cache/recipe/2020/02/17/de10670dbafcdaf709537c8018c303741.jpg",
    rating: 4.6,
  },
  {
    key: 3,
    name: "자장면",
    url: "https://post-phinf.pstatic.net/MjAxODExMDZfODMg/MDAxNTQxNDY2NTE1NDY4.yGiaRzLRjGH1zh_DsYOJXXNDauuFOfe4vq1-AIpWYOgg.hIUENVUe4XmSVmS7OWNswwS3LtMiv8E6Y6yyrdTyA-Qg.JPEG/GettyImages-jv10954642.jpg?type=w1200",
    rating: 4.2,
  },
  {
    key: 4,
    name: "초코케잌",
    url: "https://png.pngtree.com/png-vector/20210909/ourlarge/pngtree-chocolate-cake-png-image_3889185.jpg",
    rating: 3.5,
  },
];

// const renderFood = (dish) => {
//   return <Food name={dish.name} url={dish.url} />;
// };

const App = () => {
  return (
    <div>
      {food_info.map(function (food) {
        // console.log(food);
        return (
          <Food
            key={food.key}
            name={food.name}
            url={food.url}
            rating={food.rating}
          />
        );
      })}
      {/* {food_info.map(renderFood)}
      {console.log(food_info.map(renderFood))} */}
    </div>
  );
};

export default App;
