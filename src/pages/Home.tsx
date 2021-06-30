import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import illustrationImg from '../assets/illustration.svg';
import googleIconImg from '../assets/google-icon.svg';
import logoImg from '../assets/logo.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function Home() {
  const history = useHistory();
  const { user, signInwithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInwithGoogle();
    }
    history.push('/rooms/news');
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>re as duvidas da sua audiencia em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do google" />
            Crie sua sala com o google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o codigo da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
