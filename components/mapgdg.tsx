'use client';

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/countries/portugal/portugal-districts.json';

const cities = [
  { name: 'Lisboa', coordinates: [-9.1393, 38.7223], offset: -20 },
  { name: 'Porto', coordinates: [-8.611, 41.1496], offset: -20 },
  { name: 'Braga', coordinates: [-8.428, 41.5454], offset: -10 },
  { name: 'Coimbra', coordinates: [-8.4292, 40.2115], offset: -10 },
  { name: 'Aveiro', coordinates: [-8.6455, 40.6405], offset: -10 },
  { name: 'Évora', coordinates: [-7.9094, 38.571], offset: -10 },
  { name: 'Faro', coordinates: [-7.9352, 37.0179], offset: -10 },
  { name: 'Setúbal', coordinates: [-8.8991, 38.5244], offset: -10 },
  { name: 'Leiria', coordinates: [-8.8042, 39.7436], offset: -10 },
  { name: 'Viseu', coordinates: [-7.9135, 40.661], offset: -10 },
  { name: 'Castelo Branco', coordinates: [-7.49, 39.82], offset: -10 },
  { name: 'Beja', coordinates: [-7.8627, 38.0152], offset: -10 },
  { name: 'Guarda', coordinates: [-7.2675, 40.5373], offset: -10 },
  { name: 'Bragança', coordinates: [-6.7567, 41.8069], offset: -10 },
  { name: 'Santarém', coordinates: [-8.6861, 39.2362], offset: -10 },
  { name: 'Madeira', coordinates: [-16.97, 32.6669], offset: -10 },
];

const districtColors: Record<string, string> = {
  Lisboa: '#a1c4fd',
  Porto: '#fbc2eb',
  Braga: '#ffd6a5',
  Coimbra: '#c3f584',
  Aveiro: '#b5ead7',
  Évora: '#ff9aa2',
  Faro: '#f3ffbd',
  Setúbal: '#c6e2ff',
  Leiria: '#ffdac1',
  Viseu: '#e2f0cb',
  'Castelo Branco': '#d0f4de',
  Beja: '#fce1e4',
  Guarda: '#e4c1f9',
  Bragança: '#c7ceea',
  Santarém: '#d5aaff',
  Madeira: '#ffcbf2',
};

export default function PortugalMap() {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 4000,
        center: [-8, 39.5],
      }}
      style={{ width: '100%', height: 'auto' }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const districtName = geo.properties.NAME_1;
            const fillColor = districtColors[districtName] || '#F0F0F0';

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={fillColor}
                stroke="#222"
                strokeWidth={1}
                style={{
                  default: {
                    outline: 'none',
                    strokeLinejoin: 'round',
                    strokeLinecap: 'round',
                  },
                  hover: { fill: '#aaa', outline: 'none' },
                  pressed: { fill: '#999', outline: 'none' },
                }}
              />
            );
          })
        }
      </Geographies>

      {cities.map(({ name, coordinates, offset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={4} fill="#FF5533" stroke="#fff" strokeWidth={1} />
          <text
            textAnchor="middle"
            y={offset}
            style={{
              fontFamily: 'system-ui',
              fontSize: '10px',
              fill: '#5D5A6D',
            }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
}
