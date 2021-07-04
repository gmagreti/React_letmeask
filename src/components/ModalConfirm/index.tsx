import Modal from 'react-modal';

import deleteIcon from '../../assets/images/delete.svg';

import { Container, Icon, BoxButtons } from './styles';

interface ModalConfirmProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalConfirm({ isOpen, onRequestClose }: ModalConfirmProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <Icon>
          <img src={deleteIcon} alt="" />
        </Icon>
        <h2>Excluir pergunta</h2>
        <p>Tem certeza qye você deseja exlcuir esta pergunta?</p>
        <BoxButtons>
          <button>Cancelar</button>
          <button>Sim, excluir</button>
        </BoxButtons>
      </Container>
    </Modal>
  );
}
