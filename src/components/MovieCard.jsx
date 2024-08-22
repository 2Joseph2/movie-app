const MovieCard = ({el:{title,image,rating,time}}) => {
    return ( 
        <div className="card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{rating}</p>
            <p> {time} </p>
        </div>
     );
}
 
export default MovieCard;