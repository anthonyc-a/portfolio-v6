import React from "react"
import moment from "moment-timezone"

const Time = props => {
  const [timeState, setTimeState] = React.useState()

  React.useEffect(() => {
    setInterval(() => {
      const time = moment.tz("Europe/London").format("HH:mm")
      setTimeState(time)
    }, [10])
  }, [])

  return (
    <div className="time">
      <span>ldn | </span>
      {timeState}
    </div>
  )
}

export default Time
