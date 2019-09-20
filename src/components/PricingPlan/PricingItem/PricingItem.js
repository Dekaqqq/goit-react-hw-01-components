import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeadline, StyledButton } from './styledPricingItems';
import styles from './PricingItem.module.css';

const PricingItem = ({ pricingItems }) => {
    const { price, color, label, capacity, description } = pricingItems;

    return (
        <div className={styles.pricingItem} key={price}>
            <StyledHeadline color={color}>{label}</StyledHeadline>
            <p className={styles.capacity}>{capacity} Storage</p>
            <p className={styles.description}>{description}</p>
            <p className={styles.price}>${price}/mo</p>
            <StyledButton type="submit" color={color}>
                Get Started
            </StyledButton>
        </div>
    );
};

PricingItem.propTypes = {
    pricingItems: PropTypes.shape({
        price: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        capacity: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
    }).isRequired,
};

export default PricingItem;
