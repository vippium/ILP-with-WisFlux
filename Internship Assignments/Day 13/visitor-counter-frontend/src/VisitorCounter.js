import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VisitorCounter = () => {
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        console.log('Fetching visitor count'); // Log on every render
        const fetchVisitorCount = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/visit', {
                    headers: { 'Cache-Control': 'no-cache' }
                });
                setVisitorCount(response.data.count);
            } catch (error) {
                console.error('Error fetching visitor count:', error);
            }
        };

        fetchVisitorCount();
    }, []);

    return <h1>This website has been visited {visitorCount} times!</h1>;
};

export default VisitorCounter;
