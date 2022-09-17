function Link(props) {
  return (
    <a className={`Link ${props.text}`} href={props.url}>
      {props.text} </a>
      
 
  );
}
export default Link;
