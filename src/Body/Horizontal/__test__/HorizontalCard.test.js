import React from "react";
import { render } from '@testing-library/react';
import { mount } from "enzyme";
import HorizontalCard from "../HorizontalCard";
import CardImage from "../../CardComponents/CardImage"
import CardHeader from "../../CardComponents/CardHeader"
import CardOverview from "../../CardComponents/CardOverview"
import TrailerButton from "../../CardComponents/TrailerButton"
import FavPart from "../../CardComponents/FavPart"
import Genres from "../../CardComponents/Genres"
import { horizantalCardData } from "./horizantalCardDummyData"

describe('Horizontal Card test', () => {

    it('should render 6 components', () => {
        const wrapper = mount(<HorizontalCard></HorizontalCard>);
        expect(wrapper.containsMatchingElement(<CardImage></CardImage>)).toBe(true);
        expect(wrapper.containsMatchingElement(<CardHeader></CardHeader>)).toBe(true);
        expect(wrapper.containsMatchingElement(<CardOverview></CardOverview>)).toBe(true);
        expect(wrapper.containsMatchingElement(<TrailerButton></TrailerButton>)).toBe(true);
        expect(wrapper.containsMatchingElement(<FavPart></FavPart>)).toBe(true);
        expect(wrapper.containsMatchingElement(<Genres></Genres>)).toBe(true);
    })

    it('Rendering with props', () => {
        const wrapper = mount(<HorizontalCard movieData={horizantalCardData} index={0} />)
        expect(wrapper.containsAllMatchingElements([<div className="cardHeader"><label className="cardTitle">Shazam!</label></div>,
        <div className="cardOverview"><label className="overview">A boy is given the ability to become an adult superhero in times of need with a single magic word.</label></div>,
        <div key={0} className="genreType">Action</div>,
        <div key={1} className="genreType">Comedy</div>,
        <div key={2} className="genreType">Fantasy</div>
        ])).toBe(true);
    })
    
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