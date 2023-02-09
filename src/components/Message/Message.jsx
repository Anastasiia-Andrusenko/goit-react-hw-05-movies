import css from './Message.module.css';

const Message = () => {
  return <div className={css.container}>
    <p className={css.message}>Sorry, no reviews yet</p>
  </div>
}

export default Message;