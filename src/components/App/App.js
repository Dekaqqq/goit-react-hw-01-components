import React from 'react';
import './App.css';
import Profile from '../Profile/Profile';
import Stats from '../Stats/Stats';
import PricingPlan from '../PricingPlan/PricingPlan';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import pricingPlanItems from '../../assets/pricing-plan.json';
import transactions from '../../assets/transactions.json';
import { user, stats } from './appData';

const App = () => {
    return (
        <main>
            <Profile user={user} />
            <Stats stats={stats} />
            <PricingPlan pricingPlanItems={pricingPlanItems} />
            <TransactionHistory transactions={transactions} />
        </main>
    );
};

export default App;
