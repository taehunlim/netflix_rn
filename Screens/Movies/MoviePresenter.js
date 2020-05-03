import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, ScrollView, Dimensions } from "react-native";
import Slide from "../../Component/Moives/Slide";
import Title from "../../Component/title";
import Vertical from "../../Component/vertical";


const {width : WIDTH, height : HEIGHT} = Dimensions.get("screen")

const Container = styled.View``;

const SliderContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT/4}px;
  margin-bottom: 30px;
`;


const MoviePresenter = ({ loading, nowPlaying, popular }) => (
    <ScrollView
    
        style={{}}
        contentContainerStyle={{
            backgroundColor: "black",
            flex:1,
            justifyContent: loading ? "center" : "flex-start"
        }}
    >
        {loading ? (
            <ActivityIndicator color="white" size="small" />
        ) : (
            <>
                <SliderContainer>
                    <Swiper controlsEnabled={false} loop timeout={3}>
                        {nowPlaying.map(movie => (
                            <Slide
                                key={movie.id}
                                id={movie.id}
                                title={movie.original_title}
                                overview={movie.overview}
                                votes={movie.vote_average}
                                backgroundImage={movie.backdrop_path}
                                poster={movie.poster_path}
                            />
                        ))}
                    </Swiper>
                </SliderContainer>
                <Container>
                    <Title title={"Popular Movies"}/>
                    <ScrollView
                        horizontal
                        style={{marginTop: 20}}
                        contentContainerStyle={{paddingLeft : 30}}
                        showHorizontalScrollIndicator={false}
                    >
                        {popular.map(movie => (
                            <Vertical key={movie.id} votes={movie.vote_average} poster={movie.poster_path} title={movie.original_title}/>
                        ))}
                    </ScrollView>
                </Container>
            </>
        )}
    </ScrollView>
);

MoviePresenter.propTypes = {

};

export default MoviePresenter;