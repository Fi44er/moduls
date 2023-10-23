import style from "./Point.module.css"

const Point = ({ icon, info, size, weight, color }) => {
  return (
    <div className={style.Point}>
      <div>
        <img src={icon} />
      </div>
      <p style={{ fontSize: size, fontWeight: weight, color: color }}>{info}</p>
    </div>
  )
}

Point.defaultProps = {
  size: 20,
  weight: 400,
  color: "#2C2C2C",
}

export default Point
