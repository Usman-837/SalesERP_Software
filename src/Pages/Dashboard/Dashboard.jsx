import React from 'react'
import Directory from '../../components/Dashboard/Directory'
import Resultcards from '../../components/Dashboard/Resultcards';
import Bestsaleproducts from '../../components/Dashboard/Bestsaleproducts';
import Salessummary from '../../components/Dashboard/Salessummary';
import Due from '../../components/Dashboard/Due';


export default function Dashboard() {
    return (
        <div className="px-fifteen pb-2.5">
            <Directory/>
            <Resultcards/>
            <Bestsaleproducts/>
            <Salessummary/>
            <Due/>
        </div>
    );
}
