import React from 'react';
import PropTypes from 'prop-types';
import './Detail.scss';

class Detail extends React.Component {
    render() {
        const { data } = this.props;
        const { characterId } = this.props.match.params;
        const item = data[characterId - 1];
        const { image, name, house, yearOfBirth, patronus, alive } = item;
        return (
            <main>
                <section className="detailSection">
                    <article className="detailArticle">
                        <img className="detailImg" src={image} alt={name} />
                        <div className="detailText">
                            <h2 className="detailName">{name}</h2>
                            <p className="detailHouse">{house}</p>
                            <p>{`Año de nacimiento: ${yearOfBirth}`}</p>
                            <p>{`Patronus: ${patronus}`}</p>
                            {alive
                                ? <p>Estado al final de la saga: vivo</p>
                                : <p>Estado al final de la saga: muerto</p>
                            }
                        </div>

                    </article>
                </section>
            </main>
        );
    }
}

Detail.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    match: PropTypes.object.isRequired,
}

export default Detail;