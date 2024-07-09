function Shimmer({ height, width }) {
    return (
        <div
            className="col-span-2 bg-slate-800 rounded-md p-2 blinking"
            style={{ height: height, width: width }}
        ></div>);
}

export default Shimmer;