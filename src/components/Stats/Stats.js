import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

function randomBgColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256,
    )}, ${Math.floor(Math.random() * 256)})`;
}

const Stats = ({ title, stats }) => {
    return (
        <section className={styles.statsSection}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.statList}>
                {stats.map(el => (
                    <li
                        className={styles.item}
                        key={el.id}
                        style={{ backgroundColor: `${randomBgColor()}` }}
                    >
                        <span className={styles.label}>{el.label}</span>
                        <span className={styles.percentage}>
                            {el.percentage}%
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Stats.defaultProps = {
    title: 'Upload stats',
};

Stats.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

export default Stats;
