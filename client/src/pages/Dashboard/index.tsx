import React from 'react';
import TattooPost from '../../components/Cards/TattooPost';

import '../../styles/Dashboard.scss';

const tattoos = [
    'https://logiabarcelona.com/wp-content/uploads/2018/09/Logia-Barcelona-Web-Daria-Stahp.jpg',
    'https://logiabarcelona.com/wp-content/uploads/2018/09/tatuaje-antebrazo-geometria-ferran-torre-logia-barcelona.jpg',
    'https://logiabarcelona.com/wp-content/uploads/2017/06/tatuaje-antebrazo-mandala-logiabarcelona-ana-godoy.jpg',
    'https://logiabarcelona.com/wp-content/uploads/2017/09/tatuaje-brujula-antebrazo-Logia-Barcelona-Laia.jpg',
    'https://logiabarcelona.com/wp-content/uploads/2017/04/tigr.jpg',
    'https://logiabarcelona.com/wp-content/uploads/2017/07/tatuaje-engranajes-antebrazo-logia-barcelona-Zoen.jpg',
    'https://logiabarcelona.com/wp-content/uploads/2018/08/tatuaje-brazo-caras-de-perros-color-logia-barcelona-damsceno.jpg',
    'https://logiabarcelona.com/wp-content/uploads/2018/08/tatuaje-brazo-buda-durmiendo-color-logia-barcelona-damsceno.jpg',
];

const DashboardComponent: React.FC = () => {
    const color = ['green', 'lilac', 'pink', 'yellow'];
    return (
        <section className="dashboard-component">
            <div>
                {tattoos &&
                    tattoos.map((tattoo) => (
                        <TattooPost
                            src={tattoo}
                            color={color[Math.floor(Math.random() * (color.length - 1 - 0 + 1)) + 0]}
                            key={Math.random()}
                            classnames="dashboard-post"
                        />
                    ))}
            </div>
        </section>
    );
};

export default DashboardComponent;
