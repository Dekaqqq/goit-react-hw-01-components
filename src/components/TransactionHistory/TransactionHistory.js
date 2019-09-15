import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
    return (
        <table className={styles.transactionsHistory}>
            <thead>
                <tr className={styles.headlineRow}>
                    <th className={styles.headlineRowItem}>Type</th>
                    <th className={styles.headlineRowItem}>Amount</th>
                    <th className={styles.headlineRowItem}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(el => (
                    <tr className={styles.row} key={el.id}>
                        <td className={styles.rowItem}>{el.type}</td>
                        <td className={styles.rowItem}>{el.amount}</td>
                        <td className={styles.rowItem}>{el.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default TransactionHistory;
