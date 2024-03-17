import React from 'react';
import { useLoading } from '../../hooks/useLoading';
import classes from './loading.module.css';

export default function Loading() {
  const { isLoading } = useLoading();
  if (!isLoading) return null; // Return null if loading is complete

  return (
    <div className={classes.container}>
      <div className={classes.items}>
        <img src="/loading4.svg" alt="Loading!" className={classes.svg} />
      </div>
    </div>
  );
}
