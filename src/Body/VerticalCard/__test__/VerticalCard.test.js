import React from "react";
import { mount } from "enzyme";
import VerticalCard from '../VerticalCard';
import CardImage from "../../VerticalCardComponents/CardImage";
import CardHeader from "../../VerticalCardComponents/CardHeader";
import FavPart from "../../VerticalCardComponents/FavPart";
import { verticalCardData } from "./verticalCardDummyData"

describe('Vertical card test', () => {

    it('should render 3 components', () => {
        const wrapper = mount(<VerticalCard></VerticalCard>);
        expect(wrapper.containsMatchingElement(<CardImage></CardImage>)).toBe(true);
        expect(wrapper.containsMatchingElement(<CardHeader></CardHeader>)).toBe(true);
        expect(wrapper.containsMatchingElement(<FavPart></FavPart>)).toBe(true);
    })

    it('Rendering with props', () => {
        const wrapper = mount(<VerticalCard movieData={verticalCardData}></VerticalCard>);
        expect(wrapper.containsAllMatchingElements([<div className="cardImage"><img className="imageSize" src={verticalCardData?.poster} alt="error"></img></div>,
        <div className="cardHeader"><label className="cardTitle">Shazam!</label></div>])).toBe(true)

    })
})