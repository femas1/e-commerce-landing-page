interface Props {
    imageLink: string;
}

const Logo = ({ imageLink }: Props) => {
  return (
    <>
      <a className="navbar-brand" href="#">
      <img src={imageLink} alt="logo"/> 
    </a>
    </>
  )
}

export default Logo;
