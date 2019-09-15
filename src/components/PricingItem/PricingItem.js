import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './PricingItem.module.css';

const StyledIcon = styled.i`
    display: inline-block;
    width: 100%;
    height: 162px;
    background-image: ${props => `url(${props.urlIcon})`};
    background-repeat: no-repeat;
    background-position: bottom center;
`;

const StyledHeadline = styled.h2`
    font-size: 35px;
    margin: 30px 0 10px;
    text-transform: uppercase;
    color: ${props => `${props.color}`};
`;

const StyledButton = styled.button`
    display: block;
    margin: 0 auto;
    padding: 16px 40px;
    font-size: 14px;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    background-color: ${props => `${props.color}`};
    border: none;
    cursor: pointer;
`;

const PricingItem = ({ pricingItems }) => {
    return (
        <div className={styles.pricingItem} key={pricingItems.price}>
            <StyledIcon urlIcon={pricingItems.icon} />
            <StyledHeadline color={pricingItems.color}>
                {pricingItems.label}
            </StyledHeadline>
            <p className={styles.capacity}>{pricingItems.capacity} Storage</p>
            <p className={styles.description}>{pricingItems.description}</p>
            <p className={styles.price}>${pricingItems.price}/mo</p>
            <StyledButton type="submit" color={pricingItems.color}>
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
