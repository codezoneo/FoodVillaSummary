import classes from './AvailableMeals.module.css'


const DUMMY_MEALS = [
  {
    Id: "101",
    name: "Puri-sabji",
    description: "puri-sabji with salad",
    price: 60,
  },
  {
    Id: "102",
    name: "Paneer-tikka",
    description: "Delicious Paneer",
    price: 60,
  },
  {
    Id: "103",
    name: "Paneer-Burger",
    description: "Amarican,Burgar king",
    price: 60,
  },
  {
    Id: "104",
    name: "Pizza",
    description: "German pizza",
    price: 60,
  },
];


const AvailableMeals = ()=>{
    const mealsList = DUMMY_MEALS.map(meal => <list>{meal.name}</list>)
return <section className={classes.meals}>
    <ul>
      {mealsList}
    </ul>
</section>
}
export default AvailableMeals;