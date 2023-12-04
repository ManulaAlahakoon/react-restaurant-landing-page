import PickMeals from '../Assets/pick-meals-image.png'
import ChooseMeals from '../Assets/choose-image.png'
import DelivaryMeals from '../Assets/delivery-image.png'

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: 'Pick Meals',
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam maiores, commodi animi sed "
        },
        {
            image: ChooseMeals,
            title: 'Choose How Often',
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam maiores, commodi animi sed "
        },
         {
            image: DelivaryMeals,
            title: 'Fast Deliveries',
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam maiores, commodi animi sed "
        },

    ]
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Work</p>
                <h1 className="primary-heading">How It Works</h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni architecto enim possimus excepturi molestiae vel,
                    maiores soluta reiciendis quas nihil.
                </p>
            </div>
            <div className="work-section-bottom">
                {
                    workInfoData.map((data) => (
                        <div className="work-section-info">
                            <div className="info-boxes-img-container">
                                <img src={data.image} alt="" />
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text }</p>
                        </div>
                    ))
                }
            </div>
        </div>
      );
}
 
export default Work;

