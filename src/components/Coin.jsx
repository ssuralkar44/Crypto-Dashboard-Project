import { Link } from "react-router-dom";
import { CurrencyFormat } from "../CurrencyFormat/CurrencyFormat";
import { TrendingDown, TrendingUp } from "../Icons/Icons";

const Coin = ({ coin }) => {
  console.log(coin);
  return (
    <Link to={`/coin/${coin.id}`} className="coin-container">
      <div className="coin-wrapper">
        <div className="icon-container">
          <img src={coin.image} alt={coin.name} />
          <p>{coin.name}</p>
          <span>({coin.symbol})</span>
        </div>
        {/* Visible on medium and larger devices */}
        <div className="current-price-container">
          <p>Current Price</p>
          <span>{CurrencyFormat(coin.current_price)}</span>
        </div>

        <div className="coin-currentPrice-container d-none d-md-block">
          <p>Change % 24h</p>
          <div>
            {coin.price_change_percentage_24h < 0 ? (
              <TrendingDown />
            ) : (
              <TrendingUp />
            )}
            <span> {coin.price_change_percentage_24h}</span>
          </div>
        </div>
        <div className="MarketCap-Container d-none d-md-block">
          <p>Market Cap</p>
          <span>{CurrencyFormat(coin.market_cap)}</span>
        </div>
      </div>
    </Link>
  );
};

export default Coin;