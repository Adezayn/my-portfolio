import award from "../assets/award.svg"

const Card = () => {
  return (
    <div className="card">
      <div className="card_subcontent">
        <img src={award} />
        <p>Go Pro Upgrade Now</p>
      </div>
      <div className="stand-alone">
        <p>$1</p>
      </div>
    </div>
  );
}

export default Card