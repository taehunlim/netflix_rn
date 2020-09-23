import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Poster from "./poster";
import {trimText} from '../Utils'
import Votes from "./votes";
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'


const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 10px 0px 5px 0px;
`;

const Vertical = ({isTV=false, id, poster, title, votes }) => {

    const navigation = useNavigation()

    const goToDetail = () => {
        navigation.navigate("Detail", {
            isTV,
            poster,
            title,
            votes,
            id
        })
    }

    return (
        <TouchableOpacity onPress={goToDetail}>
            <Container>
                <Poster url={poster}/>
                <Title>{trimText(title, 10)}</Title>
                {votes > 0 && <Votes votes={votes}/>}
            </Container>
        </TouchableOpacity>
    )

}
Vertical.propTypes = {
    id : PropTypes.number.isRequired,
    poster : PropTypes.string,
    title : PropTypes.string.isRequired,
    votes : PropTypes.number.isRequired
};

export default Vertical;