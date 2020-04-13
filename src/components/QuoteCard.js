import React from 'react';

function QuoteCard({ quote }) {
    return (
        <div>
            <figure>
                <img src={quote.image} alt={quote.character} />
                <figcaption>
                    <blockquote>{quote.quote}</blockquote>
                    <cite>{quote.character}</cite>
                </figcaption>
            </figure>
        </div>
)};

export default QuoteCard;