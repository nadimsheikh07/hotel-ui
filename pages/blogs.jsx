/* eslint-disable react/prop-types */
import React from 'react';
import { PageHeader } from '../component/modules/header';
import withWebLayout from '../layout/web/withWebLayout';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'

const Blogs = () => {
  const value = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  const counter = (type) => {
    if (type) {
      dispatch({ type: "INCREMENT_COUNTER" });
    } else {
      dispatch({ type: "DECREMENT_COUNTER" });
    }
  }

  return (
    <section>
      <PageHeader title="Blogs" />

      <Button onClick={() => counter(true)}>+</Button>
      {value}
      <Button onClick={() => counter(false)}>-</Button>
    </section>
  )
}

export default withWebLayout(Blogs);