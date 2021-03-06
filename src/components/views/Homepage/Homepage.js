import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAllPublished, fetchPublished } from '../../../redux/postsRedux';

import styles from './Homepage.module.scss';

import { Card } from '../../features/Card/Card';

const Component = ({ className, children, posts, fetchPublishedPosts }) => {
  useEffect(() => {
    fetchPublishedPosts();
  }, [fetchPublishedPosts]);

  return (
    <div className={clsx(className, styles.root)}>
      {posts.map((post) => (
        <Card key={post._id} post={post}/>
      ))}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
  fetchPublishedPosts: PropTypes.func,
};

const mapStateToProps = state => ({
  posts: getAllPublished(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPublishedPosts: () => dispatch(fetchPublished()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
