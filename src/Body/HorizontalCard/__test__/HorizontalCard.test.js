import React from "react";
import { render } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import { mount } from "enzyme";
import HorizontalCard from "../HorizontalCard";
import HorizontalCardImage from "../../HorizontalCardComponents/HorizontalCardImage"
import CardOverview from "../../HorizontalCardComponents/CardOverview"
import TrailerButton from "../../HorizontalCardComponents/TrailerButton"
import HorizontalCardFavPart from "../../HorizontalCardComponents/HorizontalCardFavPart"
import Genres from "../../HorizontalCardComponents/Genres"
import { horizantalCardData } from "./horizantalCardDummyData"

describe('Horizontal Card test', () => {

    // it('should render 6 components', () => {
    //     const wrapper = mount(<BrowserRouter><HorizontalCard></HorizontalCard></BrowserRouter>);
    //     expect(wrapper.containsMatchingElement(<HorizontalCardImage></HorizontalCardImage>)).toBe(true);
    //     expect(wrapper.containsMatchingElement(<CardOverview></CardOverview>)).toBe(true);
    //     expect(wrapper.containsMatchingElement(<TrailerButton></TrailerButton>)).toBe(true);
    //     expect(wrapper.containsMatchingElement(<HorizontalCardFavPart></HorizontalCardFavPart>)).toBe(true);
    //     expect(wrapper.containsMatchingElement(<Genres></Genres>)).toBe(true);
    // })

    // it('Rendering with props', () => {
    //     const wrapper = mount(<BrowserRouter><HorizontalCard movieData={horizantalCardData} index={0} /></BrowserRouter>)
    //     expect(wrapper.containsAllMatchingElements([
    //         <div className="cardImages"><img className="imageSizes" src={horizantalCardData?.poster} alt="error"></img></div>,
    //         <div className="cardOverview"><label className="overview">A boy is given the ability to become an adult superhero in times of need with a single magic word.</label></div>,
    //         <div key={0} className="genreType">Action</div>,
    //         <div key={1} className="genreType">Comedy</div>,
    //         <div key={2} className="genreType">Fantasy</div>
    //     ])).toBe(true);
    // })

    it('Rendering Genres comp with props', () => {
        const wrapper = mount(<Genres genres={horizantalCardData?.genres} />)
        expect(wrapper.containsMatchingElement(
            <div className="genresTable">
                <div key={0} className="genreType">Action</div>
                <div key={1} className="genreType">Comedy</div>
                <div key={2} className="genreType">Fantasy</div>
            </div>
        )).toBe(true)
    })
})