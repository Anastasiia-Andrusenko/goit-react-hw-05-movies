import css from './Message.module.css';

const Message = ({text}) => {
  return <div className={css.container}>
    <p className={css.message}>{text}</p>
  </div>
}

export default Message;