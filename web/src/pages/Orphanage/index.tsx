import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import api from '../../services/api';
import mapIcon from '../../utils/mapIcon';

import {
  Container,
  OrphanageDetails,
  Images,
  OrphanageDetailsContent,
  MapContainer,
  OpenDetails,
  OpenOnWeekends,
} from './styles';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  images: Array<{
    id: number;
    path: string;
  }>;
}

interface OrphanageParams {
  id: string;
}

const Orphanage: React.FC = () => {
  const params = useParams<OrphanageParams>();
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    api.get(`/orphanages/${params.id}`).then(response => {
      setOrphanage(response.data);
    });
  }, [params.id]);

  if (!orphanage) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Sidebar />
      <main>
        <OrphanageDetails>
          <img
            src={orphanage.images[activeImageIndex].path}
            alt={orphanage.name}
          />

          <Images>
            {orphanage.images.map((image, index) => {
              return (
                <button
                  key={image.id}
                  className={activeImageIndex === index ? 'active' : ''}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img src={image.path} alt={orphanage.name} />
                </button>
              );
            })}
          </Images>
          <OrphanageDetailsContent>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>
            <MapContainer>
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </MapContainer>
            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <OpenDetails>
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta
                <br />
                {orphanage.opening_hours}
              </div>

              {orphanage.open_on_weekends ? (
                <OpenOnWeekends>
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos
                  <br />
                  fim de semana
                </OpenOnWeekends>
              ) : (
                <OpenOnWeekends className="dont-open">
                  <FiInfo size={32} color="#ff669d" />
                  Não atendemos
                  <br />
                  fim de semana
                </OpenOnWeekends>
              )}
            </OpenDetails>
            {/* <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button> */}
          </OrphanageDetailsContent>
        </OrphanageDetails>
      </main>
    </Container>
  );
};

export default Orphanage;
