import React from 'react'
import Directory from '../../components/Dashboard/Directory'
import Resultcards from '../../components/Dashboard/Resultcards';


export default function Dashboard() {
    return (
        <div className="px-fifteen pb-2.5">
            {/* Directory */}
            <Directory/>
            <Resultcards/>
        </div>
    );
}
