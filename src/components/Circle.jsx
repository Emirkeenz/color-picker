const Circle = ({ num, color, onCircleClick }) => {

  const handeCircleClick = () => {
    onCircleClick(color[num - 1])
  }

  return (
    <div className={`circle ${color[num - 1]}`} onClick={handeCircleClick}></div>
  )
}

export default Circle