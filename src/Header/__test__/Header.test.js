import React from "react";
import Header from "../Header";
import { shallow, mount } from 'enzyme';
import SearchBox from "../SearchBox";
import { Link } from "react-router-dom";

describe('header test', () => {
    // it('should render text with type prop',()=>{
    //     const wrapperGenres = mount(<Header type={"Genres"}></Header>);
    //     expect(wrapperGenres.props().type).toEqual('Genres')
    // })

    // it('should render text with type props',()=>{
    //     const wrapperBasket = mount(<Header type={"Basket"}></Header>)
    //     expect(wrapperBasket.props().type).toEqual('Basket')
    // })
    it("should have button", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.containsMatchingElement(<Link>MOVIELIKE</Link>)).toBe(true)
    });
    it("should have input", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.containsMatchingElement(<SearchBox></SearchBox>)).toBe(true)
    });

})