import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Meal from './Meal';
import { mealGridStyles } from '../../assets/styles/sharedStyles';
import { getMealByName } from '../../api/mealApi';


function MealGrid() {
    const classes = mealGridStyles();

    const [meals, setMeals] = useState();
    const [page, setPage] = useState(1);

    useEffect(() => {
      getMealByName("a")
        .then((res) => {
          setMeals(res.data.meals)
        })
        .catch((err) => {
          console.log(err);
        })
    }, [])

    
    const handlePageChange = (e, value) => {
      setPage(value);
    };

    if(meals) {
      return (
        <>
          <Grid className={classes.grid} container spacing={3}>
                {meals.slice((page - 1) * 8, page * 8).map((meal, index) => {
                  return (
                    <Grid className={classes.gridItem} item xs={6} sm={3} key={index}>
                      <Meal meal={meal} />
                    </Grid>
                  )})}
          </Grid>
          <Pagination 
              count={Math.ceil(meals.length / 8)} 
              page={page}
              defaultPage={1}
              boundaryCount={2}
              onChange={handlePageChange}    
              className={classes.pagination}               
          />
        </>
      )
    } else {
      return (
        <>
        </>
      )
    
    }
    
}

export default MealGrid;