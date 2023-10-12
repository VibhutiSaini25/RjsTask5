import propTypes from 'prop-types';
const Ageres=({age})=>
{
    return(
        <h4>
           You are {age.years} years old.
        </h4>
    );
};
Ageres.propTypes={
    age:propTypes.shape({
        years:propTypes.number.isRequired,
    }),
}; 
export default Ageres; 