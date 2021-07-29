interface Props {
    count: number;
}

const Counter = ({ count }: Props) => {
    return <span style={{ fontWeight: 'bold' }}>The number is {count}</span>;
};

export default Counter;
