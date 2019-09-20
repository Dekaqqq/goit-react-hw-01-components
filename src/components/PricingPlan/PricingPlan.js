import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingPlan.module.css';
import PricingItem from './PricingItem/PricingItem';

const PricingPlan = ({ pricingPlanItems }) => {
    return (
        <ul className={styles.list}>
            {pricingPlanItems.map(el => (
                <li className={styles.item} key={el.capacity}>
                    <PricingItem pricingItems={el} />
                </li>
            ))}
        </ul>
    );
};

PricingPlan.propTypes = {
    pricingPlanItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PricingPlan;
