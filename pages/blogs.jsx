/* eslint-disable react/prop-types */
import React from 'react';
import { PageHeader } from '../component/modules/header';
import withWebLayout from '../layout/web/withWebLayout';
import { connect } from "react-redux";
import { Button } from 'react-bootstrap';
const Blogs = (props) => {
  console.log('props', props)
  const { value } = props.counter

  const counter = (type) => {
    if (type) {
      props.dispatch({ type: "INCREMENT_COUNTER" });
    } else {
      props.dispatch({ type: "DECREMENT_COUNTER" });
    }
  }

  React.useEffect(() => {
    counter()
  }, [])
  return (
    <section>
      <PageHeader title="Blogs" />

      <Button onClick={() => counter(true)}>+</Button>
      {value}
      <Button onClick={() => counter(false)}>-</Button>
    </section>
  )
}

export default connect((state) => state)(withWebLayout(Blogs));