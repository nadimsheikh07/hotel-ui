/* eslint-disable react/prop-types */
import React from 'react';
import { PageHeader } from '../component/modules/header';
import withWebLayout from '../layout/web/withWebLayout';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { decrementCounter, incrementCounter } from '../redux/actions/counterActions';
import { requestBlogs } from '../redux/actions/blogsActions';

const Blogs = () => {
  const value = useSelector(state => state.counter.value)
  const blogs = useSelector(state => state.blogs.data)
  const dispatch = useDispatch()

  const counter = (type) => {
    if (type) {
      dispatch(incrementCounter());

    } else {
      dispatch(decrementCounter());
    }
  }

  React.useEffect(() => {
    if (!blogs) {
      dispatch(requestBlogs());
    }
  }, [blogs])

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