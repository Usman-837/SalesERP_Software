import React from 'react'
import Directory from '../../components/Dashboard/Directory'
import Resultcards from '../../components/Dashboard/Resultcards';
import Bestsaleproducts from '../../components/Dashboard/Bestsaleproducts';


export default function Dashboard() {
    return (
        <div className="px-fifteen pb-2.5">
            {/* Directory */}
            <Directory/>
            <Resultcards/>
            <Bestsaleproducts/>
        </div>
    );
}
