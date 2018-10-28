import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import DefaultLayout from '../Default';
import Title from '../../components/Title/Title';

import styles from './Page.module.scss';

export default class PageLayout extends Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    return (
      <DefaultLayout>
        <Helmet
          title={`${this.props.title} | ${siteTitle}`}
        />
        <section>
          <div>
            <Title title={this.props.title} />

            <div className={`${styles.page__content} section-padding`}>
              <div className="grid">
                <div className={styles.page__markdown}>
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    );
  }
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;