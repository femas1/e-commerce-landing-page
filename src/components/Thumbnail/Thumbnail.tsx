import styles from './Thumbnail.module.css';

interface Props {
  source: string,
  alt: string
}

const Thumbnail = ({source, alt}: Props) => {
  return (
    <img 
        src={source} 
        alt={alt} 
        className={`img-fluid rounded ${styles.image}`}
    />
  )
}

export default Thumbnail;
