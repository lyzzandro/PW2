import './App.css';
import phone from '../public/phone.svg';
import add from '../public/add.svg';
import car from '../public/car.svg';
import trash from '../public/trash.svg';
import profile1 from '../public/profile1.png';
import profile2 from '../public/profile2.png';

function App() {
    return (
        <div className="card">
            <div className="slide"></div>
            <div className="title">
                <h1>
                    Encontre <span>Fábio</span> no local de partida
                </h1>
                <p>chega em 3 minutos (800 metros)</p>
            </div>
            <div className="info">
                <div>
                    <img src={car} alt="car" />
                </div>
                <div>
                    <h2>BCD0D19</h2>
                    <p>Honda Civic Roxo</p>
                </div>
            </div>
            <div className="contact">
                <input placeholder="Enviar mensagem para Fábio..."></input>
                <button>Publicar</button>
                <img src={phone} alt="phone" />
                <img src={add} alt="add" />
            </div>
            <div className="messages">
                <div className="message">
                    <img src={profile1} alt="profile1" />
                    <p>
                        Boris estou no local já lhe esperando. estou com camisa
                        azul e calça jeans
                    </p>
                    <img src={trash} alt="trash" />
                </div>
                <div className="message">
                    <img src={profile2} alt="profile2" />
                    <p>
                        Boris estou no local já lhe esperando. estou com camisa
                        azul e calça jeans
                    </p>
                    <img src={trash} alt="trash" />
                </div>
            </div>
        </div>
    );
}

export default App;
