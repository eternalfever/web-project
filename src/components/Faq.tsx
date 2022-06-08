import React, { useState } from 'react';

export default function Faq() {
    return (
        <section className="faq" id="faq">
            <div className="base__title">faq</div>
            <div className="faq__content">
                <ul className="faq__accordion">
                    {DATA.map((item, i) => (
                        <li key={i} className="faq__item">
                            <label htmlFor={"accordion-" + i}>
                                <input type="checkbox" id={"accordion-" + i}/>    
                                <p className="faq__question">{item.question}</p>                                
                                <div className="faq__answer">{item.answer}</div>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )

}

const DATA = [
    {
        question:"What does NFT mean?",
        answer: "NFT stands for non-fungible token. It&rsquo;s generally built using the same kind of&nbsp;programming as&nbsp;cryptocurrency, like Bitcoin or&nbsp;Ethereum, but that&rsquo;s where the similarity ends. Physical money and cryptocurrencies are &laquo;fungible,&raquo; meaning they can be&nbsp;traded or&nbsp;exchanged for one another."
    },
    {
        question:"What does metaverse mean?",
        answer: "A&nbsp;metaverse is&nbsp;a&nbsp;network of&nbsp;3D&nbsp;virtual worlds focused on&nbsp;social connection. In&nbsp;futurism and science fiction, it&nbsp;is&nbsp;often described as&nbsp;a&nbsp;hypothetical iteration of&nbsp;the Internet as&nbsp;a&nbsp;single, universal virtual world that is&nbsp;facilitated by&nbsp;the use of&nbsp;virtual reality (VR) and augmented reality (AR) headsets."
    },
    {
        question:"How does buying NFT work?",
        answer: "An&nbsp;NFT&nbsp;&mdash; short for non-fungible token&nbsp;&mdash; essentially allows its buyer to&nbsp;say that they own the original copy of&nbsp;a&nbsp;digital file, in&nbsp;the same way you might own the original copy of&nbsp;a&nbsp;piece of&nbsp;physical art or&nbsp;the master file of&nbsp;a&nbsp;music recording."
    },
    {
        question:"What is use of NFT?",
        answer: "NFT stands for non-fungible token. It&rsquo;s generally built using the same kind of&nbsp;programming as&nbsp;cryptocurrency, like Bitcoin or&nbsp;Ethereum, but that&rsquo;s where the similarity ends. Physical money and cryptocurrencies are &laquo;fungible,&raquo; meaning they can be&nbsp;traded or&nbsp;exchanged for one another."
    },
    {
        question:"What does NFT mean?",
        answer: "NFTs can be&nbsp;used in&nbsp;real estate to&nbsp;simplify and speed up&nbsp;transactions, enable smart contracts for properties (allowing automatic payments) or&nbsp;even create decentralized home rental services&nbsp;&mdash; all while protecting sensitive data like credit card details."
    },
]