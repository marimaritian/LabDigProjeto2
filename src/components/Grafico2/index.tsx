// components/Chart.js
import React from 'react';

export type ChartProps = {
    grafico: string;
    dia: string;
};

const GraphicComponent2: React.FC<ChartProps> = ({ grafico, dia }) => (
    <div>
        <img
            src={`http://localhost:5000/${dia}grafico${grafico}.png`}
            alt="Gráfico"
        />
    </div>
);

export default GraphicComponent2;
