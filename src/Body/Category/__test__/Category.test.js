import React from "react";
import CategoryCard from "../CategoryCard";
import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import { categoryCardData } from "./categoryCardDummyData";

describe('Category Card test', () => {
    it('should render truly', () => {
        const wrapper = mount(<BrowserRouter><CategoryCard genreItem={categoryCardData}></CategoryCard></BrowserRouter>);
        expect(wrapper.containsMatchingElement(
            <div className="catCard">
                <div className="catCardImages"><img className="catImageSizes" src={categoryCardData?.poster} alt="error"></img></div>
                <p>{categoryCardData?.genre}</p>
            </div>
        )).toBe(true)
    })
})