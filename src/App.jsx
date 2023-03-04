import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./assets/css/App.css";
import Card from "./components/Card";
import Avatar from "./components/Avatar";
import contacts from "./data/contacts";

const strArr = [
  {
    phrase:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis at debitis eius neque, quas dolorum quidem fugit dignissimos alias corrupti tempore iusto quis itaque maiores suscipit ad nemo? Quibusdam nesciunt nobis tenetur consequatur ipsa quos error ipsam autem, tempora aspernatur veritatis suscipit provident sint commodi incidunt quas ipsum nisi! Vitae sunt itaque vel sit architecto, ratione a quibusdam eaque veniam, cum fugiat eveniet fugit, magni eos. Impedit, iure facilis iusto quos deleniti molestias praesentium tenetur explicabo placeat beatae ea veniam quod! Aliquam perspiciatis non placeat facilis delectus eligendi inventore deserunt porro atque vero pariatur, consequatur numquam sunt, consectetur mollitia ad reiciendis. Architecto animi cum optio culpa quos quod ad nostrum molestias. Id vitae eius itaque impedit asperiores illum minus recusandae blanditiis, cum totam?",
  },
  {
    phrase:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, quos ipsam tenetur harum omnis iure odit, aliquam tempora corrupti natus consequuntur voluptas iste cupiditate voluptatem cum, quo vitae quidem commodi quisquam accusantium qui pariatur quam. Pariatur corrupti tenetur incidunt dolores totam illum sequi deserunt explicabo, commodi quia tempora accusantium fuga. Deserunt ea cum voluptas, provident tempore eaque incidunt error? Eius sunt enim deserunt consectetur eos quod esse, corrupti voluptate. Quia aspernatur quam sapiente, ipsum, nobis debitis eum, blanditiis quos autem sequi numquam omnis perferendis ducimus totam sed nostrum quidem voluptatem distinctio laboriosam atque incidunt cumque magni dolor. Deserunt in unde impedit, possimus repellendus saepe est at esse culpa excepturi incidunt. Consectetur temporibus nulla veniam quas ipsa in assumenda a!",
  },
];

const newStrArr = strArr.map((sen) => {
  return sen.phrase.length > 100 ? sen.phrase.substring(850) : sen.phrase;
});

// console.log(strArr);
// console.log(newStrArr);

function App() {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setLogged] = useState(true);

  // console.log(contacts);
  return (
    // code inside this div as root entry of your app

    <div className="grid grid-cols-4 gap-2 px-2 my-4">
      <div className="col-span-full grid place-content-center">
        <div
          className=""
          onMouseEnter={() => setLogged(!isLoggedIn)}
          onMouseLeave={() => setLogged((isLoggedIn) => !isLoggedIn)}
        >
          <Avatar
            img={
              isLoggedIn
                ? "https://api.lorem.space/image/album?hash=u5xb48ku"
                : "https://via.placeholder.com/300x300/ccc.png"
            }
            className={`w-44 rounded-full ring-4 ring-offset-4 my-4 transition-all duration-300 cursor-pointer ${
              isLoggedIn ? "ring-lime-500" : "ring-red-600 drop-shadow-[0_0_1rem_red] scale-90"
            }`}
          />
        </div>
      </div>
      <h2 className={`col-span-full text-center`}>
        {isLoggedIn ? "Logged in" : "Log In NOW"}
      </h2>
      {/* using map function */}
      {contacts.map((contact) => {
        return (
          <Card
            key={contact.id}
            className="bg-gray-200"
            name={contact.name}
            img={contact.img}
          />
        );
      })}
      <Card
        className="col-span-2"
        name="Alma Veum II"
        img="https://api.lorem.space/image/movie?w=300&h=300&hash=bv19jybt"
      />
      <Card
        className="col-span-2"
        name="Nadine Ebert"
        img="https://api.lorem.space/image/movie?w=300&h=300&hash=7bhr2sga"
      />
      {/* withput using map function */}
    </div>
  );
}

export default App;
