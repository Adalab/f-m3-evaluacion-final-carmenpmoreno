import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from './Card';
import './List.scss';


class List extends React.Component {
  render() {
    const { data, queryName, houseValue} = this.props;
    console.log('En el estado, houseValue es: ', houseValue);
    return (
      <ul className="list">
        {data
          .filter(item => { 
            const UpperCaseName = item.name.toUpperCase();
            const UpperCaseQueryName = queryName.toUpperCase();
            return (
              UpperCaseName.includes(UpperCaseQueryName)
            );})
          .filter(item => {
            let houseSelected = item.house;
            const houseSelectedUpper = houseSelected.toUpperCase();
            const houseValueUpper = houseValue.toUpperCase();
            if(houseValue === 'none') {
              return houseSelected === ''
            } else if (houseValue === 'all') {
              return true
            } else {
              return houseSelectedUpper.includes(houseValueUpper)
            }
          })
          .map((item,index) => {
            return (
              <li className="itemList" key={index + 1}>
              <Link to={`/character-detail/${item.id}`}>
                <Card 
                    name={item.name} 
                    image={item.image} 
                    house={item.house} 
                  />
              </Link>
              </li>
            );
        })}
      </ul>
    );
  }
}

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  queryName: PropTypes.string.isRequired,
}

export default List;
