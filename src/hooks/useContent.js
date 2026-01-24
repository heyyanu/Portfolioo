import { useState, useEffect } from 'react';

export function useContent(endpoint, fallbackData) {
    const [data, setData] = useState(fallbackData);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;
                if (!webhookUrl) {
                    throw new Error("VITE_N8N_WEBHOOK_URL not defined");
                }

                // Construct URL with query param for routing in n8n
                // e.g., ?type=blogs or ?type=projects
                const url = `${webhookUrl}?type=${endpoint}`;

                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();

                // Expecting n8n to return { data: [...] } or just [...]
                // Adjust based on your actual n8n output structure
                if (Array.isArray(result)) {
                    setData(result);
                } else if (result.data && Array.isArray(result.data)) {
                    setData(result.data);
                } else {
                    // If content format doesn't match, stick to fallback
                    console.warn(`Unexpected data format for ${endpoint}, using fallback.`);
                }
            } catch (err) {
                console.error(`Failed to fetch ${endpoint} from n8n:`, err);
                setError(err);
                // Keep using fallbackData which is arguably 'better' than empty error state for a portfolio
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return { data, isLoading, error };
}
