import React from "react";
import { mount } from "enzyme";
import DetailPageInfo from "../DetailPageComponents/DetailPageInfo";
import DetailImage from "../DetailPageComponents/DetailImage";
import { dummyData } from "../../../DummyData/DummyData"


describe('Video Player Part test', () => {
    const dummy = dummyData?.[0];


    it('Find an element', () => {
        const wrapper = mount(<DetailPageInfo movieDetail={dummy} />)
        expect(wrapper.containsMatchingElement(
            <div className="movieDetailInfo">
                <h1 className="movieTitle">{dummy?.title}</h1>
                <p><span>Release Date:</span>{dummy?.release_date}</p>
                <p className="movieOverview">{dummy?.overview}</p>
                <p><span>Genres:</span> {dummy?.genres?.map((genre, index) => (<span key={index}>{genre}</span>))}</p>
            </div>
        )).toBe(true)
    })

    it('Render image', () => {
        const wrapper1 = mount(<DetailImage image={dummy?.poster} />)
        expect(wrapper1.containsMatchingElement(<div className="detailImage"><img src={dummy?.poster} alt="moviePoster"></img></div>)).toBe(true)
    })
})