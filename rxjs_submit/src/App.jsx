import './App.css';
import { from } from "rxjs";
import { distinct } from "rxjs/operators";


let stringObservables = from(["jayant", "kamal", "kostub", "sourabh", "raj", "jayant", "raj", "kamal", "kamal", "kostub"]);
let user = stringObservables.pipe((value => value));
let userArr = [];
user.subscribe(result => {
  userArr.push(result);
  console.log(userArr);
});

console.log("blank");

let distNames = stringObservables.pipe(distinct(value => value));
let distUserName = [];
distNames.subscribe(result => {
  distUserName.push(result);
  console.log(distUserName);
});

const count = {};

userArr.forEach(Element => {
  count[Element] = (count[Element] || 0) + 1;
});
console.log(count);
let countArr = Object.values(count);
console.log(countArr);







function App() {
  const rawColor = "red";


  return (
    <>
      <h1>Hello from Rxjs</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>No. of Duplications</th>
        </tr>

        {
          distUserName.map((elem1) => <tr><td>{elem1}</td></tr>)
        }
        {
          countArr.map((elem1) => <tr><td>{elem1}</td></tr>)
        }
      </table>


    </>
  );
}

export default App;
