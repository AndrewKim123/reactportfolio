import React from 'react'
import profile from '../../assets/profile.jpg'


function About(props) {
    return(
        <main>   
        <img class="profilepic" src = {profile} alt="Profile Picture"></img>
        <p class="paragraph">Hi! I am a business student, at Rutgers University, seeking to learn about the economy and
                consumer demands. I am also an advanced programmer, as I have
                studied computer languages through a programming boot camp. With knowledge in both fields, my
                goal
                is to design websites that will attract many consumers. Rutgers gave me the opportunity to
                graduate
                school with a marketing degree with a programming background. </p>
            <p class="paragraph"><b>Why both marketing and programming?</b> I have worked at multiple cafes and often wondered how
                each company has their own way of attracting
                consumers. Whether it may be a different drink or product, all cafes had a way of promoting it.
                With
                my background in marketing and programming, I will create appealing websites that will attract
                customers. Not only am I excel in programming, I can also make you a nice coffee! </p>
        </main>
    )
}

export default About;
