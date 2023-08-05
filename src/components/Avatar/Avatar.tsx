import styles from './Avatar.module.css';

interface Props {
    src: string
}

const Avatar = ({src}: Props) => {
  return (
    <div>
      <img 
            src={src} 
            alt="avatar" 
            className={styles.avatar}
       />
    </div>
  )
}

export default Avatar;

