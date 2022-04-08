import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Who We Are',
    paragraph: 'MobiXpress is a group of experts specializing mobile development using React Native.We are aiming to serve our clients with our best quality work , cost-effective ,reliable and fast development mobile applications.We are passionate in finding innovative, sound, and practical strategies to maximize our stakeholder’s growth and potential.'
  };

  const values = [
    {
      title: 'Integrity',
      description: 'We are committed to delivering the highest quality work and we are always striving to improve our services.',
      icon: require('./../../assets/images/feature-tile-icon-01.svg')
    },
    {
      title: 'Innovation',
      description: 'We are always striving to improve our services to server better our clients.',
      icon: require('./../../assets/images/feature-tile-icon-06.svg')
    },
    {
      title: 'Cost-effective',
      description: 'We value every client’s business and we are always striving to deliver cost-effective solutions.',
      icon: require('./../../assets/images/feature-tile-icon-02.svg')
    }

  ]

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            {
              values.map((value, index) => {
                return <div key={index} className="tiles-item reveal-from-bottom">
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div className="features-tiles-item-image mb-16">
                        <Image
                          src={value.icon}
                          alt="Features tile icon 01"
                          width={64}
                          height={64} />
                      </div>
                    </div>
                    <div className="features-tiles-item-content">
                      <h4 className="mt-0 mb-8">
                        {value.title}
                      </h4>
                      <p className="m-0 text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;