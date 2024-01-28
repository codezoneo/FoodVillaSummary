import classes from "./MealsSummary.module.css"

const MealSummary = ()=>{
    return (
      <section className={classes.summary}>
        <h2>Delicious Food,Deliverd to you </h2>
        <p>
          Welcome to our exquisite culinary haven, where passion meets palate in
          a symphony of flavors. At our restaurant, we pride ourselves on
          delivering an unparalleled dining experience that transcends the
          ordinary. From the moment you step through our doors, you are greeted
          by an ambiance that reflects warmth and sophistication. Our menu is a
          carefully curated masterpiece, showcasing a fusion of global
          influences with a commitment to using the finest, locally sourced
          ingredients
        </p>
        <p>
          Join us in savoring the extraordinary – where every meal is a
          celebration of flavor, quality, and passion.
        </p>
      </section>
    );
}

export default MealSummary;