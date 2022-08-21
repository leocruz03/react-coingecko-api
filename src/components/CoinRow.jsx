export default function CoinRow({ crypto }) {
    return (
        <tr key={ crypto.id }>
            <td>
                <img src={ crypto.image } style={{ width: 20 }} className="me-4 img-fluid" />
                <span>{ crypto.name }</span>
            </td>
            <td>
                <span className="text-muted text-uppercase">{ crypto.symbol }</span>
            </td>
            <td>{ crypto.current_price }</td>
            <td>{ crypto.market_cap }</td>
            <td>{ crypto.total_volume }</td>
            <td>{ crypto.circulating_supply }</td>
            <td>{ crypto.total_supply }</td>
            <td className={ crypto.price_change_percentage_24h > 0 ? "text-success" : "text-danger" }>
                { crypto.price_change_percentage_24h }
            </td>
        </tr>
    );
}