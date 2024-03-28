import './Card.css';

const Card = (props) => {
    const card_class = 'ExpenseCard '+props.className;
    return (
        <div className={card_class}>{props.children}</div>
    );
}

export default Card;