import { homemiddlebodycards } from '../constants/homemiddlebody'



const HomeMiddleBody = () => {


    return (
        <div className="homemiddlebody__wrapper">
            
            {homemiddlebodycards.map((card, index) => {
                return (
                <div className='homemiddlebody__card' key={index}>
                    <h1>{card.title}</h1>

                    <img src={card.image} alt={`card${index}.jpg`}></img>
                </div>
                )
            })}

        </div>
    )};

export default HomeMiddleBody;