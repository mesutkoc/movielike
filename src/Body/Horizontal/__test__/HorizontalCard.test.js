import React from "react";
import {render} from '@testing-library/react';
import { mount, shallow } from "enzyme";
import toJson from 'enzyme-to-json';
import HorizontalCard from "../HorizontalCard";
import CardImage from "../../CardComponents/CardImage"
import CardHeader from "../../CardComponents/CardHeader"
import CardOverview from "../../CardComponents/CardOverview"
import TrailerButton from "../../CardComponents/TrailerButton"
import FavPart from "../../CardComponents/FavPart"
import Genres from "../../CardComponents/Genres"


describe('Horizontal Card test',()=>{

    it('should render 6 components',()=>{
        const wrapper = mount(<HorizontalCard></HorizontalCard>);
        expect(wrapper.containsMatchingElement(<CardImage></CardImage>)).toBe(true);
        expect(wrapper.containsMatchingElement(<CardHeader></CardHeader>)).toBe(true);
        expect(wrapper.containsMatchingElement(<CardOverview></CardOverview>)).toBe(true);
        expect(wrapper.containsMatchingElement(<TrailerButton></TrailerButton>)).toBe(true);
        expect(wrapper.containsMatchingElement(<FavPart></FavPart>)).toBe(true);
        expect(wrapper.containsMatchingElement(<Genres></Genres>)).toBe(true);
    })
    
    // it('snapshot',()=>{
    //     const wrapper = shallow(<HorizontalCard />)
    //     expect(toJson(wrapper)).toMatchSnapshot();
    // })
})