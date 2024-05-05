import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [deals, setDeals] = useState([]);

    useEffect(() => {
        axios.get('/deals/deals/')
            .then(response => {
                setDeals(response.data.deals);
            })
            .catch(error => {
                console.error("Error fetching deals:", error);
            });
    }, []);

    return (
        <div>
            <h1>Deals</h1>
            <ul>
                {deals.map(deal => (
                    <li key={deal.id}>
                        <a href={deal.url}>{deal.title}</a>
                        <p>{deal.description}</p>
                        <p>Upvotes: {deal.upvotes} | Downvotes: {deal.downvotes}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App