import React from "react";
import { mount } from "enzyme";
import RecommendedPart from "../RecommendedPart";
import {dummyData} from "../../../DummyData/DummyData"

describe('Video Player Part test', () => {
    const dummy = dummyData?.[0];
    const wrapper = mount(<RecommendedPart recoMovie={dummyData} />)

    it('Render recommend comp with child', () => {    
        expect(wrapper.find('.recommendContent').exists()).toBe(true);
    })

    it('Find an element', () => {    
        expect(wrapper.containsAnyMatchingElements(
            [<div className="recommendCard">
                <div className="recoCardImg"><img className="image" src={dummy?.poster} alt={`recoCardImg-${dummy?.title}`}></img></div>
                <div className="description">{dummy?.title}</div>
            </div>]
        )).toBe(true)
    })
})