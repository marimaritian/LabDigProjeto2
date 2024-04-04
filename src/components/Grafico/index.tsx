// components/Chart.js
import React from 'react';

export type ChartProps = {
    image: string;
};

const GraphicComponent: React.FC<ChartProps> = ({ image }) => (
    <div>
        <img src={`http://localhost:5000/${image}`} alt="Gráfico" />
    </div>
);

export default GraphicComponent;
