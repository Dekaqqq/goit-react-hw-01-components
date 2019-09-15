import React from 'react';
import Profile from './Profile/Profile';
import img from './Profile/avatar.png';
import Stats from './Stats/Stats';
import PricingPlan from './PricingPlan/PricingPlan';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import pricingPlanItems from '../assets/pricing-plan.json';
import transactions from '../assets/transactions.json';

const user = {
    name: 'Timothy Grant',
    tag: '@tgrant',
    location: 'Sao Paulo, Brazil',
    avatar: img,
    stats: {
        followers: 198,
        views: 3685,
        likes: 492,
    },
};

const stats = [
    { id: 'id-1', label: '.docx', percentage: 22 },
    { id: 'id-2', label: '.pdf', percentage: 4 },
    { id: 'id-3', label: '.mp3', percentage: 17 },
    { id: 'id-4', label: '.psd', percentage: 47 },
    { id: 'id-5', label: '.pdf', percentage: 10 },
];

const App = () => {
    return (
        <>
            <Profile user={user} />
            <Stats stats={stats} />
            <PricingPlan pricingPlanItems={pricingPlanItems} />
            <TransactionHistory transactions={transactions} />
        </>
    );
};

export default App;
