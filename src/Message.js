// This allows to componentized message
export default function Message(props) {
  return <div className='message'> {props.text} </div>;
}